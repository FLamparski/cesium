/*global defineSuite*/
defineSuite([
         'Scene/DiffuseMapMaterial',
         '../Specs/renderMaterial',
         '../Specs/createContext',
         'Renderer/PixelFormat'
     ], function(
         DiffuseMapMaterial,
         renderMaterial,
         createContext,
         PixelFormat) {
    "use strict";
    /*global it,expect*/

    // TODO: Going to postpone this because I don't know a good
    // way to access the context to create the texture
    // (creating a new context here results in a runtime
    // error, understandably)
    it("draws a diffuse map material", function() {
        var image = new Image();
        image.onload = function() {
            var pixel = renderMaterial(new DiffuseMapMaterial({
                texture : context.createTexture2D({
                    source : image,
                    pixelFormat : PixelFormat.RGB
                })
            }));
            expect(pixel).not.toEqualArray([0, 0, 0, 0]);
        };
        image.src = "../../Images/Cesium_Logo_Color.jpg";
    });
});
