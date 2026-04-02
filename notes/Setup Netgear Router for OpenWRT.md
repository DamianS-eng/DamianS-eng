Tags: [[router]] [[openwrt]] [[netgear]]


# Setup Firmware

Using a NetGear AX6000 RAX120
- [OpenWrt Router Page](https://openwrt.org/inbox/toh/netgear/netgear_rax120_nighthawk_ax12)
- 272-13050-03
- Password is: __NetGearRAX120__
- Hardware revision is AX12RAX120v2
- Current stock firmware is: v1.2.10.56

Obtain the latest compatible version of OpenWRT factory firmware version. This router uses an `.img`. 
 - The file is called: `openwrt-qualcommax-ipq807x-netgear_rax120v2-squashfs-web-ui-factory.img`
 - SHA256: `c35efb73dca0b5a5363ba7832ca4f44155f89bcca8e78aefe8f88bca56563218`

Connect to the router and log into its [settings](http://routerlogin.net/).
Go to __Settings__, then __Administration__, then __Firmware Update__. 
Browse the above `.img` file and upload.

The router Power will light solid when successful. Reconnect to the router using an ethernet connection and log back in using the default IP address, `192.168.1.1`.
- User is `root`
- Default is `password`
Then obtain the sysupgrade `.bin` file, and go to the bottom of the page `cgi-bin/luci/admin/system/flash` and upload that file to get the router updated to the latest compatible OpenWRT firmware.

# Place Netgear as Wireless Access Point Behind Main Internet Router

# References

- [Learn OpenWrt](https://learnopenwrt.com)