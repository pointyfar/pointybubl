---
title: "Taxonomy on Content"
date: 2018-09-24T22:13:24+10:00
draft: false
---


You can optionally configure for each post or content page to display its section or taxonomies (ie tags,categories, etc). Defining the below, for example:

```toml
[params.tag_section]
  position = "head"
  label = "Filed under: "

[[params.display_taxonomies]]
  position = "head"
  name = "cuisine"
  labeled = true
  
[[params.display_taxonomies]]
  position = "head"
  name = "difficulty"
  labeled = true

[[params.display_taxonomies]]
  position = "foot"
  name = "tags"
  style = "list"
  labeled = true
  
[[params.display_taxonomies]]
  position = "foot"
  name = "category"
  labeled = true

[taxonomies]
  category = "categories"
  tag = "tags"
  difficulty = "difficulty"
  cuisine = "cuisine"
```

will result in a post having the following *before* the content: 

![Tags](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-tags-tags.png) 

and the following *after*:

![Tags](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-tags-list.png) 

Note that each group of taxonomy values (e.g. 'eggy' and 'boiled' under Cuisine above) gets assigned a class with the in the format `tag <taxonomy>-tag`. In the case of the `cuisine` taxonomy, that will be `tag cuisine-tag`. This is so you can easily configure custom styles for each taxonomy should it be necessary. 

