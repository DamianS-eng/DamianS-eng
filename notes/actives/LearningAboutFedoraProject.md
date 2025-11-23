# All About Compiling Linux Programs Sourced on Fedora Project Website

Tags: [[Linux]] [[Fedora]]

# Source [Fedora Project Website](src.fedoraproject.org)

# How To

1. Get git and fedpkg
```bash
sudo dnf install git fedpkg
```
2. Clone using git
```bash
git clone <url>.git && cd <pkg>
```
3. Fetch the source tarball
```bash
spectool -g -R <pkg>.spec
```
4. Prepare the repository with patches from repo.
```bash
fedpkg prep
```
  - Alternatively, build the rpm
```bash
rpmbuild -ba <package>.spec
```
  - Then check `~/rpmbuild/RPMS/<arch>/<pkg>-<version>.rpm` for the file to install with `dnf` or Discover.

> A failed `rpmbuild` will often list required dependencies.

## rpmbuild environment setup

Most compiled sources, builds and packages will be placed in `${HOME}/rpmbuild` by default. Follow these procedures to move the default directory.

1. RPM development utilities
```bash
sudo dnf install rpm-build rpmdevtools
```

2. Edit the default rpm directory using `.rpmmacros`
```bash
export RPM_DIR=/opt/rpmbuild
echo '%_topdir ${RPM_DIR}' >> ~/.rpmmacros
```

3. Create the rpmbuild directory tree
```bash
mkdir -p ${RPM_DIR}/{BUILD,RPMS,SOURCES,SPECS,SRPMS}
```

# Issues

## Start KDE from Command Line

```bash
sudo dnf install sddm
sudo systemctl set-default graphical.target
sudo systemctl start display-manager.service
```
