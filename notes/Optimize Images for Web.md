Tags: [[website]] 

# A pragmatic solution

> In my opinion, **you need 6 or 7 different image versions** for each image. For an image that takes 100vw on your final site, the target widths could be the following:

- 1920px 
	- this covers FullHD screens and up
- 1600px
	- this will cover desktops and several tablets in portrait mode
- 1366px
	- it is [the most widespread desktop resolution](http://gs.statcounter.com/screen-resolution-stats#monthly-201705-201705-bar)  
- 1024px
	- rare, but I think you need some image size in between, not to leave too big a gap between pixel sizes, in case the market changes)
- 768px
	- useful for 2x 375px mobile screens, as well as any device that actually requests something close to 768px
- 640px
	- for smartphones

## Table
![Image Width versus viewport width](https://miro.medium.com/v2/resize:fit:912/1*9hZu0y3I4HIMC6SIXsrtaA.png)

## CSS/JS Logic

**TODO**
There's a way to translate this into a mathematical breakdown, either with CSS or Javascript. 
# References

[Medium Article on srcset](https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3)
[BitsOfCo](https://bitsofco.de/the-srcset-and-sizes-attributes/)