(ns colorpie-renderer.setmacros)

(defmacro def-sets [x y z]
  `(do (def ~x (~y ~z))
       ~z))
