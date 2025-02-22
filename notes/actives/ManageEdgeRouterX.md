# Important

**DO NOT USE APT UPGRADE -Y**

# General Use

 You can access a CLI window in the web GUI, but I recommend using Putty instead for various reasons you'll see throughout the guide.

Putty:

https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

A few basics to start off:

    terminal length 0 will show all the output without segmenting them, so you don't have to press spacebar to see the next page.

    show configuration will show how the router is configured.

    show configuration commands will show all the commands to reconfigure the router to exactly how it currently is. This is useful if you log the printable output in Putty, so you can copy/paste the commands later, or even edit them in a text file and then paste them into the router.

    configure enter configuration mode where you can make changes to the router. When you're inside this mode, you can type show and it'll be equivalent to type show configuration. You can type exit to leave this mode.

    commit will apply the changes you've made.

    save will save the changes so they're reflected upon reboot. This is useful to omit if you want to test the router with commit changes, and if it breaks something, a simple reboot will bring it back to the previous config.

    ; allows you to chain commands together. Example: commit;save;exit will execute those 3 in order.

    ? will show all available commands in the current context. Example: if I type set ? it will display all the possible things I can set/change. If I type set interfaces ? it will show all the interfaces that I can set/change. So on and so forth. It's a great way to figure out where things are and how they're set, etc.

    TAB will autofill the rest of whatever commands are available. Example, if I type set inteTAB it'll autofill to set interfaces.

One way to think of the CLI is a bunch of sub-directories as you go through them. Example, let's say I want to change the description of eth0 port to 'my wan'.

 set interfaces ethernet eth0 description 'my wan'

    set indicates I'm going to add or change something; set something.

    interfaces means I want to change one of the interfaces. Again, think of it like a directory: I'm going to look into the interfaces folder.

    ethernet which interfaces do I want to set? The ethernet interfaces. Go into the ethernet folder.

    eth0 which ethernet interface? eth0

    description what do I want to change? The description.

    'my wan' the quotations are needed for anything >1 word.

Keep in mind you can type ? anywhere along the commands to find out what the next "folder"/context command is. Example: if I type set interfaces ethernet ? it will show all the ethernet interfaces that are available. 

# CIDR



CIDR (Classless Inter-Domain Routing, pronounced "kidder" or "cider" - add your own local variant to the comments!) is a system of defining the network part of an IP address (usually people think of this as a subnet mask). The reason it's "classless" is that it allows a way to break IP networks down more flexibly than their base class.

When IP networks were first defined, IPs had classes based on their binary prefix:

Class    Binary Prefix    Range                       Network Bits
A        0*               0.0.0.0-127.255.255.255     8
B        10*              128.0.0.0-191.255.255.255   16
C        110*             192.0.0.0-223.255.255.255   24
D        1110*            224.0.0.0-239.255.255.255
E        1111*            240.0.0.0-255.255.255.255

(Note that this is the source of people referring to a /24 as a "class C", although that's not a strictly true comparison because a class C needed to have a specific prefix)

These binary prefixes were used for routing large chunks of IP space around. This was inefficient because it resulted in large blocks being assigned to organizations who didn't necessarily need them, and also because Class Cs could only be assigned in 24 bit increments, meaning that routing tables could get unnecessarily large as multiple Class Cs were routed to the same location.

CIDR was defined to allow variable length subnet masks (VLSM) to be applied to networks. As the name applies, address groups, or networks, can be broken down into groups that have no direct relationship to the natural "class" they belong to.

The basic premise of VLSM is to provide the count of the number of network bits in a network. Since an IPv4 address is a 32-bit integer, the VLSM will always be between 0 and 32 (although I'm not sure in what instance you might have a 0-length mask).

The easiest way to start calculating VLSM/CIDR in your head is to understand the "natural" 8-bit boundaries:

CIDR    Dotted Quad
/8      255.0.0.0
/16     255.255.0.0
/24     255.255.255.0
/32     255.255.255.255

(By the way, it's perfectly legal, and fairly common in ACLs, to use a /32 mask. It simply means that you are referring to a single IP)

Once you grasp those, it's simple binary arithmetic to move up or down to get number of hosts. For instance, if a /24 has 256 IPs (let's leave off network and broadcast addresses for now, that's a different networking theory question), increasing the subnet by one bit (to /25) will reduce the host space by one bit (to 7), meaning there will be 128 IPs.

Here's a table of the last octet. This table can be shifted to any octet to get the dotted quad equivalent.

CIDR    Dotted Quad
/24     255.255.255.0
/25     255.255.255.128
/26     255.255.255.192
/27     255.255.255.224
/28     255.255.255.240
/29     255.255.255.248
/30     255.255.255.252
/31     255.255.255.254
/32     255.255.255.255

As an example of shifting these to another octet, /18 (which is /26 minus 8 bits, so shifted an octet) would be 255.255.192.0.


# References

[Add Debian Packages](https://help.uisp.com/hc/en-us/articles/22591219068055-EdgeRouter-Add-Debian-Packages-to-EdgeOS)

[DNSCrypt Proxy](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-on-EdgeOS)

[Conserve static DHCP Mappings for dnsmasq](https://github.com/confirm/edgerouter-dnsmasq-updater/tree/master)

[Configuration & Operation Mode](https://help.uisp.com/hc/en-us/articles/22591199766551-EdgeRouter-Configuration-and-Operational-Mode)

[Hardware Offloading](https://help.uisp.com/hc/en-us/articles/22591077433879-EdgeRouter-Hardware-Offloading)

[DNSmasq](https://dnsmasq.org/docs/dnsmasq-man.htm)
