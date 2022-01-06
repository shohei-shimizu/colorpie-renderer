(ns colorpie-renderer.nodemacros)

(defmacro def-nodes [x y z]
 `(do
    (def ~x (~y ~z))
    ~z))
