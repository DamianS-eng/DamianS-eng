# How to Setup Subnets to Interfaces on EdgeRouterX

Tags: [[networking]] [[subnet]] [[VLAN]]

1. Decide Your Subnets
Trusted LAN (eth1) → 192.168.1.0/24 (router IP: 192.168.1.1)

Guest LAN (eth2) → 192.168.2.0/24 (router IP: 192.168.2.1)

WAN (eth0) → Connected to ISP (DHCP or static from provider)

2. Assign IP Addresses to Interfaces

```config
configure

# Trusted LAN on eth1
set interfaces ethernet eth1 description "Trusted LAN"
set interfaces ethernet eth1 address 192.168.1.1/24

# Guest LAN on eth2
set interfaces ethernet eth2 description "Guest LAN"
set interfaces ethernet eth2 address 192.168.2.1/24

commit
save
exit
```

3. Enable DHCP Servers

```config
configure

# DHCP for Trusted LAN
set service dhcp-server shared-network-name TRUSTED subnet 192.168.1.0/24 default-router 192.168.1.1
set service dhcp-server shared-network-name TRUSTED subnet 192.168.1.0/24 dns-server 192.168.1.1
set service dhcp-server shared-network-name TRUSTED subnet 192.168.1.0/24 lease 86400
set service dhcp-server shared-network-name TRUSTED subnet 192.168.1.0/24 range 0 start 192.168.1.100
set service dhcp-server shared-network-name TRUSTED subnet 192.168.1.0/24 range 0 stop 192.168.1.200

# DHCP for Guest LAN
set service dhcp-server shared-network-name GUEST subnet 192.168.2.0/24 default-router 192.168.2.1
set service dhcp-server shared-network-name GUEST subnet 192.168.2.0/24 dns-server 192.168.2.1
set service dhcp-server shared-network-name GUEST subnet 192.168.2.0/24 lease 86400
set service dhcp-server shared-network-name GUEST subnet 192.168.2.0/24 range 0 start 192.168.2.100
set service dhcp-server shared-network-name GUEST subnet 192.168.2.0/24 range 0 stop 192.168.2.200

commit
save
exit
```

4. Enable NAT Rules

```config
configure

set service nat rule 5000 description "NAT for Trusted LAN"
set service nat rule 5000 outbound-interface eth0
set service nat rule 5000 type masquerade
set service nat rule 5000 source address 192.168.1.0/24

set service nat rule 5001 description "NAT for Guest LAN"
set service nat rule 5001 outbound-interface eth0
set service nat rule 5001 type masquerade
set service nat rule 5001 source address 192.168.2.0/24

commit
save
exit
```

5. Firewall Rules

```config
# Create firewall rule sets
configure

# Guest-to-LAN block
set firewall name GUEST_IN default-action drop
set firewall name GUEST_IN rule 10 action accept
set firewall name GUEST_IN rule 10 state established enable
set firewall name GUEST_IN rule 10 state related enable

# Allow Guest to WAN
set firewall name GUEST_OUT default-action accept
set firewall name GUEST_OUT rule 10 action accept
set firewall name GUEST_OUT rule 10 state established enable
set firewall name GUEST_OUT rule 10 state related enable

# Trusted LAN (allow all)
set firewall name TRUSTED_OUT default-action accept

# Apply to interfaces
set interfaces ethernet eth1 firewall in name TRUSTED_OUT
set interfaces ethernet eth2 firewall in name GUEST_IN
set interfaces ethernet eth2 firewall out name GUEST_OUT

commit
save
exit
```