(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"author_atlas_1", frames: [[734,0,262,70],[734,72,252,70],[517,275,225,70],[278,0,89,388],[0,0,99,440],[446,0,69,336],[657,0,75,247],[864,144,75,185],[941,144,70,130],[369,0,75,330],[192,304,58,77],[517,159,95,94],[101,207,89,137],[941,276,74,86],[192,207,69,95],[734,144,128,129],[101,0,175,205],[744,275,97,122],[517,0,138,157]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Artist_1 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Artist_2 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Artist_3 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.author_glow = function() {
	this.initialize(img.author_glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,2069);


(lib.author_shadows = function() {
	this.initialize(img.author_shadows);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,2791);


(lib.author_static = function() {
	this.initialize(img.author_static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,2708);


(lib.Fill_Draw = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Fill_Game = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Fill_Mask = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Fill_Paint = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Fill_Photo = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Fill_Piano = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Fill_Read = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Note11 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Note12 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Note21 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Note22 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Note31 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Note32 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Note41 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Note42 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Note43 = function() {
	this.initialize(ss["author_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note43();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,138,157), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note41();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,175,205), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note42();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,97,122), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,128,129), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,69,95), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,74,86), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,89,137), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,95,94), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Note11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,58,77), null);


(lib.Hobbie_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0)").ss(1,1,1).p("AjmtEIHNAAIAAaJInNAAg");
	this.shape.setTransform(23.025,-84.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjmNFIAA6JIHNAAIAAaJg");
	this.shape_1.setTransform(23.025,-84.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-169,48.300000000000004,169.4);


(lib.Art_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0)").ss(1,1,1).p("AFUAAQAACLhjBiQhkBiiNAAQiMAAhkhiQhjhiAAiLQAAiKBjhiQBkhiCMAAQCNAABkBiQBjBiAACKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjvDtQhkhiAAiLQAAiKBkhiQBjhiCMAAQCNAABjBiQBkBiAACKQAACLhkBiQhjBiiNAAQiMAAhjhig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-34.5,70,69);


(lib.Fill_Read_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgFYgjiIKxAAMAAAA0fIqxAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgFYgijIKxAAMAAAA0fIqxAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgFYghkIKxAAMAAAA0fIqxAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgFYggmIKxAAMAAAA0fIqxAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AlY/nIKxAAMAAAA0fIqxAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AlY+pIKxAAMAAAA0fIqxAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AlY9qIKxAAMAAAA0fIqxAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AlY8rIKxAAMAAAA0fIqxAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AlY7tIKxAAMAAAA0fIqxAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AlY6uIKxAAMAAAA0fIqxAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AlY7KIKxAAMAAAA0fIqxAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AlY8GIKxAAMAAAA0fIqxAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AlY9BIKxAAMAAAA0fIqxAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AlY99IKxAAMAAAA0fIqxAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AlY+4IKxAAMAAAA0fIqxAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AlY/0IKxAAMAAAA0fIqxAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EgFYggvIKxAAMAAAA0fIqxAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EgFYghrIKxAAMAAAA0fIqxAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgFYgimIKxAAMAAAA0fIqxAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgFYgjiIKxAAMAAAA0fIqxAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:8,y:-227.475}).wait(1).to({graphics:mask_graphics_1,x:8,y:-221.2118}).wait(1).to({graphics:mask_graphics_2,x:8,y:-214.9487}).wait(1).to({graphics:mask_graphics_3,x:8,y:-208.6855}).wait(1).to({graphics:mask_graphics_4,x:8,y:-202.4224}).wait(1).to({graphics:mask_graphics_5,x:8,y:-196.1592}).wait(1).to({graphics:mask_graphics_6,x:8,y:-189.896}).wait(1).to({graphics:mask_graphics_7,x:8,y:-183.6329}).wait(1).to({graphics:mask_graphics_8,x:8,y:-177.3697}).wait(1).to({graphics:mask_graphics_9,x:8,y:-171.1066}).wait(1).to({graphics:mask_graphics_10,x:8,y:-161.6868}).wait(1).to({graphics:mask_graphics_11,x:8,y:-149.1605}).wait(1).to({graphics:mask_graphics_12,x:8,y:-136.6342}).wait(1).to({graphics:mask_graphics_13,x:8,y:-124.1079}).wait(1).to({graphics:mask_graphics_14,x:8,y:-111.5816}).wait(1).to({graphics:mask_graphics_15,x:8,y:-99.0553}).wait(1).to({graphics:mask_graphics_16,x:8,y:-86.5289}).wait(1).to({graphics:mask_graphics_17,x:8,y:-74.0026}).wait(1).to({graphics:mask_graphics_18,x:8,y:-61.4763}).wait(1).to({graphics:mask_graphics_19,x:8,y:-48.95}).wait(1).to({graphics:mask_graphics_20,x:8,y:-60.8525}).wait(1).to({graphics:mask_graphics_21,x:8,y:-72.755}).wait(1).to({graphics:mask_graphics_22,x:8,y:-84.6575}).wait(1).to({graphics:mask_graphics_23,x:8,y:-96.56}).wait(1).to({graphics:mask_graphics_24,x:8,y:-108.4625}).wait(1).to({graphics:mask_graphics_25,x:8,y:-120.365}).wait(1).to({graphics:mask_graphics_26,x:8,y:-132.2675}).wait(1).to({graphics:mask_graphics_27,x:8,y:-144.17}).wait(1).to({graphics:mask_graphics_28,x:8,y:-156.0725}).wait(1).to({graphics:mask_graphics_29,x:8,y:-167.975}).wait(1).to({graphics:mask_graphics_30,x:8,y:-173.9387}).wait(1).to({graphics:mask_graphics_31,x:8,y:-179.89}).wait(1).to({graphics:mask_graphics_32,x:8,y:-185.8412}).wait(1).to({graphics:mask_graphics_33,x:8,y:-191.7925}).wait(1).to({graphics:mask_graphics_34,x:8,y:-197.7437}).wait(1).to({graphics:mask_graphics_35,x:8,y:-203.695}).wait(1).to({graphics:mask_graphics_36,x:8,y:-209.6462}).wait(1).to({graphics:mask_graphics_37,x:8,y:-215.5975}).wait(1).to({graphics:mask_graphics_38,x:8,y:-221.5487}).wait(1).to({graphics:mask_graphics_39,x:8,y:-227.5}).wait(1));

	// Fill
	this.instance = new lib.Fill_Read();
	this.instance.setTransform(-26.95,-118.55,0.7185,0.7185);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-118.5,53.5,237.1);


(lib.Fill_Piano_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlY/UIKxAAMAAAA0fIqxAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AlY+zIKxAAMAAAA0fIqxAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AlY+TIKxAAMAAAA0fIqxAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AlY9zIKxAAMAAAA0fIqxAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AlY9SIKxAAMAAAA0fIqxAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AlY8yIKxAAMAAAA0fIqxAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AlY8SIKxAAMAAAA0fIqxAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AlY7xIKxAAMAAAA0fIqxAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AlY7RIKxAAMAAAA0fIqxAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AlY6wIKxAAMAAAA0fIqxAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AlY6QIKxAAMAAAA0fIqxAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AlY6gIKxAAMAAAA0fIqxAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AlY6/IKxAAMAAAA0fIqxAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AlY7eIKxAAMAAAA0fIqxAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AlY79IKxAAMAAAA0fIqxAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AlY8bIKxAAMAAAA0fIqxAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AlY86IKxAAMAAAA0fIqxAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AlY9ZIKxAAMAAAA0fIqxAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AlY94IKxAAMAAAA0fIqxAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AlY+WIKxAAMAAAA0fIqxAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AlY+1IKxAAMAAAA0fIqxAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AlY/UIKxAAMAAAA0fIqxAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-200.475}).wait(1).to({graphics:mask_graphics_1,x:-0.0526,y:-197.2382}).wait(1).to({graphics:mask_graphics_2,x:-0.1053,y:-194.0013}).wait(1).to({graphics:mask_graphics_3,x:-0.1579,y:-190.7645}).wait(1).to({graphics:mask_graphics_4,x:-0.2105,y:-187.5276}).wait(1).to({graphics:mask_graphics_5,x:-0.2632,y:-184.2908}).wait(1).to({graphics:mask_graphics_6,x:-0.3158,y:-181.0539}).wait(1).to({graphics:mask_graphics_7,x:-0.3684,y:-177.8171}).wait(1).to({graphics:mask_graphics_8,x:-0.4211,y:-174.5803}).wait(1).to({graphics:mask_graphics_9,x:-0.4737,y:-171.3434}).wait(1).to({graphics:mask_graphics_10,x:-0.5263,y:-168.1066}).wait(1).to({graphics:mask_graphics_11,x:-0.5789,y:-161.7395}).wait(1).to({graphics:mask_graphics_12,x:-0.6316,y:-155.2658}).wait(1).to({graphics:mask_graphics_13,x:-0.6842,y:-148.7921}).wait(1).to({graphics:mask_graphics_14,x:-0.7368,y:-142.3184}).wait(1).to({graphics:mask_graphics_15,x:-0.7895,y:-135.8447}).wait(1).to({graphics:mask_graphics_16,x:-0.8421,y:-129.371}).wait(1).to({graphics:mask_graphics_17,x:-0.8947,y:-122.8974}).wait(1).to({graphics:mask_graphics_18,x:-0.9474,y:-116.4237}).wait(1).to({graphics:mask_graphics_19,x:-1,y:-109.95}).wait(1).to({graphics:mask_graphics_20,x:-1,y:-116.1025}).wait(1).to({graphics:mask_graphics_21,x:-1,y:-122.255}).wait(1).to({graphics:mask_graphics_22,x:-1,y:-128.4075}).wait(1).to({graphics:mask_graphics_23,x:-1,y:-134.56}).wait(1).to({graphics:mask_graphics_24,x:-1,y:-140.7125}).wait(1).to({graphics:mask_graphics_25,x:-1,y:-146.865}).wait(1).to({graphics:mask_graphics_26,x:-1,y:-153.0175}).wait(1).to({graphics:mask_graphics_27,x:-1,y:-159.17}).wait(1).to({graphics:mask_graphics_28,x:-1,y:-165.3225}).wait(1).to({graphics:mask_graphics_29,x:-1,y:-169.7375}).wait(1).to({graphics:mask_graphics_30,x:-1,y:-172.8137}).wait(1).to({graphics:mask_graphics_31,x:-1,y:-175.89}).wait(1).to({graphics:mask_graphics_32,x:-1,y:-178.9662}).wait(1).to({graphics:mask_graphics_33,x:-1,y:-182.0425}).wait(1).to({graphics:mask_graphics_34,x:-1,y:-185.1187}).wait(1).to({graphics:mask_graphics_35,x:-1,y:-188.195}).wait(1).to({graphics:mask_graphics_36,x:-1,y:-191.2712}).wait(1).to({graphics:mask_graphics_37,x:-1,y:-194.3475}).wait(1).to({graphics:mask_graphics_38,x:-1,y:-197.4238}).wait(1).to({graphics:mask_graphics_39,x:-1,y:-200.5}).wait(1));

	// Fill
	this.instance = new lib.Fill_Piano();
	this.instance.setTransform(-35,-65);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-65,69.5,123.1);


(lib.Fill_Photo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlY/eIKxAAMAAAA0fIqxAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AlY+6IKxAAMAAAA0fIqxAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AlY+XIKxAAMAAAA0fIqxAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AlY90IKxAAMAAAA0fIqxAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AlY9RIKxAAMAAAA0fIqxAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AlY8tIKxAAMAAAA0fIqxAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AlY8KIKxAAMAAAA0fIqxAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AlY7nIKxAAMAAAA0fIqxAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AlY7EIKxAAMAAAA0fIqxAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AlY6gIKxAAMAAAA0fIqxAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AlY6wIKxAAMAAAA0fIqxAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AlY7SIKxAAMAAAA0fIqxAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AlY7zIKxAAMAAAA0fIqxAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AlY8VIKxAAMAAAA0fIqxAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AlY82IKxAAMAAAA0fIqxAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AlY9YIKxAAMAAAA0fIqxAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AlY95IKxAAMAAAA0fIqxAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AlY+bIKxAAMAAAA0fIqxAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AlY+8IKxAAMAAAA0fIqxAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AlY/eIKxAAMAAAA0fIqxAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:10,y:-201.475}).wait(1).to({graphics:mask_graphics_1,x:10,y:-197.9487}).wait(1).to({graphics:mask_graphics_2,x:10,y:-194.4224}).wait(1).to({graphics:mask_graphics_3,x:10,y:-190.896}).wait(1).to({graphics:mask_graphics_4,x:10,y:-187.3697}).wait(1).to({graphics:mask_graphics_5,x:10,y:-183.8434}).wait(1).to({graphics:mask_graphics_6,x:10,y:-180.3171}).wait(1).to({graphics:mask_graphics_7,x:10,y:-176.7908}).wait(1).to({graphics:mask_graphics_8,x:10,y:-173.2645}).wait(1).to({graphics:mask_graphics_9,x:10,y:-169.7382}).wait(1).to({graphics:mask_graphics_10,x:10,y:-164.4237}).wait(1).to({graphics:mask_graphics_11,x:10,y:-157.371}).wait(1).to({graphics:mask_graphics_12,x:10,y:-150.3184}).wait(1).to({graphics:mask_graphics_13,x:10,y:-143.2658}).wait(1).to({graphics:mask_graphics_14,x:10,y:-136.2132}).wait(1).to({graphics:mask_graphics_15,x:10,y:-129.1605}).wait(1).to({graphics:mask_graphics_16,x:10,y:-122.1079}).wait(1).to({graphics:mask_graphics_17,x:10,y:-115.0553}).wait(1).to({graphics:mask_graphics_18,x:10,y:-108.0026}).wait(1).to({graphics:mask_graphics_19,x:10,y:-100.95}).wait(1).to({graphics:mask_graphics_20,x:10,y:-107.65}).wait(1).to({graphics:mask_graphics_21,x:10,y:-114.35}).wait(1).to({graphics:mask_graphics_22,x:10,y:-121.05}).wait(1).to({graphics:mask_graphics_23,x:10,y:-127.75}).wait(1).to({graphics:mask_graphics_24,x:10,y:-134.45}).wait(1).to({graphics:mask_graphics_25,x:10,y:-141.15}).wait(1).to({graphics:mask_graphics_26,x:10,y:-147.85}).wait(1).to({graphics:mask_graphics_27,x:10,y:-154.55}).wait(1).to({graphics:mask_graphics_28,x:10,y:-161.25}).wait(1).to({graphics:mask_graphics_29,x:10,y:-167.95}).wait(1).to({graphics:mask_graphics_30,x:10,y:-171.325}).wait(1).to({graphics:mask_graphics_31,x:10,y:-174.675}).wait(1).to({graphics:mask_graphics_32,x:10,y:-178.025}).wait(1).to({graphics:mask_graphics_33,x:10,y:-181.375}).wait(1).to({graphics:mask_graphics_34,x:10,y:-184.725}).wait(1).to({graphics:mask_graphics_35,x:10,y:-188.075}).wait(1).to({graphics:mask_graphics_36,x:10,y:-191.425}).wait(1).to({graphics:mask_graphics_37,x:10,y:-194.775}).wait(1).to({graphics:mask_graphics_38,x:10,y:-198.125}).wait(1).to({graphics:mask_graphics_39,x:10,y:-201.475}).wait(1));

	// Fill
	this.instance = new lib.Fill_Photo();
	this.instance.setTransform(-25,-66.95,0.6664,0.724);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-66.9,49.5,133.9);


(lib.Fill_Paint_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgFYghWIKxAAMAAAA0fIqxAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgFYggmIKxAAMAAAA0fIqxAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AlY/2IKxAAMAAAA0fIqxAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AlY/GIKxAAMAAAA0fIqxAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AlY+WIKxAAMAAAA0fIqxAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AlY9nIKxAAMAAAA0fIqxAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AlY83IKxAAMAAAA0fIqxAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AlY8HIKxAAMAAAA0fIqxAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AlY7XIKxAAMAAAA0fIqxAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AlY6nIKxAAMAAAA0fIqxAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AlY69IKxAAMAAAA0gIqxAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AlY7qIKxAAMAAAA0fIqxAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AlY8XIKxAAMAAAA0fIqxAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AlY9FIKxAAMAAAA0fIqxAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AlY9zIKxAAMAAAA0gIqxAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AlY+gIKxAAMAAAA0fIqxAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AlY/OIKxAAMAAAA0gIqxAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AlY/7IKxAAMAAAA0fIqxAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgFYggpIKxAAMAAAA0gIqxAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgFYghWIKxAAMAAAA0fIqxAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:11.5,y:-213.5}).wait(1).to({graphics:mask_graphics_1,x:11.5,y:-208.7105}).wait(1).to({graphics:mask_graphics_2,x:11.5,y:-203.921}).wait(1).to({graphics:mask_graphics_3,x:11.5,y:-199.1316}).wait(1).to({graphics:mask_graphics_4,x:11.5,y:-194.3421}).wait(1).to({graphics:mask_graphics_5,x:11.5,y:-189.5526}).wait(1).to({graphics:mask_graphics_6,x:11.5,y:-184.7632}).wait(1).to({graphics:mask_graphics_7,x:11.5,y:-179.9737}).wait(1).to({graphics:mask_graphics_8,x:11.5,y:-175.1842}).wait(1).to({graphics:mask_graphics_9,x:11.5,y:-170.3947}).wait(1).to({graphics:mask_graphics_10,x:11.5,y:-163.2105}).wait(1).to({graphics:mask_graphics_11,x:11.5,y:-153.6316}).wait(1).to({graphics:mask_graphics_12,x:11.5,y:-144.0526}).wait(1).to({graphics:mask_graphics_13,x:11.5,y:-134.4737}).wait(1).to({graphics:mask_graphics_14,x:11.5,y:-124.8947}).wait(1).to({graphics:mask_graphics_15,x:11.5,y:-115.3158}).wait(1).to({graphics:mask_graphics_16,x:11.5,y:-105.7368}).wait(1).to({graphics:mask_graphics_17,x:11.5,y:-96.1579}).wait(1).to({graphics:mask_graphics_18,x:11.5,y:-86.5789}).wait(1).to({graphics:mask_graphics_19,x:11.5,y:-77}).wait(1).to({graphics:mask_graphics_20,x:11.5,y:-86.1}).wait(1).to({graphics:mask_graphics_21,x:11.5,y:-95.2}).wait(1).to({graphics:mask_graphics_22,x:11.5,y:-104.3}).wait(1).to({graphics:mask_graphics_23,x:11.5,y:-113.4}).wait(1).to({graphics:mask_graphics_24,x:11.5,y:-122.5}).wait(1).to({graphics:mask_graphics_25,x:11.5,y:-131.6}).wait(1).to({graphics:mask_graphics_26,x:11.5,y:-140.7}).wait(1).to({graphics:mask_graphics_27,x:11.5,y:-149.8}).wait(1).to({graphics:mask_graphics_28,x:11.5,y:-158.9}).wait(1).to({graphics:mask_graphics_29,x:11.5,y:-168}).wait(1).to({graphics:mask_graphics_30,x:11.5,y:-172.55}).wait(1).to({graphics:mask_graphics_31,x:11.5,y:-177.1}).wait(1).to({graphics:mask_graphics_32,x:11.5,y:-181.65}).wait(1).to({graphics:mask_graphics_33,x:11.5,y:-186.2}).wait(1).to({graphics:mask_graphics_34,x:11.5,y:-190.75}).wait(1).to({graphics:mask_graphics_35,x:11.5,y:-195.3}).wait(1).to({graphics:mask_graphics_36,x:11.5,y:-199.85}).wait(1).to({graphics:mask_graphics_37,x:11.5,y:-204.4}).wait(1).to({graphics:mask_graphics_38,x:11.5,y:-208.95}).wait(1).to({graphics:mask_graphics_39,x:11.5,y:-213.5}).wait(1));

	// Fill
	this.instance = new lib.Fill_Paint();
	this.instance.setTransform(-22.9,-91.3,0.6108,0.7394);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-91.3,45.8,182.3);


(lib.Fill_Game_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgFYgm5IKxAAMAAAA0fIqxAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgFYgljIKxAAMAAAA0fIqxAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgFYgkOIKxAAMAAAA0fIqxAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgFYgi5IKxAAMAAAA0fIqxAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgFYghkIKxAAMAAAA0fIqxAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgFYggOIKxAAMAAAA0fIqxAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AlY+5IKxAAMAAAA0fIqxAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AlY9kIKxAAMAAAA0fIqxAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AlY8PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AlY65IKxAAMAAAA0fIqxAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AlY7gIKxAAMAAAA0fIqxAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AlY8xIKxAAMAAAA0fIqxAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AlY+CIKxAAMAAAA0fIqxAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AlY/TIKxAAMAAAA0fIqxAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EgFYggkIKxAAMAAAA0fIqxAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EgFYgh1IKxAAMAAAA0fIqxAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EgFYgjGIKxAAMAAAA0fIqxAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EgFYgkXIKxAAMAAAA0fIqxAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgFYgloIKxAAMAAAA0fIqxAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgFYgm5IKxAAMAAAA0fIqxAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1,y:-248.975}).wait(1).to({graphics:mask_graphics_1,x:1,y:-240.4487}).wait(1).to({graphics:mask_graphics_2,x:1,y:-231.9224}).wait(1).to({graphics:mask_graphics_3,x:1,y:-223.396}).wait(1).to({graphics:mask_graphics_4,x:1,y:-214.8697}).wait(1).to({graphics:mask_graphics_5,x:1,y:-206.3434}).wait(1).to({graphics:mask_graphics_6,x:1,y:-197.8171}).wait(1).to({graphics:mask_graphics_7,x:1,y:-189.2908}).wait(1).to({graphics:mask_graphics_8,x:1,y:-180.7645}).wait(1).to({graphics:mask_graphics_9,x:1,y:-172.2382}).wait(1).to({graphics:mask_graphics_10,x:1,y:-159.4237}).wait(1).to({graphics:mask_graphics_11,x:1,y:-142.371}).wait(1).to({graphics:mask_graphics_12,x:1,y:-125.3184}).wait(1).to({graphics:mask_graphics_13,x:1,y:-108.2658}).wait(1).to({graphics:mask_graphics_14,x:1,y:-91.2132}).wait(1).to({graphics:mask_graphics_15,x:1,y:-74.1605}).wait(1).to({graphics:mask_graphics_16,x:1,y:-57.1079}).wait(1).to({graphics:mask_graphics_17,x:1,y:-40.0553}).wait(1).to({graphics:mask_graphics_18,x:1,y:-23.0026}).wait(1).to({graphics:mask_graphics_19,x:1,y:-5.95}).wait(1).to({graphics:mask_graphics_20,x:1,y:-22.15}).wait(1).to({graphics:mask_graphics_21,x:1,y:-38.35}).wait(1).to({graphics:mask_graphics_22,x:1,y:-54.55}).wait(1).to({graphics:mask_graphics_23,x:1,y:-70.75}).wait(1).to({graphics:mask_graphics_24,x:1,y:-86.95}).wait(1).to({graphics:mask_graphics_25,x:1,y:-103.15}).wait(1).to({graphics:mask_graphics_26,x:1,y:-119.35}).wait(1).to({graphics:mask_graphics_27,x:1,y:-135.55}).wait(1).to({graphics:mask_graphics_28,x:1,y:-151.75}).wait(1).to({graphics:mask_graphics_29,x:1,y:-167.95}).wait(1).to({graphics:mask_graphics_30,x:1,y:-176.075}).wait(1).to({graphics:mask_graphics_31,x:1,y:-184.175}).wait(1).to({graphics:mask_graphics_32,x:1,y:-192.275}).wait(1).to({graphics:mask_graphics_33,x:1,y:-200.375}).wait(1).to({graphics:mask_graphics_34,x:1,y:-208.475}).wait(1).to({graphics:mask_graphics_35,x:1,y:-216.575}).wait(1).to({graphics:mask_graphics_36,x:1,y:-224.675}).wait(1).to({graphics:mask_graphics_37,x:1,y:-232.775}).wait(1).to({graphics:mask_graphics_38,x:1,y:-240.875}).wait(1).to({graphics:mask_graphics_39,x:1,y:-248.975}).wait(1));

	// Fill
	this.instance = new lib.Fill_Game();
	this.instance.setTransform(-33.85,-162.4,0.6837,0.7383);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-162.4,67.4,324.5);


(lib.Fill_Draw_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgFYglzIKxAAMAAAA0fIqxAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgFYgklIKxAAMAAAA0fIqxAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgFYgjXIKxAAMAAAA0fIqxAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgFYgiJIKxAAMAAAA0fIqxAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgFYgg7IKxAAMAAAA0fIqxAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AlY/tIKxAAMAAAA0fIqxAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AlY+fIKxAAMAAAA0fIqxAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AlY9RIKxAAMAAAA0fIqxAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AlY8EIKxAAMAAAA0fIqxAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AlY62IKxAAMAAAA0fIqxAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AlY6PIKxAAMAAAA0fIqxAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AlY7ZIKxAAMAAAA0fIqxAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AlY8jIKxAAMAAAA0fIqxAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AlY9tIKxAAMAAAA0fIqxAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AlY+3IKxAAMAAAA0fIqxAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EgFYggBIKxAAMAAAA0fIqxAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EgFYghLIKxAAMAAAA0fIqxAAg");
	var mask_graphics_36 = new cjs.Graphics().p("EgFYgiVIKxAAMAAAA0fIqxAAg");
	var mask_graphics_37 = new cjs.Graphics().p("EgFYgjfIKxAAMAAAA0fIqxAAg");
	var mask_graphics_38 = new cjs.Graphics().p("EgFYgkpIKxAAMAAAA0fIqxAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EgFYglzIKxAAMAAAA0fIqxAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:4,y:-241.975}).wait(1).to({graphics:mask_graphics_1,x:4,y:-234.1855}).wait(1).to({graphics:mask_graphics_2,x:4,y:-226.396}).wait(1).to({graphics:mask_graphics_3,x:4,y:-218.6066}).wait(1).to({graphics:mask_graphics_4,x:4,y:-210.8171}).wait(1).to({graphics:mask_graphics_5,x:4,y:-203.0276}).wait(1).to({graphics:mask_graphics_6,x:4,y:-195.2382}).wait(1).to({graphics:mask_graphics_7,x:4,y:-187.4487}).wait(1).to({graphics:mask_graphics_8,x:4,y:-179.6592}).wait(1).to({graphics:mask_graphics_9,x:4,y:-171.8697}).wait(1).to({graphics:mask_graphics_10,x:4,y:-160.1605}).wait(1).to({graphics:mask_graphics_11,x:4,y:-144.5816}).wait(1).to({graphics:mask_graphics_12,x:4,y:-129.0026}).wait(1).to({graphics:mask_graphics_13,x:4,y:-113.4237}).wait(1).to({graphics:mask_graphics_14,x:4,y:-97.8447}).wait(1).to({graphics:mask_graphics_15,x:4,y:-82.2658}).wait(1).to({graphics:mask_graphics_16,x:4,y:-66.6868}).wait(1).to({graphics:mask_graphics_17,x:4,y:-51.1079}).wait(1).to({graphics:mask_graphics_18,x:4,y:-35.5289}).wait(1).to({graphics:mask_graphics_19,x:4,y:-19.95}).wait(1).to({graphics:mask_graphics_20,x:4,y:-34.75}).wait(1).to({graphics:mask_graphics_21,x:4,y:-49.55}).wait(1).to({graphics:mask_graphics_22,x:4,y:-64.35}).wait(1).to({graphics:mask_graphics_23,x:4,y:-79.15}).wait(1).to({graphics:mask_graphics_24,x:4,y:-93.95}).wait(1).to({graphics:mask_graphics_25,x:4,y:-108.75}).wait(1).to({graphics:mask_graphics_26,x:4,y:-123.55}).wait(1).to({graphics:mask_graphics_27,x:4,y:-138.35}).wait(1).to({graphics:mask_graphics_28,x:4,y:-153.15}).wait(1).to({graphics:mask_graphics_29,x:4,y:-167.95}).wait(1).to({graphics:mask_graphics_30,x:4,y:-175.375}).wait(1).to({graphics:mask_graphics_31,x:4,y:-182.775}).wait(1).to({graphics:mask_graphics_32,x:4,y:-190.175}).wait(1).to({graphics:mask_graphics_33,x:4,y:-197.575}).wait(1).to({graphics:mask_graphics_34,x:4,y:-204.975}).wait(1).to({graphics:mask_graphics_35,x:4,y:-212.375}).wait(1).to({graphics:mask_graphics_36,x:4,y:-219.775}).wait(1).to({graphics:mask_graphics_37,x:4,y:-227.175}).wait(1).to({graphics:mask_graphics_38,x:4,y:-234.575}).wait(1).to({graphics:mask_graphics_39,x:4,y:-241.975}).wait(1));

	// Fill
	this.instance = new lib.Fill_Draw();
	this.instance.setTransform(-30.15,-147.6,0.6783,0.7608);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-147.6,60.3,295.2);


(lib.Glow_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.author_glow();
	this.instance.setTransform(0,0,0.7428,0.7428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Glow_, new cjs.Rectangle(0,0,705.7,1536.9), null);


(lib.Artist_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Artist_3();
	this.instance.setTransform(-96,-29.85,0.8533,0.8533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Artist_3_1, new cjs.Rectangle(-96,-29.8,192,59.7), null);


(lib.Artist_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Artist_2();
	this.instance.setTransform(-107,-29.7,0.8492,0.8492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Artist_2_1, new cjs.Rectangle(-107,-29.7,214,59.5), null);


(lib.Artist_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Artist_1();
	this.instance.setTransform(-98.5,-26.3,0.7521,0.7521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Artist_1_1, new cjs.Rectangle(-98.5,-26.3,197.1,52.7), null);


(lib.Notes4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol9();
	this.instance.setTransform(270,22,1,1,0,0,0,69,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:269.1,y:21.15},0).wait(1).to({x:268.2,y:20.25},0).wait(1).to({x:267.3,y:19.35},0).wait(1).to({x:266.4,y:18.45},0).wait(1).to({x:265.55,y:17.6},0).wait(1).to({x:264.65,y:16.7},0).wait(1).to({x:263.75,y:15.8},0).wait(1).to({x:262.85,y:14.9},0).wait(1).to({x:262,y:14},0).wait(1).to({x:262.9,y:13.2},0).wait(1).to({x:263.8,y:12.4},0).wait(1).to({x:264.7,y:11.6},0).wait(1).to({x:265.6,y:10.8},0).wait(1).to({x:266.5,y:10},0).wait(1).to({x:267.4,y:9.2},0).wait(1).to({x:268.3,y:8.4},0).wait(1).to({x:269.2,y:7.6},0).wait(1).to({x:270.1,y:6.8},0).wait(1).to({x:271,y:6},0).wait(1).to({x:271.8,y:6.9},0).wait(1).to({x:272.6,y:7.8},0).wait(1).to({x:273.4,y:8.7},0).wait(1).to({x:274.2,y:9.6},0).wait(1).to({x:275,y:10.5},0).wait(1).to({x:275.8,y:11.4},0).wait(1).to({x:276.6,y:12.3},0).wait(1).to({x:277.4,y:13.2},0).wait(1).to({x:278.2,y:14.1},0).wait(1).to({x:279,y:15},0).wait(1).to({x:278.1,y:15.7},0).wait(1).to({x:277.2,y:16.4},0).wait(1).to({x:276.3,y:17.1},0).wait(1).to({x:275.4,y:17.8},0).wait(1).to({x:274.5,y:18.5},0).wait(1).to({x:273.6,y:19.2},0).wait(1).to({x:272.7,y:19.9},0).wait(1).to({x:271.8,y:20.6},0).wait(1).to({x:270.9,y:21.3},0).wait(1).to({x:270,y:22},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(137,93,1,1,0,0,0,87.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:135.75,y:92.15},0).wait(1).to({x:134.55,y:91.25},0).wait(1).to({x:133.3,y:90.35},0).wait(1).to({x:132.1,y:89.45},0).wait(1).to({x:130.85,y:88.6},0).wait(1).to({x:129.65,y:87.7},0).wait(1).to({x:128.4,y:86.8},0).wait(1).to({x:127.2,y:85.9},0).wait(1).to({x:126,y:85},0).wait(1).to({y:86.3},0).wait(1).to({y:87.6},0).wait(1).to({y:88.9},0).wait(1).to({y:90.2},0).wait(1).to({y:91.5},0).wait(1).to({y:92.8},0).wait(1).to({y:94.1},0).wait(1).to({y:95.4},0).wait(1).to({y:96.7},0).wait(1).to({y:98},0).wait(1).to({x:127.1,y:96.4},0).wait(1).to({x:128.2,y:94.8},0).wait(1).to({x:129.3,y:93.2},0).wait(1).to({x:130.4,y:91.6},0).wait(1).to({x:131.5,y:90},0).wait(1).to({x:132.6,y:88.4},0).wait(1).to({x:133.7,y:86.8},0).wait(1).to({x:134.8,y:85.2},0).wait(1).to({x:135.9,y:83.6},0).wait(1).to({x:137,y:82},0).wait(1).to({y:83.1},0).wait(1).to({y:84.2},0).wait(1).to({y:85.3},0).wait(1).to({y:86.4},0).wait(1).to({y:87.5},0).wait(1).to({y:88.6},0).wait(1).to({y:89.7},0).wait(1).to({y:90.8},0).wait(1).to({y:91.9},0).wait(1).to({y:93},0).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(87,29,1,1,0,0,0,48.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:87.2,y:30.15},0).wait(1).to({x:87.4,y:31.25},0).wait(1).to({x:87.65,y:32.35},0).wait(1).to({x:87.85,y:33.45},0).wait(1).to({x:88.1,y:34.6},0).wait(1).to({x:88.3,y:35.7},0).wait(1).to({x:88.55,y:36.8},0).wait(1).to({x:88.75,y:37.9},0).wait(1).to({x:89,y:39},0).wait(1).to({x:89.3,y:37},0).wait(1).to({x:89.6,y:35},0).wait(1).to({x:89.9,y:33},0).wait(1).to({x:90.2,y:31},0).wait(1).to({x:90.5,y:29},0).wait(1).to({x:90.8,y:27},0).wait(1).to({x:91.1,y:25},0).wait(1).to({x:91.4,y:23},0).wait(1).to({x:91.7,y:21},0).wait(1).to({x:92,y:19},0).wait(1).to({x:91.3,y:18.6},0).wait(1).to({x:90.6,y:18.2},0).wait(1).to({x:89.9,y:17.8},0).wait(1).to({x:89.2,y:17.4},0).wait(1).to({x:88.5,y:17},0).wait(1).to({x:87.8,y:16.6},0).wait(1).to({x:87.1,y:16.2},0).wait(1).to({x:86.4,y:15.8},0).wait(1).to({x:85.7,y:15.4},0).wait(1).to({x:85,y:15},0).wait(1).to({x:85.2,y:16.4},0).wait(1).to({x:85.4,y:17.8},0).wait(1).to({x:85.6,y:19.2},0).wait(1).to({x:85.8,y:20.6},0).wait(1).to({x:86,y:22},0).wait(1).to({x:86.2,y:23.4},0).wait(1).to({x:86.4,y:24.8},0).wait(1).to({x:86.6,y:26.2},0).wait(1).to({x:86.8,y:27.6},0).wait(1).to({x:87,y:29},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.5,-72.5,311.5,273);


(lib.Notes3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol6();
	this.instance.setTransform(109,32.7,1,1,0,0,0,64,64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:64.5,x:108.2,y:32.25},0).wait(1).to({x:107.4,y:31.5},0).wait(1).to({x:106.65,y:30.75},0).wait(1).to({x:105.85,y:30},0).wait(1).to({x:105.1,y:29.25},0).wait(1).to({x:104.3,y:28.5},0).wait(1).to({x:103.55,y:27.75},0).wait(1).to({x:102.75,y:27},0).wait(1).to({x:102,y:26.25},0).wait(1).to({x:102.1,y:27.65},0).wait(1).to({x:102.2,y:29.05},0).wait(1).to({x:102.3,y:30.45},0).wait(1).to({x:102.4,y:31.85},0).wait(1).to({x:102.5,y:33.25},0).wait(1).to({x:102.6,y:34.65},0).wait(1).to({x:102.7,y:36.05},0).wait(1).to({x:102.8,y:37.45},0).wait(1).to({x:102.9,y:38.85},0).wait(1).to({x:103,y:40.25},0).wait(1).to({x:104,y:38.85},0).wait(1).to({x:105,y:37.45},0).wait(1).to({x:106,y:36.05},0).wait(1).to({x:107,y:34.65},0).wait(1).to({x:108,y:33.25},0).wait(1).to({x:109,y:31.85},0).wait(1).to({x:110,y:30.45},0).wait(1).to({x:111,y:29.05},0).wait(1).to({x:112,y:27.65},0).wait(1).to({x:113,y:26.25},0).wait(1).to({x:112.6,y:26.95},0).wait(1).to({x:112.2,y:27.6},0).wait(1).to({x:111.8,y:28.3},0).wait(1).to({x:111.4,y:28.95},0).wait(1).to({x:111,y:29.65},0).wait(1).to({x:110.6,y:30.3},0).wait(1).to({x:110.2,y:31},0).wait(1).to({x:109.8,y:31.65},0).wait(1).to({x:109.4,y:32.35},0).wait(1).to({x:109,y:33},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(35,-49,1,1,0,0,0,34.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:35.65,y:-48.3},0).wait(1).to({x:36.3,y:-47.65},0).wait(1).to({x:37,y:-47},0).wait(1).to({x:37.65,y:-46.3},0).wait(1).to({x:38.3,y:-45.65},0).wait(1).to({x:39,y:-45},0).wait(1).to({x:39.65,y:-44.3},0).wait(1).to({x:40.3,y:-43.65},0).wait(1).to({x:41,y:-43},0).wait(1).to({y:-44.3},0).wait(1).to({y:-45.6},0).wait(1).to({y:-46.9},0).wait(1).to({y:-48.2},0).wait(1).to({y:-49.5},0).wait(1).to({y:-50.8},0).wait(1).to({y:-52.1},0).wait(1).to({y:-53.4},0).wait(1).to({y:-54.7},0).wait(1).to({y:-56},0).wait(1).to({x:40.4,y:-56.9},0).wait(1).to({x:39.8,y:-57.8},0).wait(1).to({x:39.2,y:-58.7},0).wait(1).to({x:38.6,y:-59.6},0).wait(1).to({x:38,y:-60.5},0).wait(1).to({x:37.4,y:-61.4},0).wait(1).to({x:36.8,y:-62.3},0).wait(1).to({x:36.2,y:-63.2},0).wait(1).to({x:35.6,y:-64.1},0).wait(1).to({x:35,y:-65},0).wait(1).to({y:-63.4},0).wait(1).to({y:-61.8},0).wait(1).to({y:-60.2},0).wait(1).to({y:-58.6},0).wait(1).to({y:-57},0).wait(1).to({y:-55.4},0).wait(1).to({y:-53.8},0).wait(1).to({y:-52.2},0).wait(1).to({y:-50.6},0).wait(1).to({y:-49},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-112.5,176.5,217.3);


(lib.Notes2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(114,-82,1,1,0,0,0,37,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:113.2,y:-81},0).wait(1).to({x:112.4,y:-80},0).wait(1).to({x:111.65,y:-79},0).wait(1).to({x:110.85,y:-78},0).wait(1).to({x:110.1,y:-77},0).wait(1).to({x:109.3,y:-76},0).wait(1).to({x:108.55,y:-75},0).wait(1).to({x:107.75,y:-74},0).wait(1).to({x:107,y:-73},0).wait(1).to({x:107.2,y:-74.6},0).wait(1).to({x:107.4,y:-76.2},0).wait(1).to({x:107.6,y:-77.8},0).wait(1).to({x:107.8,y:-79.4},0).wait(1).to({x:108,y:-81},0).wait(1).to({x:108.2,y:-82.6},0).wait(1).to({x:108.4,y:-84.2},0).wait(1).to({x:108.6,y:-85.8},0).wait(1).to({x:108.8,y:-87.4},0).wait(1).to({x:109,y:-89},0).wait(1).to({x:109.9,y:-89.6},0).wait(1).to({x:110.8,y:-90.2},0).wait(1).to({x:111.7,y:-90.8},0).wait(1).to({x:112.6,y:-91.4},0).wait(1).to({x:113.5,y:-92},0).wait(1).to({x:114.4,y:-92.6},0).wait(1).to({x:115.3,y:-93.2},0).wait(1).to({x:116.2,y:-93.8},0).wait(1).to({x:117.1,y:-94.4},0).wait(1).to({x:118,y:-95},0).wait(1).to({x:117.6,y:-93.7},0).wait(1).to({x:117.2,y:-92.4},0).wait(1).to({x:116.8,y:-91.1},0).wait(1).to({x:116.4,y:-89.8},0).wait(1).to({x:116,y:-88.5},0).wait(1).to({x:115.6,y:-87.2},0).wait(1).to({x:115.2,y:-85.9},0).wait(1).to({x:114.8,y:-84.6},0).wait(1).to({x:114.4,y:-83.3},0).wait(1).to({x:114,y:-82},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(45,-69,1,1,0,0,0,44.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:46,y:-70.05},0).wait(1).to({x:47,y:-71.1},0).wait(1).to({x:48,y:-72.15},0).wait(1).to({x:49,y:-73.2},0).wait(1).to({x:50,y:-74.25},0).wait(1).to({x:51,y:-75.3},0).wait(1).to({x:52,y:-76.35},0).wait(1).to({x:53,y:-77.4},0).wait(1).to({x:54,y:-78.5},0).wait(1).to({x:53.1,y:-79.3},0).wait(1).to({x:52.2,y:-80.1},0).wait(1).to({x:51.3,y:-80.9},0).wait(1).to({x:50.4,y:-81.7},0).wait(1).to({x:49.5,y:-82.5},0).wait(1).to({x:48.6,y:-83.3},0).wait(1).to({x:47.7,y:-84.1},0).wait(1).to({x:46.8,y:-84.9},0).wait(1).to({x:45.9,y:-85.7},0).wait(1).to({x:45,y:-86.5},0).wait(1).to({x:44.2,y:-85.25},0).wait(1).to({x:43.4,y:-84},0).wait(1).to({x:42.6,y:-82.75},0).wait(1).to({x:41.8,y:-81.5},0).wait(1).to({x:41,y:-80.25},0).wait(1).to({x:40.2,y:-79},0).wait(1).to({x:39.4,y:-77.75},0).wait(1).to({x:38.6,y:-76.5},0).wait(1).to({x:37.8,y:-75.25},0).wait(1).to({x:37,y:-74},0).wait(1).to({x:37.8,y:-73.5},0).wait(1).to({x:38.6,y:-73},0).wait(1).to({x:39.4,y:-72.5},0).wait(1).to({x:40.2,y:-72},0).wait(1).to({x:41,y:-71.5},0).wait(1).to({x:41.8,y:-71},0).wait(1).to({x:42.6,y:-70.5},0).wait(1).to({x:43.4,y:-70},0).wait(1).to({x:44.2,y:-69.5},0).wait(1).to({x:45,y:-69},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-155,162.5,154.5);


(lib.Notes1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Note2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(86,-10,1,1,0,0,0,47.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:86.1,y:-9.4},0).wait(1).to({x:86.2,y:-8.85},0).wait(1).to({x:86.3,y:-8.3},0).wait(1).to({x:86.4,y:-7.75},0).wait(1).to({x:86.55,y:-7.2},0).wait(1).to({x:86.65,y:-6.65},0).wait(1).to({x:86.75,y:-6.1},0).wait(1).to({x:86.85,y:-5.55},0).wait(1).to({x:87,y:-5},0).wait(1).to({x:87.3,y:-5.9},0).wait(1).to({x:87.6,y:-6.8},0).wait(1).to({x:87.9,y:-7.7},0).wait(1).to({x:88.2,y:-8.6},0).wait(1).to({x:88.5,y:-9.5},0).wait(1).to({x:88.8,y:-10.4},0).wait(1).to({x:89.1,y:-11.3},0).wait(1).to({x:89.4,y:-12.2},0).wait(1).to({x:89.7,y:-13.1},0).wait(1).to({x:90,y:-14},0).wait(1).to({x:89.4,y:-12.9},0).wait(1).to({x:88.8,y:-11.8},0).wait(1).to({x:88.2,y:-10.7},0).wait(1).to({x:87.6,y:-9.6},0).wait(1).to({x:87,y:-8.5},0).wait(1).to({x:86.4,y:-7.4},0).wait(1).to({x:85.8,y:-6.3},0).wait(1).to({x:85.2,y:-5.2},0).wait(1).to({x:84.6,y:-4.1},0).wait(1).to({x:84,y:-3},0).wait(1).to({x:84.2,y:-3.7},0).wait(1).to({x:84.4,y:-4.4},0).wait(1).to({x:84.6,y:-5.1},0).wait(1).to({x:84.8,y:-5.8},0).wait(1).to({x:85,y:-6.5},0).wait(1).to({x:85.2,y:-7.2},0).wait(1).to({x:85.4,y:-7.9},0).wait(1).to({x:85.6,y:-8.6},0).wait(1).to({x:85.8,y:-9.3},0).wait(1).to({x:86,y:-10},0).wait(1));

	// Note1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(29,-39,1,1,0,0,0,29,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-39.85},0).wait(1).to({y:-40.75},0).wait(1).to({y:-41.65},0).wait(1).to({y:-42.55},0).wait(1).to({y:-43.4},0).wait(1).to({y:-44.3},0).wait(1).to({y:-45.2},0).wait(1).to({y:-46.1},0).wait(1).to({y:-47},0).wait(1).to({y:-46.4},0).wait(1).to({y:-45.8},0).wait(1).to({y:-45.2},0).wait(1).to({y:-44.6},0).wait(1).to({y:-44},0).wait(1).to({y:-43.4},0).wait(1).to({y:-42.8},0).wait(1).to({y:-42.2},0).wait(1).to({y:-41.6},0).wait(1).to({y:-41},0).wait(1).to({y:-40},0).wait(1).to({y:-39},0).wait(1).to({y:-38},0).wait(1).to({y:-37},0).wait(1).to({y:-36},0).wait(1).to({y:-35},0).wait(1).to({y:-34},0).wait(1).to({y:-33},0).wait(1).to({y:-32},0).wait(1).to({y:-31},0).wait(1).to({y:-31.8},0).wait(1).to({y:-32.6},0).wait(1).to({y:-33.4},0).wait(1).to({y:-34.2},0).wait(1).to({y:-35.05},0).wait(1).to({y:-35.85},0).wait(1).to({y:-36.65},0).wait(1).to({y:-37.45},0).wait(1).to({y:-38.25},0).wait(1).to({y:-39.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-85.5,137.5,129.5);


(lib.glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Glow_();
	this.instance.setTransform(0,-0.05,1,1,0,0,0,352.8,768.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.9848},0).wait(1).to({alpha:0.9696},0).wait(1).to({alpha:0.9543},0).wait(1).to({alpha:0.9391},0).wait(1).to({alpha:0.9239},0).wait(1).to({alpha:0.9087},0).wait(1).to({alpha:0.8935},0).wait(1).to({alpha:0.8783},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.8478},0).wait(1).to({alpha:0.8326},0).wait(1).to({alpha:0.8174},0).wait(1).to({alpha:0.8022},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.7717},0).wait(1).to({alpha:0.7565},0).wait(1).to({alpha:0.7413},0).wait(1).to({alpha:0.7261},0).wait(1).to({alpha:0.7109},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.6804},0).wait(1).to({alpha:0.6652},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.6646},0).wait(1).to({alpha:0.6792},0).wait(1).to({alpha:0.6938},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.7229},0).wait(1).to({alpha:0.7375},0).wait(1).to({alpha:0.7521},0).wait(1).to({alpha:0.7667},0).wait(1).to({alpha:0.7813},0).wait(1).to({alpha:0.7958},0).wait(1).to({alpha:0.8104},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.8396},0).wait(1).to({alpha:0.8542},0).wait(1).to({alpha:0.8687},0).wait(1).to({alpha:0.8833},0).wait(1).to({alpha:0.8979},0).wait(1).to({alpha:0.9125},0).wait(1).to({alpha:0.9271},0).wait(1).to({alpha:0.9417},0).wait(1).to({alpha:0.9563},0).wait(1).to({alpha:0.9708},0).wait(1).to({alpha:0.9854},0).wait(1).to({alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.8,-768.4,705.7,1536.8);


// stage content:
(lib.author = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//piano
		let PianoBtn = this.piano_btn;
		let PianoFill = this.piano_fill;
		
		PianoFill.stop();
		PianoBtn.alpha = 0.01;
		let PianoTick = null;
		
		PianoBtn.addEventListener("mouseover", fillPiano);
		PianoBtn.addEventListener("mouseout", emptyPiano);
		
		function fillPiano() {
			if (PianoTick) {
				PianoFill.removeEventListener("tick", PianoTick);
			}
		
			PianoFill.gotoAndPlay(1);
			PianoTick = function checkFrame() {
				if (PianoFill.currentFrame >= 20) {
					PianoFill.gotoAndStop(20);
					PianoFill.removeEventListener("tick", PianoTick);
					PianoTick = null;
				}
			};
			PianoFill.addEventListener("tick", PianoTick);
		}
		
		function emptyPiano() {
			if (PianoTick) {
				PianoFill.removeEventListener("tick", PianoTick);
				PianoTick = null;
			}
			PianoFill.gotoAndPlay(21);
			let PianoEmptyTick = function checkFrame() {
				if (PianoFill.currentFrame >= 39) {
					PianoFill.gotoAndStop(0);
					PianoFill.removeEventListener("tick", PianoEmptyTick);
				}
			};
			PianoFill.addEventListener("tick", PianoEmptyTick);
		}
		
		//paint
		let PaintBtn = this.paint_btn;
		let PaintFill = this.paint_fill;
		
		PaintFill.stop();
		PaintBtn.alpha = 0.01;
		let PaintTick = null;
		
		PaintBtn.addEventListener("mouseover", fillPaint);
		PaintBtn.addEventListener("mouseout", emptyPaint);
		
		function fillPaint() {
			if (PaintTick) {
				PaintFill.removeEventListener("tick", PaintTick);
			}
		
			PaintFill.gotoAndPlay(1);
			PaintTick = function checkFrame() {
				if (PaintFill.currentFrame >= 20) {
					PaintFill.gotoAndStop(20);
					PaintFill.removeEventListener("tick", PaintTick);
					PaintTick = null;
				}
			};
			PaintFill.addEventListener("tick", PaintTick);
		}
		
		function emptyPaint() {
			if (PaintTick) {
				PaintFill.removeEventListener("tick", PaintTick);
				PaintTick = null;
			}
			PaintFill.gotoAndPlay(21);
			let PaintEmptyTick = function checkFrame() {
				if (PaintFill.currentFrame >= 39) {
					PaintFill.gotoAndStop(0);
					PaintFill.removeEventListener("tick", PaintEmptyTick);
				}
			};
			PaintFill.addEventListener("tick", PaintEmptyTick);
		}
		
		//photo
		let PhotoBtn = this.photo_btn;
		let PhotoFill = this.photo_fill;
		
		PhotoFill.stop();
		PhotoBtn.alpha = 0.01;
		let PhotoTick = null;
		
		PhotoBtn.addEventListener("mouseover", fillPhoto);
		PhotoBtn.addEventListener("mouseout", emptyPhoto);
		
		function fillPhoto() {
			if (PhotoTick) {
				PhotoFill.removeEventListener("tick", PhotoTick);
			}
		
			PhotoFill.gotoAndPlay(1);
			PhotoTick = function checkFrame() {
				if (PhotoFill.currentFrame >= 20) {
					PhotoFill.gotoAndStop(20);
					PhotoFill.removeEventListener("tick", PhotoTick);
					PhotoTick = null;
				}
			};
			PhotoFill.addEventListener("tick", PhotoTick);
		}
		
		function emptyPhoto() {
			if (PhotoTick) {
				PhotoFill.removeEventListener("tick", PhotoTick);
				PhotoTick = null;
			}
			PhotoFill.gotoAndPlay(21);
			let PhotoEmptyTick = function checkFrame() {
				if (PhotoFill.currentFrame >= 39) {
					PhotoFill.gotoAndStop(0);
					PhotoFill.removeEventListener("tick", PhotoEmptyTick);
				}
			};
			PhotoFill.addEventListener("tick", PhotoEmptyTick);
		}
		
		//read
		let ReadBtn = this.read_btn;
		let ReadFill = this.read_fill;
		
		ReadFill.stop();
		ReadBtn.alpha = 0.01;
		let ReadTick = null;
		
		ReadBtn.addEventListener("mouseover", fillRead);
		ReadBtn.addEventListener("mouseout", emptyRead);
		
		function fillRead() {
			if (ReadTick) {
				ReadFill.removeEventListener("tick", ReadTick);
			}
		
			ReadFill.gotoAndPlay(1);
			ReadTick = function checkFrame() {
				if (ReadFill.currentFrame >= 20) {
					ReadFill.gotoAndStop(20);
					ReadFill.removeEventListener("tick", ReadTick);
					ReadTick = null;
				}
			};
			ReadFill.addEventListener("tick", ReadTick);
		}
		
		function emptyRead() {
			if (ReadTick) {
				ReadFill.removeEventListener("tick", ReadTick);
				ReadTick = null;
			}
			ReadFill.gotoAndPlay(21);
			let ReadEmptyTick = function checkFrame() {
				if (ReadFill.currentFrame >= 39) {
					ReadFill.gotoAndStop(0);
					ReadFill.removeEventListener("tick", ReadEmptyTick);
				}
			};
			ReadFill.addEventListener("tick", ReadEmptyTick);
		}
		
		//game
		let GameBtn = this.game_btn;
		let GameFill = this.game_fill;
		
		GameFill.stop();
		GameBtn.alpha = 0.01;
		let GameTick = null;
		
		GameBtn.addEventListener("mouseover", fillGame);
		GameBtn.addEventListener("mouseout", emptyGame);
		
		function fillGame() {
			if (GameTick) {
				GameFill.removeEventListener("tick", GameTick);
			}
		
			GameFill.gotoAndPlay(1);
			GameTick = function checkFrame() {
				if (GameFill.currentFrame >= 20) {
					GameFill.gotoAndStop(20);
					GameFill.removeEventListener("tick", GameTick);
					GameTick = null;
				}
			};
			GameFill.addEventListener("tick", GameTick);
		}
		
		function emptyGame() {
			if (GameTick) {
				GameFill.removeEventListener("tick", GameTick);
				GameTick = null;
			}
			GameFill.gotoAndPlay(21);
			let GameEmptyTick = function checkFrame() {
				if (GameFill.currentFrame >= 39) {
					GameFill.gotoAndStop(0);
					GameFill.removeEventListener("tick", GameEmptyTick);
				}
			};
			GameFill.addEventListener("tick", GameEmptyTick);
		}
		
		
		//draw
		let DrawBtn = this.draw_btn;
		let DrawFill = this.draw_fill;
		
		DrawFill.stop();
		DrawBtn.alpha = 0.01;
		let DrawTick = null;
		
		DrawBtn.addEventListener("mouseover", fillDraw);
		DrawBtn.addEventListener("mouseout", emptyDraw);
		
		function fillDraw() {
			if (DrawTick) {
				DrawFill.removeEventListener("tick", DrawTick);
			}
		
			DrawFill.gotoAndPlay(1);
			DrawTick = function checkFrame() {
				if (DrawFill.currentFrame >= 20) {
					DrawFill.gotoAndStop(20);
					DrawFill.removeEventListener("tick", DrawTick);
					DrawTick = null;
				}
			};
			DrawFill.addEventListener("tick", DrawTick);
		}
		
		function emptyDraw() {
			if (DrawTick) {
				DrawFill.removeEventListener("tick", DrawTick);
				DrawTick = null;
			}
			DrawFill.gotoAndPlay(21);
			let DrawEmptyTick = function checkFrame() {
				if (DrawFill.currentFrame >= 39) {
					DrawFill.gotoAndStop(0);
					DrawFill.removeEventListener("tick", DrawEmptyTick);
				}
			};
			DrawFill.addEventListener("tick", DrawEmptyTick);
		}
		
		//artists
		let Art1 = this.artist_1;
		Art1.alpha = 0;
		
		let ArtBtn1 = this.art_btn_1;
		ArtBtn1.alpha = 0.01;
		
		ArtBtn1.addEventListener("click", Art1Fade.bind(this));
		
		function Art1Fade() {
		    createjs.Tween.removeTweens(Art1);
		    
		    if (Art1.alpha <= 0.5) {
		        createjs.Tween.get(Art1)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut);
		    } else { 
		        createjs.Tween.get(Art1)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut);
		    }
		}
		
		let Art2 = this.artist_2;
		Art2.alpha = 0;
		
		let ArtBtn2 = this.art_btn_2;
		ArtBtn2.alpha = 0.01;
		
		ArtBtn2.addEventListener("click", Art2Fade.bind(this));
		
		function Art2Fade() {
		    createjs.Tween.removeTweens(Art2);
		    
		    if (Art2.alpha <= 0.5) {
		        createjs.Tween.get(Art2)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut);
		    } else { 
		        createjs.Tween.get(Art2)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut);
		    }
		}
		
		let Art3 = this.artist_3;
		Art3.alpha = 0;
		
		let ArtBtn3 = this.art_btn_3;
		ArtBtn3.alpha = 0.01;
		
		ArtBtn3.addEventListener("click", Art3Fade.bind(this));
		
		function Art3Fade() {
		    createjs.Tween.removeTweens(Art3);
		    
		    if (Art3.alpha <= 0.5) {
		        createjs.Tween.get(Art3)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut);
		    } else { 
		        createjs.Tween.get(Art3)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut);
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Names
	this.artist_1 = new lib.Artist_1_1();
	this.artist_1.name = "artist_1";
	this.artist_1.setTransform(1156.9,1387.6);

	this.artist_2 = new lib.Artist_2_1();
	this.artist_2.name = "artist_2";
	this.artist_2.setTransform(1135,1456.15,0.8353,0.8353);

	this.artist_3 = new lib.Artist_3_1();
	this.artist_3.name = "artist_3";
	this.artist_3.setTransform(1129.05,1520,0.8027,0.8027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.artist_3},{t:this.artist_2},{t:this.artist_1}]}).wait(1));

	// Buttons
	this.art_btn_1 = new lib.Art_Btn();
	this.art_btn_1.name = "art_btn_1";
	this.art_btn_1.setTransform(1034,1378);
	new cjs.ButtonHelper(this.art_btn_1, 0, 1, 1);

	this.art_btn_2 = new lib.Art_Btn();
	this.art_btn_2.name = "art_btn_2";
	this.art_btn_2.setTransform(1008,1446);
	new cjs.ButtonHelper(this.art_btn_2, 0, 1, 1);

	this.art_btn_3 = new lib.Art_Btn();
	this.art_btn_3.name = "art_btn_3";
	this.art_btn_3.setTransform(1025,1517.5);
	new cjs.ButtonHelper(this.art_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.art_btn_3},{t:this.art_btn_2},{t:this.art_btn_1}]}).wait(1));

	// Fill_Bars
	this.draw_fill = new lib.Fill_Draw_1();
	this.draw_fill.name = "draw_fill";
	this.draw_fill.setTransform(433.75,1499.4);

	this.game_fill = new lib.Fill_Game_1();
	this.game_fill.name = "game_fill";
	this.game_fill.setTransform(387.15,1515.55);

	this.read_fill = new lib.Fill_Read_1();
	this.read_fill.name = "read_fill";
	this.read_fill.setTransform(338.05,1471.8);

	this.photo_fill = new lib.Fill_Photo_1();
	this.photo_fill.name = "photo_fill";
	this.photo_fill.setTransform(290,1425);

	this.paint_fill = new lib.Fill_Paint_1();
	this.paint_fill.name = "paint_fill";
	this.paint_fill.setTransform(245.1,1450.65);

	this.piano_fill = new lib.Fill_Piano_1();
	this.piano_fill.name = "piano_fill";
	this.piano_fill.setTransform(196,1400,0.7429,0.7075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piano_fill},{t:this.paint_fill},{t:this.photo_fill},{t:this.read_fill},{t:this.game_fill},{t:this.draw_fill}]}).wait(1));

	// Buttons
	this.draw_btn = new lib.Hobbie_Button();
	this.draw_btn.name = "draw_btn";
	this.draw_btn.setTransform(407,1336.3);
	new cjs.ButtonHelper(this.draw_btn, 0, 1, 1);

	this.game_btn = new lib.Hobbie_Button();
	this.game_btn.name = "game_btn";
	this.game_btn.setTransform(361,1336.3);
	new cjs.ButtonHelper(this.game_btn, 0, 1, 1);

	this.read_btn = new lib.Hobbie_Button();
	this.read_btn.name = "read_btn";
	this.read_btn.setTransform(315,1336.3);
	new cjs.ButtonHelper(this.read_btn, 0, 1, 1);

	this.photo_btn = new lib.Hobbie_Button();
	this.photo_btn.name = "photo_btn";
	this.photo_btn.setTransform(269,1336.3);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 1);

	this.paint_btn = new lib.Hobbie_Button();
	this.paint_btn.name = "paint_btn";
	this.paint_btn.setTransform(223,1336.3);
	new cjs.ButtonHelper(this.paint_btn, 0, 1, 1);

	this.piano_btn = new lib.Hobbie_Button();
	this.piano_btn.name = "piano_btn";
	this.piano_btn.setTransform(177,1336.3);
	new cjs.ButtonHelper(this.piano_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piano_btn},{t:this.paint_btn},{t:this.photo_btn},{t:this.read_btn},{t:this.game_btn},{t:this.draw_btn}]}).wait(1));

	// Music_Notes
	this.instance = new lib.Notes4();
	this.instance.setTransform(438.9,1780.55,0.7264,0.7264,0,0,0,188.9,69.5);

	this.instance_1 = new lib.Notes3();
	this.instance_1.setTransform(1331.3,1194.1,0.6241,0.6241,0,0,0,86.9,0.6);

	this.instance_2 = new lib.Notes2();
	this.instance_2.setTransform(596.65,540,0.8022,0.8022,0,0,0,75.8,-69);

	this.instance_3 = new lib.Notes1();
	this.instance_3.setTransform(224.75,95.1,0.8124,0.8124,0,0,0,66.7,-20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// author_static
	this.instance_4 = new lib.author_static();
	this.instance_4.setTransform(46.8,-5.95,0.7404,0.7404);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// author_glow
	this.instance_5 = new lib.glow();
	this.instance_5.setTransform(739.15,1288.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// author_shadows
	this.instance_6 = new lib.author_shadows();
	this.instance_6.setTransform(44.9,-13.95,0.7438,0.7438);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(794.9,986.1,678.1999999999999,1076);
// library properties:
lib.properties = {
	id: '8E91B772C861D645A49460D207899497',
	width: 1500,
	height: 2000,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"images/author_glow.png?1747245351907", id:"author_glow"},
		{src:"images/author_shadows.png?1747245351907", id:"author_shadows"},
		{src:"images/author_static.png?1747245351907", id:"author_static"},
		{src:"images/author_atlas_1.png?1747245351861", id:"author_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(author_canvas) {
	createjs.Stage.call(this, author_canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8E91B772C861D645A49460D207899497'] = {
	getStage: function() { return exportRoot.author_stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		author_stage.scaleX = pRatio*sRatio;			
		author_stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		author_stage.tickOnUpdate = false;            
		author_stage.update();            
		author_stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = author_stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;