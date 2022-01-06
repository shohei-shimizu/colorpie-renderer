(ns colorpie-renderer.macros)
(defmacro def-nodes [x y z]
 `(do
    (def ~x (~y ~z))
    ~z))

(macroexpand-1 '(def-nodes consideration map->Nodes {:name "配慮" :colors [::white] :interrogative ::who}))
