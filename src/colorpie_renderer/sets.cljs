(ns colorpie-renderer.sets
  (:require [colorpie-renderer.nodes :as nodes])
  (:require-macros [colorpie-renderer.macros.sets :as macros]))

;; This is what collects 4 intersections. It expressions multiple color union.
(defrecord Intersection-sets [name nodes])
;; To avoid calva saying xxxx unresolved.
(declare promotion arbitrariness individuality sensitiveness continuity convinience creation outliving enforcement clinical)

(def intersection-sets
  [(macros/def-sets promotion
     map->Intersection-sets {:name {:jp "推進" :en "promotion"}
                             :nodes [nodes/construction nodes/recommendation nodes/conference nodes/training]})
   (macros/def-sets arbitrariness
     map->Intersection-sets {:name {:jp "随意" :en "arbitrariness"}
                             :nodes [nodes/manipulation nodes/desire nodes/calculation nodes/reformation]})
   (macros/def-sets individuality
     map->Intersection-sets {:name {:jp "独立" :en "individuality"}
                             :nodes [nodes/unfetteredness nodes/craving nodes/challenge nodes/delight]})
   (macros/def-sets sensitiveness
     map->Intersection-sets {:name {:jp "感性" :en "sensitiveness"}
                             :nodes [nodes/feelings nodes/emergence nodes/throbbing nodes/emphathize]})
   (macros/def-sets continuity
     map->Intersection-sets {:name {:jp "連綿" :en "continuity"}
                             :nodes [nodes/affection nodes/healthness nodes/dedication nodes/derivation]})
   (macros/def-sets convinience
     map->Intersection-sets {:name {:jp "利便" :en "convinience"}
                             :nodes [nodes/efficiency nodes/credit nodes/supply nodes/expediency]})
   (macros/def-sets creation
     map->Intersection-sets {:name {:jp "創造" :en "creation"}
                             :nodes [nodes/ingenuity nodes/inspiration nodes/experiment nodes/inquiry]})
   (macros/def-sets outliving
     map->Intersection-sets {:name {:jp "残存" :en "outliving"}
                             :nodes [nodes/sturdiness nodes/territory nodes/overwhelming nodes/preservation]})
   (macros/def-sets enforcement
     map->Intersection-sets {:name {:jp "励行" :en "enforcement"}
                             :nodes [nodes/first-aid nodes/occasion nodes/bravery nodes/swift]})
   (macros/def-sets clinical
     map->Intersection-sets {:name {:jp "臨床" :en "clinical"}
                             :nodes [nodes/observation nodes/formation nodes/prudence nodes/adaption]})])

(defn remove-same-keys
  "This is what takes key and collection, and check 'Both elements in collection have same value?'
and return collection that has not it."
  [key coll]
  (let [f (fn [key-1 key-2] (not= (first (key key-1))
                                  (first (key key-2))))
        g (fn [x c] (into [] (concat [x] (filterv #(f x %) c))))
        h (fn [c] (mapv #(g % c) c))]
    (h coll)))

;; This is relation between nodes and other nodes.
(def relation-sets-nodes (remove-same-keys :colors nodes/nodes))


;; Test codes which generate outputs in line
(defn test-sets []
  (println intersection-sets)
  (println relation-sets-nodes))

;; Test codes which check data generation though access record field
(defn test-accesscheck []
  (println (isa? :colorpie-renderer.nodes/blue
                 (first (:colors nodes/reason)))))
