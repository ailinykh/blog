---
slug: mikrotik-ipsec-l2tp-bgp-routing
title: Mikrotik versus Roskomnadzor
authors: [anton]
tags: [mikrotik, ipsec, l2tp, bgp, dns, роскомнадзор, "обход блокировок"]
---

For research purposes, you may need to access certain resources from [Roskomnadzor’s blacklist](https://en.wikipedia.org/wiki/Internet_censorship_in_Russia#Internet_blacklist), which may be restricted in your country.

There are five small steps to bypass the blacklist using a MikroTik router and an IPsec/L2TP connection on a simple VPS running a Docker container.

<!--truncate-->

### Step I. Run IPSeC server

There are many ways to do this, but I prefer running a simple Docker container on your VPS. On your server, create a `compose.yml` file with the following content, replacing `YOUR_SHARED_SECRET` with a securely generated random password.

```yaml
services:
  ipsec:
    image: hwdsl2/ipsec-vpn-server
    restart: always
    environment:
      VPN_IPSEC_PSK: YOUR_SHARED_SECRET
      VPN_USER: mikrotik
      VPN_PASSWORD: mikrotik
    ports:
      - "500:500/udp"
      - "4500:4500/udp"
    privileged: true
    hostname: ipsec-vpn-server
    container_name: ipsec-vpn-server
```

Save the file, then run `docker compose up -d` container and wait for the container to start.

### Step II. L2TP client setup

Next, retrieve your VPS hostname or IP address and create a new L2TP client on your MikroTik router using the following terminal command

```shell
[admin@MikroTik] > interface l2tp-client add disabled=no name=l2tp-out connect-to=<YOUR_HOST_IP> user=mikrotik password=mikrotik use-ipsec=yes ipsec-secret=<YOUR_SHARED_SECRET>
[admin@MikroTik] > interface l2tp-client add name=l2tp-out connect-to=<YOUR_HOST_IP> user=mikrotik password=mikrotik use-ipsec=yes ipsec-secret=<YOUR_SHARED_SECRET>
```

Check it's working

```shell
[admin@MikroTik] > ping github.com interface=l2tp-out
```

If you receive an ICMP response, it means everything is working perfectly

### Step III. BGP configuration

There are several services, such as [antifilter.download](https://antifilter.download/) and [antifilter.network](https://antifilter.network/), that provide blacklisted routes from RKN. 

These services can automatically configure your router via BGP, eliminating the need to update lists manually every day. 

To set up BGP, visit [antifilter.network bgp page](https://antifilter.network/bgp) and obtain your `ASN`, `Router ID` (your IP address), and `Service IP`

Create template

```shell
[admin@MikroTik] > /routing/bgp template add as=64999 disabled=no hold-time=4m input.filter=bgp_in .ignore-ad-path-len=yes keepalive-time=1m multihop=yes name=antifilter routing-table=main
```

...and connection

```shell
[admin@MikroTik] > /routing/bgp connection add disabled=no hold-time=4m input.filter=bgp_in .ignore-ad-path-len=yes keepalive=time=1m local.role=ebgp multihop=yes name=antifilter_bgp remote.address=51.75.66.20/32 .as=65444 router-id=<YOUR_IP_ADDRESS> routing-table=main templates=antifilter
```

Wait **around 5 minutes** and see if everything works

```shell
[admin@MikroTik] > /routing/bgp/session print  
Flags: E - established 
 0 E name="antifilter_bgp-1" 
     remote.address=45.148.244.55 .as=65444 .id=10.75.66.2 .capabilities=mp,rr,gr,as4,err,llgr .afi=ip,ipv6 .hold-time=4m 
     .messages=11991 .bytes=1011967 .gr-time=120 .eor=ip 
     local.address=192.168.88.1 .as=64999 .id=<YOUR_IP_ADDRESS> .cluster-id=<YOUR_IP_ADDRESS> .capabilities=mp,rr,gr,as4 .afi=ip 
     .messages=4 .bytes=76 .eor="" 
     output.procid=20 
     input.procid=20 .filter=bgp_in .ignore-as-path-len=yes ebgp 
     multihop=yes hold-time=4m keepalive-time=1m uptime=3m1s320ms last-started=2025-02-15 12:22:37 prefix-count=19725 
```

At the end of the output, you'll see the number of prefixes: `prefix-count=19725`

## Step IV. Firewall configuration

To route traffic through the correct gateway, add the following rule to Mikrotik's firewall

```shell
[admin@MikroTik] > /routing/filter/rule add chain=bgp_in disabled=no rule="set gw l2tp-out; accept;"
```

## Step V. DNS configuratoin (optional)

To avoid seeing unwanted ads, you can also use a DNS blocking service like [AdGuard DNS](https://adguard-dns.io/en/blog/adguard-dns-new-addresses.html):

```shell
[admin@MikroTik] > /ip/dns set servers=94.140.14.14,94.140.15.15
```

Enjoy!