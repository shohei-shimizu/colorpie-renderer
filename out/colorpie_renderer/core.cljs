(ns colorpie-renderer.core)

(def canvas (.getElementById js/document "canvas"))
(def ctx (.getContext canvas "2d"))

(set! (.-fillStyle ctx) "rgb(200,200,20)")
(.beginPath ctx)
(.rect ctx 100 100 50 30)
(.fill ctx)