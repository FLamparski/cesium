/*global define*/
define([
        '../Shaders/GrassMaterial'
   ], function (
       ShadersGrassMaterial) {
   "use strict";

   /**
    *
    * Procedural grass material generated with simplex noise.
    * Grass is composed of a grass color and a dirt color,
    * though the grass color is more prominent. A non-configurable
    * thatch pattern is placed on top (same color as grass color).
    *
    * @name GrassMaterial
    * @constructor
    */
   function GrassMaterial(template) {
       var t = template || {};

       /**
        * Grass color. Green/brown color recommended.
        */
       this.grassColor = t.grassColor || {
           red : 0.25,
           green : 0.4,
           blue : 0.1,
           alpha : 1.0
       };

       /**
        * Dirt color. Black/brown color recommended.
        * This color shows up underneath the grass color.
        */
       this.dirtColor = t.dirtColor || {
           red : 0.1,
           green : 0.1,
           blue : 0.1,
           alpha : 1.0
       };

       /**
        * Controls the size of the color patches in the grass.
        * Values between 0.1 (one big grass color patch) and
        * 10.0 (many small grass patches mixed with dirt) recommended.
        *
        * @type {Number}
        */
       this.patchiness = t.patchiness || 1.5;

       var that = this;
       this._uniforms = {
           u_grassColor : function() {
               return that.grassColor;
           },
           u_dirtColor : function() {
               return that.dirtColor;
           },
           u_patchiness : function() {
               return that.patchiness;
           },
       };
    }

    GrassMaterial.prototype._getShaderSource = function() {
        return "#line 0\n" + ShadersGrassMaterial;
    };

    return GrassMaterial;
});
