(ns colorpie-renderer.nodes
  (:require-macros [colorpie-renderer.node-macros :as macros]))

;; Basis are union for Nodes. It is standard 5 elements which is base for 10 nodes.
(defrecord Basis [name nodes colors coordinate])

(defrecord Nodes [name colors interrogative coordinate])

;; Intersection-nodes are composition for double Nodes.
(defrecord Intersection-nodes [name colors coordinate])

;; ---- Nodes instances ----
;; Define each 10 nodes about name, colors, and coordinate.

(def nodes [(macros/def-nodes consideration
                              map->Nodes
                              {:name "配慮" :colors [::white] :interrogative ::who})

            (macros/def-nodes method
                              map->Nodes
                              {:name "定石" :colors [::white] :interrogative ::how})

            (macros/def-nodes reason
                              map->Nodes
                              {:name "理性" :colors [::blue] :interrogative ::when})

            (macros/def-nodes becoming
                              map->Nodes
                              {:name "実現" :colors [::blue] :interrogative ::what})

            (macros/def-nodes exploitment
                              map->Nodes
                              {:name "利用" :colors [::black] :interrogative ::where})

            (macros/def-nodes self-interest
                              map->Nodes
                               {:name "独尊" :colors [::black] :interrogative ::who})

            (macros/def-nodes casualness
                              map->Nodes
                              {:name "即興" :colors [::red] :interrogative ::how})

            (macros/def-nodes frankness
                              map->Nodes
                              {:name "率直" :colors [::red] :interrogative ::when})

            (macros/def-nodes inherency
                              map->Nodes
                              {:name "生得" :colors [::green] :interrogative ::what})

            (macros/def-nodes harmony
                              map->Nodes
                              {:name "調和" :colors [::green] :interrogative ::where})])


;; ---- Intersection-nodes instances ----
(def intersection-nodes [(macros/def-nodes construction
                                           map->Intersection-nodes
                                           {:name "設計" :colors [::white ::blue]})
                         
                         (macros/def-nodes recommendation
                                           map->Intersection-nodes
                                           {:name "奨励" :colors [::white ::blue]})
                         
                         (macros/def-nodes conference
                                           map->Intersection-nodes
                                           {:name "協議" :colors [::white ::blue]})
                         
                         (macros/def-nodes training
                                           map->Intersection-nodes
                                           {:name "訓練" :colors [::white ::blue]})
                         
                         (macros/def-nodes manipulation
                                           map->Intersection-nodes
                                           {:name "操作" :colors [::blue ::black]})
                         
                         (macros/def-nodes desire
                                           map->Intersection-nodes
                                           {:name "志望" :colors [::blue ::black]})
                         
                         (macros/def-nodes calculation
                                           map->Intersection-nodes
                                           {:name "計算" :colors [::blue ::black]})
                         
                         (macros/def-nodes reformation
                                           map->Intersection-nodes
                                           {:name "改変" :colors [::blue ::black]})
                         
                         (macros/def-nodes unfetteredness
                                           map->Intersection-nodes
                                           {:name "不羈" :colors [::black ::red]})
                         
                         (macros/def-nodes craving
                                           map->Intersection-nodes
                                           {:name "渇望" :colors [::black ::red]})
                         
                         (macros/def-nodes challenge
                                           map->Intersection-nodes
                                           {:name "挑戦" :colors [::black ::red]})
                         
                         (macros/def-nodes delight
                                           map->Intersection-nodes
                                           {:name "愉悦" :colors [::black ::red]})
                         
                         (macros/def-nodes feelings
                                           map->Intersection-nodes
                                           {:name "随感" :colors [::red ::green]})
                         
                         (macros/def-nodes emergence
                                           map->Intersection-nodes
                                           {:name "創発" :colors [::red ::green]})
                         
                         (macros/def-nodes throbbing
                                           map->Intersection-nodes
                                           {:name "躍動" :colors [::red ::green]})
                         
                         (macros/def-nodes emphathize
                                           map->Intersection-nodes
                                           {:name "震撼" :colors [::red ::green]})
                         
                         (macros/def-nodes affection
                                           map->Intersection-nodes
                                           {:name "親愛" :colors [::green ::white]})
                         
                         (macros/def-nodes healthness
                                           map->Intersection-nodes
                                           {:name "健康" :colors [::green ::white]})
                         
                         (macros/def-nodes dedication
                                           map->Intersection-nodes
                                           {:name "献身" :colors [::green ::white]})
                         
                         (macros/def-nodes derivation
                                           map->Intersection-nodes
                                           {:name "由緒" :colors [::green ::white]})
                         
                         (macros/def-nodes efficiency
                                           map->Intersection-nodes
                                           {:name "効率" :colors [::white ::black]})
                         
                         (macros/def-nodes credit
                                           map->Intersection-nodes
                                           {:name "信用" :colors [::white ::black]})
                         
                         (macros/def-nodes supply
                                           map->Intersection-nodes
                                           {:name "調達" :colors [::white ::black]})
                         
                         (macros/def-nodes expediency
                                           map->Intersection-nodes
                                           {:name "方便" :colors [::white ::black]})
                         
                         (macros/def-nodes ingenuity
                                           map->Intersection-nodes
                                           {:name "創意" :colors [::blue ::red]})
                         
                         (macros/def-nodes inspiration
                                           map->Intersection-nodes
                                           {:name "着想" :colors [::blue ::red]})
                         
                         (macros/def-nodes experiment
                                           map->Intersection-nodes
                                           {:name "実験" :colors [::blue ::red]})
                         
                         (macros/def-nodes inquiry
                                           map->Intersection-nodes
                                           {:name "追求" :colors [::blue ::red]})
                         
                         (macros/def-nodes sturdiness
                                           map->Intersection-nodes
                                           {:name "強健" :colors [::black ::green]})
                         
                         (macros/def-nodes territory
                                           map->Intersection-nodes
                                           {:name "縄張り" :colors [::black ::green]})
                         
                         (macros/def-nodes overwhelming
                                           map->Intersection-nodes
                                           {:name "圧倒" :colors [::black ::green]})
                         
                         (macros/def-nodes preservation
                                           map->Intersection-nodes
                                           {:name "温存" :colors [::black ::green]})
                         
                         (macros/def-nodes first-aid
                                           map->Intersection-nodes
                                           {:name "救急" :colors [::red ::white]})
                         
;; This variable name might be changed, because occasion may be not very match "臨機".
                         (macros/def-nodes occasion
                                           map->Intersection-nodes
                                           {:name "臨機" :colors [::red ::white]})
                         
                         (macros/def-nodes bravery
                                           map->Intersection-nodes
                                           {:name "義勇" :colors [::red ::white]})
                         
                         (macros/def-nodes swift
                                           map->Intersection-nodes
                                           {:name "機敏" :colors [::red ::white]})
                         
                         (macros/def-nodes observation
                                           map->Intersection-nodes
                                           {:name "観察" :colors [::green ::blue]})
                         
                         (macros/def-nodes formation
                                           map->Intersection-nodes
                                           {:name "形成" :colors [::red ::white]})
                         

                         (macros/def-nodes prudence
                                           map->Intersection-nodes
                                           {:name "慎重" :colors [::red ::white]})
                         
                         (macros/def-nodes adaption
                                           map->Intersection-nodes
                                           {:name "適応" :colors [::red ::white]})
                         
                         (macros/def-nodes clinical
                                           map->Intersection-nodes
                                           {:name "臨床" :colors [::red ::white]})])

;; ---- Basis instances ----
(def basis [(macros/def-nodes peace
                              map->Basis
                              {:name "平和" :nodes [consideration method] :colors [::white]})
            
            (macros/def-nodes perfection
                              map->Basis
                              {:name "完全" :nodes [consideration method] :colors [::blue]})
            
            (macros/def-nodes power
                              map->Basis
                              {:name "実力" :nodes [consideration method] :colors [::black]})
            
            (macros/def-nodes freedom
                              map->Basis
                              {:name "自由" :nodes [consideration method] :colors [::red]})
            
            (macros/def-nodes acceptance
                              map->Basis
                              {:name "受容" :nodes [consideration method] :colors [::green]})])

(defn test-instances [instances]
  ;; write some expression here.
  )
