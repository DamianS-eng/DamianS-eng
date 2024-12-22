# Set up Let's Encrypt certificate using Certbot

sudo certbot certonly
1.  Provide e-mail, agree to TOS, decline newsletter
1.  Insert domain name for site
1.  E-mail will be sent from expiry@letsencrypt.org to the provided address after 90 days.
  

## When it's time to renew, make sure you stop the server: 
1.  systemctl stop apache2
1.  sudo certbot renew
1.  Rerun server when recertification is complete.
- - systemctl start apache2

Your certificate and chain have been saved at:
   /etc/letsencrypt/live/damunetwork.ddns.net/fullchain.pem
Your key file has been saved at:
   /etc/letsencrypt/live/damunetwork.ddns.net/privkey.pem
Your cert will expire in 90 days. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
Provide the links of the fullchain and key files in the virtual host configuration in /etc/apache2/sites-available

## Just so you know...?

  When a web page is missing on port 80 without a redirect rule, Apache will serve a directory listing if allowed in the config.
