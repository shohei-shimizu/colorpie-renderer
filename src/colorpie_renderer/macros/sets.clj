(ns colorpie-renderer.macros.sets)

(defmacro def-sets [x y z]
  `(do (def ~x (~y ~z))
       ~z))
