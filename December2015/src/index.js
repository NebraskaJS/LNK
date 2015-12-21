// index file
// entry point
// load all your things and export it to the world
import nejsDirective from './nejsDirective';

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        if (typeof angular === 'undefined') {
            var angular = require('angular');
            factory(angular);
            module.exports = 'nejsDirective';
        } else {
            factory(angular);
            module.exports = 'nejsDirective';
        }
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['angular'], factory);
    } else {
        // Global Variables
        factory(root.angular);
    }
}(this, function (angular) {
  'use strict';
  // create your angular module and do stuff
  var moduleName = 'nejsDirective';
  var mod = angular.module(moduleName, []);

  nejsDirective(mod);

  return moduleName; // the name of your module

}));