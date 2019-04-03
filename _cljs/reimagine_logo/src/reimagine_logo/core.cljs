(ns reimagine-logo.core
  (:require [reagent.core :as r]
            [goog.dom.fullscreen :refer [requestFullScreen]]))

(defn random-classes []
  (->> ["big" "small" "heavy" "light" "cw90" "cc90" "cw180" "cc180" "cw270" "cc270"]
       shuffle
       (take (rand-int 3))))

(defn letter-component [letter]
  ^{:key letter}
  [:div
   {:class (into ["letter" (when (= letter "A") "letter-A")]
                 (random-classes))}
   letter])

(defn logo-component []
  (into
   [:div {:id "logo"}]
   (map letter-component "REIMAGINE")))

(defn toggle-fullscreen []
  (requestFullScreen (js/document.getElementById "backdrop")))

(defn mount []
  (r/render [logo-component]
            (js/document.getElementById "logo-container")))

(defn main []
  (mount)
  (js/setInterval #(mount) 10000)
  (js/document.addEventListener "keydown"
                                #(when (= (.-code %) "KeyF")
                                   (toggle-fullscreen))))

(main)