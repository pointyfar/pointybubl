---
title: "Post Preview"
date: 2018-09-24T22:12:53+10:00
draft: false
---

This theme takes the first image resource it finds for a post and uses that as a preview image of sorts. 

![Section List](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-section-page.png) 


![Image Preview](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-image-preview.png) 


You can configure a default placeholder image to use for pages that don't have images. You can also alternatively configure an svg to render instead.

![Placeholder SVG](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-placeholder-svg.png) 

You can also disable the image preview entirely by setting `disabled = true` under `[params.placeholder]`

```
[params.placeholder]
  # default value is false, i.e. displayed
  disabled = false
  
  ## use img 
  img = "/img/placeholder-100.png"
  
  ######## OR 
  
  ## use svg
  size = "100px"
  text = "[no image available]"
  text_size = "9px"
```