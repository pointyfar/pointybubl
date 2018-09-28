---
title: "Scss"
date: 2018-09-24T22:14:16+10:00
draft: false
---

This theme uses the shiny new [Hugo Pipes](https://gohugo.io/hugo-pipes/)!

This theme uses [Bulma](https://bulma.io/) base styles. Follow their [instructions for customising Bulma](https://bulma.io/documentation/overview/customize/) using Sass.

You can define custom values in `<YOUR-HUGO-SITE>/assets/scss/_variables.scss`.

```scss 
$primary: hotpink;

```

You can also configure a limited set of scss variables from your `config.toml` file:

```toml
[params.scss]
  primary = "hotpink"
```

The above will both result in

![Hotpink primary](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-configure-scss.png)

