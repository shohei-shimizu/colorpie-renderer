(ns colorpie-renderer.core
  (:require [cljsjs.jquery :as jquery]
            [cljsjs.d3 :as d3]))

(def canvas (.getElementById js/document "canvas"))
(def ctx (.getContext canvas "2d"))

(set! (.-fillStyle ctx) "rgb(255,0,0)")
(.beginPath ctx)
(.rect ctx 100 100 50 30)
(.fill ctx)
