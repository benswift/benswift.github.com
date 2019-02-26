goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../reimagine_logo/dom_helpers.js", ['reimagine_logo.dom_helpers'], ['goog.dom', 'goog.dom.classlist', 'cljs.core', 'clojure.string']);
goog.addDependency("../reimagine_logo/core.js", ['reimagine_logo.core'], ['cljs.core', 'reimagine_logo.dom_helpers']);
