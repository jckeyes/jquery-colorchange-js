jquery-colorchange-js
=====================

jQuery plugin for simple, random color changing on text.

=== USAGE ===

$('#selector').colorChange();
$('#selector').colorChange({ r: 100, g: 100, b: 100 });

=== AVAILABLE OPTIONS ===

r	- starting red value
g	- starting green value
b -	starting blue value
interval -	time between color changes
maxModifier	- max difference (positive or negative) between color values
maxValue -	max r, g, or b value
minValue -	minimum r, g, or v value

=== COMING SOON ===
+ Modifier and min/max values for each color part
+ Ability to use the same modifier for each color part during a particular change event (allows for greyscale changes, etc)
