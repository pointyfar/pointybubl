---
title: "Images"
date: 2018-09-24T22:12:25+10:00
draft: false
---

If you have your content organised in page bundles as described in [https://gohugo.io/content-management/organization/#page-bundles](https://gohugo.io/content-management/organization/#page-bundles) you can take advantage of the shortcode included in this theme:

```
{{%/* image resource="images/pineapple-on-beach.jpeg" caption="Pineapple on Beach" alt="Pineapple" */%}}
```

Which renders this:

![Resource Screenshot](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-resource.png)

---

You can use the shortcode for non-bundled images as well, passing a `src` parameter instead of `resource`:

```
{{%/* image src="img/hello.jpeg" caption="Hello" alt="Hello" */%}}
```

![Src Screenshot](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-src-image.png)
