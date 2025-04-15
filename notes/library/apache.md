Tags: [[website]] [[apache]]
# Apache2 Web Server

How to set up, configure and manage web servers.

# Setup

## Arch
```bash
sudo dnf install httpd
```
## Debian
```bash
sudo apt install apache2
```

# Config Files

## httpd.conf

```markdown
DocumentRoot /var/www/html
Listen 80
```

### Arch
```bash
cat /etc/httpd/conf/httpd.conf
```

### Debian
```bash
cat /etc/apache2/apache2.conf
```

## Named Virtual Host

```conf
<VirtualHost *:{{portno}}>
  DocumentRoot "/var/www/website"
  ServerName domain.tld
  ServerAlias otherdomain.tld2
  CustomLog /var/log/httpd/website.log combined
  ErrorLog /var/log/httpd/website_error.log
</VirtualHost>
```

> Apache uses the first virtual host found in the configuration for requests that do not match any domain set in the ServerName and ServerAlias parameters. This also includes requests sent to the IP address of the server. 

### Arch
```bash
ls /etc/httpd/conf.d/
```

### Debian
```bash
ls /etc/apache2/sites-available/
```

# Management

## Apachectl

```bash
apachectl configtest
```

## Systemctl

### Status

```bash
systemctl status apache2[.service]
```

## Journalctl

## Web Directory

```bash
ls /var/www/
```

### Main Apache Directory
```bash
ls /var/www/html
```

# Encryption

## SSL

### Arch
```bash
yum install mod_ssl
```

```conf
SSL Protocol -All TLSv1.3
SSLCipherSuite "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH:!SHA1:!SHA256"

SSLCertificateKeyFile "/etc/pki/tls/private/example.com.key"
SSLCertificateFile "/etc/pki/tls/certs/example.com.crt"
SSLCACertificateFile "/etc/pki/tls/certs/ca.crt"
```

```
bash
chown root:root /etc/pki/tls/private/example.com.key
chmod 600 /etc/pki/tls/private/example.com.key
```

### Debian

```bash
sudo a2enmod mod_ssl
```

## TLS

# References

- [Red Hat Documentation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/deploying_different_types_of_servers/setting-apache-http-server_deploying-different-types-of-servers#setting-apache-http-server_Deploying-different-types-of-servers)
