---
title: "Configure Secondary Navbar"
date: 2018-09-24T22:10:44+10:00
draft: false
---

This theme can optionally show a secondary nav bar under the hero image. 

```toml
[params.subnav]
  usetaxonomy = "categories"
  taxonomycount = 3
  featuredterms = ["queen"]
```

Having the above example confiuration means the secondary nav will be populated with `3` links from the `categories` taxonomy which will include the category `"queen"` (and two others). Please note that the list will be sorted alphabetically. 

![Secondary nav](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-subnav.png)
