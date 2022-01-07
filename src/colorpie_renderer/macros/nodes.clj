(ns colorpie-renderer.macros.nodes)

(defmacro def-nodes
  "This is what defines symbol that is binded by value, and returns it."
  [x y z]
  `(do (def ~x (~y ~z))
       ~x))
