(ns colorpie-renderer.sets)
(require '[colorpie-renderer.nodes :as nodes])

;; This is what collects 4 intersections. It expressions multiple color union.
(defrecord Intersection-sets [name nodes])

(def basis [nodes/peace nodes/perfection nodes/power nodes/freedom nodes/acceptance])
(def nodes [nodes/consideration nodes/method nodes/reason nodes/becoming nodes/exploitment
            nodes/self-interest nodes/casualness nodes/frankness nodes/inherency nodes/harmony])
(def intersection-nodes [])
