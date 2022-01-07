(ns colorpie-renderer.macros.nodes)

(defmacro def-nodes [x y z]
  `(do (def ~x (~y ~z))
       ~z))
