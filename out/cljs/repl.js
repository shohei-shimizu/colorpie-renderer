// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__8300){
var map__8301 = p__8300;
var map__8301__$1 = (((((!((map__8301 == null))))?(((((map__8301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8301):map__8301);
var m = map__8301__$1;
var n = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8303_8335 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8304_8336 = null;
var count__8305_8337 = (0);
var i__8306_8338 = (0);
while(true){
if((i__8306_8338 < count__8305_8337)){
var f_8339 = cljs.core._nth.call(null,chunk__8304_8336,i__8306_8338);
cljs.core.println.call(null,"  ",f_8339);


var G__8340 = seq__8303_8335;
var G__8341 = chunk__8304_8336;
var G__8342 = count__8305_8337;
var G__8343 = (i__8306_8338 + (1));
seq__8303_8335 = G__8340;
chunk__8304_8336 = G__8341;
count__8305_8337 = G__8342;
i__8306_8338 = G__8343;
continue;
} else {
var temp__5753__auto___8344 = cljs.core.seq.call(null,seq__8303_8335);
if(temp__5753__auto___8344){
var seq__8303_8345__$1 = temp__5753__auto___8344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8303_8345__$1)){
var c__4556__auto___8346 = cljs.core.chunk_first.call(null,seq__8303_8345__$1);
var G__8347 = cljs.core.chunk_rest.call(null,seq__8303_8345__$1);
var G__8348 = c__4556__auto___8346;
var G__8349 = cljs.core.count.call(null,c__4556__auto___8346);
var G__8350 = (0);
seq__8303_8335 = G__8347;
chunk__8304_8336 = G__8348;
count__8305_8337 = G__8349;
i__8306_8338 = G__8350;
continue;
} else {
var f_8351 = cljs.core.first.call(null,seq__8303_8345__$1);
cljs.core.println.call(null,"  ",f_8351);


var G__8352 = cljs.core.next.call(null,seq__8303_8345__$1);
var G__8353 = null;
var G__8354 = (0);
var G__8355 = (0);
seq__8303_8335 = G__8352;
chunk__8304_8336 = G__8353;
count__8305_8337 = G__8354;
i__8306_8338 = G__8355;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8356 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8356);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8356)))?cljs.core.second.call(null,arglists_8356):arglists_8356));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8307_8357 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8308_8358 = null;
var count__8309_8359 = (0);
var i__8310_8360 = (0);
while(true){
if((i__8310_8360 < count__8309_8359)){
var vec__8321_8361 = cljs.core._nth.call(null,chunk__8308_8358,i__8310_8360);
var name_8362 = cljs.core.nth.call(null,vec__8321_8361,(0),null);
var map__8324_8363 = cljs.core.nth.call(null,vec__8321_8361,(1),null);
var map__8324_8364__$1 = (((((!((map__8324_8363 == null))))?(((((map__8324_8363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8324_8363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8324_8363):map__8324_8363);
var doc_8365 = cljs.core.get.call(null,map__8324_8364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8366 = cljs.core.get.call(null,map__8324_8364__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8362);

cljs.core.println.call(null," ",arglists_8366);

if(cljs.core.truth_(doc_8365)){
cljs.core.println.call(null," ",doc_8365);
} else {
}


var G__8367 = seq__8307_8357;
var G__8368 = chunk__8308_8358;
var G__8369 = count__8309_8359;
var G__8370 = (i__8310_8360 + (1));
seq__8307_8357 = G__8367;
chunk__8308_8358 = G__8368;
count__8309_8359 = G__8369;
i__8310_8360 = G__8370;
continue;
} else {
var temp__5753__auto___8371 = cljs.core.seq.call(null,seq__8307_8357);
if(temp__5753__auto___8371){
var seq__8307_8372__$1 = temp__5753__auto___8371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8307_8372__$1)){
var c__4556__auto___8373 = cljs.core.chunk_first.call(null,seq__8307_8372__$1);
var G__8374 = cljs.core.chunk_rest.call(null,seq__8307_8372__$1);
var G__8375 = c__4556__auto___8373;
var G__8376 = cljs.core.count.call(null,c__4556__auto___8373);
var G__8377 = (0);
seq__8307_8357 = G__8374;
chunk__8308_8358 = G__8375;
count__8309_8359 = G__8376;
i__8310_8360 = G__8377;
continue;
} else {
var vec__8326_8378 = cljs.core.first.call(null,seq__8307_8372__$1);
var name_8379 = cljs.core.nth.call(null,vec__8326_8378,(0),null);
var map__8329_8380 = cljs.core.nth.call(null,vec__8326_8378,(1),null);
var map__8329_8381__$1 = (((((!((map__8329_8380 == null))))?(((((map__8329_8380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8329_8380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8329_8380):map__8329_8380);
var doc_8382 = cljs.core.get.call(null,map__8329_8381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8383 = cljs.core.get.call(null,map__8329_8381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8379);

cljs.core.println.call(null," ",arglists_8383);

if(cljs.core.truth_(doc_8382)){
cljs.core.println.call(null," ",doc_8382);
} else {
}


var G__8384 = cljs.core.next.call(null,seq__8307_8372__$1);
var G__8385 = null;
var G__8386 = (0);
var G__8387 = (0);
seq__8307_8357 = G__8384;
chunk__8308_8358 = G__8385;
count__8309_8359 = G__8386;
i__8310_8360 = G__8387;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__8331 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__8332 = null;
var count__8333 = (0);
var i__8334 = (0);
while(true){
if((i__8334 < count__8333)){
var role = cljs.core._nth.call(null,chunk__8332,i__8334);
var temp__5753__auto___8388__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___8388__$1)){
var spec_8389 = temp__5753__auto___8388__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8389));
} else {
}


var G__8390 = seq__8331;
var G__8391 = chunk__8332;
var G__8392 = count__8333;
var G__8393 = (i__8334 + (1));
seq__8331 = G__8390;
chunk__8332 = G__8391;
count__8333 = G__8392;
i__8334 = G__8393;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__8331);
if(temp__5753__auto____$1){
var seq__8331__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8331__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__8331__$1);
var G__8394 = cljs.core.chunk_rest.call(null,seq__8331__$1);
var G__8395 = c__4556__auto__;
var G__8396 = cljs.core.count.call(null,c__4556__auto__);
var G__8397 = (0);
seq__8331 = G__8394;
chunk__8332 = G__8395;
count__8333 = G__8396;
i__8334 = G__8397;
continue;
} else {
var role = cljs.core.first.call(null,seq__8331__$1);
var temp__5753__auto___8398__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___8398__$2)){
var spec_8399 = temp__5753__auto___8398__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8399));
} else {
}


var G__8400 = cljs.core.next.call(null,seq__8331__$1);
var G__8401 = null;
var G__8402 = (0);
var G__8403 = (0);
seq__8331 = G__8400;
chunk__8332 = G__8401;
count__8333 = G__8402;
i__8334 = G__8403;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__8404 = cljs.core.conj.call(null,via,t);
var G__8405 = cljs.core.ex_cause.call(null,t);
via = G__8404;
t = G__8405;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__8408 = datafied_throwable;
var map__8408__$1 = (((((!((map__8408 == null))))?(((((map__8408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8408):map__8408);
var via = cljs.core.get.call(null,map__8408__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__8408__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__8408__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__8409 = cljs.core.last.call(null,via);
var map__8409__$1 = (((((!((map__8409 == null))))?(((((map__8409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8409):map__8409);
var type = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__8410 = data;
var map__8410__$1 = (((((!((map__8410 == null))))?(((((map__8410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8410):map__8410);
var problems = cljs.core.get.call(null,map__8410__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__8410__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__8410__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__8411 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__8411__$1 = (((((!((map__8411 == null))))?(((((map__8411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8411):map__8411);
var top_data = map__8411__$1;
var source = cljs.core.get.call(null,map__8411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__8416 = phase;
var G__8416__$1 = (((G__8416 instanceof cljs.core.Keyword))?G__8416.fqn:null);
switch (G__8416__$1) {
case "read-source":
var map__8417 = data;
var map__8417__$1 = (((((!((map__8417 == null))))?(((((map__8417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8417):map__8417);
var line = cljs.core.get.call(null,map__8417__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__8417__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__8419 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__8419__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__8419,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__8419);
var G__8419__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__8419__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__8419__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__8419__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__8419__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__8420 = top_data;
var G__8420__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__8420,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__8420);
var G__8420__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__8420__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__8420__$1);
var G__8420__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__8420__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__8420__$2);
var G__8420__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__8420__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__8420__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__8420__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__8420__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__8421 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__8421,(0),null);
var method = cljs.core.nth.call(null,vec__8421,(1),null);
var file = cljs.core.nth.call(null,vec__8421,(2),null);
var line = cljs.core.nth.call(null,vec__8421,(3),null);
var G__8424 = top_data;
var G__8424__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__8424,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__8424);
var G__8424__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__8424__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__8424__$1);
var G__8424__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__8424__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__8424__$2);
var G__8424__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__8424__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__8424__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__8424__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__8424__$4;
}

break;
case "execution":
var vec__8425 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__8425,(0),null);
var method = cljs.core.nth.call(null,vec__8425,(1),null);
var file = cljs.core.nth.call(null,vec__8425,(2),null);
var line = cljs.core.nth.call(null,vec__8425,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__8407_SHARP_){
var or__4126__auto__ = (p1__8407_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__8407_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__8428 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__8428__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__8428,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__8428);
var G__8428__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__8428__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__8428__$1);
var G__8428__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__8428__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__8428__$2);
var G__8428__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__8428__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__8428__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__8428__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__8428__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8416__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__8432){
var map__8433 = p__8432;
var map__8433__$1 = (((((!((map__8433 == null))))?(((((map__8433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8433):map__8433);
var triage_data = map__8433__$1;
var phase = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__8433__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__8435 = phase;
var G__8435__$1 = (((G__8435 instanceof cljs.core.Keyword))?G__8435.fqn:null);
switch (G__8435__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8436_8445 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8437_8446 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8438_8447 = true;
var _STAR_print_fn_STAR__temp_val__8439_8448 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8438_8447);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8439_8448);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__8430_SHARP_){
return cljs.core.dissoc.call(null,p1__8430_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8437_8446);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8436_8445);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8440_8449 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8441_8450 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8442_8451 = true;
var _STAR_print_fn_STAR__temp_val__8443_8452 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8442_8451);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8443_8452);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__8431_SHARP_){
return cljs.core.dissoc.call(null,p1__8431_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8441_8450);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8440_8449);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8435__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
