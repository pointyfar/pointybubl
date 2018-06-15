# pointyfood: A Hugo Theme

Built with Bulma.css, ideal for blogs, with extra features specifically for showcasing recipes.

## Preview the theme

Grab the theme from https://github.com/pointyfar/pointyfood

Navigate to `/exampleSite` and run `hugo server`

Visit http://localhost:1313/ 

## Installing the theme 

Follow the instructions in the Hugo documentation: 

https://gohugo.io/themes/installing-and-using-themes/ 

If you are deploying your Hugo site on Netlify, please note that you need to add the theme as a submodule: 

https://gohugo.io/hosting-and-deployment/hosting-on-netlify/#use-hugo-themes-with-netlify


## Configuring the theme 

The theme comes with an `exampleSite` folder, which has a `config.toml` file included. 


### Configure menus for navbar

This theme takes advantage of Hugo's Section Menus for Lazy Bloggers documented here: https://gohugo.io/templates/menu-templates/#section-menu-for-lazy-bloggers

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

Having the above example confiuration means the secondary nav will be populated with `3` links from the `categories` taxonomy which will include the category `"queen"` and two others. Please note that the list will be sorted alphabetically. 

### Configure hero image 

You can choose to feature a hero image on the home page by adding the absolute path to the image. Specifying `bgislight` sets the corresponding contrasting font color for the text.

```toml
[params.hero]
  background = "//localhost:1313/subdir/img/hero-background-dark.jpeg"
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
  blurb = " This is params author blurb. Configure me! \
            Possumus quorum aliqua aut anim ut eiusmod exquisitaque ut consequat. \
            O id sempiternum, voluptate quo ingeniis. \
            Duis ab et nulla incurreret, litteris qui possumus."
  aboutSection = "/about/"
```

#### Configure social buttons 

```toml
socialdata = "social"
```

You can add a social box on the sidebar by pointing `params.socialdata` to a file in your `data` folder. The `exampleSite` has a `social.toml` data file which has the following contents:
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
url = "//localhost:1313/subdir/img/hero-background.jpeg"
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
{{%/* image resource="images/pineapple-on-beach.jpeg" caption="Pineapple on Beach" alt="Pineapple" */%}}
```

Which renders this:

![Resource Screenshot](https://github.com/pointyfar/pointyfood/blob/master/images/screenshot-resource.png)

You can use the shortcode for non-bundled images as well, passing a `src` parameter instead of `resource`:

```
{{%/* image src="//localhost:1313/img/hello.jpeg" caption="Hello" alt="Hello" */%}}
```

![Src Screenshot](https://github.com/pointyfar/pointyfood/blob/master/images/screenshot-src-image.png)


#### Image gallery 

If you have your pages organised as page bundles, you can set 

```
show_gallery: true
```
on a post's front matter. This will display a gallery of all the resources it finds of type `image`.

![Image Gallery](https://github.com/pointyfar/pointyfood/blob/master/images/screenshot-gallery.png) 

It will use the `.Title` attribute as caption if set.



#### Recipe pages

While this theme can be used as a general blog theme, it has some additional functions for featuring recipes.

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

![Ingredients and Procedure Screenshot](https://github.com/pointyfar/pointyfood/blob/master/images/screenshot-recipes.png)

#### Print-friendly 

This theme includes a `print.css` that strips images from posts. If an `ingredients` and/or `procedure` box is included, these will be moved to the top of the page.

![PDF screenshot](https://github.com/pointyfar/pointyfood/blob/master/images/screenshot-pdf.png)


### Customising the theme CSS

This theme uses [Bulma](https://bulma.io/) base styles. Follow their [instructions for customising Bulma](https://bulma.io/documentation/overview/customize/) using Sass.

Alternatively:
- write your own css files under `<YOUR-HUGO-SITE>/static/css/` to override the theme's `style.css`, or
- copy `/layouts/partials/head/css.html` to `<YOUR-HUGO-SITE>/layouts/partials/head/css.html` and add/remove references to css files as you please.

### Adding Fontawesome and/or other assets

This theme itself does not come with Fontawesome out of the box (though the exampleSite does). Simply add the references to `<YOUR-HUGO-SITE>/layouts/partials/head/cdns.html` as necessary.

```html
<!-- exampleSite/layouts/partials/head/cdns.html -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

```

Any assets or scripts that may need to be included at the bottom of the html may be added to `/layouts/partials/foot/js.html`.



## Attributions 

Open source is awesome! This theme would not be possible without the efforts of the people behind:

- [Hugo](https://gohugo.io/)
- [Bulma](https://bulma.io/)

This theme's exampleSite also uses 

- [Fontawesome](https://fontawesome.com/)
- Stock images from [pexels](https://www.pexels.com/) (Full list in `exampleSite/content/attributions`)

## License 

Released under the MIT License.