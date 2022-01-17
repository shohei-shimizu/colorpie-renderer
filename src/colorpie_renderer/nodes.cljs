(ns colorpie-renderer.nodes
  (:require-macros [colorpie-renderer.macros.nodes :as macros]))

;; Basis are union for Nodes. It is standard 5 elements which is base for 10 nodes.
(defrecord Basis [name nodes colors])

(defrecord Nodes [name colors interrogatives])

;; Intersection-nodes are composition for double Nodes.
(defrecord Intersection-nodes [name colors interrogatives])

;; ---- Nodes instances ----
;; Define each 10 nodes about name, colors, and coordinate.
(declare consideration method reason becoming exploitment self-interest casualness frankness inherency harmony)

(def nodes
  [(macros/def-nodes consideration
     map->Nodes {:name {:jp "配慮" :en "consideration"} :colors [::white] :interrogatives [::who]})

   (macros/def-nodes method
     map->Nodes {:name {:jp "定石" :en "method"} :colors [::white] :interrogatives [::how]})

   (macros/def-nodes reason
     map->Nodes {:name {:jp "理性" :en "reason"} :colors [::blue] :interrogatives [::when]})

   (macros/def-nodes becoming
     map->Nodes {:name {:jp "実現" :en "becoming"} :colors [::blue] :interrogatives [::what]})

   (macros/def-nodes exploitment
     map->Nodes {:name {:jp "利用" :en "exploitment"} :colors [::black] :interrogatives [::where]})

   (macros/def-nodes self-interest
     map->Nodes {:name {:jp "独尊" :en "self-interest"} :colors [::black] :interrogatives [::who]})

   (macros/def-nodes casualness
     map->Nodes {:name {:jp "即興" :en "casualness"} :colors [::red] :interrogatives [::how]})

   (macros/def-nodes frankness
     map->Nodes {:name {:jp "率直" :en "frankness"} :colors [::red] :interrogatives [::when]})

   (macros/def-nodes inherency
     map->Nodes {:name {:jp "生得" :en "inherency"} :colors [::green] :interrogatives [::what]})

   (macros/def-nodes harmony
     map->Nodes {:name {:jp "調和" :en "harmony"} :colors [::green] :interrogatives [::where]})])

;; ---- Intersection-nodes instances ----
(declare construction recommendation conference training manipulation desire calculation reformation unfetteredness craving
         challenge delight feelings emergence throbbing emphathize affection healthness dedication derivation
         efficiency credit supply expediency ingenuity inspiration experiment inquiry sturdiness territory
         overwhelming preservation first-aid occasion bravery swift observation formation prudence adaption)

(def intersection-nodes
  [(macros/def-nodes construction
     map->Intersection-nodes {:name {:jp "設計" :en "construction"} :colors [::white ::blue] :interrogatives [::how ::when]})

   (macros/def-nodes recommendation
     map->Intersection-nodes {:name {:jp "奨励" :en "recoomendation"} :colors [::white ::blue] :interrogatives [::who ::what]})

   (macros/def-nodes conference
     map->Intersection-nodes {:name {:jp "協議" :en "conference"} :colors [::white ::blue] :interrogatives [::who ::when]})

   (macros/def-nodes training
     map->Intersection-nodes {:name {:jp "訓練" :en "training"} :colors [::white ::blue] :interrogatives [::how ::what]})

   (macros/def-nodes manipulation
     map->Intersection-nodes {:name {:jp "操作" :en "manipulation"} :colors [::blue ::black] :interrogatives [::what ::where]})

   (macros/def-nodes desire
     map->Intersection-nodes {:name {:jp "志望" :en "desire"} :colors [::blue ::black] :interrogatives [::when ::who]})

   (macros/def-nodes calculation
     map->Intersection-nodes {:name {:jp "計算" :en "calculation"} :colors [::blue ::black] :interrogatives [::when ::where]})

   (macros/def-nodes reformation
     map->Intersection-nodes {:name {:jp "改変" :en "reformation"} :colors [::blue ::black] :interrogatives [::what ::who]})

   ;; In here, "不羈" does not apear illustration. It's in just documentation.
   ;; It is "放縦" in illustration.
   (macros/def-nodes unfetteredness
     map->Intersection-nodes {:name {:jp "不羈" :en "unfetteredness"} :colors [::black ::red] :interrogatives [::who ::how]})

   (macros/def-nodes craving
     map->Intersection-nodes {:name {:jp "渇望" :en "craving"} :colors [::black ::red] :interrogatives [::where ::when]})

   (macros/def-nodes challenge
     map->Intersection-nodes {:name {:jp "挑戦" :en "challenge"} :colors [::black ::red] :interrogatives [::where ::how]})

   (macros/def-nodes delight
     map->Intersection-nodes {:name {:jp "愉悦" :en "delight"} :colors [::black ::red] :interrogatives [::who ::when]})

   ;; This is "感触" in illustration.
   (macros/def-nodes feelings
     map->Intersection-nodes {:name {:jp "随感" :en "feelings"} :colors [::red ::green] :interrogatives [::when ::what]})

   (macros/def-nodes emergence
     map->Intersection-nodes {:name {:jp "創発" :en "emergence"} :colors [::red ::green] :interrogatives [::how ::where]})

   (macros/def-nodes throbbing
     map->Intersection-nodes {:name {:jp "躍動" :en "throbbing"} :colors [::red ::green] :interrogatives [::how ::what]})

   ;; This is "共感" in illustration.
   (macros/def-nodes emphathize
     map->Intersection-nodes {:name {:jp "震撼" :en "emphathize"} :colors [::red ::green] :interrogatives [::when ::where]})

   (macros/def-nodes affection
     map->Intersection-nodes {:name {:jp "親愛" :en "affection"} :colors [::green ::white] :interrogatives [::where ::who]})

   (macros/def-nodes healthness
     map->Intersection-nodes {:name {:jp "健康" :en "healthness"} :colors [::green ::white] :interrogatives [::what ::how]})

   ;; This is "親身" in illustration.
   (macros/def-nodes dedication
     map->Intersection-nodes {:name {:jp "献身" :en "dedication"} :colors [::green ::white] :interrogatives [::what ::who]})

   (macros/def-nodes derivation
     map->Intersection-nodes {:name {:jp "由緒" :en "derivation"} :colors [::green ::white] :interrogatives [::where :how]})

   (macros/def-nodes efficiency
     map->Intersection-nodes {:name {:jp "効率" :en "efficiency"} :colors [::white ::black] :interrogatives [::how ::where]})

   (macros/def-nodes credit
     map->Intersection-nodes {:name {:jp "信用" :en "credit"} :colors [::white ::black] :interrogatives [::who ::who]})

   (macros/def-nodes supply
     map->Intersection-nodes {:name {:jp "調達" :en "supply"} :colors [::white ::black] :interrogatives [::who ::where]})

   (macros/def-nodes expediency
     map->Intersection-nodes {:name {:jp "方便" :en "expediency"} :colors [::white ::black] :interrogatives [::how ::who]})

   ;; This is "工夫" in illustartion.
   (macros/def-nodes ingenuity
     map->Intersection-nodes {:name {:jp "創意" :en "ingenuity"} :colors [::blue ::red] :interrogatives [::what ::how]})

   (macros/def-nodes inspiration
     map->Intersection-nodes {:name {:jp "着想" :en "inspiration"} :colors [::blue ::red] :interrogatives [::when ::when]})

   ;; This is "試行" in illustration.
   (macros/def-nodes experiment
     map->Intersection-nodes {:name {:jp "実験" :en "experiment"} :colors [::blue ::red] :interrogatives [::when ::how]})

   (macros/def-nodes inquiry
     map->Intersection-nodes {:name {:jp "追求" :en "inquiry"} :colors [::blue ::red] :interrogatives [::what ::when]})

   (macros/def-nodes sturdiness
     map->Intersection-nodes {:name {:jp "強健" :en "sturdiness"} :colors [::black ::green] :interrogatives [::who ::what]})

   (macros/def-nodes territory
     map->Intersection-nodes {:name {:jp "縄張" :en "territory"} :colors [::black ::green] :interrogatives [::where ::where]})

   (macros/def-nodes overwhelming
     map->Intersection-nodes {:name {:jp "圧倒" :en "overwhelming"} :colors [::black ::green] :interrogatives [::where ::what]})

   (macros/def-nodes preservation
     map->Intersection-nodes {:name {:jp "温存" :en "preservation"} :colors [::black ::green] :interrogatives [::who ::where]})

   (macros/def-nodes first-aid
     map->Intersection-nodes {:name {:jp "救急" :en "first-aid"} :colors [::red ::white] :interrogatives [::when ::who]})

   ;; This variable name might be changed, because occasion may be not very match "臨機".
   ;; This is "機略" in illustration.
   (macros/def-nodes occasion
     map->Intersection-nodes {:name {:jp "臨機" :en "occasion"} :colors [::red ::white] :interrogatives [::how ::how]})

   (macros/def-nodes bravery
     map->Intersection-nodes {:name {:jp "義勇" :en "bravery"} :colors [::red ::white] :interrogatives [::how ::who]})

   (macros/def-nodes swift
     map->Intersection-nodes {:name {:jp "機敏" :en "swift"} :colors [::red ::white] :interrogatives [::when ::how]})

   (macros/def-nodes observation
     map->Intersection-nodes {:name {:jp "観察" :en "observation"} :colors [::green ::blue] :interrogatives [::where ::when]})

   (macros/def-nodes formation
     map->Intersection-nodes {:name {:jp "形成" :en "formation"} :colors [::green ::blue] :interrogatives [::what ::what]})

   (macros/def-nodes prudence
     map->Intersection-nodes {:name {:jp "慎重" :en "prudence"} :colors [::green ::blue] :interrogatives [::what ::when]})

   (macros/def-nodes adaption
     map->Intersection-nodes {:name {:jp "適応" :en "adaption"} :colors [::green ::blue] :interrogatives [::where ::what]})])

;; ---- Basis instances ----
(declare peace perfection power freedom acceptance)
(def basis
  [(macros/def-nodes peace
     map->Basis {:name {:jp "平和" :en "peace"} :nodes [consideration method] :colors [::white]})

   (macros/def-nodes perfection
     map->Basis {:name {:jp "完全" :en "perfection"} :nodes [consideration method] :colors [::blue]})

   (macros/def-nodes power
     map->Basis {:name {:jp "実力" :en "power"} :nodes [consideration method] :colors [::black]})

   (macros/def-nodes freedom
     map->Basis {:name {:jp "自由" :en "freedom"} :nodes [consideration method] :colors [::red]})

   (macros/def-nodes acceptance
     map->Basis {:name {:jp "受容" :en "acceptance"} :nodes [consideration method] :colors [::green]})])


;; ---- Test codes ----
(let [f (fn [str coll]
          (println str)
          (doseq [x coll] (println x)))
      a ["basis: " basis]
      b ["nodes: " nodes]
      c ["intersection-nodes: " intersection-nodes]]

  (defn test-instances
    "This is what prints instances such as basis, nodes, and intersection-nodes.
  To use, send argument that is mode-keyword, for instance, :basis :nodes :inter-section-nodes"
    ([]
     (f (first a) (fnext a))
     (f (first b) (fnext b))
     (f (first c) (fnext c)))

    ([mode]
     (case mode
       :basis              (f (first a) (fnext a))
       :nodes              (f (first b) (fnext b))
       :intersection-nodes (f (first c) (fnext c))
       (do (f (first a) (fnext a))
           (f (first b) (fnext b))
           (f (first c) (fnext c)))))))

(let [f (fn [k c] (map #(k %) c))]

  (defn test-fields
    "This is what prints some datas in pretty format."
    ([key coll]
     (doseq [x (f key coll)] (println x)))))
