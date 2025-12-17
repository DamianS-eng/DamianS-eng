Tags: 

[[website]][[html]][[redirect]]

This is a reference of inspiring designs for Page Not Found default pages for websites.

# Website Builder

Most website builders have a section where you can provide a 404 page with buttons and links. They should already have the scripting in place to handle the logic; just provide the design.

# .htaccess

In case there's no script or program handling 404 pages, do it yourself.

1. Provide a file called `.htaccess` in the root directory.
2. Provide the designed 404 page in the root directory.
3. Inside `.htaccess`,  provide the following line: 
```
ErrorDocument 404 /not-found-page.html
```

## Adjust for Apache

Apache may not allow you to provide a custom 404 page until you adjust some settings.

```bash
cd /etc/apache2
vi httpd.conf
```

```conf
<Directory />
AllowOverride All
</Directory>
```
> Of course, adjust this for Virtual Server configuration files. 
# References

- [Dribbble Designs](https://dribbble.com/search/404)
- [Medium Article](https://medium.com/designer-recipes/how-to-make-a-custom-404-error-page-for-your-website-1af37a8b20d1)
