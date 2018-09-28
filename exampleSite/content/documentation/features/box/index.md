---
title: "Box"
date: 2018-09-24T22:13:39+10:00
draft: false
---


This theme includes a `box` shortcode for including markdown content within posts. You can use this to display ingredients and procedures for recipes, for example.

Using the `box` shortcode, pass a `resource` parameter pointing to the corresponding content: 

```md
Ingredients here:

{{</* box resource="ingredients" /*/>}}

End Ingredients.

Procedure here:

{{</* box resource="procedure" /*/>}}
```
---
```md
<!-- ingredients.md-->
* 1 Pot 
* Water
```

```md
<!-- procedure.md -->
1. Get your pot out
1. Fill with desired amount of water
1. Put on stove
1. Turn heat to high [^Note]
1. Wait until water boils
1. Switch off


[^Note]: This here be note
```
Renders:

![Ingredients and Procedure Screenshot](https://github.com/pointyfar/pointybubl/raw/master/images/screenshot-recipes.png)

Alternatively, enclose your content inside the shortcode and pass it a `title` parameter instead. The ingredients box above, for example, could be written this way:


```md
Ingredients here: 

{{%/* box title="ingredients" */%}}

* 1 Pot 
* Water

{{%/* /box */%}}
```