---
title: "Configure Search"
date: 2018-09-24T22:10:21+10:00
draft: false
---

![Search](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-search.png)

This theme includes a search feature powered by [lunr.js](https://lunrjs.com/). To enable, set `params.search.enabled` to `true`. Optionally configure whether to display an icon (eg if you are using fontawesome icons) and label. If `icon` is set to true, you **must** configure the `label` as well, which will be used in the icon class definition. If `icon` is set to `false`, the `label` field will be used to label the button.


```toml
[params.search]
  enabled = true
  icon = true
  label = "fas fa-search"
```

## Generate search index

The search functionality takes advantage of Hugo's output formats feature. To use this, include the following configuration (as a minimum, and in addition to other output formats you may have):

```toml
[outputs]
  home = ["HTML", "JSON"]
```

![Search Results](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-search-results.png)
