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

    var ColorPart = function(value, maxValue, minValue, maxModifier) {

		var _self = this;

        var _generateModifier = function() {
            var max = maxModifier + 1;
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
                if (_self.value >= maxValue) {
                    _self.value = maxValue;
                    _self.increment = false;
                }
            }
            else {
                _self.value -= modifier;
                if (_self.value <= minValue) {
                    _self.value = minValue;
                    _self.increment = true;
                }
            }
        };

    };

    $.fn.colorChange = function(options) {

		var _options = $.extend({
            maxValue: 255,
            minValue: 0,
            maxModifier: 3,
			interval: 200,
			r: 0,  g: 0,  b: 0
        }, options);
	
        var target = $(this);

        var color = {
            r: new ColorPart(_options.r, _options.maxValue, _options.minValue, _options.maxModifier),
            g: new ColorPart(_options.g, _options.maxValue, _options.minValue, _options.maxModifier),
            b: new ColorPart(_options.b, _options.maxValue, _options.minValue, _options.maxModifier)
        };

        var setColor = function() {
            color.r.newValue();
            color.g.newValue();
            color.b.newValue();

            target.css({
                color: "rgb(" + color.r.value + ", " + color.g.value + ", " + color.b.value + ")"
            });
        };

		setInterval(setColor, _options.interval);
    };

})(jQuery);
