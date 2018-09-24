---
title: "Icons and Fonts"
date: 2018-09-24T22:14:31+10:00
draft: false
---


### Adding Fontawesome and/or other assets

This theme itself does not come with Fontawesome out of the box (though the `exampleSite` does). Simply add the references to `<YOUR-HUGO-SITE>/layouts/partials/head/extra-head.html` as necessary.

```html
<!-- exampleSite/layouts/partials/head/extra-head.html -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

```

Any assets or scripts that may need to be included at the bottom of the html may be added to `/layouts/partials/foot/extra-foot.html`.
