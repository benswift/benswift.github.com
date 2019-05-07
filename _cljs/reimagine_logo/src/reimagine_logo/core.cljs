(ns reimagine-logo.core
  (:require [reimagine-logo.tween :refer [ease-in-out transition-elastic]]
            [reagent.core :as r]
            [goog.string :as gstring]
            [goog.string.format]
            [goog.dom.fullscreen :refer [requestFullScreen]]))

;; all times in seconds
(defonce animation-params
  {:fps 60
   :delay-factor 4
   :min-duration 10
   :max-duration 60})

(defn rand-attribute-val [attribute]
  (let [[min max]
        (case attribute
          :angle [-1800 1800]
          :size [5 25]
          :weight [100 900])]
    (+ min (rand (- max min)))))

(defn value->css [attribute value]
  (case attribute
    :angle {:transform (gstring/format "rotate(%.2fdeg)" value)}
    :size {:font-size (gstring/format "%.2fvmin" value)}
    ;; should be :font-weight for browsers which can't handle the variable fonts
    :weight {:font-variation-settings (gstring/format "'wght' %.2f" value)}))

(defn easing-fn [step {:keys [initial final num-steps]}]
  (->> (/ step num-steps)
       (ease-in-out transition-elastic)
       (* (- final initial))
       (+ initial)))

(defn animation-state-new []
  (into {:step 0}
        (map (juxt identity (fn [attr]
                              {:initial (rand-attribute-val attr)
                               :final (rand-attribute-val attr)
                               :num-steps
                               (let [{:keys [fps min-duration max-duration]} animation-params]
                                 (* fps (+ min-duration (rand-int (* fps (- max-duration min-duration))))))}))
             [:angle :size :weight])))

(defn trigger-shuffle? [state]
  "is the current step more than double the max number of steps?"
  (> (* (:delay-factor animation-params) (:step state))
     (apply max (map #(get-in state [% :num-steps])
                     [:angle :size :weight]))))

(defn animation-state-shuffle [old-state]
  ;; return a new state, but with the :initial values taken from the :final
  ;; values from the old state
  (reduce (fn [coll [attr attr-map]]
            (conj (if (= attr :step)
                    {:step 0}
                    {attr (assoc attr-map :initial (get-in old-state [attr :final]))})
                  coll))
          {}
          (animation-state-new)))

(defn letter-component [letter]
  (let [animation-state (r/atom (animation-state-new))]
    (fn []
      (when (trigger-shuffle? @animation-state)
        (swap! animation-state animation-state-shuffle))
      ;; schedule next "step" animation frame
      (js/setTimeout
       #(swap! animation-state update :step inc)
       (/ 1000 (:fps animation-params)))
      ^{:key letter}
      [:div.letter
       {:style
        (into {}
              (map (fn [[attr anim-params]]
                     (value->css attr (easing-fn (:step @animation-state) anim-params)))
                   (dissoc @animation-state :step)))}
       letter])))

(defn logo-component []
  (let [letters "REIMAGINE"]
    (fn []
      (into
       [:div {:id "logo"}]
       (for [letter-data letters]
         [letter-component letter-data])))))

(defn toggle-fullscreen []
  (requestFullScreen (js/document.getElementById "backdrop")))

(defn mount []
  (r/render [logo-component]
            (js/document.getElementById "logo-container")))

(defn main []
  (mount)
  (js/document.addEventListener "keydown"
                                #(when (= (.-code %) "KeyF")
                                   (toggle-fullscreen))))

(main)
