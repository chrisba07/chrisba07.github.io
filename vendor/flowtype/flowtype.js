/*
 * FlowType.JS v1.1
 * Copyright 2013-2014, Simple Focus http://simplefocus.com/
 *
 * FlowType.JS by Simple Focus (http://simplefocus.com/)
 * is licensed under the MIT License. Read a copy of the
 * license in the LICENSE.txt file or at
 * http://choosealicense.com/licenses/mit
 *
 * Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
 */

(function ($) {
    $.fn.flowtype = function (options) {

        // Establish default settings/variables
        // ====================================
        var settings = $.extend({
                maximum: 9999,
                minimum: 1,
                maxFont: 9999,
                minFont: 1,
                fontRatio: 35
            }, options),

            // Do the magic math
            // =================
            changes = function (el) {
                var $el = $(el),
                    elw = $el.width(),
                    width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
                    fontBase = width / settings.fontRatio,
                    fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
                $el.css('font-size', fontSize + 'px');
            };

        // Make the magic visible
        // ======================
        return this.each(function () {
            // Context for resize callback
            var that = this;
            // Make changes upon resize
            $(window).resize(function () {
                changes(that);
            });
            // Set changes on load
            changes(this);
        });
    };
}(jQuery));




$('#my-element-1').flowtype({
    fontRatio: 19.9
}),
$('#my-element-2').flowtype({
    fontRatio: 9.5
}),
$('#my-element-3').flowtype({
    fontRatio: 16.6
}),
$('#my-element-4').flowtype({
    fontRatio: 19.3
}),
$('#my-element-5').flowtype({
    fontRatio: 17.5
}),
$('#my-element-6').flowtype({
    fontRatio: 19.9
});