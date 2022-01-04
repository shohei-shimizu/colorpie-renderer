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
colorpie_renderer.nodes.Bases = (function (name,nodes,colors,coordinate,__meta,__extmap,__hash){
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
(colorpie_renderer.nodes.Bases.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12015,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12019 = k12015;
var G__12019__$1 = (((G__12019 instanceof cljs.core.Keyword))?G__12019.fqn:null);
switch (G__12019__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k12015,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__12020){
var vec__12021 = p__12020;
var k__4403__auto__ = cljs.core.nth.call(null,vec__12021,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__12021,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#colorpie-renderer.nodes.Bases{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate],null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12014){
var self__ = this;
var G__12014__$1 = this;
return (new cljs.core.RecordIter((0),G__12014__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
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

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12016,other12017){
var self__ = this;
var this12016__$1 = this;
return (((!((other12017 == null)))) && ((this12016__$1.constructor === other12017.constructor)) && (cljs.core._EQ_.call(null,this12016__$1.name,other12017.name)) && (cljs.core._EQ_.call(null,this12016__$1.nodes,other12017.nodes)) && (cljs.core._EQ_.call(null,this12016__$1.colors,other12017.colors)) && (cljs.core._EQ_.call(null,this12016__$1.coordinate,other12017.coordinate)) && (cljs.core._EQ_.call(null,this12016__$1.__extmap,other12017.__extmap)));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.colors,self__.coordinate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12014){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12024 = cljs.core.keyword_identical_QMARK_;
var expr__12025 = k__4388__auto__;
if(cljs.core.truth_(pred__12024.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12025))){
return (new colorpie_renderer.nodes.Bases(G__12014,self__.nodes,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12024.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__12025))){
return (new colorpie_renderer.nodes.Bases(self__.name,G__12014,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12024.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__12025))){
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,G__12014,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12024.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__12025))){
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.colors,G__12014,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__12014),null));
}
}
}
}
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Bases.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12014){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Bases(self__.name,self__.nodes,self__.colors,self__.coordinate,G__12014,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null)], null);
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
colorpie_renderer.nodes.__GT_Bases = (function colorpie_renderer$nodes$__GT_Bases(name,nodes,colors,coordinate){
return (new colorpie_renderer.nodes.Bases(name,nodes,colors,coordinate,null,null,null));
});

/**
 * Factory function for colorpie-renderer.nodes/Bases, taking a map of keywords to field values.
 */
colorpie_renderer.nodes.map__GT_Bases = (function colorpie_renderer$nodes$map__GT_Bases(G__12018){
var extmap__4419__auto__ = (function (){var G__12027 = cljs.core.dissoc.call(null,G__12018,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__12018)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12027);
} else {
return G__12027;
}
})();
return (new colorpie_renderer.nodes.Bases(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12018),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__12018),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__12018),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__12018),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12030,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12034 = k12030;
var G__12034__$1 = (((G__12034 instanceof cljs.core.Keyword))?G__12034.fqn:null);
switch (G__12034__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k12030,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__12035){
var vec__12036 = p__12035;
var k__4403__auto__ = cljs.core.nth.call(null,vec__12036,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__12036,(1),null);
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

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12029){
var self__ = this;
var G__12029__$1 = this;
return (new cljs.core.RecordIter((0),G__12029__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12031,other12032){
var self__ = this;
var this12031__$1 = this;
return (((!((other12032 == null)))) && ((this12031__$1.constructor === other12032.constructor)) && (cljs.core._EQ_.call(null,this12031__$1.name,other12032.name)) && (cljs.core._EQ_.call(null,this12031__$1.colors,other12032.colors)) && (cljs.core._EQ_.call(null,this12031__$1.coordinate,other12032.coordinate)) && (cljs.core._EQ_.call(null,this12031__$1.__extmap,other12032.__extmap)));
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

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12029){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12039 = cljs.core.keyword_identical_QMARK_;
var expr__12040 = k__4388__auto__;
if(cljs.core.truth_(pred__12039.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12040))){
return (new colorpie_renderer.nodes.Nodes(G__12029,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12039.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__12040))){
return (new colorpie_renderer.nodes.Nodes(self__.name,G__12029,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12039.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__12040))){
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,G__12029,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__12029),null));
}
}
}
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Nodes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12029){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Nodes(self__.name,self__.colors,self__.coordinate,G__12029,self__.__extmap,self__.__hash));
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
colorpie_renderer.nodes.map__GT_Nodes = (function colorpie_renderer$nodes$map__GT_Nodes(G__12033){
var extmap__4419__auto__ = (function (){var G__12042 = cljs.core.dissoc.call(null,G__12033,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__12033)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12042);
} else {
return G__12042;
}
})();
return (new colorpie_renderer.nodes.Nodes(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12033),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__12033),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__12033),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12045,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12049 = k12045;
var G__12049__$1 = (((G__12049 instanceof cljs.core.Keyword))?G__12049.fqn:null);
switch (G__12049__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k12045,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__12050){
var vec__12051 = p__12050;
var k__4403__auto__ = cljs.core.nth.call(null,vec__12051,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__12051,(1),null);
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12044){
var self__ = this;
var G__12044__$1 = this;
return (new cljs.core.RecordIter((0),G__12044__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12046,other12047){
var self__ = this;
var this12046__$1 = this;
return (((!((other12047 == null)))) && ((this12046__$1.constructor === other12047.constructor)) && (cljs.core._EQ_.call(null,this12046__$1.name,other12047.name)) && (cljs.core._EQ_.call(null,this12046__$1.colors,other12047.colors)) && (cljs.core._EQ_.call(null,this12046__$1.coordinate,other12047.coordinate)) && (cljs.core._EQ_.call(null,this12046__$1.__extmap,other12047.__extmap)));
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

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12044){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12054 = cljs.core.keyword_identical_QMARK_;
var expr__12055 = k__4388__auto__;
if(cljs.core.truth_(pred__12054.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12055))){
return (new colorpie_renderer.nodes.Intersection_nodes(G__12044,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12054.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__12055))){
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,G__12044,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12054.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__12055))){
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,G__12044,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__12044),null));
}
}
}
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Intersection_nodes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12044){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Intersection_nodes(self__.name,self__.colors,self__.coordinate,G__12044,self__.__extmap,self__.__hash));
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
colorpie_renderer.nodes.map__GT_Intersection_nodes = (function colorpie_renderer$nodes$map__GT_Intersection_nodes(G__12048){
var extmap__4419__auto__ = (function (){var G__12057 = cljs.core.dissoc.call(null,G__12048,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__12048)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12057);
} else {
return G__12057;
}
})();
return (new colorpie_renderer.nodes.Intersection_nodes(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12048),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__12048),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__12048),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
colorpie_renderer.nodes.Center_nodes = (function (name,colors,coordinate,__meta,__extmap,__hash){
this.name = name;
this.colors = colors;
this.coordinate = coordinate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k12060,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__12064 = k12060;
var G__12064__$1 = (((G__12064 instanceof cljs.core.Keyword))?G__12064.fqn:null);
switch (G__12064__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k12060,else__4383__auto__);

}
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__12065){
var vec__12066 = p__12065;
var k__4403__auto__ = cljs.core.nth.call(null,vec__12066,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__12066,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#colorpie-renderer.nodes.Center-nodes{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate],null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12059){
var self__ = this;
var G__12059__$1 = this;
return (new cljs.core.RecordIter((0),G__12059__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new colorpie_renderer.nodes.Center_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (951317504 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12061,other12062){
var self__ = this;
var this12061__$1 = this;
return (((!((other12062 == null)))) && ((this12061__$1.constructor === other12062.constructor)) && (cljs.core._EQ_.call(null,this12061__$1.name,other12062.name)) && (cljs.core._EQ_.call(null,this12061__$1.colors,other12062.colors)) && (cljs.core._EQ_.call(null,this12061__$1.coordinate,other12062.coordinate)) && (cljs.core._EQ_.call(null,this12061__$1.__extmap,other12062.__extmap)));
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new colorpie_renderer.nodes.Center_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__12059){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__12069 = cljs.core.keyword_identical_QMARK_;
var expr__12070 = k__4388__auto__;
if(cljs.core.truth_(pred__12069.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12070))){
return (new colorpie_renderer.nodes.Center_nodes(G__12059,self__.colors,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12069.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),expr__12070))){
return (new colorpie_renderer.nodes.Center_nodes(self__.name,G__12059,self__.coordinate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12069.call(null,new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),expr__12070))){
return (new colorpie_renderer.nodes.Center_nodes(self__.name,self__.colors,G__12059,self__.__meta,self__.__extmap,null));
} else {
return (new colorpie_renderer.nodes.Center_nodes(self__.name,self__.colors,self__.coordinate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__12059),null));
}
}
}
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"colors","colors",1157174732),self__.colors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),self__.coordinate,null))], null),self__.__extmap));
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__12059){
var self__ = this;
var this__4379__auto____$1 = this;
return (new colorpie_renderer.nodes.Center_nodes(self__.name,self__.colors,self__.coordinate,G__12059,self__.__extmap,self__.__hash));
}));

(colorpie_renderer.nodes.Center_nodes.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(colorpie_renderer.nodes.Center_nodes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null)], null);
}));

(colorpie_renderer.nodes.Center_nodes.cljs$lang$type = true);

(colorpie_renderer.nodes.Center_nodes.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"colorpie-renderer.nodes/Center-nodes",null,(1),null));
}));

(colorpie_renderer.nodes.Center_nodes.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"colorpie-renderer.nodes/Center-nodes");
}));

/**
 * Positional factory function for colorpie-renderer.nodes/Center-nodes.
 */
colorpie_renderer.nodes.__GT_Center_nodes = (function colorpie_renderer$nodes$__GT_Center_nodes(name,colors,coordinate){
return (new colorpie_renderer.nodes.Center_nodes(name,colors,coordinate,null,null,null));
});

/**
 * Factory function for colorpie-renderer.nodes/Center-nodes, taking a map of keywords to field values.
 */
colorpie_renderer.nodes.map__GT_Center_nodes = (function colorpie_renderer$nodes$map__GT_Center_nodes(G__12063){
var extmap__4419__auto__ = (function (){var G__12072 = cljs.core.dissoc.call(null,G__12063,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209));
if(cljs.core.record_QMARK_.call(null,G__12063)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12072);
} else {
return G__12072;
}
})();
return (new colorpie_renderer.nodes.Center_nodes(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12063),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(G__12063),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209).cljs$core$IFn$_invoke$arity$1(G__12063),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

colorpie_renderer.nodes.consideration = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u914D\u616E",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.method = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9A\u77F3",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","white","colorpie-renderer.nodes/white",-1911351916)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.reason = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7406\u6027",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.becoming = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5B9F\u73FE",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","blue","colorpie-renderer.nodes/blue",972049466)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.exploitment = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5229\u7528",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.self_interest = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u72EC\u5C0A",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","black","colorpie-renderer.nodes/black",1678766885)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.casualness = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u5373\u8208",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.frankness = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u7387\u76F4",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","red","colorpie-renderer.nodes/red",1631817690)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.inherency = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u751F\u5F97",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));
colorpie_renderer.nodes.harmony = colorpie_renderer.nodes.map__GT_Nodes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"\u8ABF\u548C",new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.list(new cljs.core.Keyword("colorpie-renderer.nodes","green","colorpie-renderer.nodes/green",514325375)),new cljs.core.Keyword(null,"coordinate","coordinate",-112811209),cljs.core.list((0),(0))], null));

//# sourceMappingURL=nodes.js.map
