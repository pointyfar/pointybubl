---
title: "Configure Footer"
date: 2018-09-24T22:12:02+10:00
draft: false
---

You can add an optional footer by defining a left and/or a right side.

```toml
left = ["footerlinks", "otherlinks"]
right = ["copyright", "footertext", "footerimage"]
```

These are arrays with each element pointing to a data file. Each data file may be defined as one of three types of footer items:

- image
  ```toml
  label = "Hello"
  type = "image"
  url = "img/hero-background.jpeg"
  ```

- links
  ```toml
  label = "Other Links"
  type = "links"

  [[links]]
    label = "tamen ipsum"
    url = "#"
  ```

- text 

  ```toml
  text = """
  Mentitum summis veniam admodum noster. Ad anim ipsum quis nostrud, et 
  summis cohaerescant, laboris nam summis iudicem est in culpa minim ea senserit. 
  Nostrud comprehenderit de vidisse iis quae nescius probant non id tamen mentitum 
  admodum ad multos senserit consequat, ubi eu illustriora, se tempor laboris, 
  magna hic ad labore occaecat, id irure coniunctione.
  """
  ```