# JP-kot

### Drupal 8
A theme set-up with Bootstrap

#### Used modules  
twig_field_value - backup_migrate - pathauto - colorbox - views_slideshow - 
metatag - webform - google_analytics - xmlsitemap

### Webtechnologies 
- yarn for devDependencies primarily for gulp is a toolkit for automating tasks in your development.  
- bower for the theme Dependencies
- The theme is built up in the dist folder with a gulp task

#### Photo-album
With bootstrap-waterfall https://github.com/Mystist/bootstrap-waterfall (with bower)
- On node--foto-album.html.twig attach the library {{ attach_library('jpkot/waterfalljs') }} and print
the images {{ content.field_impressie_img }}
- On field--field-impressie-img.html.twig add the class waterfall
```
{% for item in items %}
  <ul class="pin list-group">
    <li class="list-group-custom">
      {{ item.content }}
    </li>
  </ul>
{% endfor %}  
```

Extra the magnifying lens on the images
```
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

#### @media Bubbling
Sass provide a pretty killer feature for authoring @media when you nest them inside other selectors. If you add a @media query by nesting it inside a selector Sass will "bubble" that @media query and the new rule outside of the nest and back out to the root of your style sheet.
http://thesassway.com/intermediate/responsive-web-design-part-2  
In this project i use it in combination with a mediaquery mixin  
The mixin  
```
=mQuery($arg...)
  @if length($arg) == 1
    @media screen and (max-width: nth($arg, 1))
      @content

  @if length($arg) == 2
    @media screen and (max-width: nth($arg, 1)) and (min-width: nth($arg, 2))
      @content
```

The Bubbling
```
.page-content-wrap
  background: white
  padding: 35px
  overflow: hidden
  +mQuery(479px)
    padding: 10px
```



### Method of setting up this theme
- after download and unzip, change directory to jpkot.
- cd to jpkot and run 'bower install' for theme dependencies (bootstrap, bootstrap-waterfall and font-awesome) 
- run 'yarn install' for the dev-dependencies (gulp ....) see package.json for a complete list
- run 'gulp' this create the css directory and a minify styles.css file but also a dist directory with the final theme