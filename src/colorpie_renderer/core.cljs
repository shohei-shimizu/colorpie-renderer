(ns colorpie-renderer.core
  (:require [cljsjs.jquery :as jquery]
            [cljsjs.d3 :as d3]
            [colorpie-renderer.nodes :as nodes]
            [colorpie-renderer.sets :as sets])
  (:require-macros [colorpie-renderer.macros.core :as macros]))

(def canvas (.getElementById js/document "canvas"))
(def ctx (.getContext canvas "2d"))

(set! (.-fillStyle ctx) "rgb(255,0,0)")
(.beginPath ctx)
(.rect ctx 100 100 50 30)
(.fill ctx)

(doseq [n nodes/nodes]
  (-> js/d3
      (.select "body")
      (.append "div")
      (.attr "id")))
