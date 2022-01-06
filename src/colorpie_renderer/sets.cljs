(ns colorpie-renderer.sets
  (:require [colorpie-renderer.nodes :as nodes])
  (:require-macros [colorpie-renderer.sets-macros :as macros]))

;; This is what collects 4 intersections. It expressions multiple color union.
(defrecord Intersection-sets [name nodes])
;; To avoid that calva say xxxx unresolved.
(declare promotion arbitrariness individuality sensitiveness continuity convinience creation outliving enforcement clinical)

(def intersection-sets
  [(macros/def-sets promotion
     map->Intersection-sets {:name "推進"
                             :nodes [nodes/construction nodes/recommendation nodes/conference nodes/training]})
   (macros/def-sets arbitrariness
     map->Intersection-sets {:name "随意"
                             :nodes [nodes/manipulation nodes/desire nodes/calculation nodes/reformation]})
   (macros/def-sets individuality
     map->Intersection-sets {:name "独立"
                             :nodes [nodes/unfetteredness nodes/craving nodes/challenge nodes/delight]})
   (macros/def-sets sensitiveness
     map->Intersection-sets {:name "感性"
                             :nodes [nodes/feelings nodes/emergence nodes/throbbing nodes/emphathize]})
   (macros/def-sets continuity
     map->Intersection-sets {:name "連綿"
                             :nodes [nodes/affection nodes/healthness nodes/dedication nodes/derivation]})
   (macros/def-sets convinience
     map->Intersection-sets {:name "利便"
                             :nodes [nodes/efficiency nodes/credit nodes/supply nodes/expediency]})
   (macros/def-sets creation
     map->Intersection-sets {:name "創造"
                             :nodes [nodes/ingenuity nodes/inspiration nodes/experiment nodes/inquiry]})
   (macros/def-sets outliving
     map->Intersection-sets {:name "残存"
                             :nodes [nodes/sturdiness nodes/territory nodes/overwhelming nodes/preservation]})
   (macros/def-sets enforcement
     map->Intersection-sets {:name "励行"
                             :nodes [nodes/first-aid nodes/occasion nodes/bravery nodes/swift]})
   (macros/def-sets clinical
     map->Intersection-sets {:name "臨床"
                             :nodes [nodes/observation nodes/formation nodes/prudence nodes/adaption]})])

(defn remove-some-colors [coll]
  (let [f (fn [key-1 key-2] (not= (first (:colors key-1))
                                  (first (:colors key-2))))
        g (fn [x c] (filter #(f x %) c))
        h (fn [c] (map #(g % c) c))]
    (h coll)))
