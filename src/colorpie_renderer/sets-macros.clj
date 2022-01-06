(ns colorpie-renderer.sets-macros)

(defmacro def-sets [x y z]
  `(do (def ~x (~y ~z))
       ~z))
