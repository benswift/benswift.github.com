// Compiled by ClojureScript 1.10.516 {}
goog.provide('reimagine_logo.core');
goog.require('cljs.core');
goog.require('reimagine_logo.dom_helpers');
reimagine_logo.core.rotate_if_A = (function reimagine_logo$core$rotate_if_A(e){
if(cljs.core._EQ_.call(null,reimagine_logo.dom_helpers.get_text.call(null,e),"A")){
reimagine_logo.dom_helpers.add_class.call(null,e,"letter-A");

return e;
} else {
return null;
}
});
reimagine_logo.core.mount_logo = (function reimagine_logo$core$mount_logo(){
return cljs.core.apply.call(null,reimagine_logo.dom_helpers.append,reimagine_logo.dom_helpers.get_element.call(null,new cljs.core.Keyword(null,"logo","logo",1237980263)),cljs.core.map.call(null,reimagine_logo.core.rotate_if_A,cljs.core.map.call(null,(function (p1__835_SHARP_){
return reimagine_logo.dom_helpers.element.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"letter"], null),p1__835_SHARP_);
}),"REIMAGINE")));
});
reimagine_logo.core.mount_logo.call(null);

//# sourceMappingURL=core.js.map
