(ns colorpie-renderer.nodes)

;; Bases are union for Nodes.
(defrecord Bases [name nodes coordinate])
(->Bases 0 0 0)

(defrecord Nodes [name colors coordinate])

;; Intersection-nodes are composition for double Nodes.
(defrecord Intersection-nodes [name colors coordinate])