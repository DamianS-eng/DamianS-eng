# Use this to fix firmware compilation issues

Tags: [[Linux]] [[command-line]] 

DKMS (dkms-3.1.5) `make.log` for `blackmagic/14.4.1a4` for `kernel 6.13.1-arch1-1 (x86_64)`

> [Makefile:44: all] Error 2

# Patch Fixes

> As an attempt to fix compiling blackmagic and blackmagic-io modules for kernel 6.13, here is an archive containing the 2 patches needed.

**blackmagic_modules_kernel_6.13_patches.zip**

Here is the content of these patches.

## blackmagic-io-14.4.1a4
```c
    diff -Naur ./blackmagic-io-14.4.1a4.orig/bm_util.c ./blackmagic-io-14.4.1a4/bm_util.c
    --- ./blackmagic-io-14.4.1a4.orig/bm_util.c   2025-02-27 10:13:40.489497737 +0100
    +++ ./blackmagic-io-14.4.1a4/bm_util.c   2025-02-27 10:52:53.343646525 +0100
    @@ -120,7 +120,9 @@
     };
     
     #define MEM_ALIGN(mem, align) (((vm_address_t)(mem) + ((align) - 1)) & ~((align) - 1))
    +#if LINUX_VERSION_CODE < KERNEL_VERSION(6, 13, 0)
     #define MAX(a, b) ((a) > (b) ? (a) : (b))
    +#endif
     
     void* bm_alloc_aligned(size_t size, uint32_t flags)
     {
    diff -Naur ./blackmagic-io-14.4.1a4.orig/Makefile ./blackmagic-io-14.4.1a4/Makefile
    --- ./blackmagic-io-14.4.1a4.orig/Makefile   2025-02-27 10:13:40.461497735 +0100
    +++ ./blackmagic-io-14.4.1a4/Makefile   2025-02-27 11:21:26.422754854 +0100
    @@ -52,3 +52,6 @@
     clean:
        rm -rf *.o *~ core .depend .*.cmd *.ko *.mod.c .tmp_versions built-in.o Module.symvers Module.markers modules.order
     
    +blackmagic.o: blackmagic.o_shipped
    +   cp blackmagic.o_shipped blackmagic.o
    +
```

## blackmagic-14.4.1a4

```c
diff -Naur ./blackmagic-14.4.1a4.orig/blackmagic_core.c ./blackmagic-14.4.1a4/blackmagic_core.c
--- ./blackmagic-14.4.1a4.orig/blackmagic_core.c   2025-02-27 10:13:50.096498345 +0100
+++ ./blackmagic-14.4.1a4/blackmagic_core.c   2025-02-27 10:36:01.394582532 +0100
@@ -93,6 +93,12 @@
 static LIST_HEAD(blackmagic_devices);
 static DEFINE_SPINLOCK(blackmagic_devices_lock);
 
+struct blackmagic_device *blackmagic_find_device_by_minor(int minor);
+struct blackmagic_device *blackmagic_find_device_by_id(int id);
+struct blackmagic_device *blackmagic_find_device_by_ptr(void *ptr);
+struct blackmagic_device *blackmagic_create_device(struct pci_dev *pdev);
+void blackmagic_destroy_device(struct blackmagic_device *ddev);
+
 struct blackmagic_device *
 blackmagic_find_device_by_minor(int minor)
 {
diff -Naur ./blackmagic-14.4.1a4.orig/blackmagic_gate.c ./blackmagic-14.4.1a4/blackmagic_gate.c
--- ./blackmagic-14.4.1a4.orig/blackmagic_gate.c   2025-02-27 10:13:50.096498345 +0100
+++ ./blackmagic-14.4.1a4/blackmagic_gate.c   2025-02-27 10:20:50.869524953 +0100
@@ -39,6 +39,7 @@
 #endif
 #include "blackmagic_iml.h"
 #include "blackmagic_core.h"
+#include "blackmagic_gate.h"
 
 #if LINUX_VERSION_CODE < KERNEL_VERSION(2, 6, 33)
    #define raw_spinlock_t spinlock_t
diff -Naur ./blackmagic-14.4.1a4.orig/blackmagic_gate.h ./blackmagic-14.4.1a4/blackmagic_gate.h
--- ./blackmagic-14.4.1a4.orig/blackmagic_gate.h   2025-02-27 10:13:50.096498345 +0100
+++ ./blackmagic-14.4.1a4/blackmagic_gate.h   2025-02-27 10:42:55.959608748 +0100
@@ -31,7 +31,7 @@
 
 struct blackmagic_gate;
 
-struct blackmagic_gate *dl_alloc_gate();
+struct blackmagic_gate *dl_alloc_gate(void);
 void dl_free_gate(struct blackmagic_gate *gate);
 void dl_gate_set_device(struct blackmagic_gate *gate, void *dev);
 
@@ -40,7 +40,7 @@
 void dl_gate_unlock(struct blackmagic_gate *gate);
 
 int dl_gate_sleep(struct blackmagic_gate *gate, void* key);
-void dl_gate_wakeup(struct blackmagic_gate *gate);
+void dl_gate_wakeup(struct blackmagic_gate *gate, void* key);
 
 
 #endif
diff -Naur ./blackmagic-14.4.1a4.orig/blackmagic_lib.h ./blackmagic-14.4.1a4/blackmagic_lib.h
--- ./blackmagic-14.4.1a4.orig/blackmagic_lib.h   2025-02-27 10:13:50.096498345 +0100
+++ ./blackmagic-14.4.1a4/blackmagic_lib.h   2025-02-27 10:22:57.397532954 +0100
@@ -163,6 +163,8 @@
 extern unsigned int dl_poll_wait(void *filp, struct dl_wait_queue_head_t *queue, void *wait, int write);
 extern void dl_destroy_wait_queue_cache(void);
 
+int dl_thread_wrapper(void *data);
+
 /* FPU save/restore */
 extern void dl_kernel_fpu_begin(void);
 extern void dl_kernel_fpu_end(void);
diff -Naur ./blackmagic-14.4.1a4.orig/blackmagic_serial.c ./blackmagic-14.4.1a4/blackmagic_serial.c
--- ./blackmagic-14.4.1a4.orig/blackmagic_serial.c   2025-02-27 10:13:50.097498345 +0100
+++ ./blackmagic-14.4.1a4/blackmagic_serial.c   2025-02-27 10:22:57.429532956 +0100
@@ -38,6 +38,12 @@
 
 static struct tty_driver *blackmagic_tty_driver = NULL;
 
+void blackmagic_serial_tx_interrupt(void *driver, int continue_tx);
+int blackmagic_serial_probe(struct blackmagic_device *ddev, struct device *dev);
+void blackmagic_serial_remove(struct blackmagic_device *ddev);
+int __init blackmagic_serial_init(void);
+void __exit blackmagic_serial_exit(void);
+
 static inline void *get_driver_from_serial(struct blackmagic_serial *sdev)
 {
    return container_of(sdev, struct blackmagic_device, sdev)->driver;
diff -Naur ./blackmagic-14.4.1a4.orig/Makefile ./blackmagic-14.4.1a4/Makefile
--- ./blackmagic-14.4.1a4.orig/Makefile   2025-02-27 10:13:50.096498345 +0100
+++ ./blackmagic-14.4.1a4/Makefile   2025-02-27 11:21:26.401754853 +0100
@@ -49,3 +49,6 @@
 clean:
    rm -rf *.o *~ core .depend .*.cmd *.ko *.mod.c .tmp_versions built-in.o Module.symvers Module.markers modules.order
 
+bmd-support.o: bmd-support.o_shipped
+   cp bmd-support.o_shipped bmd-support.o
+
```

## Filepaths

### First patch modifies these files.
- /var/lib/dkms/blackmagic-io/14.4.1a4/source/bm_util.c
- /var/lib/dkms/blackmagic-io/14.4.1a4/source/Makefile

### Second patch modifies this file.
- /var/lib/dkms/blackmagic/14.4.1a4/source/blackmagic_core.c
- /var/lib/dkms/blackmagic/14.4.1a4/source/blackmagic_core.c
- /var/lib/dkms/blackmagic/14.4.1a4/source/blackmagic_gate.c
- /var/lib/dkms/blackmagic/14.4.1a4/source/blackmagic_gate.h
- /var/lib/dkms/blackmagic/14.4.1a4/source/blackmagic_lib.h
- /var/lib/dkms/blackmagic/14.4.1a4/source/blackmagic_serial.c
- /var/lib/dkms/blackmagic/14.4.1a4/source/Makefile

# Finally, rebuild

Confirmed working on Fedora 41 with kernel 6.13.4-200.fc41.x86_6

```bash
sudo dkms build -m blackmagic-io -v 14.4.1a4 -k (uname -r)
sudo dkms install -m blackmagic-io -v 14.4.1a4 -k (uname -r)
```

# Problems installing provided rpm?

>
> Internal Error: running transaction: package does not verify: no digest


The provided package was built with outdated cryptographic digest, and modern Discover application in Fedora wants the rpm packaged with stricter security rules.

## Confirm the issue
```bash
rpm -Kv desktopvideo-*.x86_64.rpm 
```


> desktopvideo-{version}.x86_64.rpm:
>
>    Header SHA3-256 digest: NOTFOUND
>    Header SHA256 digest: NOTFOUND
>    Header SHA1 digest: NOTFOUND
>    Payload SHA3-256 digest: NOTFOUND
>    Payload SHA3-256 ALT digest: NOTFOUND
>    Payload SHA512 digest: NOTFOUND
>    Payload SHA512 ALT digest: NOTFOUND
>    Payload SHA256 digest: NOTFOUND
>    Payload SHA256 ALT digest: NOTFOUND
>    Legacy MD5 digest: NOTFOUND

## Confirm your system has the proper algorithms

>
> ~/.rpmmacros
>

> %_source_filedigest_algorithm 8
> %_binary_filedigest_algorithm 8
> %_source_payload w9.gzdio
> %_binary_payload w9.gzdio


## To Fix:

### rpmrebuild

```bash
rpmrebuild -enp desktopvideo-*.x86_64.rpm
```
- Write the changes to the temporary spec file, then continue.
- A compatible rpm to use in Discover should be stored in `~/rpmbuild/RPMS/` 
  - Alternatively, use `dnf`
```bash
sudo dnf install ~/.rpmbuilds/RPMS/*/desktopvideo-*.x86_64
```

### The hard and unproven way

```bash
sudo dnf install rpm-build rpmdevtools
rpmdev-setuptree
cp desktopvideo-*-x86_64.tar.gz ~/rpmbuild/SOURCES/
cp desktopvideo-*.x86_64.spec ~/rpmbuild/SPECS/
```
```bash
rpmbuild -ba ~/rpmbuild/SPECS/desktopvideo-15.3.1a4.x86_64.spec
```
The above fails because of empty rpaths?

If this happens, add the following to the end of the `%install` section in the `.spec`.

> # Remove RPATH from ELF binaries only
> find "$RPM_BUILD_ROOT" -type f -print0 | while IFS= read -r -d '' f; do
>    if file "$f" | grep -qE 'ELF .* (executable|shared object)'; then
>        chrpath --delete "$f" >/dev/null 2>&1 || :
>    fi
> done

Otherwise, insert this above `%install`

> %global __brp_check_rpaths %{nil}

Currently, this results in more build errors...

The output of compatibile builds will be provided in `~/rpmbuild/`
