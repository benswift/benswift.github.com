// Compiled by ClojureScript 1.10.516 {}
goog.provide('reimagine_logo.dom_helpers');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
/**
 * Return the element with the passed id.
 */
reimagine_logo.dom_helpers.get_element = (function reimagine_logo$dom_helpers$get_element(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Append all children to parent.
 */
reimagine_logo.dom_helpers.append = (function reimagine_logo$dom_helpers$append(var_args){
var args__4736__auto__ = [];
var len__4730__auto___782 = arguments.length;
var i__4731__auto___783 = (0);
while(true){
if((i__4731__auto___783 < len__4730__auto___782)){
args__4736__auto__.push((arguments[i__4731__auto___783]));

var G__784 = (i__4731__auto___783 + (1));
i__4731__auto___783 = G__784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reimagine_logo.dom_helpers.append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reimagine_logo.dom_helpers.append.cljs$core$IFn$_invoke$arity$variadic = (function (parent,children){
var seq__778_785 = cljs.core.seq.call(null,children);
var chunk__779_786 = null;
var count__780_787 = (0);
var i__781_788 = (0);
while(true){
if((i__781_788 < count__780_787)){
var child_789 = cljs.core._nth.call(null,chunk__779_786,i__781_788);
goog.dom.appendChild(parent,child_789);


var G__790 = seq__778_785;
var G__791 = chunk__779_786;
var G__792 = count__780_787;
var G__793 = (i__781_788 + (1));
seq__778_785 = G__790;
chunk__779_786 = G__791;
count__780_787 = G__792;
i__781_788 = G__793;
continue;
} else {
var temp__5720__auto___794 = cljs.core.seq.call(null,seq__778_785);
if(temp__5720__auto___794){
var seq__778_795__$1 = temp__5720__auto___794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__778_795__$1)){
var c__4550__auto___796 = cljs.core.chunk_first.call(null,seq__778_795__$1);
var G__797 = cljs.core.chunk_rest.call(null,seq__778_795__$1);
var G__798 = c__4550__auto___796;
var G__799 = cljs.core.count.call(null,c__4550__auto___796);
var G__800 = (0);
seq__778_785 = G__797;
chunk__779_786 = G__798;
count__780_787 = G__799;
i__781_788 = G__800;
continue;
} else {
var child_801 = cljs.core.first.call(null,seq__778_795__$1);
goog.dom.appendChild(parent,child_801);


var G__802 = cljs.core.next.call(null,seq__778_795__$1);
var G__803 = null;
var G__804 = (0);
var G__805 = (0);
seq__778_785 = G__802;
chunk__779_786 = G__803;
count__780_787 = G__804;
i__781_788 = G__805;
continue;
}
} else {
}
}
break;
}

return parent;
});

reimagine_logo.dom_helpers.append.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reimagine_logo.dom_helpers.append.cljs$lang$applyTo = (function (seq776){
var G__777 = cljs.core.first.call(null,seq776);
var seq776__$1 = cljs.core.next.call(null,seq776);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__777,seq776__$1);
});

/**
 * get the text content of element.
 */
reimagine_logo.dom_helpers.get_text = (function reimagine_logo$dom_helpers$get_text(e){
return goog.dom.getTextContent(e);
});
/**
 * Set the text content for the passed element returning the
 *   element. If a keyword is passed in the place of e, the element with
 *   that id will be used and returned.
 */
reimagine_logo.dom_helpers.set_text = (function reimagine_logo$dom_helpers$set_text(e,s){
var e__$1 = (((e instanceof cljs.core.Keyword))?reimagine_logo.dom_helpers.get_element.call(null,e):e);
var G__806 = e__$1;
goog.dom.setTextContent(G__806,s);

return G__806;
});
reimagine_logo.dom_helpers.normalize_args = (function reimagine_logo$dom_helpers$normalize_args(tag,args){
var parts = clojure.string.split.call(null,cljs.core.name.call(null,tag),/(\.|#)/);
var vec__808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,((function (parts){
return (function (p1__807_SHARP_){
if(cljs.core._EQ_.call(null,p1__807_SHARP_,".")){
return new cljs.core.Keyword(null,"class","class",-2030961996);
} else {
if(cljs.core._EQ_.call(null,p1__807_SHARP_,"#")){
return new cljs.core.Keyword(null,"id","id",-1388402092);
} else {
return p1__807_SHARP_;

}
}
});})(parts))
,cljs.core.rest.call(null,parts)))], null);
var tag__$1 = cljs.core.nth.call(null,vec__808,(0),null);
var attrs = cljs.core.nth.call(null,vec__808,(1),null);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,attrs,cljs.core.first.call(null,args)),cljs.core.rest.call(null,args)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,attrs,args], null);
}
});
/**
 * Create a dom element using a keyword for the element name and a map
 *   for the attributes. Append all children to parent. If the first
 *   child is a string then the string will be set as the text content of
 *   the parent and all remaining children will be appended.
 */
reimagine_logo.dom_helpers.element = (function reimagine_logo$dom_helpers$element(var_args){
var args__4736__auto__ = [];
var len__4730__auto___827 = arguments.length;
var i__4731__auto___828 = (0);
while(true){
if((i__4731__auto___828 < len__4730__auto___827)){
args__4736__auto__.push((arguments[i__4731__auto___828]));

var G__829 = (i__4731__auto___828 + (1));
i__4731__auto___828 = G__829;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reimagine_logo.dom_helpers.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reimagine_logo.dom_helpers.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
var vec__815 = reimagine_logo.dom_helpers.normalize_args.call(null,tag,args);
var tag__$1 = cljs.core.nth.call(null,vec__815,(0),null);
var attrs = cljs.core.nth.call(null,vec__815,(1),null);
var children = cljs.core.nth.call(null,vec__815,(2),null);
var parent = goog.dom.createDom(cljs.core.name.call(null,tag__$1),cljs.core.reduce.call(null,((function (vec__815,tag__$1,attrs,children){
return (function (o,p__821){
var vec__822 = p__821;
var k = cljs.core.nth.call(null,vec__822,(0),null);
var v = cljs.core.nth.call(null,vec__822,(1),null);
return (o[k] = v);
});})(vec__815,tag__$1,attrs,children))
,({}),cljs.core.map.call(null,((function (vec__815,tag__$1,attrs,children){
return (function (p1__811_SHARP_,p2__812_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.name.call(null,p1__811_SHARP_),p2__812_SHARP_],null));
});})(vec__815,tag__$1,attrs,children))
,cljs.core.keys.call(null,attrs),cljs.core.vals.call(null,attrs))));
var vec__818 = ((typeof cljs.core.first.call(null,children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reimagine_logo.dom_helpers.set_text.call(null,reimagine_logo.dom_helpers.element.call(null,tag__$1,attrs),cljs.core.first.call(null,children)),cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,children], null));
var parent__$1 = cljs.core.nth.call(null,vec__818,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__818,(1),null);
return cljs.core.apply.call(null,reimagine_logo.dom_helpers.append,parent__$1,children__$1);
});

reimagine_logo.dom_helpers.element.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reimagine_logo.dom_helpers.element.cljs$lang$applyTo = (function (seq813){
var G__814 = cljs.core.first.call(null,seq813);
var seq813__$1 = cljs.core.next.call(null,seq813);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__814,seq813__$1);
});

/**
 * Remove all children from the element with the passed id.
 */
reimagine_logo.dom_helpers.remove_children = (function reimagine_logo$dom_helpers$remove_children(id){
var parent = goog.dom.getElement(cljs.core.name.call(null,id));
return goog.dom.removeChildren(parent);
});
/**
 * Create a dom element from an html string.
 */
reimagine_logo.dom_helpers.html = (function reimagine_logo$dom_helpers$html(s){
return goog.dom.htmlToDocumentFragment(s);
});
reimagine_logo.dom_helpers.element_arg_QMARK_ = (function reimagine_logo$dom_helpers$element_arg_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_.call(null,x)) || (typeof x === 'string'));
});
/**
 * Build up a dom element from nested vectors.
 */
reimagine_logo.dom_helpers.build = (function reimagine_logo$dom_helpers$build(x){
if(cljs.core.vector_QMARK_.call(null,x)){
var vec__830 = (((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,reimagine_logo.dom_helpers.element,cljs.core.take_while.call(null,reimagine_logo.dom_helpers.element_arg_QMARK_,x)),cljs.core.drop_while.call(null,reimagine_logo.dom_helpers.element_arg_QMARK_,x)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x),cljs.core.rest.call(null,x)], null));
var parent = cljs.core.nth.call(null,vec__830,(0),null);
var children = cljs.core.nth.call(null,vec__830,(1),null);
var children__$1 = cljs.core.map.call(null,reimagine_logo.dom_helpers.build,children);
return cljs.core.apply.call(null,reimagine_logo.dom_helpers.append,parent,children__$1);
} else {
return x;
}
});
/**
 * Insert a child element at a specific location.
 */
reimagine_logo.dom_helpers.insert_at = (function reimagine_logo$dom_helpers$insert_at(parent,child,index){
return goog.dom.insertChildAt(parent,child,index);
});
/**
 * add class to element.
 */
reimagine_logo.dom_helpers.add_class = (function reimagine_logo$dom_helpers$add_class(e,class_name){
return goog.dom.classlist.add(e,class_name);
});
/**
 * remove class from element.
 */
reimagine_logo.dom_helpers.remove_class = (function reimagine_logo$dom_helpers$remove_class(e,class_name){
return goog.dom.classlist.add(e,class_name);
});
/**
 * does element have the given class?
 */
reimagine_logo.dom_helpers.has_class_QMARK_ = (function reimagine_logo$dom_helpers$has_class_QMARK_(e,class_name){
return goog.dom.classlist.contains(e,class_name);
});
/**
 * swap class without touching other classes.
 */
reimagine_logo.dom_helpers.swap_class = (function reimagine_logo$dom_helpers$swap_class(e,from_class,to_class){
return goog.dom.classlist.swap(e,from_class,to_class);
});
/**
 * add class if not present and vice versa.
 */
reimagine_logo.dom_helpers.toggle_class = (function reimagine_logo$dom_helpers$toggle_class(e,class_name){
return goog.dom.classlist.toggle(e,class_name);
});

//# sourceMappingURL=dom_helpers.js.map
