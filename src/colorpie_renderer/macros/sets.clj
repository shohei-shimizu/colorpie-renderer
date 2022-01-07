(ns colorpie-renderer.macros.sets)

(defmacro def-sets
  "This is what defines symbol that is binded by value, and returns it."
  [x y z]
  `(do (def ~x (~y ~z))
       ~x))
