# pointyBUBL: A Hugo Theme 
BU[LMA] + BL[OG]

Blog theme built with Bulma.css. Includes image gallery, with optional sidebar and footer. Handles page resources. Uses Hugo Pipes!

![Theme Screenshot](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot.png)

#### ----- This is a work in progress -----

## Preview the theme

Grab the theme from https://github.com/pointyfar/pointybubl

Navigate to `/exampleSite` and run `hugo server`

Visit http://localhost:1313/ 

## Installing the theme 

Follow the instructions in the Hugo documentation: 

https://gohugo.io/themes/installing-and-using-themes/ 

If you are deploying your Hugo site on Netlify, please note that you need to add the theme as a submodule: 

https://gohugo.io/hosting-and-deployment/hosting-on-netlify/#use-hugo-themes-with-netlify

1. Add `pointybubl` as submodule
  ```bash
  git submodule add https://github.com/pointyfar/pointybubl.git themes/pointybubl/
  ```
1. Configure your Hugo site to use `pointybubl` as its theme and then run `hugo server`
  ```toml
  # config.toml
  theme = "pointybubl"
  ```
  ![Installing Theme](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-installing-theme.png)


## Configuring the theme 

The theme comes with an `exampleSite` folder, which has a `config.toml` file included. A copy of the `config.toml` file also exists under the theme's root, with most options commented out so as not to interfere with your own options set.


### Configure menus for top navbar

You can take advantage of Hugo's Section Menus for Lazy Bloggers documented here: https://gohugo.io/templates/menu-templates/#section-menu-for-lazy-bloggers

You would only need to set `sectionPagesMenu= "main"` in your `config.toml` file.

Alternatively, set up each menu item individually following the documentation at https://gohugo.io/templates/menu-templates/#site-config-menus


### Configure secondary nav bar 

This theme can optionally show a secondary nav bar under the hero image. 

```toml
[params.subnav]
  usetaxonomy = "categories"
  taxonomycount = 3
  featuredterms = ["queen"]
```

Having the above example confiuration means the secondary nav will be populated with `3` links from the `categories` taxonomy which will include the category `"queen"` (and two others). Please note that the list will be sorted alphabetically. 

![Secondary nav](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-subnav.png)

### Configure brand 

The theme uses `params.title` to populate the top left of the nav bar. The hero banner on the index page also uses this value. 

The subtitle uses the `params.subtitle` value on the index page. `.RegularPages` use the post author if configured on the post front matter, and defaults to the `.Site.Author`.

```
title = "Pointy's"
```

### Configure hero image 

You can choose to feature a hero image on the home page by adding the path to the image. Specifying `bgislight` sets the corresponding contrasting font color for the text, i.e. `true` means dark font color will be used.

```toml
[params.hero]
  background = "img/hero-background-dark.jpeg"
  bgislight = false
```

### Configure sidebar

The sidebar will be rendered if either the author box or the social box (or both) are configured.

#### Configure author box

You can optionally add an author box on the sidebar

```toml
[params.author]
  name = "Pointy Far"
  short = "Pointy"
  photo = "img/hello.jpeg"
  header = "Howdy!"
  blurb = """ 
            This is params author blurb. Configure me! 
            Possumus quorum aliqua aut anim ut eiusmod exquisitaque ut consequat. 
            O id sempiternum, voluptate quo ingeniis. 
            Duis ab et nulla incurreret, litteris qui possumus.
          """
  aboutSection = "/about/"
```
![Author Box Screenshot](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-author-box.png)

#### Configure social buttons 

```toml
socialdata = "social"
```

You can add a social box on the sidebar by pointing `params.socialdata` to a file in your `data` folder. The `exampleSite` has a sample `social.toml` data file which has the following contents:
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

![Social Box Screenshot](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-social-box.png)


### Configure footer

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

### Theme features 

#### Images 

If you have your content organised in page bundles as described in [https://gohugo.io/content-management/organization/#page-bundles](https://gohugo.io/content-management/organization/#page-bundles) you can take advantage of the shortcode included in this theme:

```
{{% image resource="images/pineapple-on-beach.jpeg" caption="Pineapple on Beach" alt="Pineapple" %}}
```

Which renders this:

![Resource Screenshot](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-resource.png)

You can use the shortcode for non-bundled images as well, passing a `src` parameter instead of `resource`:

```
{{% image src="img/hello.jpeg" caption="Hello" alt="Hello" %}}
```

![Src Screenshot](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-src-image.png)


#### Image gallery 

If you have your pages organised as page bundles, you can set 

```
show_gallery: true
```
on a post's front matter. This will display a gallery of all the resources it finds of type `image`.

![Image Gallery](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-gallery.png) 

It will use the `.Title` attribute as caption if set.

#### Post image preview (on section lists)

This theme takes the first image resource it finds for a post and uses that as a preview image of sorts. 

![Section List](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-section-page.png) 


![Image Preview](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-image-preview.png) 


You can configure a default placeholder image to use for pages that don't have images. You can also alternatively configure an svg to render instead.

![Placeholder SVG](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-placeholder-svg.png) 

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

#### Taxonomies on content pages 

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

![Tags](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-tags-tags.png) 

and the following *after*:

![Tags](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-tags-list.png) 

Note that each group of taxonomy values (e.g. 'eggy' and 'boiled' under Cuisine above) gets assigned a class with the in the format `tag <taxonomy>-tag`. In the case of the `cuisine` taxonomy, that will be `tag cuisine-tag`. This is so you can easily configure custom styles for each taxonomy should it be necessary. 



#### Content boxes

This theme includes a `box` shortcode for including markdown content within posts. You can use this to display ingredients and procedures for recipes, for example.

Using the `box` shortcode, pass a `resource` parameter pointing to the corresponding content: 

```md
Ingredients here:

{{< box resource="ingredients" >}}

End Ingredients.

Procedure here:

{{< box resource="procedure" >}}
```
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

![Ingredients and Procedure Screenshot](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-recipes.png)

Alternatively, enclose your content inside the shortcode and pass it a `title` parameter instead. The ingredients box above, for example, could be written this way:


```md
Ingredients here: 

{{% box title="ingredients" %}}

* 1 Pot 
* Water

{{% /box %}}
```

#### Print-friendly 

This theme includes a `print.css` that strips images from posts. If an `ingredients` and/or `procedure` box is included, these will be moved to the top of the page.

![PDF screenshot](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-pdf.png)


### Customising the theme CSS

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

![Hotpink primary](https://github.com/pointyfar/pointybubl/blob/master/images/screenshot-configure-scss.png)


### Adding Fontawesome and/or other assets

This theme itself does not come with Fontawesome out of the box (though the exampleSite does). Simply add the references to `<YOUR-HUGO-SITE>/layouts/partials/head/extra-head.html` as necessary.

```html
<!-- exampleSite/layouts/partials/head/extra-head.html -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

```

Any assets or scripts that may need to be included at the bottom of the html may be added to `/layouts/partials/foot/extra-foot.html`.



## Attributions 

Open source is awesome! This theme would not be possible without the efforts of the people behind:

- [Hugo](https://gohugo.io/)
- [Bulma](https://bulma.io/)

This theme's exampleSite also uses 

- [Fontawesome](https://fontawesome.com/)
- Stock images from [pexels](https://www.pexels.com/) (Full list in `exampleSite/content/attributions`)

## License 

Released under the MIT License.