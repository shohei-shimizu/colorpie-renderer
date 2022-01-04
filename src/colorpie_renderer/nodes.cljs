(ns colorpie-renderer.nodes)

;; Bases are union for Nodes. It is standard 5 elements which is base for 10 nodes.
(defrecord Bases [name nodes colors coordinate])

(defrecord Nodes [name colors coordinate])

;; Intersection-nodes are composition for double Nodes.
(defrecord Intersection-nodes [name colors coordinate])

;; Center-nodes are special Intersection-nodes that are opposition of each Nodes.
(defrecord Center-nodes [name colors coordinate])

;; ---- Nodes instances ----
;; Define each 10 nodes about name, colors, and coordinate.
(def consideration
  (map->Nodes
   {:name "配慮"
    :colors [::white]
    :coordinate [0 0]}))

  (def method
    (map->Nodes
     {:name "定石"
      :colors [::white]
      :coordinate [0 0]}))

(def reason
  (map->Nodes
   {:name "理性"
    :colors [::blue]
    :coordinate [0 0]}))

(def becoming
  (map->Nodes
   {:name "実現"
    :colors [::blue]
    :coordinate [0 0]}))

(def exploitment
  (map->Nodes
   {:name "利用"
    :colors [::black]
    :coordinate [0 0]}))

(def self-interest
  (map->Nodes
   {:name "独尊"
    :colors [::black]
    :coordinate [0 0]}))

(def casualness
  (map->Nodes
   {:name "即興"
    :colors [::red]
    :coordinate [0 0]}))

(def frankness
  (map->Nodes
   {:name "率直"
    :colors [::red]
    :coordinate [0 0]}))

(def inherency
  (map->Nodes
   {:name "生得"
    :colors [::green]
    :coordinate [0 0]}))

(def harmony
  (map->Nodes
   {:name "調和"
    :colors [::green]
    :coordinate [0 0]}))

;; ---- Intersection-nodes instances ----
(def construction
  (map->Intersection-nodes
   {:name "設計"
    :colors [::white ::blue]
    :coordinate [0 0]}))

(def recommendation
  (map->Intersection-nodes
   {:name "奨励"
    :colors [::white ::blue]
    :coordinate [0 0]}))

(def conference
  (map->Intersection-nodes
   {:name "協議"
    :colors [::white ::blue]
    :coordinate [0 0]}))

(def training
  (map->Intersection-nodes
   {:name "訓練"
    :colors [::white ::blue]
    :coordinate [0 0]}))

(def manipulation
  (map->Intersection-nodes
   {:name "操作"
    :colors [::blue ::black]
    :coordinate [0 0]}))

(def desire
  (map->Intersection-nodes
   {:name "志望"
    :colors [::blue ::black]
    :coordinate [0 0]}))

(def calculation
  (map->Intersection-nodes
   {:name "計算"
    :colors [::blue ::black]
    :coordinate [0 0]}))

(def reformation
  (map->Intersection-nodes
   {:name "改変"
    :colors [::blue ::black]
    :coordinate [0 0]}))

(def unfetteredness
  (map->Intersection-nodes
   {:name "不羈"
    :colors [::black ::red]
    :coordinate [0 0]}))

(def craving
  (map->Intersection-nodes
   {:name "渇望"
    :colors [::black ::red]
    :coordinate [0 0]}))

(def challenge
  (map->Intersection-nodes
   {:name "挑戦"
    :colors [::black ::red]
    :coordinate [0 0]}))

(def delight
  (map->Intersection-nodes
   {:name "愉悦"
    :colors [::black ::red]
    :coordinate [0 0]}))

(def feelings
  (map->Intersection-nodes
   {:name "随感"
    :colors [::red ::green]
    :coordinate [0 0]}))

(def emergence
  (map->Intersection-nodes
   {:name "創発"
    :colors [::red ::green]
    :coordinate [0 0]}))

(def throbbing
  (map->Intersection-nodes
   {:name "躍動"
    :colors [::red ::green]
    :coordinate [0 0]}))

(def emphathize
  (map->Intersection-nodes
   {:name "震撼"
    :colors [::red ::green]
    :coordinate [0 0]}))

(def affection
  (map->Intersection-nodes
   {:name "親愛"
    :colors [::green ::white]
    :coordinate [0 0]}))

(def healthness
  (map->Intersection-nodes
   {:name "健康"
    :colors [::green ::white]
    :coordinate [0 0]}))

(def dedication
  (map->Intersection-nodes
   {:name "献身"
    :colors [::green ::white]
    :coordinate [0 0]}))

(def derivation
  (map->Intersection-nodes
   {:name "由緒"
    :colors [::green ::white]
    :coordinate [0 0]}))

(def efficiency
  (map->Intersection-nodes
   {:name "効率"
    :colors [::white ::black]
    :coordinate [0 0]}))

(def credit
  (map->Intersection-nodes
   {:name "信用"
    :colors [::white ::black]
    :coordinate [0 0]}))

(def supply
  (map->Intersection-nodes
   {:name "調達"
    :colors [::white ::black]
    :coordinate [0 0]}))

(def expediency
  (map->Intersection-nodes
   {:name "方便"
    :colors [::white ::black]
    :coordinate [0 0]}))

(def ingenuity
  (map->Intersection-nodes
   {:name "創意"
    :colors [::blue ::red]
    :coordinate [0 0]}))

(def inspiration
  (map->Intersection-nodes
   {:name "着想"
    :colors [::blue ::red]
    :coordinate [0 0]}))

(def experiment
  (map->Intersection-nodes
   {:name "実験"
    :colors [::blue ::red]
    :coordinate [0 0]}))

(def inquiry
  (map->Intersection-nodes
   {:name "追求"
    :colors [::blue ::red]
    :coordinate [0 0]}))

(def sturdiness
  (map->Intersection-nodes
   {:name "強健"
    :colors [::black ::green]
    :coordinate [0 0]}))

(def territory
  (map->Intersection-nodes
   {:name "縄張り"
    :colors [::black ::green]
    :coordinate [0 0]}))

(def overwhelming
  (map->Intersection-nodes
   {:name "圧倒"
    :colors [::black ::green]
    :coordinate [0 0]}))

(def preservation
  (map->Intersection-nodes
   {:name "温存"
    :colors [::black ::green]
    :coordinate [0 0]}))

(def first-aid
  (map->Intersection-nodes
   {:name "救急"
    :colors [::red ::white]
    :coordinate [0 0]}))

;; This variable name might be changed, because occasion may be not very match "臨機".
(def occasion
  (map->Intersection-nodes
   {:name "臨機"
    :colors [::red ::white]
    :coordinate [0 0]}))

(def bravery
  (map->Intersection-nodes
   {:name "義勇"
    :colors [::red ::white]
    :coordinate [0 0]}))

(def swift
  (map->Intersection-nodes
   {:name "機敏"
    :colors [::red ::white]
    :coordinate [0 0]}))

(def observation
  (map->Intersection-nodes
   {:name "観察"
    :colors [::green ::blue]
    :coordinate [0 0]}))

(def formation
  (map->Intersection-nodes
   {:name "形成"
    :colors [::red ::white]
    :coordinate [0 0]}))

(def prudence
  (map->Intersection-nodes
   {:name "慎重"
    :colors [::red ::white]
    :coordinate [0 0]}))

(def adaption
  (map->Intersection-nodes
   {:name "適応"
    :colors [::red ::white]
    :coordinate [0 0]}))

(def clinical
  (map->Intersection-nodes
   {:name "臨床"
    :colors [::red ::white]
    :coordinate [0 0]}))

;; ---- Bases instances ----
(def peace
  (map->Bases
   {:name "平和"
    :nodes [consideration method]
    :colors [::white]
    :coordinate [0 0]}))
