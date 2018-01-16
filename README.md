# JP-kot

### Table of Contents
- [Webtechnologies](#webtechnologies)  
- [BEM and SASS](#bem)  
- [REM](#rem)  
- [DRY](#dry)  
- [JQUERY - JAVASCRIPT](#js)  
- [PHOTO ALBUM](#photo)  
- [@media Bubbling](#bubbling)  
- [Method of setting up this theme](#method)


### Drupal 8
A theme set-up with Bootstrap 3.3.7 CSS framework

#### Used modules
twig_field_value - backup_migrate - pathauto - colorbox - views_slideshow -
metatag - webform - google_analytics - xmlsitemap

---

### <a name="webtechnologies"></a> Webtechnologies
- **Yarn** FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT, for devDependencies primarily for gulp.
- **Bower** for the theme Dependencies
- **Sass** is the most mature, stable, and powerful professional grade CSS extension language in the world.
- **BEM** — Block Element Modifier is a highly useful, powerful, and simple naming convention that makes your front-end code easier to read 
- and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.
- **Gulp** is a toolkit for automating painful or time-consuming tasks in your development workflow.

#### <a name="bem"></a> BEM and SASS
A perfect combination, resulting in a clean code, here is a short fragment from sass/3-layout/menu right. sass  
``` css
.menu
    list-style-type: none

    &__item
      border-bottom: solid 1px white
      padding: 3rem 0
      +transitionMixin(.5s)

      &--active-trail  
        padding-left: 3rem

```
##### The css way
``` css
.menu {
  list-style-type: none;
}

.menu__item {
  border-bottom: solid 1px white;
  padding: 3rem 0;
  transition: all .5s ease;
}

.menu__item--active-trail {
  padding-left: 3rem;
}
```

#### <a name="rem"></a> REM (Root em)
All css units in this theme are rem units.
I've converted the font size from 16px to 10px (10px/16px = 62.5%), so 1rem = 10px this makes it a lot easier to convert px to rem.  
This setting is done on the file 'sass/1-base/_base-styles.sass'

The rem unit is relative to the root—or the html—element. That means that we can define a single font size on the html element and define all 
rem units to be a percentage of that.  
https://www.sitepoint.com/understanding-and-using-rem-units-in-css/

#### <a name="dry"></a> DRY one step further

``` css
body
  margin: 0
  font-size: 1.6rem
  font-weight: 400
```
**DRY**
``` css
body
  margin: 0
  font:
    size: 1.6rem
    weight: 400
```

#### <a name="js"></a> JQUERY - JAVASCRIPT
Menu slide effect, I have set this up in 2 different ways
- with JQUERY js/menu.js
- with JAVASCRIPT js/menuJS.js (default)

Display of popup price notification with css, also closing with x happens with css.  
Closing the popup by clicking on the background with jquery (js/popup.js)  

- custom.js just for adding classes to the the h3 and h4 tags, these tags are created in the text editor, is already difficult enough 
for the editor, so adding the classes '.heading-tertiary' and .'heading-fourth' with JS  

``` js
 let heading3 = document.getElementsByTagName('h3');
 heading3 = Array.from(heading3);
 heading3.forEach(function(head){
      head.classList.add('heading-tertiary');
    });

```

**TODO**  
- [ ] field--field-beschikbaar.html.twig to JS (see comment on this file)


#### <a name="photo"></a> PHOTO ALBUM
With bootstrap-waterfall https://github.com/Mystist/bootstrap-waterfall (with bower)
- On node--foto-album.html.twig attach the library {{ attach_library('jpkot/waterfalljs') }} and print
the images {{ content.field_impressie_img }}
- On field--field-impressie-img.html.twig add the class waterfall
- sass/6-vendor/_waterfall.sass the styling  

``` twig
{% for item in items %}
  <ul class="pin list-group">
    <li class="list-group-custom">
      {{ item.content }}
    </li>
  </ul>
{% endfor %}
```

Extra the magnifying lens on the images
``` twig
{% for item in items %}
  <ul class="pin list-group">
    <li class="list-group-custom">
      {{ item.content }}
    </li>
    <li class="pin-footer">
      <div class="enlarge">
        <a href="#"><i class="fa fa-search fa-2x" aria-hidden="true"></i></a>
      </div>
    </li>
  </ul>
{% endfor %}
```

#### <a name="bubbling"></a> @media Bubbling
Sass provide a pretty killer feature for authoring @media when you nest them inside other selectors. If you add a @media query by nesting 
it inside a selector Sass will "bubble" that @media query and the new rule outside of the nest and back out to the root of your style sheet.
http://thesassway.com/intermediate/responsive-web-design-part-2
In this project i use it in combination with a mediaquery mixin

The mixin MEDIA QUERY MANAGER
``` css
=respond($breakpoint)

  @if $breakpoint == smallest-phone     //375px
    @media (max-width: 23.5em)
      @content

  @if $breakpoint == small-phone     //480px
    @media (max-width: 30em)
      @content

  @if $breakpoint == phone          //600px
    @media (max-width: 37.5em)
      @content

  @if $breakpoint == tab-port       //900px
    @media (max-width: 56.5em)
      @content

  @if $breakpoint == tab-land       //1200px
    @media (max-width: 75em)
      @content

  @if $breakpoint == big-desktop    //more than 1800px
    @media (min-width: 112.5em)
      @content
```

The Bubbling
##### The sass way with mixin
``` css
.page__content
  background: white
  padding: 3.5rem
  overflow: hidden

  +respond(phone)
    padding: 1rem

```
##### The css way without mixin and bubbling
``` css
.page__content {
  background: white;
  padding: 3.5rem;
  overflow: hidden;
}

@media screen and (max-width: 479px) {
  .page__content {
    padding: 1rem;
  }
}
```
---

### <a name="methode"></a> Method of setting up this theme
- after download and unzip.
- cd to jpkot and run 'bower install' for theme dependencies (bootstrap, bootstrap-waterfall and font-awesome)
- run 'yarn install' for the dev-dependencies (gulp ....) see package.json for a complete list
- run 'gulp' this create the css directory and a minify styles.css file but also a dist directory with the final theme

### Starting point
Used my own Drupal8 boilerplate as startpoint for this project
https://github.com/illutek/theme-directory
Edit the bower.json file in order not to use bootstrap 4.0.0-beta but version 3.x.x.



**TODO**  
- [ ] how to prevent a drupal8 view slider to load on a mobile device
