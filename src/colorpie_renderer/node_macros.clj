(ns colorpie-renderer.macros)
(defmacro def-nodes [x y z]
 `(do
    (def ~x (~y ~z))
    ~z))
