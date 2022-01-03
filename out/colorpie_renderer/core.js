// Compiled by ClojureScript 1.10.758 {}
goog.provide('colorpie_renderer.core');
goog.require('cljs.core');
colorpie_renderer.core.canvas = document.getElementById("canvas");
colorpie_renderer.core.ctx = colorpie_renderer.core.canvas.getContext("2d");
(colorpie_renderer.core.ctx.fillStyle = "rgb(255,0,0)");
colorpie_renderer.core.ctx.beginPath();
colorpie_renderer.core.ctx.rect((100),(100),(50),(30));
colorpie_renderer.core.ctx.fill();

//# sourceMappingURL=core.js.map
