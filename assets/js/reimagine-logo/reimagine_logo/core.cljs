(ns reimagine-logo.core
  (:require [reimagine-logo.dom-helpers :as dom]))

(defn rotate-if-A [e]
  (when (= (dom/get-text e) "A")
    (dom/add-class e "letter-A")
    e))

(defn mount-logo []
  (->> "REIMAGINE"
       (map #(dom/element :div {:style "letter"} %))
       (map rotate-if-A)
       (apply dom/append (dom/get-element :logo))))

(mount-logo)
