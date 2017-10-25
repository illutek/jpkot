# JP-kot

### Drupal 8
A theme set up with Bootstrap

### Technologies 
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

#### Field-beschikbaarheid
Wil de content van het field-beschikbaar een andere kleur geven afhankelijk van de waarde.
Om de file field--field-beschikbaar.html.twig te kunnen gebruiken in combinatie met de view (table-display) dient in de view bij de 
instellingen van het field hier in dit geval 'beschikbaarheid', onder Stijlinstellingen gekozen voor 'Veldtemplate gebruiken'.
