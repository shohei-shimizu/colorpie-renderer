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
colorpie_renderer.nodes.Bases = (function (name,nodes,coordinate,__meta,__extmap,__hash){
this.name = name;
this.nodes = nodes;
this.coordinate = coordinate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(colorpie_renderer.nodes.Bases.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8141,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8145 = k8141;
var G__8145__$1 = (((G__8145 instanceof cljs.core.Keyword))?G__8145.fqn:null);
switch (G__8145__$1) {
case "name":
return self__.name;

break;
case "nodes":
return self__.nodes;

break;
case "coordinate":
return self__.coordinate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8141,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__8146){
var vec__8147 = p__8146;
var k__4403__auto__ = cljs.core.nth.call(null,vec__8147,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__8147,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#colorpie-renderer.nodes.Bases{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate],null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8140){
var self__ = this;
var G__8140__$1 = this;
return (new cljs.core.RecordIter((0),G__8140__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.coordinate,self__.__meta,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2067044060 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8142,other8143){
var self__ = this;
var this8142__$1 = this;
return (((!((other8143 == null)))) && ((this8142__$1.constructor === other8143.constructor)) && (cljs.core._EQ_.call(null,this8142__$1.name,other8143.name)) && (cljs.core._EQ_.call(null,this8142__$1.nodes,other8143.nodes)) && (cljs.core._EQ_.call(null,this8142__$1.coordinate,other8143.coordinate)) && (cljs.core._EQ_.call(null,this8142__$1.__extmap,other8143.__extmap)));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.coordinate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8140){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8150 = cljs.core.keyword_identical_QMARK_;
var expr__8151 = k__4388__auto__;
if(cljs.core.truth_(pred__8150.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__8151))){
return (new colorpie_renderer.nodes.Bases(G__8140,self__.nodes,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8150.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__8151))){
return (new colorpie_renderer.nodes.Bases(self__.name,G__8140,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8150.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__8151))){
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,G__8140,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__8140),null));
}
}
}
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8140){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.coordinate,G__8140,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(colorpie_renderer.nodes.Bases.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null)], null);
}));

(colorpie_renderer.nodes.Bases.cljs$lang$type = true);

(colorpie_renderer.nodes.Bases.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"colorpie-renderer.nodes/Bases",null,(1),null));
}));

(colorpie_renderer.nodes.Bases.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"colorpie-renderer.nodes/Bases");
}));

/**
 * Positional factory function for colorpie-renderer.nodes/Bases.
 */
colorpie_renderer.nodes.__GT_Bases = (function colorpie_renderer$nodes$__GT_Bases(name,nodes,coordinate){
return (new colorpie_renderer.nodes.Bases(name,nodes,coordinate,null,null,null));
});

/**
 * Factory function for colorpie-renderer.nodes/Bases, taking a map of keywords to field values.
 */
colorpie_renderer.nodes.map__GT_Bases = (function colorpie_renderer$nodes$map__GT_Bases(G__8144){
var extmap__4419__auto__ = (function (){var G__8153 = cljs.core.dissoc.call(null,G__8144,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__8144)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8153);
} else {
return G__8153;
}
})();
return (new colorpie_renderer.nodes.Bases(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__8144),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__8144),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__8144),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
colorpie_renderer.nodes.Nodes = (function (name,colors,coordinate,__meta,__extmap,__hash){
this.name = name;
this.colors = colors;
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

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8156,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8160 = k8156;
var G__8160__$1 = (((G__8160 instanceof cljs.core.Keyword))?G__8160.fqn:null);
switch (G__8160__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k8156,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__8161){
var vec__8162 = p__8161;
var k__4403__auto__ = cljs.core.nth.call(null,vec__8162,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__8162,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#colorpie-renderer.nodes.Nodes{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate],null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8155){
var self__ = this;
var G__8155__$1 = this;
return (new cljs.core.RecordIter((0),G__8155__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
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

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8157,other8158){
var self__ = this;
var this8157__$1 = this;
return (((!((other8158 == null)))) && ((this8157__$1.constructor === other8158.constructor)) && (cljs.core._EQ_.call(null,this8157__$1.name,other8158.name)) && (cljs.core._EQ_.call(null,this8157__$1.colors,other8158.colors)) && (cljs.core._EQ_.call(null,this8157__$1.coordinate,other8158.coordinate)) && (cljs.core._EQ_.call(null,this8157__$1.__extmap,other8158.__extmap)));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8155){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8165 = cljs.core.keyword_identical_QMARK_;
var expr__8166 = k__4388__auto__;
if(cljs.core.truth_(pred__8165.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__8166))){
return (new colorpie_renderer.nodes.Nodes(G__8155,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8165.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__8166))){
return (new colorpie_renderer.nodes.Nodes(self__.name,G__8155,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8165.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__8166))){
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,G__8155,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__8155),null));
}
}
}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8155){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.coordinate,G__8155,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null)], null);
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
colorpie_renderer.nodes.__GT_Nodes = (function colorpie_renderer$nodes$__GT_Nodes(name,colors,coordinate){
return (new colorpie_renderer.nodes.Nodes(name,colors,coordinate,null,null,null));
});

/**
 * Factory function for colorpie-renderer.nodes/Nodes, taking a map of keywords to field values.
 */
colorpie_renderer.nodes.map__GT_Nodes = (function colorpie_renderer$nodes$map__GT_Nodes(G__8159){
var extmap__4419__auto__ = (function (){var G__8168 = cljs.core.dissoc.call(null,G__8159,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__8159)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8168);
} else {
return G__8168;
}
})();
return (new colorpie_renderer.nodes.Nodes(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__8159),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__8159),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__8159),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8171,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8175 = k8171;
var G__8175__$1 = (((G__8175 instanceof cljs.core.Keyword))?G__8175.fqn:null);
switch (G__8175__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k8171,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__8176){
var vec__8177 = p__8176;
var k__4403__auto__ = cljs.core.nth.call(null,vec__8177,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__8177,(1),null);
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8170){
var self__ = this;
var G__8170__$1 = this;
return (new cljs.core.RecordIter((0),G__8170__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8172,other8173){
var self__ = this;
var this8172__$1 = this;
return (((!((other8173 == null)))) && ((this8172__$1.constructor === other8173.constructor)) && (cljs.core._EQ_.call(null,this8172__$1.name,other8173.name)) && (cljs.core._EQ_.call(null,this8172__$1.colors,other8173.colors)) && (cljs.core._EQ_.call(null,this8172__$1.coordinate,other8173.coordinate)) && (cljs.core._EQ_.call(null,this8172__$1.__extmap,other8173.__extmap)));
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8170){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8180 = cljs.core.keyword_identical_QMARK_;
var expr__8181 = k__4388__auto__;
if(cljs.core.truth_(pred__8180.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__8181))){
return (new colorpie_renderer.nodes.Intersection_nodes(G__8170,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8180.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__8181))){
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,G__8170,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__8180.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__8181))){
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,G__8170,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__8170),null));
}
}
}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8170){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,G__8170,self__.__extmap,self__.__hash));
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
colorpie_renderer.nodes.map__GT_Intersection_nodes = (function colorpie_renderer$nodes$map__GT_Intersection_nodes(G__8174){
var extmap__4419__auto__ = (function (){var G__8183 = cljs.core.dissoc.call(null,G__8174,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__8174)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8183);
} else {
return G__8183;
}
})();
return (new colorpie_renderer.nodes.Intersection_nodes(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__8174),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__8174),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__8174),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


//# sourceMappingURL=nodes.js.map
