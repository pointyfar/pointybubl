---
title: "Configure Socials"
date: 2018-09-24T22:11:51+10:00
draft: false
---

You can add a social box on the sidebar by pointing `params.socialdata` to a file in your `data` folder. The `exampleSite` has a sample `social.toml` data file which has the following contents:

```toml
socialdata = "social"
```

```toml
label = "I am social!"

[[social]]
  url = "http://www.twitter.com"
  icon = "fab fa-twitter"
  color = "#55acee"

[[social]]
  url = "http://www.github.com"
  icon = "fab fa-github"
  color = "#333"

...
```

`color` is optional and `#7a7a7a` will be used by default.

![Social Box Screenshot](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-social-box.png)