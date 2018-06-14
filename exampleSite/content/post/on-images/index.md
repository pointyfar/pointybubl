---
title: "On Images"
date: 2018-06-11T11:38:26+10:00
draft: false
---

You can add images to your posts in several different ways.

![Image from static folder](//localhost:1313/subdir/img/hello.jpeg)

<!--more-->



##### Using the markdown notation

The above image was rendered using the markdown notation: `![Alt Text](img-url.jpeg)`

```
![Image from static folder](//localhost:1313/subdir/img/hello.jpeg)
```
This works if you know the absolute URL of the image you are including. 

---
  
##### Using Hugo's [page bundles](https://gohugo.io/content-management/page-resources/)

If you have your content organised in page bundles as described in [https://gohugo.io/content-management/organization/#page-bundles](https://gohugo.io/content-management/organization/#page-bundles) you can take advantage of the shortcode included in this theme:

```
{{%/* image resource="images/pineapple-on-beach.jpeg" caption="Pineapple on Beach" alt="Pineapple" */%}}
```

Which renders this:

{{% image resource="images/pineapple-on-beach.jpeg" caption="Pineapple on Beach" alt="Pineapple" %}}

You can use the shortcode for non-bundled images as well, passing a `src` parameter instead of `resource`:

```
{{%/* image src="//localhost:1313/subdir/img/hello.jpeg" caption="Hello" alt="Hello" */%}}
```

{{% image src="//localhost:1313/subdir/img/hello.jpeg" caption="Hello" alt="Hello" %}}
