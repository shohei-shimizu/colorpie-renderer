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

(let [f (fn [cls coll]
          (doseq [n coll]
            (-> js/d3
                (.select "body")
                (.append "div")
                (.attr "id" (:en (:name n)))
                (.classed cls true)
                (.text (:jp (:name n))))))]

  (f "basis" nodes/basis)
  (f "nodes" nodes/nodes)
  (f "intersection-nodes" nodes/intersection-nodes)
  (f "intersection-sets" sets/intersection-sets)

  (-> js/d3
      (.selectAll "div")
      (.classed "elements" true)))
