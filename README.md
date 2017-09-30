# JPkot

### Drupal 8
Een met Bootstrap opgezet theme

### Technieken
- yarn voor de devDependencies vooral gulp is a toolkit for automating tasks in your development.  
- bower voor de theme Dependencies
- het theme wordt in de dist folder opgebouwd met de gulp task

#### Field-beschikbaarheid
Wil de content van het field-beschikbaar een andere kleur geven afhankelijk van de waarde.
Om de file field--field-beschikbaar.html.twig te kunnen gebruiken in combinatie met de view (table-display) dient in de view bij de 
instellingen van het field hier in dit geval 'beschikbaarheid', onder Stijlinstellingen gekozen voor 'Veldtemplate gebruiken'.
