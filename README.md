jquery-colorchange.js
=====================

jQuery plugin for simple, random color changing on text.

[Demo](http://slides.johnckeyes.com/2013/jquery-colorchange-js/example.html)

Usage
------

    $('#selector').colorChange();
    $('#selector').colorChange({ r: 100, g: 100, b: 100 });

Available Options
------------------

- __r__ : starting red value
- __g__ : starting green value
- __b__ : starting blue value
- __interval__ : time between color changes
- __maxModifier__: max difference (positive or negative) between color values
- __maxValue__: max r, g, or b value
- __minValue__: minimum r, g, or v value

Coming Soon
--------------
+ Modifier and min/max values for each color part
+ Ability to use the same modifier for each color part during a particular change event (allows for greyscale changes, etc)
