/*
    Copyright 2013 John Keyes

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

(function($) {

    var ColorPart = function(value, options) {
        var _options = $.extend({
            maxValue: 255,
            minValue: 0,
            maxModifier: 3
        }, options);

        var _self = this;

        var _generateModifier = function() {
            var max = _options.maxModifier + 1;
            return Math.floor(Math.random() * max) + 1;
        };

        var _generateDirection = function() {
            return Math.floor(Math.random() * 2) === 1;
        };

        this.value = value;
        this.increment = _generateDirection();

        this.newValue = function() {
            var modifier = _generateModifier();

            if (_self.increment) {
                _self.value += modifier;
                if (_self.value >= _options.maxValue) {
                    _self.value = _options.maxValue;
                    _self.increment = false;
                }
            }
            else {
                _self.value -= modifier;
                if (_self.value <= _options.minValue) {
                    _self.value = _options.minValue;
                    _self.increment = true;
                }
            }
        };

    };

    $.fn.colorChange = function(options) {

        var target = $(this);

        var color = {
            r: new ColorPart(options.r, options),
            g: new ColorPart(options.g, options),
            b: new ColorPart(options.b, options)
        };

        var setColor = function() {
            color.r.newValue();
            color.g.newValue();
            color.b.newValue();

            target.css({
                color: "rgb(" + color.r.value + ", " + color.g.value + ", " + color.b.value + ")"
            });
        };

        setInterval(setColor, 200);
    };

})(jQuery);
