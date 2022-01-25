(ns colorpie-renderer.core
  (:require [cljsjs.jquery]
            [cljsjs.d3]
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

(def svg (-> js/d3
             (.select "body")
             (.append "svg")
             (.attr "width" 200)
             (.attr "height" 200)))
(-> svg
    (.append "circle")
    (.attr "fill" "#FFD000")
    (.attr "cx" 100)
    (.attr "cy" 100)
    (.attr "r" 95))
(-> svg
    (.append "text")
    (.attr "x" 100)
    (.attr "y" 100)
    (.attr "text-anchor" "middle")
    (.attr "dominant-baseline" "middle")
    (.text "text"))
