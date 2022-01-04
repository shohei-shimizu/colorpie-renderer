(ns colorpie-renderer.nodes)

;; Bases are union for Nodes.
(defrecord Bases [name nodes colors coordinate])

(defrecord Nodes [name colors coordinate])

;; Intersection-nodes are composition for double Nodes.
(defrecord Intersection-nodes [name colors coordinate])

;; Center-nodes are special Intersection-nodes that are opposition of each Nodes.
(defrecord Center-nodes [name colors coordinate])

;; Define each 10 nodes about name, colors, and coordinate.
(def consideration
  (map->Nodes
   {:name "配慮"
    :colors '(::white)
    :coordinate '(0 0)}))

(def method
  (map->Nodes
   {:name "定石"
    :colors '(::white)
    :coordinate '(0 0)}))

(def reason
  (map->Nodes
   {:name "理性"
    :colors '(::blue)
    :coordinate '(0 0)}))

(def becoming
  (map->Nodes
   {:name "実現"
    :colors '(::blue)
    :coordinate '(0 0)}))

(def exploitment
  (map->Nodes
   {:name "利用"
    :colors '(::black)
    :coordinate '(0 0)}))

(def self-interest 
  (map->Nodes 
   {:name "独尊" 
    :colors '(::black) 
    :coordinate '(0 0)}))

(def casualness 
  (map->Nodes 
   {:name "即興" 
    :colors '(::red) 
    :coordinate '(0 0)}))

(def frankness 
  (map->Nodes 
   {:name "率直" 
    :colors '(::red) 
    :coordinate '(0 0)}))

(def inherency 
  (map->Nodes 
   {:name "生得" 
    :colors '(::green) 
    :coordinate '(0 0)}))

(def harmony 
  (map->Nodes 
   {:name "調和" 
    :colors '(::green) 
    :coordinate '(0 0)}))
