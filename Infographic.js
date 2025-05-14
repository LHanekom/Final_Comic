(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Infographic_atlas_1", frames: [[1344,576,423,70],[1344,648,369,70],[1344,504,530,70],[1715,648,326,70],[1344,392,375,80],[1560,720,192,45],[0,773,102,45],[1754,720,188,45],[1769,576,217,45],[0,0,900,771],[104,773,97,45],[1876,504,164,45],[1504,767,145,45],[1344,767,158,45],[1344,720,214,45],[1651,767,122,45],[1775,767,109,45],[902,0,440,390],[1344,0,440,390],[902,392,440,390],[1944,720,70,70],[1786,0,250,250],[1786,252,250,250]]}
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



(lib.Bonus_1 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bonus_2 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bonus_3 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bonus_4 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bonus_5 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.E_DXT = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.E_INT = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.E_STR = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.E_WIS = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Eclipse_Glow = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Glow = function() {
	this.initialize(img.Glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,5000);


(lib.L_CHA = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.L_CON = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.L_DXT = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.L_INT = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.L_LCK = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.L_STR = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.L_WIS = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Lights_1 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Lights_2 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Lights_3 = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Plus = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.shadows = function() {
	this.initialize(img.shadows);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,5000);


(lib.Star_Inner = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Star_Outer = function() {
	this.initialize(ss["Infographic_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Static = function() {
	this.initialize(img.Static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,5000);// helper functions:

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
	this.instance = new lib.Eclipse_Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,900,771), null);


(lib.Stat_Btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0)").ss(0.1,1,1).p("A7VjgMA2rAAAIAAHBMg2rAAAg");
	this.shape.setTransform(124.9989,22.5,0.7143,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A7VDhIAAnBMA2rAAAIAAHBg");
	this.shape_1.setTransform(124.9989,22.5,0.7143,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,252,47);


(lib.Star_Outer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Star_Outer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Star_Outer_1, new cjs.Rectangle(0,0,250,250), null);


(lib.Star_Inner_ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Star_Inner();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Star_Inner_, new cjs.Rectangle(0,0,250,250), null);


(lib.Star_Btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0)").ss(0.1,1,1).p("AoWnGIQtAAIAAONIwtAAg");
	this.shape.setTransform(124.9983,124.9885,2.3368,2.7474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoWHHIAAuNIQtAAIAAONg");
	this.shape_1.setTransform(124.9983,124.9885,2.3368,2.7474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,252,252);


(lib.Lights = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Lights_1();
	this.instance.setTransform(-220,-195);

	this.instance_1 = new lib.Lights_2();
	this.instance_1.setTransform(-220,-195);

	this.instance_2 = new lib.Lights_3();
	this.instance_2.setTransform(-220,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},15).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-195,440,390);


(lib.L_Wis = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-175.95,y:-1.9499}).wait(1).to({graphics:mask_graphics_1,x:-175.95,y:-1.9499}).wait(1).to({graphics:mask_graphics_2,x:-169.8417,y:-1.953}).wait(1).to({graphics:mask_graphics_3,x:-163.7334,y:-1.9557}).wait(1).to({graphics:mask_graphics_4,x:-157.6251,y:-1.9584}).wait(1).to({graphics:mask_graphics_5,x:-151.5168,y:-1.9611}).wait(1).to({graphics:mask_graphics_6,x:-145.4085,y:-1.9638}).wait(1).to({graphics:mask_graphics_7,x:-139.3002,y:-1.9665}).wait(1).to({graphics:mask_graphics_8,x:-133.1919,y:-1.9692}).wait(1).to({graphics:mask_graphics_9,x:-127.0836,y:-1.9724}).wait(1).to({graphics:mask_graphics_10,x:-120.9753,y:-1.9751}).wait(1).to({graphics:mask_graphics_11,x:-114.867,y:-1.9778}).wait(1).to({graphics:mask_graphics_12,x:-108.7583,y:-1.9805}).wait(1).to({graphics:mask_graphics_13,x:-102.6499,y:-1.9832}).wait(1).to({graphics:mask_graphics_14,x:-96.5417,y:-1.9863}).wait(1).to({graphics:mask_graphics_15,x:-90.4334,y:-1.989}).wait(1).to({graphics:mask_graphics_16,x:-84.3251,y:-1.9917}).wait(1).to({graphics:mask_graphics_17,x:-78.2168,y:-1.9944}).wait(1).to({graphics:mask_graphics_18,x:-72.108,y:-1.9971}).wait(1).to({graphics:mask_graphics_19,x:-65.9997,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-71.4978,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-76.995,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-82.4922,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-87.9903,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-93.4875,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-98.9847,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-104.4828,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-109.98,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-115.4772,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-120.9753,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-126.4725,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-131.9697,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-137.4678,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-142.965,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-148.4622,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-153.9603,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-159.4575,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-164.9547,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-170.4528,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-175.95,y:-1.9998}).wait(1));

	// Fill
	this.instance = new lib.L_WIS();
	this.instance.setTransform(-54.5,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-22.5,109,41.1);


(lib.L_Str = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-189.9999,y:-1.4999}).wait(1).to({graphics:mask_graphics_1,x:-189.9999,y:-1.4999}).wait(1).to({graphics:mask_graphics_2,x:-182.7779,y:-1.5278}).wait(1).to({graphics:mask_graphics_3,x:-175.5558,y:-1.5557}).wait(1).to({graphics:mask_graphics_4,x:-168.3333,y:-1.5831}).wait(1).to({graphics:mask_graphics_5,x:-161.1108,y:-1.611}).wait(1).to({graphics:mask_graphics_6,x:-153.8892,y:-1.6389}).wait(1).to({graphics:mask_graphics_7,x:-146.6667,y:-1.6668}).wait(1).to({graphics:mask_graphics_8,x:-139.4442,y:-1.6943}).wait(1).to({graphics:mask_graphics_9,x:-132.2222,y:-1.7222}).wait(1).to({graphics:mask_graphics_10,x:-125.0001,y:-1.7501}).wait(1).to({graphics:mask_graphics_11,x:-117.7776,y:-1.778}).wait(1).to({graphics:mask_graphics_12,x:-110.5556,y:-1.8054}).wait(1).to({graphics:mask_graphics_13,x:-103.3335,y:-1.8333}).wait(1).to({graphics:mask_graphics_14,x:-96.111,y:-1.8612}).wait(1).to({graphics:mask_graphics_15,x:-88.889,y:-1.8891}).wait(1).to({graphics:mask_graphics_16,x:-81.6669,y:-1.9166}).wait(1).to({graphics:mask_graphics_17,x:-74.4444,y:-1.9445}).wait(1).to({graphics:mask_graphics_18,x:-67.2219,y:-1.9724}).wait(1).to({graphics:mask_graphics_19,x:-60.0003,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-60.0003,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-66.4182,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-72.837,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-79.2554,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-85.6737,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-92.0921,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-98.5104,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-104.9292,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-111.3471,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-117.7659,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-124.1843,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-130.6026,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-137.021,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-143.4393,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-149.8581,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-156.276,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-162.6948,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-169.1132,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-175.5315,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-181.9503,y:-1.9998}).wait(1));

	// Bar
	this.instance = new lib.L_STR();
	this.instance.setTransform(-61,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-22.5,122,41.5);


(lib.L_Lck = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-227.9997,y:-1.9499}).wait(1).to({graphics:mask_graphics_1,x:-227.9997,y:-1.9499}).wait(1).to({graphics:mask_graphics_2,x:-216.1112,y:-1.9499}).wait(1).to({graphics:mask_graphics_3,x:-204.2222,y:-1.9499}).wait(1).to({graphics:mask_graphics_4,x:-192.3336,y:-1.9499}).wait(1).to({graphics:mask_graphics_5,x:-180.4446,y:-1.9499}).wait(1).to({graphics:mask_graphics_6,x:-168.5556,y:-1.9499}).wait(1).to({graphics:mask_graphics_7,x:-156.6666,y:-1.9499}).wait(1).to({graphics:mask_graphics_8,x:-144.7776,y:-1.9499}).wait(1).to({graphics:mask_graphics_9,x:-132.8886,y:-1.9499}).wait(1).to({graphics:mask_graphics_10,x:-121,y:-1.9499}).wait(1).to({graphics:mask_graphics_11,x:-109.1111,y:-1.9499}).wait(1).to({graphics:mask_graphics_12,x:-97.2225,y:-1.9499}).wait(1).to({graphics:mask_graphics_13,x:-85.3335,y:-1.9499}).wait(1).to({graphics:mask_graphics_14,x:-73.4445,y:-1.9499}).wait(1).to({graphics:mask_graphics_15,x:-61.5555,y:-1.9499}).wait(1).to({graphics:mask_graphics_16,x:-49.6665,y:-1.9499}).wait(1).to({graphics:mask_graphics_17,x:-37.7775,y:-1.9499}).wait(1).to({graphics:mask_graphics_18,x:-25.889,y:-1.9499}).wait(1).to({graphics:mask_graphics_19,x:-14,y:-1.9499}).wait(1).to({graphics:mask_graphics_20,x:-24.7001,y:-1.9499}).wait(1).to({graphics:mask_graphics_21,x:-35.3997,y:-1.9499}).wait(1).to({graphics:mask_graphics_22,x:-46.0998,y:-1.9499}).wait(1).to({graphics:mask_graphics_23,x:-56.7999,y:-1.9499}).wait(1).to({graphics:mask_graphics_24,x:-67.5,y:-1.9499}).wait(1).to({graphics:mask_graphics_25,x:-78.2001,y:-1.9499}).wait(1).to({graphics:mask_graphics_26,x:-88.9002,y:-1.9499}).wait(1).to({graphics:mask_graphics_27,x:-99.6003,y:-1.9499}).wait(1).to({graphics:mask_graphics_28,x:-110.3,y:-1.9499}).wait(1).to({graphics:mask_graphics_29,x:-121,y:-1.9499}).wait(1).to({graphics:mask_graphics_30,x:-131.6997,y:-1.9499}).wait(1).to({graphics:mask_graphics_31,x:-142.3998,y:-1.9499}).wait(1).to({graphics:mask_graphics_32,x:-153.0999,y:-1.9499}).wait(1).to({graphics:mask_graphics_33,x:-163.8,y:-1.9499}).wait(1).to({graphics:mask_graphics_34,x:-174.5001,y:-1.9499}).wait(1).to({graphics:mask_graphics_35,x:-185.2002,y:-1.9499}).wait(1).to({graphics:mask_graphics_36,x:-195.9003,y:-1.9499}).wait(1).to({graphics:mask_graphics_37,x:-206.6,y:-1.9499}).wait(1).to({graphics:mask_graphics_38,x:-217.3001,y:-1.9499}).wait(1).to({graphics:mask_graphics_39,x:-227.9997,y:-1.9499}).wait(1));

	// Fill
	this.instance = new lib.L_LCK();
	this.instance.setTransform(-107,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-22.4,214,41);


(lib.L_Int = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-199.9998,y:-1.9998}).wait(1).to({graphics:mask_graphics_1,x:-199.9998,y:-1.9998}).wait(1).to({graphics:mask_graphics_2,x:-191.2221,y:-2.003}).wait(1).to({graphics:mask_graphics_3,x:-182.4444,y:-2.0057}).wait(1).to({graphics:mask_graphics_4,x:-173.6667,y:-2.0084}).wait(1).to({graphics:mask_graphics_5,x:-164.889,y:-2.0111}).wait(1).to({graphics:mask_graphics_6,x:-156.1113,y:-2.0138}).wait(1).to({graphics:mask_graphics_7,x:-147.3336,y:-2.0169}).wait(1).to({graphics:mask_graphics_8,x:-138.5555,y:-2.0196}).wait(1).to({graphics:mask_graphics_9,x:-129.7778,y:-2.0223}).wait(1).to({graphics:mask_graphics_10,x:-121,y:-2.025}).wait(1).to({graphics:mask_graphics_11,x:-112.2219,y:-2.0277}).wait(1).to({graphics:mask_graphics_12,x:-103.4442,y:-2.0304}).wait(1).to({graphics:mask_graphics_13,x:-94.6665,y:-2.0331}).wait(1).to({graphics:mask_graphics_14,x:-85.8888,y:-2.0363}).wait(1).to({graphics:mask_graphics_15,x:-77.1111,y:-2.039}).wait(1).to({graphics:mask_graphics_16,x:-68.3334,y:-2.0417}).wait(1).to({graphics:mask_graphics_17,x:-59.5557,y:-2.0444}).wait(1).to({graphics:mask_graphics_18,x:-50.778,y:-2.0471}).wait(1).to({graphics:mask_graphics_19,x:-42.0003,y:-2.0502}).wait(1).to({graphics:mask_graphics_20,x:-49.8978,y:-2.0502}).wait(1).to({graphics:mask_graphics_21,x:-57.7953,y:-2.0502}).wait(1).to({graphics:mask_graphics_22,x:-65.6928,y:-2.0502}).wait(1).to({graphics:mask_graphics_23,x:-73.5903,y:-2.0502}).wait(1).to({graphics:mask_graphics_24,x:-81.4878,y:-2.0502}).wait(1).to({graphics:mask_graphics_25,x:-89.3853,y:-2.0502}).wait(1).to({graphics:mask_graphics_26,x:-97.2828,y:-2.0502}).wait(1).to({graphics:mask_graphics_27,x:-105.1803,y:-2.0502}).wait(1).to({graphics:mask_graphics_28,x:-113.0778,y:-2.0502}).wait(1).to({graphics:mask_graphics_29,x:-120.9753,y:-2.0502}).wait(1).to({graphics:mask_graphics_30,x:-128.8728,y:-2.0502}).wait(1).to({graphics:mask_graphics_31,x:-136.7703,y:-2.0502}).wait(1).to({graphics:mask_graphics_32,x:-144.6678,y:-2.0502}).wait(1).to({graphics:mask_graphics_33,x:-152.5653,y:-2.0502}).wait(1).to({graphics:mask_graphics_34,x:-160.4628,y:-2.0502}).wait(1).to({graphics:mask_graphics_35,x:-168.3603,y:-2.0502}).wait(1).to({graphics:mask_graphics_36,x:-176.2578,y:-2.0502}).wait(1).to({graphics:mask_graphics_37,x:-184.1553,y:-2.0502}).wait(1).to({graphics:mask_graphics_38,x:-192.0528,y:-2.0502}).wait(1).to({graphics:mask_graphics_39,x:-199.9503,y:-2.0502}).wait(1));

	// Fill
	this.instance = new lib.L_INT();
	this.instance.setTransform(-79,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-22.5,158,41);


(lib.L_Dxt = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-193.95,y:-1.9998}).wait(1).to({graphics:mask_graphics_1,x:-193.95,y:-1.9998}).wait(1).to({graphics:mask_graphics_2,x:-185.8419,y:-1.9998}).wait(1).to({graphics:mask_graphics_3,x:-177.7334,y:-1.9998}).wait(1).to({graphics:mask_graphics_4,x:-169.6248,y:-1.9998}).wait(1).to({graphics:mask_graphics_5,x:-161.5167,y:-1.9998}).wait(1).to({graphics:mask_graphics_6,x:-153.4086,y:-1.9998}).wait(1).to({graphics:mask_graphics_7,x:-145.3001,y:-1.9998}).wait(1).to({graphics:mask_graphics_8,x:-137.1915,y:-1.9998}).wait(1).to({graphics:mask_graphics_9,x:-129.0834,y:-1.9998}).wait(1).to({graphics:mask_graphics_10,x:-120.9753,y:-1.9998}).wait(1).to({graphics:mask_graphics_11,x:-112.8667,y:-1.9998}).wait(1).to({graphics:mask_graphics_12,x:-104.7582,y:-1.9998}).wait(1).to({graphics:mask_graphics_13,x:-96.6501,y:-1.9998}).wait(1).to({graphics:mask_graphics_14,x:-88.542,y:-1.9998}).wait(1).to({graphics:mask_graphics_15,x:-80.433,y:-1.9998}).wait(1).to({graphics:mask_graphics_16,x:-72.3249,y:-1.9998}).wait(1).to({graphics:mask_graphics_17,x:-64.2168,y:-1.9998}).wait(1).to({graphics:mask_graphics_18,x:-56.1083,y:-1.9998}).wait(1).to({graphics:mask_graphics_19,x:-47.9997,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-55.2978,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-62.595,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-69.8922,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-77.1903,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-84.4875,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-91.7847,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-99.0828,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-106.38,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-113.6772,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-120.9753,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-128.2725,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-135.5697,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-142.8678,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-150.165,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-157.4622,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-164.7603,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-172.0575,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-179.3547,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-186.6528,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-193.95,y:-1.9998}).wait(1));

	// Fill
	this.instance = new lib.L_DXT();
	this.instance.setTransform(-72.5,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-22.5,145,41);


(lib.L_Con = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-202.95,y:2.0502}).wait(1).to({graphics:mask_graphics_1,x:-202.95,y:2.0502}).wait(1).to({graphics:mask_graphics_2,x:-193.8389,y:2.0502}).wait(1).to({graphics:mask_graphics_3,x:-184.7277,y:2.0502}).wait(1).to({graphics:mask_graphics_4,x:-175.617,y:2.0502}).wait(1).to({graphics:mask_graphics_5,x:-166.5054,y:2.0502}).wait(1).to({graphics:mask_graphics_6,x:-157.3947,y:2.0502}).wait(1).to({graphics:mask_graphics_7,x:-148.2831,y:2.0502}).wait(1).to({graphics:mask_graphics_8,x:-139.1724,y:2.0502}).wait(1).to({graphics:mask_graphics_9,x:-130.0608,y:2.0502}).wait(1).to({graphics:mask_graphics_10,x:-120.9501,y:2.0502}).wait(1).to({graphics:mask_graphics_11,x:-111.839,y:2.0502}).wait(1).to({graphics:mask_graphics_12,x:-102.7278,y:2.0502}).wait(1).to({graphics:mask_graphics_13,x:-93.6167,y:2.0502}).wait(1).to({graphics:mask_graphics_14,x:-84.5055,y:2.0502}).wait(1).to({graphics:mask_graphics_15,x:-75.3944,y:2.0502}).wait(1).to({graphics:mask_graphics_16,x:-66.2832,y:2.0502}).wait(1).to({graphics:mask_graphics_17,x:-57.1725,y:2.0502}).wait(1).to({graphics:mask_graphics_18,x:-48.0609,y:2.0502}).wait(1).to({graphics:mask_graphics_19,x:-38.9502,y:2.0502}).wait(1).to({graphics:mask_graphics_20,x:-47.1501,y:2.0502}).wait(1).to({graphics:mask_graphics_21,x:-55.35,y:2.0502}).wait(1).to({graphics:mask_graphics_22,x:-63.5499,y:2.0502}).wait(1).to({graphics:mask_graphics_23,x:-71.7498,y:2.0502}).wait(1).to({graphics:mask_graphics_24,x:-79.9497,y:2.0502}).wait(1).to({graphics:mask_graphics_25,x:-88.1501,y:2.0502}).wait(1).to({graphics:mask_graphics_26,x:-96.35,y:2.0502}).wait(1).to({graphics:mask_graphics_27,x:-104.5503,y:2.0502}).wait(1).to({graphics:mask_graphics_28,x:-112.7502,y:2.0502}).wait(1).to({graphics:mask_graphics_29,x:-120.9501,y:2.0502}).wait(1).to({graphics:mask_graphics_30,x:-129.15,y:2.0502}).wait(1).to({graphics:mask_graphics_31,x:-137.3499,y:2.0502}).wait(1).to({graphics:mask_graphics_32,x:-145.5498,y:2.0502}).wait(1).to({graphics:mask_graphics_33,x:-153.7497,y:2.0502}).wait(1).to({graphics:mask_graphics_34,x:-161.9501,y:2.0502}).wait(1).to({graphics:mask_graphics_35,x:-170.15,y:2.0502}).wait(1).to({graphics:mask_graphics_36,x:-178.3503,y:2.0502}).wait(1).to({graphics:mask_graphics_37,x:-186.5502,y:2.0502}).wait(1).to({graphics:mask_graphics_38,x:-194.7501,y:2.0502}).wait(1).to({graphics:mask_graphics_39,x:-202.95,y:2.0502}).wait(1));

	// Fill
	this.instance = new lib.L_CON();
	this.instance.setTransform(-82,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-18.4,164,40.9);


(lib.L_Cha = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-169.0002,y:-1.9499}).wait(1).to({graphics:mask_graphics_1,x:-169.0002,y:-1.9499}).wait(1).to({graphics:mask_graphics_2,x:-163.611,y:-1.9499}).wait(1).to({graphics:mask_graphics_3,x:-158.2223,y:-1.9499}).wait(1).to({graphics:mask_graphics_4,x:-152.8335,y:-1.9499}).wait(1).to({graphics:mask_graphics_5,x:-147.4443,y:-1.9499}).wait(1).to({graphics:mask_graphics_6,x:-142.0556,y:-1.9499}).wait(1).to({graphics:mask_graphics_7,x:-136.6668,y:-1.9499}).wait(1).to({graphics:mask_graphics_8,x:-131.2776,y:-1.9499}).wait(1).to({graphics:mask_graphics_9,x:-125.8889,y:-1.9499}).wait(1).to({graphics:mask_graphics_10,x:-120.5001,y:-1.9499}).wait(1).to({graphics:mask_graphics_11,x:-115.1109,y:-1.9499}).wait(1).to({graphics:mask_graphics_12,x:-109.7222,y:-1.9499}).wait(1).to({graphics:mask_graphics_13,x:-104.3334,y:-1.9499}).wait(1).to({graphics:mask_graphics_14,x:-98.9442,y:-1.9499}).wait(1).to({graphics:mask_graphics_15,x:-93.5555,y:-1.9499}).wait(1).to({graphics:mask_graphics_16,x:-88.1667,y:-1.9499}).wait(1).to({graphics:mask_graphics_17,x:-82.7775,y:-1.9499}).wait(1).to({graphics:mask_graphics_18,x:-77.3892,y:-1.9499}).wait(1).to({graphics:mask_graphics_19,x:-72,y:-1.9499}).wait(1).to({graphics:mask_graphics_20,x:-76.8501,y:-1.9499}).wait(1).to({graphics:mask_graphics_21,x:-81.7002,y:-1.9499}).wait(1).to({graphics:mask_graphics_22,x:-86.5503,y:-1.9499}).wait(1).to({graphics:mask_graphics_23,x:-91.4,y:-1.9499}).wait(1).to({graphics:mask_graphics_24,x:-96.2501,y:-1.9499}).wait(1).to({graphics:mask_graphics_25,x:-101.0997,y:-1.9499}).wait(1).to({graphics:mask_graphics_26,x:-105.9498,y:-1.9499}).wait(1).to({graphics:mask_graphics_27,x:-110.7999,y:-1.9499}).wait(1).to({graphics:mask_graphics_28,x:-115.65,y:-1.9499}).wait(1).to({graphics:mask_graphics_29,x:-120.5001,y:-1.9499}).wait(1).to({graphics:mask_graphics_30,x:-125.3502,y:-1.9499}).wait(1).to({graphics:mask_graphics_31,x:-130.2003,y:-1.9499}).wait(1).to({graphics:mask_graphics_32,x:-135.05,y:-1.9499}).wait(1).to({graphics:mask_graphics_33,x:-139.9001,y:-1.9499}).wait(1).to({graphics:mask_graphics_34,x:-144.7497,y:-1.9499}).wait(1).to({graphics:mask_graphics_35,x:-149.5998,y:-1.9499}).wait(1).to({graphics:mask_graphics_36,x:-154.4499,y:-1.9499}).wait(1).to({graphics:mask_graphics_37,x:-159.3,y:-1.9499}).wait(1).to({graphics:mask_graphics_38,x:-164.1501,y:-1.9499}).wait(1).to({graphics:mask_graphics_39,x:-169.0002,y:-1.9499}).wait(1));

	// Fill
	this.instance = new lib.L_CHA();
	this.instance.setTransform(-48.5,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-22.4,97,41);


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
	this.instance = new lib.Glow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Glow_, new cjs.Rectangle(0,0,1920,5000), null);


(lib.Eclipse_Glow_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Eclipse_Glow();
	this.instance.setTransform(-450,-385.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Eclipse_Glow_1, new cjs.Rectangle(-450,-385.5,900,771), null);


(lib.E_Wis = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-228.9501,y:-1.9998}).wait(1).to({graphics:mask_graphics_1,x:-217.5291,y:-1.9998}).wait(1).to({graphics:mask_graphics_2,x:-206.1081,y:-1.9998}).wait(1).to({graphics:mask_graphics_3,x:-194.6871,y:-1.9998}).wait(1).to({graphics:mask_graphics_4,x:-183.2661,y:-1.9998}).wait(1).to({graphics:mask_graphics_5,x:-171.8447,y:-1.9998}).wait(1).to({graphics:mask_graphics_6,x:-160.4237,y:-1.9998}).wait(1).to({graphics:mask_graphics_7,x:-149.0027,y:-1.9998}).wait(1).to({graphics:mask_graphics_8,x:-137.5817,y:-1.9998}).wait(1).to({graphics:mask_graphics_9,x:-126.1602,y:-1.9998}).wait(1).to({graphics:mask_graphics_10,x:-114.7392,y:-1.9998}).wait(1).to({graphics:mask_graphics_11,x:-103.3182,y:-1.9998}).wait(1).to({graphics:mask_graphics_12,x:-91.8972,y:-1.9998}).wait(1).to({graphics:mask_graphics_13,x:-80.4762,y:-1.9998}).wait(1).to({graphics:mask_graphics_14,x:-69.0552,y:-1.9998}).wait(1).to({graphics:mask_graphics_15,x:-57.6342,y:-1.9998}).wait(1).to({graphics:mask_graphics_16,x:-46.2132,y:-1.9998}).wait(1).to({graphics:mask_graphics_17,x:-34.7922,y:-1.9998}).wait(1).to({graphics:mask_graphics_18,x:-23.3712,y:-1.9998}).wait(1).to({graphics:mask_graphics_19,x:-11.9502,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-22.8501,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-33.75,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-44.6499,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-55.5498,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-66.4497,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-77.3501,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-88.25,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-99.1503,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-110.0502,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-120.9501,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-131.85,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-142.7499,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-153.6498,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-164.5497,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-175.4501,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-186.35,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-197.2503,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-208.1502,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-219.0501,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-229.95,y:-1.9998}).wait(1));

	// Fill
	this.instance = new lib.E_WIS();
	this.instance.setTransform(-108.5,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-22.5,217,41);


(lib.E_Str = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-215.0001,y:-1.9998}).wait(1).to({graphics:mask_graphics_1,x:-205.1055,y:-1.9998}).wait(1).to({graphics:mask_graphics_2,x:-195.2105,y:-1.9998}).wait(1).to({graphics:mask_graphics_3,x:-185.3159,y:-1.9998}).wait(1).to({graphics:mask_graphics_4,x:-175.4208,y:-1.9998}).wait(1).to({graphics:mask_graphics_5,x:-165.5262,y:-1.9998}).wait(1).to({graphics:mask_graphics_6,x:-155.6316,y:-1.9998}).wait(1).to({graphics:mask_graphics_7,x:-145.737,y:-1.9998}).wait(1).to({graphics:mask_graphics_8,x:-135.8424,y:-1.9998}).wait(1).to({graphics:mask_graphics_9,x:-125.9474,y:-1.9998}).wait(1).to({graphics:mask_graphics_10,x:-116.0523,y:-1.9998}).wait(1).to({graphics:mask_graphics_11,x:-106.1577,y:-1.9998}).wait(1).to({graphics:mask_graphics_12,x:-96.2631,y:-1.9998}).wait(1).to({graphics:mask_graphics_13,x:-86.3685,y:-1.9998}).wait(1).to({graphics:mask_graphics_14,x:-76.4739,y:-1.9998}).wait(1).to({graphics:mask_graphics_15,x:-66.5789,y:-1.9998}).wait(1).to({graphics:mask_graphics_16,x:-56.6843,y:-1.9998}).wait(1).to({graphics:mask_graphics_17,x:-46.7892,y:-1.9998}).wait(1).to({graphics:mask_graphics_18,x:-36.8946,y:-1.9998}).wait(1).to({graphics:mask_graphics_19,x:-27,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-36.3978,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-45.7947,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-55.1925,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-64.5903,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-73.9872,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-83.385,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-92.7828,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-102.1797,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-111.5775,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-120.9753,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-130.3722,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-139.77,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-149.1678,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-158.5647,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-167.9625,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-177.3603,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-186.7572,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-196.155,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-205.5528,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-214.9497,y:-1.9998}).wait(1));

	// Fill
	this.instance = new lib.E_STR();
	this.instance.setTransform(-94,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-22.5,188,41);


(lib.E_Int = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-171.9999,y:-1.9998}).wait(1).to({graphics:mask_graphics_1,x:-166.6287,y:-1.9998}).wait(1).to({graphics:mask_graphics_2,x:-161.258,y:-1.9998}).wait(1).to({graphics:mask_graphics_3,x:-155.8868,y:-1.9998}).wait(1).to({graphics:mask_graphics_4,x:-150.516,y:-1.9998}).wait(1).to({graphics:mask_graphics_5,x:-145.1448,y:-1.9998}).wait(1).to({graphics:mask_graphics_6,x:-139.7736,y:-1.9998}).wait(1).to({graphics:mask_graphics_7,x:-134.4024,y:-1.9998}).wait(1).to({graphics:mask_graphics_8,x:-129.0317,y:-1.9998}).wait(1).to({graphics:mask_graphics_9,x:-123.6604,y:-1.9998}).wait(1).to({graphics:mask_graphics_10,x:-118.2897,y:-1.9998}).wait(1).to({graphics:mask_graphics_11,x:-112.9185,y:-1.9998}).wait(1).to({graphics:mask_graphics_12,x:-107.5473,y:-1.9998}).wait(1).to({graphics:mask_graphics_13,x:-102.1761,y:-1.9998}).wait(1).to({graphics:mask_graphics_14,x:-96.8054,y:-1.9998}).wait(1).to({graphics:mask_graphics_15,x:-91.4342,y:-1.9998}).wait(1).to({graphics:mask_graphics_16,x:-86.0634,y:-1.9998}).wait(1).to({graphics:mask_graphics_17,x:-80.6922,y:-1.9998}).wait(1).to({graphics:mask_graphics_18,x:-75.321,y:-1.9998}).wait(1).to({graphics:mask_graphics_19,x:-69.9498,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-75.0501,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-80.15,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-85.2498,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-90.3501,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-95.45,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-100.5498,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-105.6501,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-110.75,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-115.8498,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-120.9501,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-126.05,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-131.1498,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-136.2501,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-141.35,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-146.4498,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-151.5501,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-156.65,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-161.7498,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-166.8501,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-171.95,y:-1.9998}).wait(1));

	// Fill
	this.instance = new lib.E_INT();
	this.instance.setTransform(-51,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-22.5,102,41);


(lib.E_Dxt = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-216.95,y:-1.9998}).wait(1).to({graphics:mask_graphics_1,x:-206.8448,y:-1.9998}).wait(1).to({graphics:mask_graphics_2,x:-196.7396,y:-1.9998}).wait(1).to({graphics:mask_graphics_3,x:-186.6339,y:-1.9998}).wait(1).to({graphics:mask_graphics_4,x:-176.5287,y:-1.9998}).wait(1).to({graphics:mask_graphics_5,x:-166.4235,y:-1.9998}).wait(1).to({graphics:mask_graphics_6,x:-156.3183,y:-1.9998}).wait(1).to({graphics:mask_graphics_7,x:-146.2131,y:-1.9998}).wait(1).to({graphics:mask_graphics_8,x:-136.1079,y:-1.9998}).wait(1).to({graphics:mask_graphics_9,x:-126.0027,y:-1.9998}).wait(1).to({graphics:mask_graphics_10,x:-115.8975,y:-1.9998}).wait(1).to({graphics:mask_graphics_11,x:-105.7923,y:-1.9998}).wait(1).to({graphics:mask_graphics_12,x:-95.6871,y:-1.9998}).wait(1).to({graphics:mask_graphics_13,x:-85.5819,y:-1.9998}).wait(1).to({graphics:mask_graphics_14,x:-75.4763,y:-1.9998}).wait(1).to({graphics:mask_graphics_15,x:-65.3711,y:-1.9998}).wait(1).to({graphics:mask_graphics_16,x:-55.2659,y:-1.9998}).wait(1).to({graphics:mask_graphics_17,x:-45.1602,y:-1.9998}).wait(1).to({graphics:mask_graphics_18,x:-35.055,y:-1.9998}).wait(1).to({graphics:mask_graphics_19,x:-24.9498,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-34.5501,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-44.15,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-53.7498,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-63.3501,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-72.95,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-82.5498,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-92.1501,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-101.75,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-111.3498,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-120.9501,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-130.55,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-140.1498,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-149.7501,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-159.35,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-168.9498,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-178.5501,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-188.15,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-197.7498,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-207.3501,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-216.95,y:-1.9998}).wait(1));

	// Fill
	this.instance = new lib.E_DXT();
	this.instance.setTransform(-96,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-22.5,192,41);


(lib.E_Con = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_1 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_3 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_4 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_5 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_6 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_7 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_10 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_11 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_12 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_13 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_16 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_17 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_19 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_22 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_23 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_24 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_25 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_26 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_27 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_28 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_29 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_30 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_31 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_32 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_33 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_34 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_35 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_37 = new cjs.Graphics().p("Ay5DNIAAmZMAlzAAAIAAGZg");
	var mask_graphics_38 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");
	var mask_graphics_39 = new cjs.Graphics().p("Ay4DNIAAmZMAlxAAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-203,y:-1.9998}).wait(1).to({graphics:mask_graphics_1,x:-194.3685,y:-1.9998}).wait(1).to({graphics:mask_graphics_2,x:-185.7366,y:-1.9998}).wait(1).to({graphics:mask_graphics_3,x:-177.1056,y:-1.9998}).wait(1).to({graphics:mask_graphics_4,x:-168.4737,y:-1.9998}).wait(1).to({graphics:mask_graphics_5,x:-159.8418,y:-1.9998}).wait(1).to({graphics:mask_graphics_6,x:-151.2108,y:-1.9998}).wait(1).to({graphics:mask_graphics_7,x:-142.5789,y:-1.9998}).wait(1).to({graphics:mask_graphics_8,x:-133.9475,y:-1.9998}).wait(1).to({graphics:mask_graphics_9,x:-125.316,y:-1.9998}).wait(1).to({graphics:mask_graphics_10,x:-116.6841,y:-1.9998}).wait(1).to({graphics:mask_graphics_11,x:-108.0527,y:-1.9998}).wait(1).to({graphics:mask_graphics_12,x:-99.4212,y:-1.9998}).wait(1).to({graphics:mask_graphics_13,x:-90.7893,y:-1.9998}).wait(1).to({graphics:mask_graphics_14,x:-82.1579,y:-1.9998}).wait(1).to({graphics:mask_graphics_15,x:-73.5264,y:-1.9998}).wait(1).to({graphics:mask_graphics_16,x:-64.8945,y:-1.9998}).wait(1).to({graphics:mask_graphics_17,x:-56.2635,y:-1.9998}).wait(1).to({graphics:mask_graphics_18,x:-47.6316,y:-1.9998}).wait(1).to({graphics:mask_graphics_19,x:-38.9997,y:-1.9998}).wait(1).to({graphics:mask_graphics_20,x:-47.2001,y:-1.9998}).wait(1).to({graphics:mask_graphics_21,x:-55.4,y:-1.9998}).wait(1).to({graphics:mask_graphics_22,x:-63.6003,y:-1.9998}).wait(1).to({graphics:mask_graphics_23,x:-71.8002,y:-1.9998}).wait(1).to({graphics:mask_graphics_24,x:-80.0001,y:-1.9998}).wait(1).to({graphics:mask_graphics_25,x:-88.2,y:-1.9998}).wait(1).to({graphics:mask_graphics_26,x:-96.3999,y:-1.9998}).wait(1).to({graphics:mask_graphics_27,x:-104.5998,y:-1.9998}).wait(1).to({graphics:mask_graphics_28,x:-112.7997,y:-1.9998}).wait(1).to({graphics:mask_graphics_29,x:-121,y:-1.9998}).wait(1).to({graphics:mask_graphics_30,x:-129.2,y:-1.9998}).wait(1).to({graphics:mask_graphics_31,x:-137.4003,y:-1.9998}).wait(1).to({graphics:mask_graphics_32,x:-145.6002,y:-1.9998}).wait(1).to({graphics:mask_graphics_33,x:-153.8001,y:-1.9998}).wait(1).to({graphics:mask_graphics_34,x:-162,y:-1.9998}).wait(1).to({graphics:mask_graphics_35,x:-170.1999,y:-1.9998}).wait(1).to({graphics:mask_graphics_36,x:-178.3998,y:-1.9998}).wait(1).to({graphics:mask_graphics_37,x:-186.5997,y:-1.9998}).wait(1).to({graphics:mask_graphics_38,x:-194.8001,y:-1.9998}).wait(1).to({graphics:mask_graphics_39,x:-203,y:-1.9998}).wait(1));

	// Fill
	this.instance = new lib.L_CON();
	this.instance.setTransform(-82,-22.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-22.5,164,41);


(lib.Plus_ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Plus();
	this.instance.setTransform(0,0,1.0571,1.0571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Plus_, new cjs.Rectangle(0,0,74,74), null);


(lib.Bonus_Btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,51,51,0)").ss(1,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib._5_Wis = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bonus_5();
	this.instance.setTransform(-187.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5_Wis, new cjs.Rectangle(-187.5,-40,375,80), null);


(lib._5_Str = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bonus_1();
	this.instance.setTransform(-211.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5_Str, new cjs.Rectangle(-211.5,-35,423,70), null);


(lib._5_FireRes = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bonus_3();
	this.instance.setTransform(-265,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5_FireRes, new cjs.Rectangle(-265,-35,530,70), null);


(lib._4_Def = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bonus_2();
	this.instance.setTransform(-184.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._4_Def, new cjs.Rectangle(-184.5,-35,369,70), null);


(lib._3_Def = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bonus_4();
	this.instance.setTransform(-163,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._3_Def, new cjs.Rectangle(-163,-35,326,70), null);


(lib.Star_Inner_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Star_Inner
	this.instance = new lib.Star_Inner_();
	this.instance.setTransform(-0.15,1.8,1,1,0,0,0,125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:5.0704},0).wait(1).to({rotation:10.1408,x:-0.1},0).wait(1).to({rotation:15.2113,x:-0.15},0).wait(1).to({rotation:20.2817,y:1.85},0).wait(1).to({rotation:25.3521,x:-0.1,y:1.8},0).wait(1).to({rotation:30.4225,y:1.85},0).wait(1).to({rotation:35.493,y:1.8},0).wait(1).to({rotation:40.5634,x:-0.15,y:1.85},0).wait(1).to({rotation:45.6338,y:1.8},0).wait(1).to({rotation:50.7042,x:-0.2},0).wait(1).to({rotation:55.7746},0).wait(1).to({rotation:60.8451,x:-0.15},0).wait(1).to({rotation:65.9155},0).wait(1).to({rotation:70.9859,x:-0.2},0).wait(1).to({rotation:76.0563},0).wait(1).to({rotation:81.1268,x:-0.15,y:1.85},0).wait(1).to({rotation:86.1972,y:1.8},0).wait(1).to({rotation:91.2676},0).wait(1).to({rotation:96.338,x:-0.2,y:1.85},0).wait(1).to({rotation:101.4085,x:-0.15},0).wait(1).to({rotation:106.4789,y:1.8},0).wait(1).to({rotation:111.5493},0).wait(1).to({rotation:116.6197,y:1.85},0).wait(1).to({rotation:121.6901},0).wait(1).to({rotation:126.7606},0).wait(1).to({rotation:131.831},0).wait(1).to({rotation:136.9014,y:1.8},0).wait(1).to({rotation:141.9718},0).wait(1).to({rotation:147.0423,x:-0.2,y:1.75},0).wait(1).to({rotation:152.1127,x:-0.15},0).wait(1).to({rotation:157.1831},0).wait(1).to({rotation:162.2535,y:1.8},0).wait(1).to({rotation:167.3239,x:-0.2},0).wait(1).to({rotation:172.3944},0).wait(1).to({rotation:177.4648,y:1.75},0).wait(1).to({rotation:182.5352},0).wait(1).to({rotation:187.6056,x:-0.15},0).wait(1).to({rotation:192.6761},0).wait(1).to({rotation:197.7465,y:1.8},0).wait(1).to({rotation:202.8169,x:-0.2},0).wait(1).to({rotation:207.8873},0).wait(1).to({rotation:212.9577,y:1.75},0).wait(1).to({rotation:218.0282,x:-0.15,y:1.8},0).wait(1).to({rotation:223.0986},0).wait(1).to({rotation:228.169,x:-0.1},0).wait(1).to({rotation:233.2394},0).wait(1).to({rotation:238.3099},0).wait(1).to({rotation:243.3803},0).wait(1).to({rotation:248.4507,x:-0.15},0).wait(1).to({rotation:253.5211},0).wait(1).to({rotation:258.5915,x:-0.1},0).wait(1).to({rotation:263.662,y:1.75},0).wait(1).to({rotation:268.7324,x:-0.15,y:1.8},0).wait(1).to({rotation:273.8028},0).wait(1).to({rotation:278.8732,x:-0.1},0).wait(1).to({rotation:283.9437,x:-0.15,y:1.75},0).wait(1).to({rotation:289.0141},0).wait(1).to({rotation:294.0845,y:1.8},0).wait(1).to({rotation:299.1549},0).wait(1).to({rotation:304.2254,y:1.75},0).wait(1).to({rotation:309.2958},0).wait(1).to({rotation:314.3662,y:1.8},0).wait(1).to({rotation:319.4366,x:-0.1},0).wait(1).to({rotation:324.507,x:-0.15,y:1.85},0).wait(1).to({rotation:329.5775,x:-0.1},0).wait(1).to({rotation:334.6479,x:-0.15},0).wait(1).to({rotation:339.7183,x:-0.1,y:1.8},0).wait(1).to({rotation:344.7887,x:-0.15},0).wait(1).to({rotation:349.8592,y:1.85},0).wait(1).to({rotation:354.9296,y:1.8},0).wait(1).to({rotation:360},0).wait(1));

	// Star_Outer
	this.instance_1 = new lib.Star_Outer_1();
	this.instance_1.setTransform(0.2,2.2,1,1,0,0,0,125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.0024,scaleY:1.0024,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0048,scaleY:1.0048},0).wait(1).to({scaleX:1.0071,scaleY:1.0071},0).wait(1).to({scaleX:1.0095,scaleY:1.0095},0).wait(1).to({scaleX:1.0119,scaleY:1.0119},0).wait(1).to({scaleX:1.0143,scaleY:1.0143},0).wait(1).to({scaleX:1.0166,scaleY:1.0166},0).wait(1).to({scaleX:1.019,scaleY:1.019},0).wait(1).to({scaleX:1.0214,scaleY:1.0214,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0238,scaleY:1.0238},0).wait(1).to({scaleX:1.0262,scaleY:1.0262},0).wait(1).to({scaleX:1.0285,scaleY:1.0285},0).wait(1).to({scaleX:1.0309,scaleY:1.0309},0).wait(1).to({scaleX:1.0333,scaleY:1.0333},0).wait(1).to({scaleX:1.0357,scaleY:1.0357},0).wait(1).to({scaleX:1.038,scaleY:1.038},0).wait(1).to({scaleX:1.0404,scaleY:1.0404},0).wait(1).to({scaleX:1.0428,scaleY:1.0428},0).wait(1).to({scaleX:1.0452,scaleY:1.0452,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0476,scaleY:1.0476},0).wait(1).to({scaleX:1.0499,scaleY:1.0499},0).wait(1).to({scaleX:1.0523,scaleY:1.0523},0).wait(1).to({scaleX:1.0547,scaleY:1.0547},0).wait(1).to({scaleX:1.0571,scaleY:1.0571},0).wait(1).to({scaleX:1.0594,scaleY:1.0594},0).wait(1).to({scaleX:1.0618,scaleY:1.0618},0).wait(1).to({scaleX:1.0642,scaleY:1.0642,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0666,scaleY:1.0666},0).wait(1).to({scaleX:1.069,scaleY:1.069},0).wait(1).to({scaleX:1.0713,scaleY:1.0713},0).wait(1).to({scaleX:1.0737,scaleY:1.0737},0).wait(1).to({scaleX:1.0761,scaleY:1.0761},0).wait(1).to({scaleX:1.0785,scaleY:1.0785},0).wait(1).to({scaleX:1.0808,scaleY:1.0808},0).wait(1).to({scaleX:1.0832,scaleY:1.0832},0).wait(1).to({scaleX:1.0856,scaleY:1.0856},0).wait(1).to({scaleX:1.0831,scaleY:1.0831,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0806,scaleY:1.0806,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0781,scaleY:1.0781},0).wait(1).to({scaleX:1.0756,scaleY:1.0756,x:0.25,y:2.25},0).wait(1).to({scaleX:1.073,scaleY:1.073},0).wait(1).to({scaleX:1.0705,scaleY:1.0705,x:0.2,y:2.2},0).wait(1).to({scaleX:1.068,scaleY:1.068},0).wait(1).to({scaleX:1.0655,scaleY:1.0655,x:0.25,y:2.25},0).wait(1).to({scaleX:1.063,scaleY:1.063},0).wait(1).to({scaleX:1.0605,scaleY:1.0605,x:0.2,y:2.2},0).wait(1).to({scaleX:1.058,scaleY:1.058,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0555,scaleY:1.0555},0).wait(1).to({scaleX:1.053,scaleY:1.053,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0505,scaleY:1.0505},0).wait(1).to({scaleX:1.0479,scaleY:1.0479,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0454,scaleY:1.0454},0).wait(1).to({scaleX:1.0429,scaleY:1.0429,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0404,scaleY:1.0404},0).wait(1).to({scaleX:1.0379,scaleY:1.0379,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0354,scaleY:1.0354,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0329,scaleY:1.0329},0).wait(1).to({scaleX:1.0304,scaleY:1.0304,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0279,scaleY:1.0279},0).wait(1).to({scaleX:1.0253,scaleY:1.0253,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0228,scaleY:1.0228},0).wait(1).to({scaleX:1.0203,scaleY:1.0203,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0178,scaleY:1.0178},0).wait(1).to({scaleX:1.0153,scaleY:1.0153,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0128,scaleY:1.0128,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0103,scaleY:1.0103},0).wait(1).to({scaleX:1.0078,scaleY:1.0078,x:0.2,y:2.2},0).wait(1).to({scaleX:1.0053,scaleY:1.0053},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,x:0.25,y:2.25},0).wait(1).to({scaleX:1.0002,scaleY:1.0002},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,x:0.2,y:2.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.9,-174.9,353.6,353.5);


(lib.Glow_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,1,1,0,0,0,960,2500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.9848},0).wait(1).to({alpha:0.9696},0).wait(1).to({alpha:0.9543},0).wait(1).to({alpha:0.9391},0).wait(1).to({alpha:0.9239},0).wait(1).to({alpha:0.9087},0).wait(1).to({alpha:0.8935},0).wait(1).to({alpha:0.8783},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.8478},0).wait(1).to({alpha:0.8326},0).wait(1).to({alpha:0.8174},0).wait(1).to({alpha:0.8022},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.7717},0).wait(1).to({alpha:0.7565},0).wait(1).to({alpha:0.7413},0).wait(1).to({alpha:0.7261},0).wait(1).to({alpha:0.7109},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.6804},0).wait(1).to({alpha:0.6652},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.6646},0).wait(1).to({alpha:0.6792},0).wait(1).to({alpha:0.6938},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.7229},0).wait(1).to({alpha:0.7375},0).wait(1).to({alpha:0.7521},0).wait(1).to({alpha:0.7667},0).wait(1).to({alpha:0.7813},0).wait(1).to({alpha:0.7958},0).wait(1).to({alpha:0.8104},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.8396},0).wait(1).to({alpha:0.8542},0).wait(1).to({alpha:0.8687},0).wait(1).to({alpha:0.8833},0).wait(1).to({alpha:0.8979},0).wait(1).to({alpha:0.9125},0).wait(1).to({alpha:0.9271},0).wait(1).to({alpha:0.9417},0).wait(1).to({alpha:0.9563},0).wait(1).to({alpha:0.9708},0).wait(1).to({alpha:0.9854},0).wait(1).to({alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-2500,1920,5000);


(lib.Eclipse_Glow_Animated = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Glow
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,0,1,1,0,0,0,450,385.5);
	this.instance.alpha = 0.0508;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.245},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.44},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.57},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.7},0).wait(9).to({alpha:0.6222},0).wait(1).to({alpha:0.5444},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.3889},0).wait(1).to({alpha:0.3111},0).wait(1).to({alpha:0.2333},0).wait(1).to({alpha:0.1556},0).wait(1).to({alpha:0.0778},0).wait(1).to({alpha:0},0).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgyzgLuIEHreMBhgAi7IkHLeg");
	var mask_graphics_1 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkHLeg");
	var mask_graphics_2 = new cjs.Graphics().p("Egy0gLuIEIreMBhhAi7IkHLeg");
	var mask_graphics_3 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkILeg");
	var mask_graphics_4 = new cjs.Graphics().p("Egy0gLuIEIreMBhhAi7IkHLeg");
	var mask_graphics_5 = new cjs.Graphics().p("EgyzgLtIEHrfMBhgAi7IkHLeg");
	var mask_graphics_6 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkHLeg");
	var mask_graphics_7 = new cjs.Graphics().p("EgyzgLuIEHreMBhgAi7IkHLeg");
	var mask_graphics_8 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkHLeg");
	var mask_graphics_9 = new cjs.Graphics().p("Egy0gLuIEIreMBhhAi6IkHLfg");
	var mask_graphics_10 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkILeg");
	var mask_graphics_11 = new cjs.Graphics().p("Egy0gLuIEIreMBhhAi7IkHLeg");
	var mask_graphics_12 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkILeg");
	var mask_graphics_13 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkHLeg");
	var mask_graphics_14 = new cjs.Graphics().p("EgyzgLuIEHreMBhgAi7IkHLeg");
	var mask_graphics_15 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkHLeg");
	var mask_graphics_16 = new cjs.Graphics().p("EgyzgLtIEHrfMBhgAi7IkHLeg");
	var mask_graphics_17 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkHLeg");
	var mask_graphics_18 = new cjs.Graphics().p("Egy0gLuIEIreMBhhAi7IkHLeg");
	var mask_graphics_19 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkILeg");
	var mask_graphics_20 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi6IkHLfg");
	var mask_graphics_21 = new cjs.Graphics().p("EgyzgLuIEHreMBhgAi7IkHLeg");
	var mask_graphics_22 = new cjs.Graphics().p("Egy0gLuIEHreMBhiAi7IkHLeg");
	var mask_graphics_23 = new cjs.Graphics().p("EgyzgLuIEHreMBhgAi7IkHLeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:139,y:-237.5001}).wait(1).to({graphics:mask_graphics_1,x:129.2175,y:-211.5873}).wait(1).to({graphics:mask_graphics_2,x:119.4345,y:-185.6736}).wait(1).to({graphics:mask_graphics_3,x:109.6524,y:-159.7608}).wait(1).to({graphics:mask_graphics_4,x:99.8694,y:-133.848}).wait(1).to({graphics:mask_graphics_5,x:90.0868,y:-107.9352}).wait(1).to({graphics:mask_graphics_6,x:80.3043,y:-82.0215}).wait(1).to({graphics:mask_graphics_7,x:70.5217,y:-56.1087}).wait(1).to({graphics:mask_graphics_8,x:60.7392,y:-30.1959}).wait(1).to({graphics:mask_graphics_9,x:50.9562,y:-4.2822}).wait(1).to({graphics:mask_graphics_10,x:41.1741,y:21.6306}).wait(1).to({graphics:mask_graphics_11,x:31.3911,y:47.5434}).wait(1).to({graphics:mask_graphics_12,x:21.609,y:73.4562}).wait(1).to({graphics:mask_graphics_13,x:11.826,y:99.3699}).wait(1).to({graphics:mask_graphics_14,x:2.0434,y:125.2827}).wait(1).to({graphics:mask_graphics_15,x:-7.7391,y:151.1955}).wait(1).to({graphics:mask_graphics_16,x:-17.5217,y:177.1083}).wait(1).to({graphics:mask_graphics_17,x:-27.3042,y:203.022}).wait(1).to({graphics:mask_graphics_18,x:-37.0872,y:228.9348}).wait(1).to({graphics:mask_graphics_19,x:-46.8693,y:254.8476}).wait(1).to({graphics:mask_graphics_20,x:-56.6523,y:280.7613}).wait(1).to({graphics:mask_graphics_21,x:-66.4349,y:306.6741}).wait(1).to({graphics:mask_graphics_22,x:-76.2174,y:332.5869}).wait(1).to({graphics:mask_graphics_23,x:-86,y:358.4997}).wait(29));

	// Glow
	this.instance_1 = new lib.Eclipse_Glow();
	this.instance_1.setTransform(-450,-385.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},24).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-385.5,900,771);


(lib.Plus_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Plus_();
	this.instance.setTransform(0,0,1,1,0,0,0,37,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.015,scaleY:1.015},0).wait(1).to({scaleX:1.0301,scaleY:1.0301},0).wait(1).to({scaleX:1.0451,scaleY:1.0451},0).wait(1).to({scaleX:1.0601,scaleY:1.0601},0).wait(1).to({scaleX:1.0752,scaleY:1.0752,x:0.05,y:0.05},0).wait(1).to({scaleX:1.0902,scaleY:1.0902},0).wait(1).to({scaleX:1.1053,scaleY:1.1053},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,x:0,y:0},0).wait(1).to({scaleX:1.1353,scaleY:1.1353},0).wait(1).to({scaleX:1.1504,scaleY:1.1504},0).wait(1).to({scaleX:1.1654,scaleY:1.1654},0).wait(1).to({scaleX:1.1804,scaleY:1.1804,x:0.05,y:0.05},0).wait(1).to({scaleX:1.1955,scaleY:1.1955},0).wait(1).to({scaleX:1.2105,scaleY:1.2105},0).wait(1).to({scaleX:1.2256,scaleY:1.2256},0).wait(1).to({scaleX:1.2406,scaleY:1.2406,x:0,y:0},0).wait(1).to({scaleX:1.2556,scaleY:1.2556},0).wait(1).to({scaleX:1.2707,scaleY:1.2707},0).wait(1).to({scaleX:1.2563,scaleY:1.2563,x:0.05,y:0.05},0).wait(1).to({scaleX:1.242,scaleY:1.242,x:0,y:0},0).wait(1).to({scaleX:1.2277,scaleY:1.2277},0).wait(1).to({scaleX:1.2134,scaleY:1.2134,x:0.05,y:0.05},0).wait(1).to({scaleX:1.199,scaleY:1.199,x:0,y:0},0).wait(1).to({scaleX:1.1847,scaleY:1.1847,x:0.05,y:0.05},0).wait(1).to({scaleX:1.1704,scaleY:1.1704,x:0,y:0},0).wait(1).to({scaleX:1.1561,scaleY:1.1561},0).wait(1).to({scaleX:1.1417,scaleY:1.1417,x:0.05,y:0.05},0).wait(1).to({scaleX:1.1274,scaleY:1.1274,x:0,y:0},0).wait(1).to({scaleX:1.1131,scaleY:1.1131,x:0.05,y:0.05},0).wait(1).to({scaleX:1.0988,scaleY:1.0988,x:0,y:0},0).wait(1).to({scaleX:1.0844,scaleY:1.0844},0).wait(1).to({scaleX:1.0701,scaleY:1.0701,x:0.05,y:0.05},0).wait(1).to({scaleX:1.0558,scaleY:1.0558,x:0,y:0},0).wait(1).to({scaleX:1.0415,scaleY:1.0415,x:0.05,y:0.05},0).wait(1).to({scaleX:1.0271,scaleY:1.0271,x:0,y:0},0).wait(1).to({scaleX:1.0128,scaleY:1.0128},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,x:0.05,y:0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-47,94.1,94.1);


// stage content:
(lib.Infographic = function(mode,startPosition,loop,reversed) {
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
		//star button
		let eclipseGlow = this.eclipse_glow;
		let starBtn = this.star_btn;
		
		eclipseGlow.stop();
		starBtn.alpha = 0.01;
		
		starBtn.addEventListener("click", revealEclipse);
		
		function revealEclipse() {
			eclipseGlow.gotoAndPlay(0);
			
			eclipseGlow.addEventListener("tick", function checkFrame() {
				if (eclipseGlow.currentFrame >= eclipseGlow.totalFrames -1) {
					eclipseGlow.stop();
					eclipseGlow.removeEventListener("tick", checkFrame);
				}
			});
		}
		
		//ligbringer stats
		
		//strength
		let LStrBtn = this.l_str_btn;
		let LStr = this.l_str;
		
		LStr.stop();
		LStrBtn.alpha = 0.01;
		let LStrTick = null;
		
		LStrBtn.addEventListener("mouseover", fillStrL);
		LStrBtn.addEventListener("mouseout", emptyStrL);
		
		function fillStrL(){
			if (LStrTick) {
				LStr.removeEventListener("tick", LStrTick);
			}
			
			LStr.gotoAndPlay(1);
			LStrTick = function checkFrame() {
				if (LStr.currentFrame >= 20) {
					LStr.gotoAndStop(20);
					LStr.removeEventListener("tick", LStrTick);
					LStrTick = null;
				}
			};
			LStr.addEventListener("tick", LStrTick);
		}
		
		function emptyStrL() {
			if (LStrTick) {
				LStr.removeEventListener("tick", LStrTick);
				LStrTick = null;
			}
			LStr.gotoAndPlay(21);
			let LStrEmptyTick = function checkFrame() {
				if (LStr.currentFrame >= 39) {
					LStr.gotoAndStop(0);
					LStr.removeEventListener("tick", LStrEmptyTick);
				}
			};
			LStr.addEventListener("tick", LStrEmptyTick);
		}
		
		//constitution
		let LConBtn = this.l_con_btn;
		let LCon = this.l_con;
		
		LCon.stop();
		LConBtn.alpha = 0.01;
		let LConTick = null;
		
		LConBtn.addEventListener("mouseover", fillConL);
		LConBtn.addEventListener("mouseout", emptyConL);
		
		function fillConL(){
			if (LConTick) {
				LCon.removeEventListener("tick", LConTick);
			}
			
			LCon.gotoAndPlay(1);
			LConTick = function checkFrame() {
				if (LCon.currentFrame >= 20) {
					LCon.gotoAndStop(20);
					LCon.removeEventListener("tick", LConTick);
					LConTick = null;
				}
			};
			LCon.addEventListener("tick", LConTick);
		}
		
		function emptyConL() {
			if (LConTick) {
				LCon.removeEventListener("tick", LConTick);
				LConTick = null;
			}
			LCon.gotoAndPlay(21);
			let LConEmptyTick = function checkFrame() {
				if (LCon.currentFrame >= 39) {
					LCon.gotoAndStop(0);
					LCon.removeEventListener("tick", LConEmptyTick);
				}
			};
			LCon.addEventListener("tick", LConEmptyTick);
		}
		
		//dexterity
		let LDxtBtn = this.l_dxt_btn;
		let LDxt = this.l_dxt;
		
		LDxt.stop();
		LDxtBtn.alpha = 0.01;
		let LDxtTick = null;
		
		LDxtBtn.addEventListener("mouseover", fillDxtL);
		LDxtBtn.addEventListener("mouseout", emptyDxtL);
		
		function fillDxtL(){
			if (LDxtTick) {
				LDxt.removeEventListener("tick", LDxtTick);
			}
			
			LDxt.gotoAndPlay(1);
			LDxtTick = function checkFrame() {
				if (LDxt.currentFrame >= 20) {
					LDxt.gotoAndStop(20);
					LDxt.removeEventListener("tick", LDxtTick);
					LDxtTick = null;
				}
			};
			LDxt.addEventListener("tick", LDxtTick);
		}
		
		function emptyDxtL() {
			if (LDxtTick) {
				LDxt.removeEventListener("tick", LDxtTick);
				LDxtTick = null;
			}
			LDxt.gotoAndPlay(21);
			let LDxtEmptyTick = function checkFrame() {
				if (LDxt.currentFrame >= 39) {
					LDxt.gotoAndStop(0);
					LDxt.removeEventListener("tick", LDxtEmptyTick);
				}
			};
			LDxt.addEventListener("tick", LDxtEmptyTick);
		}
		
		//wisdom
		let LWisBtn = this.l_wis_btn;
		let LWis = this.l_wis;
		
		LWis.stop();
		LWisBtn.alpha = 0.01;
		let LWisTick = null;
		
		LWisBtn.addEventListener("mouseover", fillWisL);
		LWisBtn.addEventListener("mouseout", emptyWisL);
		
		function fillWisL(){
			if (LWisTick) {
				LWis.removeEventListener("tick", LWisTick);
			}
			
			LWis.gotoAndPlay(1);
			LWisTick = function checkFrame() {
				if (LWis.currentFrame >= 20) {
					LWis.gotoAndStop(20);
					LWis.removeEventListener("tick", LWisTick);
					LWisTick = null;
				}
			};
			LWis.addEventListener("tick", LWisTick);
		}
		
		function emptyWisL() {
			if (LWisTick) {
				LWis.removeEventListener("tick", LWisTick);
				LWisTick = null;
			}
			LWis.gotoAndPlay(21);
			let LWisEmptyTick = function checkFrame() {
				if (LWis.currentFrame >= 39) {
					LWis.gotoAndStop(0);
					LWis.removeEventListener("tick", LWisEmptyTick);
				}
			};
			LWis.addEventListener("tick", LWisEmptyTick);
		}
		
		//intelligence
		let LIntBtn = this.l_int_btn;
		let LInt = this.l_int;
		
		LInt.stop();
		LIntBtn.alpha = 0.01;
		let LIntTick = null;
		
		LIntBtn.addEventListener("mouseover", fillIntL);
		LIntBtn.addEventListener("mouseout", emptyIntL);
		
		function fillIntL(){
			if (LIntTick) {
				LInt.removeEventListener("tick", LIntTick);
			}
			
			LInt.gotoAndPlay(1);
			LIntTick = function checkFrame() {
				if (LInt.currentFrame >= 20) {
					LInt.gotoAndStop(20);
					LInt.removeEventListener("tick", LIntTick);
					LIntTick = null;
				}
			};
			LInt.addEventListener("tick", LIntTick);
		}
		
		function emptyIntL() {
			if (LIntTick) {
				LInt.removeEventListener("tick", LIntTick);
				LIntTick = null;
			}
			LInt.gotoAndPlay(21);
			let LIntEmptyTick = function checkFrame() {
				if (LInt.currentFrame >= 39) {
					LInt.gotoAndStop(0);
					LInt.removeEventListener("tick", LIntEmptyTick);
				}
			};
			LInt.addEventListener("tick", LIntEmptyTick);
		}
		
		//charisma
		let LChaBtn = this.l_cha_btn;
		let LCha = this.l_cha;
		
		LCha.stop();
		LChaBtn.alpha = 0.01;
		let LChaTick = null;
		
		LChaBtn.addEventListener("mouseover", fillChaL);
		LChaBtn.addEventListener("mouseout", emptyChaL);
		
		function fillChaL(){
			if (LChaTick) {
				LCha.removeEventListener("tick", LChaTick);
			}
			
			LCha.gotoAndPlay(1);
			LChaTick = function checkFrame() {
				if (LCha.currentFrame >= 20) {
					LCha.gotoAndStop(20);
					LCha.removeEventListener("tick", LChaTick);
					LChaTick = null;
				}
			};
			LCha.addEventListener("tick", LChaTick);
		}
		
		function emptyChaL() {
			if (LChaTick) {
				LCha.removeEventListener("tick", LChaTick);
				LChaTick = null;
			}
			LCha.gotoAndPlay(21);
			let LChaEmptyTick = function checkFrame() {
				if (LCha.currentFrame >= 39) {
					LCha.gotoAndStop(0);
					LCha.removeEventListener("tick", LChaEmptyTick);
				}
			};
			LCha.addEventListener("tick", LChaEmptyTick);
		}
		
		//luck
		let LLckBtn = this.l_lck_btn;
		let LLck = this.l_lck;
		
		LLck.stop();
		LLckBtn.alpha = 0.01;
		let LLckTick = null;
		
		LLckBtn.addEventListener("mouseover", fillLckL);
		LLckBtn.addEventListener("mouseout", emptyLckL);
		
		function fillLckL(){
			if (LLckTick) {
				LLck.removeEventListener("tick", LLckTick);
			}
			
			LLck.gotoAndPlay(1);
			LLckTick = function checkFrame() {
				if (LLck.currentFrame >= 20) {
					LLck.gotoAndStop(20);
					LLck.removeEventListener("tick", LLckTick);
					LLckTick = null;
				}
			};
			LLck.addEventListener("tick", LLckTick);
		}
		
		function emptyLckL() {
			if (LLckTick) {
				LLck.removeEventListener("tick", LLckTick);
				LLckTick = null;
			}
			LLck.gotoAndPlay(21);
			let LLckEmptyTick = function checkFrame() {
				if (LLck.currentFrame >= 39) {
					LLck.gotoAndStop(0);
					LLck.removeEventListener("tick", LLckEmptyTick);
				}
			};
			LLck.addEventListener("tick", LLckEmptyTick);
		}
		
		//eclipse stats
		
		//strength
		let EStrBtn = this.e_str_btn;
		let EStr = this.e_str;
		
		EStr.stop();
		EStrBtn.alpha = 0.01;
		let EStrTick = null;
		
		EStrBtn.addEventListener("mouseover", fillStrE);
		EStrBtn.addEventListener("mouseout", emptyStrE);
		
		function fillStrE(){
			if (EStrTick) {
				EStr.removeEventListener("tick", EStrTick);
			}
			
			EStr.gotoAndPlay(1);
			EStrTick = function checkFrame() {
				if (EStr.currentFrame >= 20) {
					EStr.gotoAndStop(20);
					EStr.removeEventListener("tick", EStrTick);
					EStrTick = null;
				}
			};
			EStr.addEventListener("tick", EStrTick);
		}
		
		function emptyStrE() {
			if (EStrTick) {
				EStr.removeEventListener("tick", EStrTick);
				EStrTick = null;
			}
			EStr.gotoAndPlay(21);
			let EStrEmptyTick = function checkFrame() {
				if (EStr.currentFrame >= 39) {
					EStr.gotoAndStop(0);
					EStr.removeEventListener("tick", EStrEmptyTick);
				}
			};
			EStr.addEventListener("tick", EStrEmptyTick);
		}
		
		//constitution
		let EConBtn = this.e_con_btn;
		let ECon = this.e_con;
		
		ECon.stop();
		EConBtn.alpha = 0.01;
		let EConTick = null;
		
		EConBtn.addEventListener("mouseover", fillConE);
		EConBtn.addEventListener("mouseout", emptyConE);
		
		function fillConE(){
			if (EConTick) {
				ECon.removeEventListener("tick", EConTick);
			}
			
			ECon.gotoAndPlay(1);
			EConTick = function checkFrame() {
				if (ECon.currentFrame >= 20) {
					ECon.gotoAndStop(20);
					ECon.removeEventListener("tick", EConTick);
					EConTick = null;
				}
			};
			ECon.addEventListener("tick", EConTick);
		}
		
		function emptyConE() {
			if (EConTick) {
				ECon.removeEventListener("tick", EConTick);
				EConTick = null;
			}
			ECon.gotoAndPlay(21);
			let EConEmptyTick = function checkFrame() {
				if (ECon.currentFrame >= 39) {
					ECon.gotoAndStop(0);
					ECon.removeEventListener("tick", EConEmptyTick);
				}
			};
			ECon.addEventListener("tick", EConEmptyTick);
		}
		
		//dexterity
		let EDxtBtn = this.e_dxt_btn;
		let EDxt = this.e_dxt;
		
		EDxt.stop();
		EDxtBtn.alpha = 0.01;
		let EDxtTick = null;
		
		EDxtBtn.addEventListener("mouseover", fillDxtE);
		EDxtBtn.addEventListener("mouseout", emptyDxtE);
		
		function fillDxtE(){
			if (EDxtTick) {
				EDxt.removeEventListener("tick", EDxtTick);
			}
			
			EDxt.gotoAndPlay(1);
			EDxtTick = function checkFrame() {
				if (EDxt.currentFrame >= 20) {
					EDxt.gotoAndStop(20);
					EDxt.removeEventListener("tick", EDxtTick);
					EDxtTick = null;
				}
			};
			EDxt.addEventListener("tick", EDxtTick);
		}
		
		function emptyDxtE() {
			if (EDxtTick) {
				EDxt.removeEventListener("tick", EDxtTick);
				EDxtTick = null;
			}
			EDxt.gotoAndPlay(21);
			let EDxtEmptyTick = function checkFrame() {
				if (EDxt.currentFrame >= 39) {
					EDxt.gotoAndStop(0);
					EDxt.removeEventListener("tick", EDxtEmptyTick);
				}
			};
			EDxt.addEventListener("tick", EDxtEmptyTick);
		}
		
		//wisdom
		let EWisBtn = this.e_wis_btn;
		let EWis = this.e_wis;
		
		EWis.stop();
		EWisBtn.alpha = 0.01;
		let EWisTick = null;
		
		EWisBtn.addEventListener("mouseover", fillWisE);
		EWisBtn.addEventListener("mouseout", emptyWisE);
		
		function fillWisE(){
			if (EWisTick) {
				EWis.removeEventListener("tick", EWisTick);
			}
			
			EWis.gotoAndPlay(1);
			EWisTick = function checkFrame() {
				if (EWis.currentFrame >= 20) {
					EWis.gotoAndStop(20);
					EWis.removeEventListener("tick", EWisTick);
					EWisTick = null;
				}
			};
			EWis.addEventListener("tick", EWisTick);
		}
		
		function emptyWisE() {
			if (EWisTick) {
				EWis.removeEventListener("tick", EWisTick);
				EWisTick = null;
			}
			EWis.gotoAndPlay(21);
			let EWisEmptyTick = function checkFrame() {
				if (EWis.currentFrame >= 39) {
					EWis.gotoAndStop(0);
					EWis.removeEventListener("tick", EWisEmptyTick);
				}
			};
			EWis.addEventListener("tick", EWisEmptyTick);
		}
		
		//intelligence
		let EIntBtn = this.e_int_btn;
		let EInt = this.e_int;
		
		EInt.stop();
		EIntBtn.alpha = 0.01;
		let EIntTick = null;
		
		EIntBtn.addEventListener("mouseover", fillIntE);
		EIntBtn.addEventListener("mouseout", emptyIntE);
		
		function fillIntE(){
			if (EIntTick) {
				EInt.removeEventListener("tick", EIntTick);
			}
			
			EInt.gotoAndPlay(1);
			EIntTick = function checkFrame() {
				if (EInt.currentFrame >= 20) {
					EInt.gotoAndStop(20);
					EInt.removeEventListener("tick", EIntTick);
					EIntTick = null;
				}
			};
			EInt.addEventListener("tick", EIntTick);
		}
		
		function emptyIntE() {
			if (EIntTick) {
				EInt.removeEventListener("tick", EIntTick);
				EIntTick = null;
			}
			EInt.gotoAndPlay(21);
			let EIntEmptyTick = function checkFrame() {
				if (EInt.currentFrame >= 39) {
					EInt.gotoAndStop(0);
					EInt.removeEventListener("tick", EIntEmptyTick);
				}
			};
			EInt.addEventListener("tick", EIntEmptyTick);
		}
		
		//bonus stats
		
		//stats
		let BStr = this.bonus_str;
		let BDef1 = this.bonus_def_1;
		let BFire = this.bonus_fireres;
		let BDef2 = this.bonus_def_2;
		let BWis = this.bonus_wis;
		
		BStr.alpha = 0;
		BDef1.alpha = 0;
		BFire.alpha = 0;
		BDef2.alpha = 0;
		BWis.alpha = 0;
		
		//buttons
		let BStrBtn = this.str_btn;
		let BDef1Btn = this.def1_btn;
		let BFireBtn = this.fire_btn;
		let BDef2Btn = this.def2_btn;
		let BWisBtn = this.wis_btn;
		
		BStrBtn.alpha = 0.01;
		BDef1Btn.alpha = 0.01;
		BFireBtn.alpha = 0.01;
		BDef2Btn.alpha = 0.01;
		BWisBtn.alpha = 0.01;
		
		BStrBtn.addEventListener("click", BStrFade.bind(this));
		
		function BStrFade() {
		    createjs.Tween.removeTweens(BStr);
		    
		    if (BStr.alpha <= 0.5) {
		        createjs.Tween.get(BStr)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut);
		    } else { 
		        createjs.Tween.get(BStr)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut);
		    }
		}
		
		BDef1Btn.addEventListener("click", Def1Fade.bind(this));
		function Def1Fade() {
		    createjs.Tween.removeTweens(BDef1);
		    
		    if (BDef1.alpha <= 0.5) {
		        createjs.Tween.get(BDef1)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut);
			} else { 
		        createjs.Tween.get(BDef1)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut); 
		    }
		}
		
		BFireBtn.addEventListener("click", FireFade.bind(this));
		function FireFade() {
		    createjs.Tween.removeTweens(BFire);
		    
		    if (BFire.alpha <= 0.5) {
		        createjs.Tween.get(BFire)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut); 
			} else {
				createjs.Tween.get(BFire)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut); 
		    }
		}
		
		BDef2Btn.addEventListener("click", Def2Fade.bind(this));
		function Def2Fade() {
		    createjs.Tween.removeTweens(BDef2);
		    
		    if (BDef2.alpha <= 0.5) {
		        createjs.Tween.get(BDef2)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut); 
			} else {        
				createjs.Tween.get(BDef2)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut); 
		    }
		}
		
		BWisBtn.addEventListener("click", WisFade.bind(this));
		function WisFade() {
		    createjs.Tween.removeTweens(BWis);
		    
		    if (BWis.alpha <= 0.5) {
		        createjs.Tween.get(BWis)
		            .to({ alpha: 1 }, 500, createjs.Ease.sineInOut); 
			} else {          
				createjs.Tween.get(BWis)
		            .to({ alpha: 0 }, 500, createjs.Ease.sineInOut); 
		    }
		}
		
		//particles
		
		let P1 = this.p1;
		let P2 = this.p2;
		let P3 = this.p3;
		let P4 = this.p4;
		let P5 = this.p5;
		let P6 = this.p6;
		let P7 = this.p7;
		let P8 = this.p8;
		let P9 = this.p9;
		let P10 = this.p10;
		let P11 = this.p11;
		let P12 = this.p12;
		let P13 = this.p13;
		let P14 = this.p14;
		
		P1.gotoAndPlay(0);
		P2.gotoAndPlay(9);
		P3.gotoAndPlay(25);
		P4.gotoAndPlay(42);
		P5.gotoAndPlay(13);
		P6.gotoAndPlay(32);
		P7.gotoAndPlay(4);
		P8.gotoAndPlay(29);
		P9.gotoAndPlay(19);
		P10.gotoAndPlay(36);
		P11.gotoAndPlay(49);
		P12.gotoAndPlay(1);
		P13.gotoAndPlay(22);
		P14.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Fill_Bars
	this.e_int = new lib.E_Int();
	this.e_int.name = "e_int";
	this.e_int.setTransform(646,4907.1);

	this.e_wis = new lib.E_Wis();
	this.e_wis.name = "e_wis";
	this.e_wis.setTransform(703,4853);

	this.e_dxt = new lib.E_Dxt();
	this.e_dxt.name = "e_dxt";
	this.e_dxt.setTransform(693,4800);

	this.e_con = new lib.E_Con();
	this.e_con.name = "e_con";
	this.e_con.setTransform(676,4746.1);

	this.e_str = new lib.E_Str();
	this.e_str.name = "e_str";
	this.e_str.setTransform(690,4692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e_str},{t:this.e_con},{t:this.e_dxt},{t:this.e_wis},{t:this.e_int}]}).wait(1));

	// Buttons
	this.e_int_btn = new lib.Stat_Btn();
	this.e_int_btn.name = "e_int_btn";
	this.e_int_btn.setTransform(325,4886.5);
	new cjs.ButtonHelper(this.e_int_btn, 0, 1, 1);

	this.e_wis_btn = new lib.Stat_Btn();
	this.e_wis_btn.name = "e_wis_btn";
	this.e_wis_btn.setTransform(324,4832.8);
	new cjs.ButtonHelper(this.e_wis_btn, 0, 1, 1);

	this.e_dxt_btn = new lib.Stat_Btn();
	this.e_dxt_btn.name = "e_dxt_btn";
	this.e_dxt_btn.setTransform(325,4777.4);
	new cjs.ButtonHelper(this.e_dxt_btn, 0, 1, 1);

	this.e_con_btn = new lib.Stat_Btn();
	this.e_con_btn.name = "e_con_btn";
	this.e_con_btn.setTransform(324.35,4723.5);
	new cjs.ButtonHelper(this.e_con_btn, 0, 1, 1);

	this.e_str_btn = new lib.Stat_Btn();
	this.e_str_btn.name = "e_str_btn";
	this.e_str_btn.setTransform(325,4668.5);
	new cjs.ButtonHelper(this.e_str_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e_str_btn},{t:this.e_con_btn},{t:this.e_dxt_btn},{t:this.e_wis_btn},{t:this.e_int_btn}]}).wait(1));

	// Buttons
	this.l_lck_btn = new lib.Stat_Btn();
	this.l_lck_btn.name = "l_lck_btn";
	this.l_lck_btn.setTransform(959,1128.6,1,1,0,0,0,-1,29);
	new cjs.ButtonHelper(this.l_lck_btn, 0, 1, 1);

	this.l_cha_btn = new lib.Stat_Btn();
	this.l_cha_btn.name = "l_cha_btn";
	this.l_cha_btn.setTransform(959,1074.5,1,1,0,0,0,-1,29);
	new cjs.ButtonHelper(this.l_cha_btn, 0, 1, 1);

	this.l_int_btn = new lib.Stat_Btn();
	this.l_int_btn.name = "l_int_btn";
	this.l_int_btn.setTransform(959,1020,1,1,0,0,0,-1,29);
	new cjs.ButtonHelper(this.l_int_btn, 0, 1, 1);

	this.l_wis_btn = new lib.Stat_Btn();
	this.l_wis_btn.name = "l_wis_btn";
	this.l_wis_btn.setTransform(960,965.5,1,1,0,0,0,-1,29);
	new cjs.ButtonHelper(this.l_wis_btn, 0, 1, 1);

	this.l_dxt_btn = new lib.Stat_Btn();
	this.l_dxt_btn.name = "l_dxt_btn";
	this.l_dxt_btn.setTransform(960,882.5);
	new cjs.ButtonHelper(this.l_dxt_btn, 0, 1, 1);

	this.l_con_btn = new lib.Stat_Btn();
	this.l_con_btn.name = "l_con_btn";
	this.l_con_btn.setTransform(960,826.5);
	new cjs.ButtonHelper(this.l_con_btn, 0, 1, 1);

	this.l_str_btn = new lib.Stat_Btn();
	this.l_str_btn.name = "l_str_btn";
	this.l_str_btn.setTransform(961,772.5);
	new cjs.ButtonHelper(this.l_str_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l_str_btn},{t:this.l_con_btn},{t:this.l_dxt_btn},{t:this.l_wis_btn},{t:this.l_int_btn},{t:this.l_cha_btn},{t:this.l_lck_btn}]}).wait(1));

	// Fill_bars
	this.l_lck = new lib.L_Lck();
	this.l_lck.name = "l_lck";
	this.l_lck.setTransform(1328.75,1122.4);

	this.l_cha = new lib.L_Cha();
	this.l_cha.name = "l_cha";
	this.l_cha.setTransform(1274.5,1067.7);

	this.l_int = new lib.L_Int();
	this.l_int.name = "l_int";
	this.l_int.setTransform(1305,1013);

	this.l_wis = new lib.L_Wis();
	this.l_wis.name = "l_wis";
	this.l_wis.setTransform(1281,959);

	this.l_dxt = new lib.L_Dxt();
	this.l_dxt.name = "l_dxt";
	this.l_dxt.setTransform(1299,905);

	this.l_con = new lib.L_Con();
	this.l_con.name = "l_con";
	this.l_con.setTransform(1308,852);

	this.l_str = new lib.L_Str();
	this.l_str.name = "l_str";
	this.l_str.setTransform(1287.4,798);
	new cjs.ButtonHelper(this.l_str, 0, 1, 2, false, new lib.L_Str(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l_str},{t:this.l_con},{t:this.l_dxt},{t:this.l_wis},{t:this.l_int},{t:this.l_cha},{t:this.l_lck}]}).wait(1));

	// Button
	this.wis_btn = new lib.Bonus_Btn();
	this.wis_btn.name = "wis_btn";
	this.wis_btn.setTransform(965,4083);
	new cjs.ButtonHelper(this.wis_btn, 0, 1, 1);

	this.def2_btn = new lib.Bonus_Btn();
	this.def2_btn.name = "def2_btn";
	this.def2_btn.setTransform(364,1671);
	new cjs.ButtonHelper(this.def2_btn, 0, 1, 1);

	this.fire_btn = new lib.Bonus_Btn();
	this.fire_btn.name = "fire_btn";
	this.fire_btn.setTransform(366,1545);
	new cjs.ButtonHelper(this.fire_btn, 0, 1, 1);

	this.def1_btn = new lib.Bonus_Btn();
	this.def1_btn.name = "def1_btn";
	this.def1_btn.setTransform(367,1498);
	new cjs.ButtonHelper(this.def1_btn, 0, 1, 1);

	this.str_btn = new lib.Bonus_Btn();
	this.str_btn.name = "str_btn";
	this.str_btn.setTransform(366.5,1372.5);
	new cjs.ButtonHelper(this.str_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.str_btn},{t:this.def1_btn},{t:this.fire_btn},{t:this.def2_btn},{t:this.wis_btn}]}).wait(1));

	// Plus
	this.p_wis = new lib.Plus_1();
	this.p_wis.name = "p_wis";
	this.p_wis.setTransform(965,4084);

	this.p_def2 = new lib.Plus_1();
	this.p_def2.name = "p_def2";
	this.p_def2.setTransform(364,1672);

	this.p_fire = new lib.Plus_1();
	this.p_fire.name = "p_fire";
	this.p_fire.setTransform(366,1546);

	this.p_def1 = new lib.Plus_1();
	this.p_def1.name = "p_def1";
	this.p_def1.setTransform(367,1499);

	this.p_str = new lib.Plus_1();
	this.p_str.name = "p_str";
	this.p_str.setTransform(367,1373);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p_str},{t:this.p_def1},{t:this.p_fire},{t:this.p_def2},{t:this.p_wis}]}).wait(1));

	// Bonus_Stats
	this.bonus_wis = new lib._5_Wis();
	this.bonus_wis.name = "bonus_wis";
	this.bonus_wis.setTransform(1136.3,4089);

	this.bonus_def_2 = new lib._3_Def();
	this.bonus_def_2.name = "bonus_def_2";
	this.bonus_def_2.setTransform(509.55,1671.9);

	this.bonus_fireres = new lib._5_FireRes();
	this.bonus_fireres.name = "bonus_fireres";
	this.bonus_fireres.setTransform(615.1,1546);

	this.bonus_def_1 = new lib._4_Def();
	this.bonus_def_1.name = "bonus_def_1";
	this.bonus_def_1.setTransform(532.15,1498.1);

	this.bonus_str = new lib._5_Str();
	this.bonus_str.name = "bonus_str";
	this.bonus_str.setTransform(562.1,1372.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bonus_str},{t:this.bonus_def_1},{t:this.bonus_fireres},{t:this.bonus_def_2},{t:this.bonus_wis}]}).wait(1));

	// Star_Button
	this.star_btn = new lib.Star_Btn();
	this.star_btn.name = "star_btn";
	this.star_btn.setTransform(1400.8,4145.05);
	new cjs.ButtonHelper(this.star_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.star_btn).wait(1));

	// Star
	this.star = new lib.Star_Inner_1();
	this.star.name = "star";
	this.star.setTransform(1527.8,4267.8);

	this.timeline.addTween(cjs.Tween.get(this.star).wait(1));

	// Lights
	this.instance = new lib.Lights();
	this.instance.setTransform(640.1,2107.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Static
	this.instance_1 = new lib.Static();
	this.instance_1.setTransform(1.2,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Eclipse_Glow_Animated
	this.eclipse_glow = new lib.Eclipse_Glow_Animated();
	this.eclipse_glow.name = "eclipse_glow";
	this.eclipse_glow.setTransform(1330.55,4614.95);

	this.timeline.addTween(cjs.Tween.get(this.eclipse_glow).wait(1));

	// Eclipse_Glow
	this.instance_2 = new lib.Eclipse_Glow_1();
	this.instance_2.setTransform(1330.9,4617.5);
	this.instance_2.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Glow
	this.glow = new lib.Glow_1();
	this.glow.name = "glow";
	this.glow.setTransform(960.15,2499.85);

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Shadows
	this.instance_3 = new lib.shadows();
	this.instance_3.setTransform(-0.25,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959.8,2499.9,961.4000000000001,2503.1);
// library properties:
lib.properties = {
	id: 'B92E27B477D77544AE8C619020814858',
	width: 1920,
	height: 5000,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"images/Glow.png?1747161072177", id:"Glow"},
		{src:"images/shadows.png?1747161072177", id:"shadows"},
		{src:"images/Static.png?1747161072177", id:"Static"},
		{src:"images/Infographic_atlas_1.png?1747161072120", id:"Infographic_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(infographic_canvas) {
	createjs.Stage.call(this, infographic_canvas);
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
an.compositions['B92E27B477D77544AE8C619020814858'] = {
	getStage: function() { return exportRoot.stage; },
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
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
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