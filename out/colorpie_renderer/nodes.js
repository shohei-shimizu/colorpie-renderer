// Compiled by ClojureScript 1.10.758 {}
goog.provide('colorpie_renderer.nodes');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
colorpie_renderer.nodes.Basis = (function (name,nodes,colors,coordinate,__meta,__extmap,__hash){
this.name = name;
this.nodes = nodes;
this.colors = colors;
this.coordinate = coordinate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(colorpie_renderer.nodes.Basis.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k10673,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__10677 = k10673;
var G__10677__$1 = (((G__10677 instanceof cljs.core.Keyword))?G__10677.fqn:null);
switch (G__10677__$1) {
case "name":
return self__.name;

break;
case "nodes":
return self__.nodes;

break;
case "colors":
return self__.colors;

break;
case "coordinate":
return self__.coordinate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10673,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__10678){
var vec__10679 = p__10678;
var k__4403__auto__ = cljs.core.nth.call(null,vec__10679,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__10679,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#colorpie-renderer.nodes.Basis{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate],null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10672){
var self__ = this;
var G__10672__$1 = this;
return (new cljs.core.RecordIter((0),G__10672__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new colorpie_renderer.nodes.Basis(self__.name,self__.nodes,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (938341676 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10674,other10675){
var self__ = this;
var this10674__$1 = this;
return (((!((other10675 == null)))) && ((this10674__$1.constructor === other10675.constructor)) && (cljs.core._EQ_.call(null,this10674__$1.name,other10675.name)) && (cljs.core._EQ_.call(null,this10674__$1.nodes,other10675.nodes)) && (cljs.core._EQ_.call(null,this10674__$1.colors,other10675.colors)) && (cljs.core._EQ_.call(null,this10674__$1.coordinate,other10675.coordinate)) && (cljs.core._EQ_.call(null,this10674__$1.__extmap,other10675.__extmap)));
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new colorpie_renderer.nodes.Basis(self__.name,self__.nodes,self__.colors,self__.coordinate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__10672){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__10682 = cljs.core.keyword_identical_QMARK_;
var expr__10683 = k__4388__auto__;
if(cljs.core.truth_(pred__10682.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__10683))){
return (new colorpie_renderer.nodes.Basis(G__10672,self__.nodes,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10682.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__10683))){
return (new colorpie_renderer.nodes.Basis(self__.name,G__10672,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10682.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__10683))){
return (new colorpie_renderer.nodes.Basis(self__.name,self__.nodes,G__10672,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10682.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__10683))){
return (new colorpie_renderer.nodes.Basis(self__.name,self__.nodes,self__.colors,G__10672,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Basis(self__.name,self__.nodes,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__10672),null));
}
}
}
}
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__10672){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Basis(self__.name,self__.nodes,self__.colors,self__.coordinate,G__10672,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Basis.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(colorpie_renderer.nodes.Basis.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null)], null);
}));

(colorpie_renderer.nodes.Basis.cljs$lang$type = true);

(colorpie_renderer.nodes.Basis.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"colorpie-renderer.nodes/Basis",null,(1),null));
}));

(colorpie_renderer.nodes.Basis.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"colorpie-renderer.nodes/Basis");
}));

/**
 * Positional factory function for colorpie-renderer.nodes/Basis.
 */
colorpie_renderer.nodes.__GT_Basis = (function colorpie_renderer$nodes$__GT_Basis(name,nodes,colors,coordinate){
return (new colorpie_renderer.nodes.Basis(name,nodes,colors,coordinate,null,null,null));
});

/**
 * Factory function for colorpie-renderer.nodes/Basis, taking a map of keywords to field values.
 */
colorpie_renderer.nodes.map__GT_Basis = (function colorpie_renderer$nodes$map__GT_Basis(G__10676){
var extmap__4419__auto__ = (function (){var G__10685 = cljs.core.dissoc.call(null,G__10676,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__10676)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10685);
} else {
return G__10685;
}
})();
return (new colorpie_renderer.nodes.Basis(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__10676),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__10676),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__10676),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__10676),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
colorpie_renderer.nodes.Nodes = (function (name,colors,interrogative,coordinate,__meta,__extmap,__hash){
this.name = name;
this.colors = colors;
this.interrogative = interrogative;
this.coordinate = coordinate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k10688,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__10692 = k10688;
var G__10692__$1 = (((G__10692 instanceof cljs.core.Keyword))?G__10692.fqn:null);
switch (G__10692__$1) {
case "name":
return self__.name;

break;
case "colors":
return self__.colors;

break;
case "interrogative":
return self__.interrogative;

break;
case "coordinate":
return self__.coordinate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10688,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__10693){
var vec__10694 = p__10693;
var k__4403__auto__ = cljs.core.nth.call(null,vec__10694,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__10694,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#colorpie-renderer.nodes.Nodes{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),self__.interrogative],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate],null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10687){
var self__ = this;
var G__10687__$1 = this;
return (new cljs.core.RecordIter((0),G__10687__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.interrogative,self__.coordinate,self__.__meta,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (237090428 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10689,other10690){
var self__ = this;
var this10689__$1 = this;
return (((!((other10690 == null)))) && ((this10689__$1.constructor === other10690.constructor)) && (cljs.core._EQ_.call(null,this10689__$1.name,other10690.name)) && (cljs.core._EQ_.call(null,this10689__$1.colors,other10690.colors)) && (cljs.core._EQ_.call(null,this10689__$1.interrogative,other10690.interrogative)) && (cljs.core._EQ_.call(null,this10689__$1.coordinate,other10690.coordinate)) && (cljs.core._EQ_.call(null,this10689__$1.__extmap,other10690.__extmap)));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.interrogative,self__.coordinate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__10687){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__10697 = cljs.core.keyword_identical_QMARK_;
var expr__10698 = k__4388__auto__;
if(cljs.core.truth_(pred__10697.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__10698))){
return (new colorpie_renderer.nodes.Nodes(G__10687,self__.colors,self__.interrogative,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10697.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__10698))){
return (new colorpie_renderer.nodes.Nodes(self__.name,G__10687,self__.interrogative,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10697.call(null,new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),expr__10698))){
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,G__10687,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10697.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__10698))){
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.interrogative,G__10687,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.interrogative,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__10687),null));
}
}
}
}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),self__.interrogative,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__10687){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.interrogative,self__.coordinate,G__10687,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(colorpie_renderer.nodes.Nodes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Symbol(null,"interrogative","interrogative",-595915657,null),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null)], null);
}));

(colorpie_renderer.nodes.Nodes.cljs$lang$type = true);

(colorpie_renderer.nodes.Nodes.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"colorpie-renderer.nodes/Nodes",null,(1),null));
}));

(colorpie_renderer.nodes.Nodes.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"colorpie-renderer.nodes/Nodes");
}));

/**
 * Positional factory function for colorpie-renderer.nodes/Nodes.
 */
colorpie_renderer.nodes.__GT_Nodes = (function colorpie_renderer$nodes$__GT_Nodes(name,colors,interrogative,coordinate){
return (new colorpie_renderer.nodes.Nodes(name,colors,interrogative,coordinate,null,null,null));
});

/**
 * Factory function for colorpie-renderer.nodes/Nodes, taking a map of keywords to field values.
 */
colorpie_renderer.nodes.map__GT_Nodes = (function colorpie_renderer$nodes$map__GT_Nodes(G__10691){
var extmap__4419__auto__ = (function (){var G__10700 = cljs.core.dissoc.call(null,G__10691,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__10691)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10700);
} else {
return G__10700;
}
})();
return (new colorpie_renderer.nodes.Nodes(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__10691),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__10691),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112).cljs$core$IFn$_invoke$arity$1(G__10691),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__10691),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
colorpie_renderer.nodes.Intersection_nodes = (function (name,colors,coordinate,__meta,__extmap,__hash){
this.name = name;
this.colors = colors;
this.coordinate = coordinate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k10703,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__10707 = k10703;
var G__10707__$1 = (((G__10707 instanceof cljs.core.Keyword))?G__10707.fqn:null);
switch (G__10707__$1) {
case "name":
return self__.name;

break;
case "colors":
return self__.colors;

break;
case "coordinate":
return self__.coordinate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10703,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__10708){
var vec__10709 = p__10708;
var k__4403__auto__ = cljs.core.nth.call(null,vec__10709,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__10709,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#colorpie-renderer.nodes.Intersection-nodes{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate],null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10702){
var self__ = this;
var G__10702__$1 = this;
return (new cljs.core.RecordIter((0),G__10702__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (972102935 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10704,other10705){
var self__ = this;
var this10704__$1 = this;
return (((!((other10705 == null)))) && ((this10704__$1.constructor === other10705.constructor)) && (cljs.core._EQ_.call(null,this10704__$1.name,other10705.name)) && (cljs.core._EQ_.call(null,this10704__$1.colors,other10705.colors)) && (cljs.core._EQ_.call(null,this10704__$1.coordinate,other10705.coordinate)) && (cljs.core._EQ_.call(null,this10704__$1.__extmap,other10705.__extmap)));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__10702){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__10712 = cljs.core.keyword_identical_QMARK_;
var expr__10713 = k__4388__auto__;
if(cljs.core.truth_(pred__10712.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__10713))){
return (new colorpie_renderer.nodes.Intersection_nodes(G__10702,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10712.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__10713))){
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,G__10702,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10712.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__10713))){
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,G__10702,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__10702),null));
}
}
}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__10702){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,G__10702,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(colorpie_renderer.nodes.Intersection_nodes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null)], null);
}));

(colorpie_renderer.nodes.Intersection_nodes.cljs$lang$type = true);

(colorpie_renderer.nodes.Intersection_nodes.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"colorpie-renderer.nodes/Intersection-nodes",null,(1),null));
}));

(colorpie_renderer.nodes.Intersection_nodes.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"colorpie-renderer.nodes/Intersection-nodes");
}));

/**
 * Positional factory function for colorpie-renderer.nodes/Intersection-nodes.
 */
colorpie_renderer.nodes.__GT_Intersection_nodes = (function colorpie_renderer$nodes$__GT_Intersection_nodes(name,colors,coordinate){
return (new colorpie_renderer.nodes.Intersection_nodes(name,colors,coordinate,null,null,null));
});

/**
 * Factory function for colorpie-renderer.nodes/Intersection-nodes, taking a map of keywords to field values.
 */
colorpie_renderer.nodes.map__GT_Intersection_nodes = (function colorpie_renderer$nodes$map__GT_Intersection_nodes(G__10706){
var extmap__4419__auto__ = (function (){var G__10715 = cljs.core.dissoc.call(null,G__10706,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__10706)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10715);
} else {
return G__10715;
}
})();
return (new colorpie_renderer.nodes.Intersection_nodes(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__10706),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__10706),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__10706),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});










colorpie_renderer.nodes.nodes = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
colorpie_renderer.nodes.consideration = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u914D\u616E",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","who","colorpie-renderer.nodes/who",-1761884154)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u914D\u616E",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","who","colorpie-renderer.nodes/who",-1761884154)], null);
})()
,(function (){
colorpie_renderer.nodes.method = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9A\u77F3",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","how","colorpie-renderer.nodes/how",1423518295)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9A\u77F3",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","how","colorpie-renderer.nodes/how",1423518295)], null);
})()
,(function (){
colorpie_renderer.nodes.reason = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7406\u6027",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","when","colorpie-renderer.nodes/when",-170867412)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7406\u6027",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","when","colorpie-renderer.nodes/when",-170867412)], null);
})()
,(function (){
colorpie_renderer.nodes.becoming = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9F\u73FE",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","what","colorpie-renderer.nodes/what",-772919081)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9F\u73FE",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","what","colorpie-renderer.nodes/what",-772919081)], null);
})()
,(function (){
colorpie_renderer.nodes.exploitment = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5229\u7528",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","where","colorpie-renderer.nodes/where",-1396009095)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5229\u7528",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","where","colorpie-renderer.nodes/where",-1396009095)], null);
})()
,(function (){
colorpie_renderer.nodes.self_interest = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u72EC\u5C0A",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","who","colorpie-renderer.nodes/who",-1761884154)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u72EC\u5C0A",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","who","colorpie-renderer.nodes/who",-1761884154)], null);
})()
,(function (){
colorpie_renderer.nodes.casualness = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5373\u8208",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","how","colorpie-renderer.nodes/how",1423518295)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5373\u8208",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","how","colorpie-renderer.nodes/how",1423518295)], null);
})()
,(function (){
colorpie_renderer.nodes.frankness = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7387\u76F4",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","when","colorpie-renderer.nodes/when",-170867412)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7387\u76F4",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","when","colorpie-renderer.nodes/when",-170867412)], null);
})()
,(function (){
colorpie_renderer.nodes.inherency = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u751F\u5F97",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","what","colorpie-renderer.nodes/what",-772919081)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u751F\u5F97",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","what","colorpie-renderer.nodes/what",-772919081)], null);
})()
,(function (){
colorpie_renderer.nodes.harmony = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8ABF\u548C",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","where","colorpie-renderer.nodes/where",-1396009095)], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8ABF\u548C",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"interrogative","interrogative",2058520112),new cljs.core.Keyword("colorpie-renderer.nodes","where","colorpie-renderer.nodes/where",-1396009095)], null);
})()
], null);


















colorpie_renderer.nodes.intersection_nodes = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
colorpie_renderer.nodes.construction = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8A2D\u8A08",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8A2D\u8A08",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.recommendation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5968\u52B1",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5968\u52B1",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.conference = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5354\u8B70",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5354\u8B70",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.training = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8A13\u7DF4",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8A13\u7DF4",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.manipulation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u64CD\u4F5C",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u64CD\u4F5C",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.desire = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5FD7\u671B",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5FD7\u671B",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.calculation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8A08\u7B97",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8A08\u7B97",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.reformation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6539\u5909",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6539\u5909",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.unfetteredness = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u4E0D\u7F88",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u4E0D\u7F88",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.craving = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6E07\u671B",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6E07\u671B",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.challenge = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6311\u6226",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6311\u6226",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.delight = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6109\u60A6",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6109\u60A6",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.feelings = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u968F\u611F",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u968F\u611F",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.emergence = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5275\u767A",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5275\u767A",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.throbbing = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8E8D\u52D5",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8E8D\u52D5",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.emphathize = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u9707\u64BC",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u9707\u64BC",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.affection = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u89AA\u611B",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u89AA\u611B",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.healthness = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5065\u5EB7",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5065\u5EB7",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null)], null);
})()
,(function (){
colorpie_renderer.nodes.dedication = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u732E\u8EAB",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"\u732E\u8EAB",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null)], null);
})()
], null);
colorpie_renderer.nodes.derivation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7531\u7DD2",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.efficiency = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u52B9\u7387",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.credit = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u4FE1\u7528",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.supply = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8ABF\u9054",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.expediency = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u65B9\u4FBF",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916),new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.ingenuity = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5275\u610F",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.inspiration = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7740\u60F3",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.experiment = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9F\u9A13",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.inquiry = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8FFD\u6C42",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466),new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.sturdiness = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5F37\u5065",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.territory = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7E04\u5F35\u308A",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.overwhelming = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5727\u5012",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.preservation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6E29\u5B58",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885),new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.first_aid = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6551\u6025",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.occasion = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u81E8\u6A5F",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.bravery = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7FA9\u52C7",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.swift = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u6A5F\u654F",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.observation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u89B3\u5BDF",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375),new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.formation = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5F62\u6210",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.prudence = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u614E\u91CD",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.adaption = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u9069\u5FDC",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.clinical = colorpie_renderer.nodes.map__GT_Intersection_nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u81E8\u5E8A",new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690),new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.peace = colorpie_renderer.nodes.map__GT_Basis.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5E73\u548C",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [colorpie_renderer.nodes.consideration,colorpie_renderer.nodes.method], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.perfection = colorpie_renderer.nodes.map__GT_Basis.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B8C\u5168",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [colorpie_renderer.nodes.consideration,colorpie_renderer.nodes.method], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.power = colorpie_renderer.nodes.map__GT_Basis.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9F\u529B",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [colorpie_renderer.nodes.consideration,colorpie_renderer.nodes.method], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.freedom = colorpie_renderer.nodes.map__GT_Basis.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"\u81EA\u7531",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [colorpie_renderer.nodes.consideration,colorpie_renderer.nodes.method], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.acceptance = colorpie_renderer.nodes.map__GT_Basis.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"\u53D7\u5BB9",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [colorpie_renderer.nodes.consideration,colorpie_renderer.nodes.method], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)], null),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
colorpie_renderer.nodes.test_instances = (function colorpie_renderer$nodes$test_instances(instances){
return null;
});

//# sourceMappingURL=nodes.js.map
