Based on the referenced blog, Alex has migrated his blogging platform from Ghost to a fully static site using Astro.

Tags: [[blog, ghost, astro]]

# The purpose of a blog

> The blog serves as a journal, a point of record for what one is into at a given point in history.

Also, a nice outlet for photography.

This is a migration from CMS-based blogging to a static site. It was previously even on WordPress, and it served  under six major versions of Ghost.  It ran continuously on a single Docker engine and host, without Kubernetes or other cluster method. 

Backups worked with ZFS duplicaton.

# Why Leave Ghost

A fully patched Ghost instance got "popped by two different CVEs".
# Astro's Improvements

- Search
- Archive
- Posts stored in git, written in Markdown
- Static HTML

# Astro's Publication Method

	1. Write post in Markdown.
	2. Push post to Git repo, same as Astro site.
	3. Astro converts Markdown to static HTML.
	4. Cloudflare Pages builds and deploys new post.

Don't include images in the Markdown; have it reference a consistent bucket location that would sync separately with a different storage path like a Cloudflare R2 (and of course, convert images to optimized formats before dedicating to online, with the originals compressed and archived offline).

# References

- [Alex Kretzschmar's Blog Post](https://blog.ktz.me/ghost-to-astro/)
- [Alex's Linux Server site](https://linuxserver.io)
- [just?](https://just.systems)