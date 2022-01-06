// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16012){
var map__16013 = p__16012;
var map__16013__$1 = (((((!((map__16013 == null))))?(((((map__16013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16013):map__16013);
var m = map__16013__$1;
var n = cljs.core.get.call(null,map__16013__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16013__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16015_16047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16016_16048 = null;
var count__16017_16049 = (0);
var i__16018_16050 = (0);
while(true){
if((i__16018_16050 < count__16017_16049)){
var f_16051 = cljs.core._nth.call(null,chunk__16016_16048,i__16018_16050);
cljs.core.println.call(null,"  ",f_16051);


var G__16052 = seq__16015_16047;
var G__16053 = chunk__16016_16048;
var G__16054 = count__16017_16049;
var G__16055 = (i__16018_16050 + (1));
seq__16015_16047 = G__16052;
chunk__16016_16048 = G__16053;
count__16017_16049 = G__16054;
i__16018_16050 = G__16055;
continue;
} else {
var temp__5753__auto___16056 = cljs.core.seq.call(null,seq__16015_16047);
if(temp__5753__auto___16056){
var seq__16015_16057__$1 = temp__5753__auto___16056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16015_16057__$1)){
var c__4556__auto___16058 = cljs.core.chunk_first.call(null,seq__16015_16057__$1);
var G__16059 = cljs.core.chunk_rest.call(null,seq__16015_16057__$1);
var G__16060 = c__4556__auto___16058;
var G__16061 = cljs.core.count.call(null,c__4556__auto___16058);
var G__16062 = (0);
seq__16015_16047 = G__16059;
chunk__16016_16048 = G__16060;
count__16017_16049 = G__16061;
i__16018_16050 = G__16062;
continue;
} else {
var f_16063 = cljs.core.first.call(null,seq__16015_16057__$1);
cljs.core.println.call(null,"  ",f_16063);


var G__16064 = cljs.core.next.call(null,seq__16015_16057__$1);
var G__16065 = null;
var G__16066 = (0);
var G__16067 = (0);
seq__16015_16047 = G__16064;
chunk__16016_16048 = G__16065;
count__16017_16049 = G__16066;
i__16018_16050 = G__16067;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16068 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16068);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16068)))?cljs.core.second.call(null,arglists_16068):arglists_16068));
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
var seq__16019_16069 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16020_16070 = null;
var count__16021_16071 = (0);
var i__16022_16072 = (0);
while(true){
if((i__16022_16072 < count__16021_16071)){
var vec__16033_16073 = cljs.core._nth.call(null,chunk__16020_16070,i__16022_16072);
var name_16074 = cljs.core.nth.call(null,vec__16033_16073,(0),null);
var map__16036_16075 = cljs.core.nth.call(null,vec__16033_16073,(1),null);
var map__16036_16076__$1 = (((((!((map__16036_16075 == null))))?(((((map__16036_16075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16036_16075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16036_16075):map__16036_16075);
var doc_16077 = cljs.core.get.call(null,map__16036_16076__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16078 = cljs.core.get.call(null,map__16036_16076__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16074);

cljs.core.println.call(null," ",arglists_16078);

if(cljs.core.truth_(doc_16077)){
cljs.core.println.call(null," ",doc_16077);
} else {
}


var G__16079 = seq__16019_16069;
var G__16080 = chunk__16020_16070;
var G__16081 = count__16021_16071;
var G__16082 = (i__16022_16072 + (1));
seq__16019_16069 = G__16079;
chunk__16020_16070 = G__16080;
count__16021_16071 = G__16081;
i__16022_16072 = G__16082;
continue;
} else {
var temp__5753__auto___16083 = cljs.core.seq.call(null,seq__16019_16069);
if(temp__5753__auto___16083){
var seq__16019_16084__$1 = temp__5753__auto___16083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16019_16084__$1)){
var c__4556__auto___16085 = cljs.core.chunk_first.call(null,seq__16019_16084__$1);
var G__16086 = cljs.core.chunk_rest.call(null,seq__16019_16084__$1);
var G__16087 = c__4556__auto___16085;
var G__16088 = cljs.core.count.call(null,c__4556__auto___16085);
var G__16089 = (0);
seq__16019_16069 = G__16086;
chunk__16020_16070 = G__16087;
count__16021_16071 = G__16088;
i__16022_16072 = G__16089;
continue;
} else {
var vec__16038_16090 = cljs.core.first.call(null,seq__16019_16084__$1);
var name_16091 = cljs.core.nth.call(null,vec__16038_16090,(0),null);
var map__16041_16092 = cljs.core.nth.call(null,vec__16038_16090,(1),null);
var map__16041_16093__$1 = (((((!((map__16041_16092 == null))))?(((((map__16041_16092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16041_16092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16041_16092):map__16041_16092);
var doc_16094 = cljs.core.get.call(null,map__16041_16093__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16095 = cljs.core.get.call(null,map__16041_16093__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16091);

cljs.core.println.call(null," ",arglists_16095);

if(cljs.core.truth_(doc_16094)){
cljs.core.println.call(null," ",doc_16094);
} else {
}


var G__16096 = cljs.core.next.call(null,seq__16019_16084__$1);
var G__16097 = null;
var G__16098 = (0);
var G__16099 = (0);
seq__16019_16069 = G__16096;
chunk__16020_16070 = G__16097;
count__16021_16071 = G__16098;
i__16022_16072 = G__16099;
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

var seq__16043 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16044 = null;
var count__16045 = (0);
var i__16046 = (0);
while(true){
if((i__16046 < count__16045)){
var role = cljs.core._nth.call(null,chunk__16044,i__16046);
var temp__5753__auto___16100__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___16100__$1)){
var spec_16101 = temp__5753__auto___16100__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16101));
} else {
}


var G__16102 = seq__16043;
var G__16103 = chunk__16044;
var G__16104 = count__16045;
var G__16105 = (i__16046 + (1));
seq__16043 = G__16102;
chunk__16044 = G__16103;
count__16045 = G__16104;
i__16046 = G__16105;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__16043);
if(temp__5753__auto____$1){
var seq__16043__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16043__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16043__$1);
var G__16106 = cljs.core.chunk_rest.call(null,seq__16043__$1);
var G__16107 = c__4556__auto__;
var G__16108 = cljs.core.count.call(null,c__4556__auto__);
var G__16109 = (0);
seq__16043 = G__16106;
chunk__16044 = G__16107;
count__16045 = G__16108;
i__16046 = G__16109;
continue;
} else {
var role = cljs.core.first.call(null,seq__16043__$1);
var temp__5753__auto___16110__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___16110__$2)){
var spec_16111 = temp__5753__auto___16110__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16111));
} else {
}


var G__16112 = cljs.core.next.call(null,seq__16043__$1);
var G__16113 = null;
var G__16114 = (0);
var G__16115 = (0);
seq__16043 = G__16112;
chunk__16044 = G__16113;
count__16045 = G__16114;
i__16046 = G__16115;
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
var G__16116 = cljs.core.conj.call(null,via,t);
var G__16117 = cljs.core.ex_cause.call(null,t);
via = G__16116;
t = G__16117;
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
var map__16120 = datafied_throwable;
var map__16120__$1 = (((((!((map__16120 == null))))?(((((map__16120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16120):map__16120);
var via = cljs.core.get.call(null,map__16120__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16120__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16120__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16121 = cljs.core.last.call(null,via);
var map__16121__$1 = (((((!((map__16121 == null))))?(((((map__16121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16121):map__16121);
var type = cljs.core.get.call(null,map__16121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16121__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16121__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16122 = data;
var map__16122__$1 = (((((!((map__16122 == null))))?(((((map__16122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16122):map__16122);
var problems = cljs.core.get.call(null,map__16122__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16122__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16122__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16123 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16123__$1 = (((((!((map__16123 == null))))?(((((map__16123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16123):map__16123);
var top_data = map__16123__$1;
var source = cljs.core.get.call(null,map__16123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16128 = phase;
var G__16128__$1 = (((G__16128 instanceof cljs.core.Keyword))?G__16128.fqn:null);
switch (G__16128__$1) {
case "read-source":
var map__16129 = data;
var map__16129__$1 = (((((!((map__16129 == null))))?(((((map__16129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16129):map__16129);
var line = cljs.core.get.call(null,map__16129__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16129__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16131 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16131__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16131,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16131);
var G__16131__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16131__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16131__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16131__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16132 = top_data;
var G__16132__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16132,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16132);
var G__16132__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16132__$1);
var G__16132__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16132__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16132__$2);
var G__16132__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16132__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16132__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16132__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16132__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16133 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16133,(0),null);
var method = cljs.core.nth.call(null,vec__16133,(1),null);
var file = cljs.core.nth.call(null,vec__16133,(2),null);
var line = cljs.core.nth.call(null,vec__16133,(3),null);
var G__16136 = top_data;
var G__16136__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16136,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16136);
var G__16136__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16136__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16136__$1);
var G__16136__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__16136__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16136__$2);
var G__16136__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16136__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16136__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16136__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16136__$4;
}

break;
case "execution":
var vec__16137 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16137,(0),null);
var method = cljs.core.nth.call(null,vec__16137,(1),null);
var file = cljs.core.nth.call(null,vec__16137,(2),null);
var line = cljs.core.nth.call(null,vec__16137,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__16119_SHARP_){
var or__4126__auto__ = (p1__16119_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16119_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__16140 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16140__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16140,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16140);
var G__16140__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16140__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16140__$1);
var G__16140__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__16140__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16140__$2);
var G__16140__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16140__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16140__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16140__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16140__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16128__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16144){
var map__16145 = p__16144;
var map__16145__$1 = (((((!((map__16145 == null))))?(((((map__16145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16145):map__16145);
var triage_data = map__16145__$1;
var phase = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16145__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__16147 = phase;
var G__16147__$1 = (((G__16147 instanceof cljs.core.Keyword))?G__16147.fqn:null);
switch (G__16147__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16148_16157 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16149_16158 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16150_16159 = true;
var _STAR_print_fn_STAR__temp_val__16151_16160 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16150_16159);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16151_16160);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16142_SHARP_){
return cljs.core.dissoc.call(null,p1__16142_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16149_16158);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16148_16157);
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
var _STAR_print_newline_STAR__orig_val__16152_16161 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16153_16162 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16154_16163 = true;
var _STAR_print_fn_STAR__temp_val__16155_16164 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16154_16163);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16155_16164);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__16143_SHARP_){
return cljs.core.dissoc.call(null,p1__16143_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16153_16162);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16152_16161);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16147__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
