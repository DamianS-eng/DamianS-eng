# Optimization

Always consider imporoving performance and accessibility to make it more likely to be searched.

Measure your website's searchability by using [Google's audit tool](https://web.dev/measure).

## Performance

### Cache Policy

> Serve static assets with an efficient cache policy.
>
> In other words, make your regular stuff easy to get back.

#### Nginx

```config
# Media: images, icons
location ~* \.(?:jpg|jpeg|gif|png|ico|svg|webp)$ {
    expires 1M;
    access_log off;
    # max-age must be in seconds
    add_header Cache-Control "max-age=2629746, public";
}

# video, audio, HTC
location ~* \.(?:webm|mp3|mp4|ogg)$ {
    expires 1y;
    access_log off;
    add_header Cache-Control "max-age=2129470, public";
}

# CSS and Javascript
location ~* \.(?:css|js)$ {
    expires 1y;
    access_log off;
    add_header Cache-Control "max-age=31556952, public";
}
```

#### Cache your stylesheet.

Consider specifying a version number in the HTML tag, and when you need to push a new css stylesheet, make sure it's saved with an incremented version number.

```html
<link rel="stylesheet" type="text/css" href="style.css?v=1.0.0">
```

### Text Compression

#### Nginx

```config
gzip on;
gzip_min_length 1100;
gzip_buffers 4 32k;
gzip_types text/plain application/x-javascript text/xml text/css;
gzip_vary on;
```

### Images

> It never makes sense to serve a high-res image for images rendered much smaller on a webpage, especially if the webpage is small.
>
> Serve webp. Any other format, it's more like a download than a feature for a webpage.

#### Sizing


- * Debian and other Linux distros have a tool called `cwebp` from the `webp` package that can convert images to a web-friendly format like `.webp`.
  * But of course, __Imagemagick__ can do this, too.
 
```bash
cwebp -q 80 your-photo.png -o your-photo.webp
```

## Accessibility

> Please, add alt text to your images.

```html
<img src="img/cabin.webp" alt="A cabin nestled between pine trees">
```

### Keyboard

### Mobile

### Pointer vs Mouse events

## Search Engine Optimizations

Consider how people share web links. On social media webistes or platforms like Twitter, Facebook and Discord. 

All of these platforms have integrated ways of nicely presenting your website.

Test how your embed works at [X card validator](https://www.xcardvalidator.com/).

```html
<!-- A sample -->

<!--- Instructions for web scrapers --->
<meta name="robots" content="index, follow">

<meta name="description" content="your website description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="your name">

<!--- Facebook specific standard, but many websites use this so it has become almost standard to include --->
<meta property="og:site_name" content="Site Name">
<meta name="twitter:domain" property="twitter:domain" content="example.org">
<meta name="og:title" property="og:title" content="Site Name">
<meta property="og:description" content="your website description">
<meta name="twitter:description" property="twitter:description" content="your website description">
<meta name="og:image" content="https://link-to-an-image-that-represents-your-site">

<!--- below is for twitter sharing previews
you can test this at cards-dev.twitter.com --->
<meta property="twitter:card" content="https://link-to-an-image-that-represents-your-site">
<meta name="twitter:image:src" property="twitter:image:src" content="https://link-to-an-image-that-represents-your-site">
<meta name="twitter:image" property="twitter:image" content="https://link-to-an-image-that-represents-your-site">
<meta name="og:image:alt" property="og:image:alt" content="alt text for your image">

<meta property="og:url" content="example.org">
<meta property="og:type" content="website">

<!--- If you have accounts on twitter or facebook that are relevant to your site --->
<meta property="fb:admins" content="facebook group" >
<meta name="twitter:site" property="twitter:site" content="@yourTwitterHandle">
<meta name="twitter:creator" property="twitter:creator" content="@yourTwitterHandle">
```

This is a [legacy open source tool](https://github.com/xdevplatform/cards-player-samples) used for getting started with Twitter Cards, but it's out of date by at least five years. The included Validator doesn't seem to work, and much of the links to the documentation are no longer reliable.

### Meta Tags

- Robots
- HTML5
- Facebook
- Twitter

# References

- [Page Quality blog from landchad](https://landchad.net/page-quality/)
- [The New Stack article on sync engines for modern web apps](https://thenewstack.io/the-vintage-technology-that-speeds-up-modern-web-apps)
