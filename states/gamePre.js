var left=false;
//var bottomleft=false;
//var topleft=false;
var right=false;
//var bottomright=false;
//var topright=false;
var down= false;
var up= false;
//var fire=false;
//var jump=false;
//var isFalling= false;

var lightColor=0;
var redColorValue= 255;
var greenColorValue= 255;
var blueColorValue= 224;

var key1;
var key2;
var key3;
var key4;

var score= 0;
var time=0;

console.log("Game State Initialized");

var gameStatePre={

	create: function(){

		keyUp = this.input.keyboard.addKey(Phaser.Keyboard.UP);
	    //key1.onDown.add(this.moveUp, this);

	    keyDown = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	    //key2.onDown.add(this.moveDown, this);

	    keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	    //key3.onDown.add(this.moveLeft, this);

	    keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	    //key4.onDown.add(this.moveRight, this);

	    this.input.keyboard.removeKeyCapture(Phaser.Keyboard.UP);
    	this.input.keyboard.removeKeyCapture(Phaser.Keyboard.DOWN);
    	this.input.keyboard.removeKeyCapture(Phaser.Keyboard.LEFT);
    	this.input.keyboard.removeKeyCapture(Phaser.Keyboard.RIGHT);


		sky= this.add.tileSprite(this.game.width/2,0,this.game.width,150,"Sky");
		sky.anchor.setTo(0.5,0.5);
		sky.autoScroll(-50,0);

		moon= this.add.sprite(0,0,"moon4");
		moon.anchor.setTo(0.5,0.5);
		moon.scale.setTo(0.1,0.1);
		moon.reset(this.game.width-moon.width,moon.height/2.75);

		background= this.add.sprite(0,0,"BG2");
		background.scale.x= this.game.width/background.width/1.2;
		background.scale.y= this.game.height/background.height/1.25;
		background.inputEnabled= true;
		background.reset((this.game.width-background.width)/2,(this.game.height-background.height)/2.75);

		/*this.backgroundLeft= this.game.add.sprite(0,0,"BGLeft");
		this.backgroundLeft.scale.x= this.game.width/this.backgroundLeft.width/3;
		this.backgroundLeft.scale.y= this.game.height/this.backgroundLeft.height/0.75;
		this.backgroundLeft.inputEnabled= true;
		this.backgroundLeft.reset(-270,35);*/

		backgroundLeft= this.add.sprite(0,0,"BGLeft");
		backgroundLeft.scale.x= this.game.width/backgroundLeft.width/3;
		backgroundLeft.scale.y= this.game.height/backgroundLeft.height/0.675;
		backgroundLeft.reset((this.game.width-background.width*1.8)/2,(this.game.height-background.height)/2.75);
		//this.backgroundLeft.inputEnabled= true;
		//this.backgroundLeft.reset(-270,35);

		backgroundRight= this.add.sprite(0,0,"BGRight");
		backgroundRight.scale.x= this.game.width/backgroundRight.width/3;
		backgroundRight.scale.y= this.game.height/backgroundRight.height/0.675;
		backgroundRight.reset((this.game.width-background.width)*5.5,(this.game.height-background.height)/2.75);

		//this.background.events.onInputDown.add(this.launchGame, this);

		//this.game.stage.backgroundColor = 0x4488cc;

		//this.water= this.game.add.sprite(this.game.width/2,this.game.height/1.25,"water");
		
		water= this.add.tileSprite(this.game.width/2,this.game.height/1.35,this.game.width,116,"water2");
		water.scale.x= (this.game.width/water.width)/1;
		water.scale.y= this.game.height/water.height/4.75;
		water.anchor.setTo(0.5,0.5);
		water.autoScroll(7.5,0);


		/*this.test= this.game.add.sprite(0,0,"test");
		this.test.anchor.setTo(0.5,0.5);
		//this.test.scale.setTo(0.1,0.1);
		this.test.scale.x= 0.2;
		this.test.scale.y= 0.6;
		//this.test.rotation= 3*Math.PI+0.1;
		this.test.reset((this.game.width-this.background.width)/2-15, 175);

		this.test2= this.game.add.sprite(0,0,"test2");
		this.test2.anchor.setTo(0.5,0.5);
		//this.test.scale.setTo(0.1,0.1);
		this.test2.scale.x= 0.2;
		this.test2.scale.y= 0.6;
		this.test2.reset((this.game.width-this.test2.width)+45, 175);*/

		floor= this.add.sprite(0,0,"BG");
		floor.anchor.setTo(0.5,0.5);
		floor.scale.x= this.game.width/floor.width/1;		
		floor.scale.y= this.game.height/floor.height/4;
		floor.reset(this.game.width/2,this.game.height-floor.height/5);
		//this.floor.rotation= 3*Math.PI+0.1;

		//this.Ready= this.game.add.sprite(this.game.width/2,this.game.height/6,"Ready");
		//this.Ready.anchor.setTo(0.5,0.5);

		//this.bird= this.game.add.sprite(this.game.width/4,this.game.height/2.25,"bird");
		//this.bird.anchor.setTo(0.5,0.5);
		//this.bird.animations.add("flap",[0,1,2],12,true);
		//this.bird.play("flap");

		/*this.dudes= this.game.add.group();
		this.dudes.enableBody= true;
		this.dudes.createMultiple(16,"dude");

		this.doges= this.game.add.group();
		this.doges.enableBody= true;
		this.doges.createMultiple(16,"doge");*/

		prisoners= this.add.group();
		prisoners.enableBody= true;
		prisoners.createMultiple(16,"prisoner");

		redPrisoners= this.add.group();
		redPrisoners.enableBody= true;
		redPrisoners.createMultiple(16,"prisonerRed");
		
		greenPrisoners= this.add.group();
		greenPrisoners.enableBody= true;
		greenPrisoners.createMultiple(16,"prisonerGreen");
		
		bluePrisoners= this.add.group();
		bluePrisoners.enableBody= true;
		bluePrisoners.createMultiple(16,"prisonerBlue");
		


		/*this.dude= this.game.add.sprite(0,0,"dude");
		this.dude.reset(this.game.width-this.dude.width*2,this.game.height/2+this.dude.height);
		this.dude.anchor.setTo(0.5,0.5);
		this.dude.animations.add("run",[0,1,2,3]);
		this.dude.play("run",10,true);*/

		//this.Instructions= this.game.add.sprite(this.game.width/2,this.game.height/1.5,"Instructions");
		//this.Instructions.anchor.setTo(0.5,0.5);


		//this.LIGHT_RADIUS = 100;
		 // Create the shadow texture
    	shadowTexture = this.add.bitmapData(this.game.width, this.game.height);

    	// Create an object that will use the bitmap as a texture
    	lightSprite = this.add.image(0, 0, shadowTexture);

	    // Set the blend mode to MULTIPLY. This will darken the colors of
	    // everything below this sprite.
	    lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

	    // Create the lights
	    lights = this.add.group();

	    //this.lights.add(new Torch(this.game, 200, 150));
    	//this.lights.add(new Torch(this.game, this.game.width-200, 150));

	    movingLight = new Torch(this, this.game.width/2, this.game.height/2);	
    	lights.add(movingLight);

    	this.physics.arcade.enable(movingLight);

    	//this.movingLight.body.collideWorldBounds = true;

    	//this.movingLight.body.velocity.y = 100;

    	//this.movingLight.boundsSprite = this.background;
    	//this.bound1 = this.game.add.sprite(130, 200, 'doge');
    	//this.bound1 = 'doge';
    	//this.game.physics.enable(this.bound1, Phaser.Physics.ARCADE);
    	//this.bound1.body.setSize(400, 50, -100, 20);
    	//this.bound1.body.immovable = true;

    	//this.game.input.activePointer.x = this.game.width/2;
    	//this.game.input.activePointer.y = this.game.height/2;

		//console.log(this.background.width);
		rows= [];
		rowWidth= background.width/32;
		for(var i=1; i<8; i++){
			rowWidth+=background.width/7;
			rows[i]= rowWidth;
			//console.log(this.rows[i]);
		};
		//console.log("bg width: "+this.background.width);

		//this.climbing= false;
		//this.existingDudes= 0;

		//buttonBlue = this.game.add.button(0,0, 'buttonBlue', null, this, 0, 1, 0, 1);
	    buttonRed = this.add.button(0,0, 'redButtonPressed', null, this);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		buttonRed.scale.setTo(0.175,0.175);
		buttonRed.reset(this.game.width-buttonRed.width*1.125, this.game.height-buttonRed.height*4);
	    buttonRed.fixedToCamera = true;
	    buttonRed.events.onInputDown.add(function(){lightColor=1;});
	    //buttonRed.events.onInputOver.add(function(){lightColor=1;});
	    //buttonRed.events.onInputOut.add(function(){fire=false;});
	    //buttonRed.events.onInputDown.add(function(){fire=true;});
	    //buttonRed.events.onInputUp.add(function(){fire=false;});

		//buttonGreen = this.game.add.button(0,0, 'buttonGreen', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		buttonGreen = this.add.button(0,0, 'greenButtonPressed', null, this);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		buttonGreen.scale.setTo(0.175,0.175);
		buttonGreen.reset(this.game.width-buttonGreen.width*1.125, this.game.height-buttonGreen.height*2.75);
	    buttonGreen.fixedToCamera = true;  //our buttons should stay on the same place  
	    buttonGreen.events.onInputDown.add(function(){lightColor=2;});
	    //buttonGreen.events.onInputOver.add(function(){lightColor=2;});
	    /*buttonGreen.events.onInputOut.add(function(){jump=false;});
	    buttonGreen.events.onInputDown.add(function(){jump=true;});
	    buttonGreen.events.onInputUp.add(function(){jump=false;});*/

	    //buttonBlue = this.game.add.button(0,0, 'buttonBlue', null, this, 0, 1, 0, 1);
	    buttonBlue = this.add.button(0,0, 'blueButtonPressed', null, this);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		buttonBlue.scale.setTo(0.175,0.175);
		buttonBlue.reset(this.game.width-buttonBlue.width*1.125, this.game.height-buttonBlue.height*1.5);
	    buttonBlue.fixedToCamera = true;
		buttonBlue.events.onInputDown.add(function(){lightColor=3;});
	    //buttonBlue.events.onInputOver.add(function(){lightColor=3;});
	    /*buttonBlue.events.onInputOut.add(function(){fire=false;});
	    buttonBlue.events.onInputDown.add(function(){fire=true;});
	    buttonBlue.events.onInputUp.add(function(){fire=false;});*/

	    buttonleft = this.add.button(0, 0, 'buttonhorizontal', null, this, 0, 1, 0, 1);
	    //buttonleft.scale.setTo(0.5,0.5);
		//buttonleft.reset(buttonleft.width*1.125, this.game.height-buttonleft.height*3.375);
		buttonleft.reset(buttonleft.width/4, this.game.height-buttonleft.height*2.5);
	    buttonleft.fixedToCamera = true;
	    //buttonleft.events.onInputOver.add(function(){left=true;});
	    //buttonleft.events.onInputOut.add(function(){left=false;});
	    buttonleft.events.onInputDown.add(function(){left=true;});
	    buttonleft.events.onInputUp.add(function(){left=false;});


	    /*buttonbottomleft = this.game.add.button(0,0, 'buttondiagonal', null, this, 6, 4, 6, 4);
	    //buttonbottomleft.scale.setTo(0.5,0.5);
	    buttonbottomleft.reset(buttonbottomleft.width/1.125, this.game.height-buttonbottomleft.height*1.05);
	    buttonbottomleft.fixedToCamera = true;
	    //buttonbottomleft.events.onInputOver.add(function(){bottomleft=true;});
	    ////buttonbottomleft.events.onInputOut.add(function(){bottomleft=false;});
	    buttonbottomleft.events.onInputDown.add(function(){bottomleft=true;});
	    buttonbottomleft.events.onInputUp.add(function(){bottomleft=false;});

	    buttontopleft = this.game.add.button(0,0, 'buttondiagonal', null, this, 6, 4, 6, 4);
	    //buttontopleft.scale.setTo(0.5,0.5);
	    buttontopleft.reset(buttontopleft.width*1.9, this.game.height-buttontopleft.height*4);
	    buttontopleft.angle= 90;
	    buttontopleft.fixedToCamera = true;
	    //buttontopleft.events.onInputOver.add(function(){topleft=true;});
	    //buttontopleft.events.onInputOut.add(function(){topleft=false;});
	    buttontopleft.events.onInputDown.add(function(){topleft=true;});
	    buttontopleft.events.onInputUp.add(function(){topleft=false;});*/

	    buttonright = this.add.button(0, 0, 'buttonhorizontal', null, this, 0, 1, 0, 1);
	    //buttonright.scale.setTo(0.5,0.5);
		//buttonleft.reset(buttonleft.width*1.125, this.game.height-buttonleft.height*3.375);
		buttonright.reset(buttonright.width*2.4, this.game.height-buttonright.height*2.5);
	    buttonright.fixedToCamera = true;
	    //buttonright.events.onInputOver.add(function(){right=true;});
	   // buttonright.events.onInputOut.add(function(){right=false;});
	    buttonright.events.onInputDown.add(function(){right=true;});
	    buttonright.events.onInputUp.add(function(){right=false;});

	    /*buttonbottomright = this.game.add.button(0,0, 'buttondiagonal', null, this, 7, 5, 7, 5);
	    //buttonbottomright.scale.setTo(0.5,0.5);
	    buttonbottomright.reset(buttonbottomright.width*3.6, this.game.height-buttonbottomright.height*1.025);
	    buttonbottomright.fixedToCamera = true;
	    //buttonbottomright.events.onInputOver.add(function(){bottomright=true;});
	    //buttonbottomright.events.onInputOut.add(function(){bottomright=false;});
	    buttonbottomright.events.onInputDown.add(function(){bottomright=true;});
	    buttonbottomright.events.onInputUp.add(function(){bottomright=false;});

	    buttontopright = this.game.add.button(0,0, 'buttondiagonal', null, this, 7, 5, 7, 5);
	    //buttontopright.scale.setTo(0.5,0.5);
	    buttontopright.reset(buttonbottomright.width*3.6, this.game.height-buttonbottomright.height*3);
	    buttontopright.angle= -90;
	    buttontopright.fixedToCamera = true;
	    //buttontopright.events.onInputOver.add(function(){topright=true;});
	    //buttontopright.events.onInputOut.add(function(){topright=false;});
	    buttontopright.events.onInputUp.add(function(){topright=false;});
	    buttontopright.events.onInputDown.add(function(){topright=true;});*/

	    buttondown = this.add.button(0,0, 'buttonvertical', null, this, 0, 1, 0, 1);
	    //buttondown.scale.setTo(0.5,0.5);
		//buttonleft.reset(buttonleft.width*1.125, this.game.height-buttonleft.height*3.375);
		buttondown.reset(buttondown.width*2.25, this.game.height-buttondown.height*1.05);
	    buttondown.fixedToCamera = true;
	    //buttondown.events.onInputOver.add(function(){down=true;});
	    //buttondown.events.onInputOut.add(function(){down=false;});
	    buttondown.events.onInputDown.add(function(){down=true;});
	    buttondown.events.onInputUp.add(function(){down=false;});

	    buttonup = this.add.button(0,0, 'buttonvertical', null, this, 0, 1, 0, 1);
	    //buttonup.scale.setTo(0.5,0.5);
		//buttonleft.reset(buttonleft.width*1.125, this.game.height-buttonleft.height*3.375);
		buttonup.reset(buttonup.width*2.25, this.game.height-buttonup.height*4);
	    buttonup.fixedToCamera = true;
	    //buttonup.events.onInputOver.add(function(){up=true;});
	    //buttonup.events.onInputOut.add(function(){up=false;});
	    buttonup.events.onInputDown.add(function(){up=true;});
	    buttonup.events.onInputUp.add(function(){up=false;});

	   	prisonerGenerator= this.time.events.loop(1500, this.createPrisoners, this);
		prisonerGenerator.timer.start();

		/*this.prisonerGeneratorRed= this.game.time.events.loop(6011, this.createPrisonersRed, this);
		this.prisonerGeneratorRed.timer.start();

		this.prisonerGeneratorGreen= this.game.time.events.loop(4003, this.createPrisonersGreen, this);
		this.prisonerGeneratorGreen.timer.start();

		this.prisonerGeneratorBlue= this.game.time.events.loop(2017, this.createPrisonersBlue, this);
		this.prisonerGeneratorBlue.timer.start();*/

	    //this.dudeGenerator= this.game.time.events.loop(2500, this.createDudes, this);
		//this.dudeGenerator.timer.start();

		//this.dogeGenerator= this.game.time.events.loop(2500, this.createDoges2, this);
		//this.dogeGenerator.timer.start();

		//this.isPlaying= null;
		font1 = this.add.retroFont('BurglarX', 16, 16, Phaser.RetroFont.TEXT_SET2, 95, 0, 0, 0, 80);
		font1.text = "Score:"+score;
		image1 = this.add.image(0, 0, font1);
		image1.reset(image1.width/1.5, image1.height*1.5);
    	image1.anchor.set(0.5);

    	/*this.font2 = this.game.add.retroFont('171', 302/19, 64/3.4, "ABCDEFGHIJKLMNOPQRSTUVWXYZ| 0123456789#@!;:.,$?-+=/&*()' ", 19, 0, 0, 0, 0);
    	//this.font2 = this.game.add.retroFont('171', 302/19, 64/3.4, Phaser.RetroFont.TEXT_SET4, 19, 0, 0, 0, 0);
    	this.font2.text = "Score:"+score;
		this.image2 = this.game.add.image(0, 0, this.font2);
		this.image2.reset(this.image2.width/1.5, this.image2.height*3);
    	this.image2.anchor.set(0.5);

    	this.font3 = this.game.add.retroFont('BubbleMemories', 16, 16, Phaser.RetroFont.TEXT_SET2, 95, 0, 0, 0, 48);
    	//this.font2 = this.game.add.retroFont('171', 302/19, 64/3.4, Phaser.RetroFont.TEXT_SET4, 19, 0, 0, 0, 0);
    	this.font3.text = "Score:"+score;
		this.image3 = this.game.add.image(0, 0, this.font3);
		this.image3.reset(this.image3.width/1.5, this.image3.height*5.5);
    	this.image3.anchor.set(0.5);*/

	},

	update: function(){

		// Move the movable light to where the pointer is

	    //this.movingLight.x = this.game.input.activePointer.x;
	    //this.movingLight.y = this.game.input.activePointer.y;

	    //console.log(this.movingLight.x);

	    // Update the shadow texture each frame
	    this.updateShadowTexture();

	    //this.checkPrisoners();
	    //this.prisonerClimbs2();

	    //this.checkDudes();
	    //this.checkDoges();

	     /*this.dudes.forEachAlive(function(dude) {
    		//console.log("hey");
    		//dude.destroy();
    		//console.log("Dude coord :" + dude.x);
    		//console.log("Picked row number: "+ this.pickedRow)
			//if(this.climbing==false){
			//this.pickRow= Math.floor( Math.random()*8 ) + 1;
			//this.pickedRow= this.rows[this.pickRow];

			if(dude.x <= this.pickedRow){
			console.log("reched the row");
			dude.body.velocity.x= 0;
			dude.body.velocity.y= -200;
			this.climbing= true;
			//dude.checkWorldBounds= true;
			//dude.outOfBoundsKill= true;
			//dude.body.immovable= true;
			//dude.body.gravity.y= 0;
		}
		//}
		else{
			this.climbing==false;
			//dude.body.velocity.y= 0;
		}

  		});*/

		//this.game.physics.arcade.overlap(this.movingLight, this.prisoners, this.prisonerFalls, null, this);
		this.physics.arcade.overlap(movingLight, redPrisoners, this.prisonerFalls, null, this);
		this.physics.arcade.overlap(movingLight, greenPrisoners, this.prisonerFalls, null, this);
		this.physics.arcade.overlap(movingLight, bluePrisoners, this.prisonerFalls, null, this);
	    //this.game.physics.arcade.overlap(this.movingLight, this.dudes, this.dudeFalls, null, this);
	    //this.game.physics.arcade.overlap(this.movingLight, this.doges, this.dogeFalls, null, this);

	    //this.game.physics.arcade.collide(this.movingLight, this.bound1, this.collisionHandler, null, this);

	    if (left && movingLight.x >= (background.width * 0.15)) {
	        //player.scale.x = -1;
	        movingLight.x-=8;
	        //player.body.moveLeft(500);
	        //player.animations.play('walk');
    	}
    	/*else if (bottomleft) {
	        //player.scale.x = -1;
	        if(this.movingLight.y <= (this.background.height))
	        	this.movingLight.y +=4;
	        if(this.movingLight.x >= (this.background.width * 0.15))
	        	this.movingLight.x -=6;
	        //else if(this.movingLight.x >= (this.background.width * 0.15))
	        //this.movingLight.x -=2;
	        //player.body.moveLeft(500);
	        //player.animations.play('walk');
    	}
    	else if (topleft) {
	        //player.scale.x = -1;
	        if(this.movingLight.y >= (this.background.height * 0.38))
	        	this.movingLight.y -=4;
	        if(this.movingLight.x >= (this.background.width * 0.15))
	        	this.movingLight.x -=6;
	        //player.body.moveLeft(500);
	        //player.animations.play('walk');
    	}*/
    	if(right && movingLight.x <= (background.width * 1.05)){
    		movingLight.x+=8;
    	}
    	/*else if(bottomright){
    		if(this.movingLight.y <= (this.background.height))
	        	this.movingLight.y +=4;
	        if(this.movingLight.x <= (this.background.width * 1.05))
	        	this.movingLight.x +=6;
    	}
    	else if(topright){
    		if(this.movingLight.y >= (this.background.height * 0.38))
	        	this.movingLight.y -=4;
	        if(this.movingLight.x <= (this.background.width * 1.05))
	        	this.movingLight.x +=6;
    	}*/
    	if(down && movingLight.y <= (background.height * 0.725)){
    		movingLight.y+=5;
    	}
    	if(up && movingLight.y >= (background.height * 0.2)){
    		movingLight.y-=5;	
    	}

    	if(lightColor==1){
    		redColorValue= 255;
    		greenColorValue= 75;
    		blueColorValue= 75;
    	}
    	if(lightColor==2){
    		redColorValue= 75;
    		greenColorValue= 255;
    		blueColorValue= 75;
    	}
    	if(lightColor==3){
    		redColorValue= 75;
    		greenColorValue= 75;
    		blueColorValue= 255;
    	}

    	if(keyUp.isDown && movingLight.y >= (background.height * 0.2)){
    		movingLight.y -=5;	
    	}

    	if(keyDown.isDown && movingLight.y <= (background.height * 0.725)){
    		movingLight.y +=5;	
    	}

    	if(keyLeft.isDown && movingLight.x >= (background.width * 0.15)){
    		movingLight.x -=8;
    	}

    	if(keyRight.isDown && movingLight.x <= (background.width * 1.05)){
    		movingLight.x +=8;
    	}

    	//console.log(this.movingLight.y);
    	//console.log(this.background.height);
    	//console.log(lightColor);
    	//RED
        //gradient.addColorStop(0, 'rgba(255, 50, 50, 1.0)');
        	//GREEN
        //gradient.addColorStop(0, 'rgba(50, 255, 50, 1.0)');
        	//BLUE
        //gradient.addColorStop(0, 'rgba(50 ,50 , 255, 1.0)');

	},

	render: function(){
		this.game.debug.text(this.time.fps || '--', 100, 100, "#00ff00"); 
		//this.game.debug.bodyInfo(sprite2, 32, 32);

	    //this.game.debug.body(this.bound1);
	    //this.game.debug.body(this.movingLight);
	},

	launchGame: function(){
		this.state.start("GamePlay");
	},

	updateShadowTexture: function(){
		// This function updates the shadow texture (this.shadowTexture).
    // First, it fills the entire texture with a dark shadow color.
    // Then it draws a white circle centered on the pointer position.
    // Because the texture is drawn to the screen using the MULTIPLY
    // blend mode, the dark areas of the texture make all of the colors
    // underneath it darker, while the white area is unaffected.

    // Draw shadow

    shadowTexture.context.fillStyle = 'rgb(125, 125, 150)';
    //this.shadowTexture.context.fillStyle = 'rgb(255,255,255)';

    shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);

    // Iterate through each of the lights and draw the glow
    lights.forEach(function(light) {
        // Randomly change the radius each frame
        var radius = 40 + this.rnd.integerInRange(2,4);

        // Draw circle of light with a soft edge
        var gradient =
            shadowTexture.context.createRadialGradient(
                light.x, light.y,100 * 0.35,
                light.x, light.y, radius);
            //RED
        //gradient.addColorStop(0, 'rgba(255, 50, 50, 1.0)');
        	//GREEN
        //gradient.addColorStop(0, 'rgba(50, 255, 50, 1.0)');
        	//BLUE
        //gradient.addColorStop(0, 'rgba(50 ,50 , 255, 1.0)');
        gradient.addColorStop(0, 'rgba('+redColorValue+','+greenColorValue+','+blueColorValue+', 1.0)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');

        shadowTexture.context.beginPath();
        shadowTexture.context.fillStyle = gradient;
        shadowTexture.context.arc(light.x, light.y, radius, 0, Math.PI*2);
        shadowTexture.context.fill();
    }, this);

    // This just tells the engine it should update the texture cache
    shadowTexture.dirty = true;
	},

	createPrisoners: function(){
		var prisoner;
		var prisonerColor= Math.floor( Math.random()*3 );
		switch(prisonerColor){
			case(0): 	prisoner= redPrisoners.getFirstDead();
						prisoner.name="red";
						break;
			case(1): 	prisoner= greenPrisoners.getFirstDead();
						prisoner.name="green";
						break;
			case(2): 	prisoner= bluePrisoners.getFirstDead();
						prisoner.name="blue";
						break;
			default:    break;
		}
		prisoner.body.enable= true;
		prisoner.angle= 0;
		prisoner.scale.y = 1;
		prisoner.animations.add("run",[0,1,2,3,4,5,6,7,8]);
		//prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("climb",[14,15,16,17],7.5,true);
		prisoner.play("run",10,true);
		prisoner.checkWorldBounds= true;
		prisoner.outOfBoundsKill= true;
		//if(!prisoner.inWorld)
			//console.log("A prisoner has died!");
		prisoner.body.immovable= true;
		prisoner.body.gravity.y= 0;
		prisoner.anchor.setTo(0.5,0.5);
		//prisoner.frame=0;
		pickRow= Math.floor( Math.random()*7 ) + 1;
		pickedRow= rows[pickRow];
		where= Math.floor(Math.random()+0.5);
		//console.log(where);
		if(where==0){
		prisoner.reset(0,this.game.height/1.15);
		//prisoner.reset(this.game.width,this.game.height/1.25);
		prisoner.angle= 180;
		prisoner.scale.y = -1;

		this.prisonerFindClimbPlace(prisoner, pickedRow, 900, 1800);
		}

		else{
		prisoner.reset(this.game.width,this.game.height/1.15);
		this.prisonerFindClimbPlace(prisoner, pickedRow, 1800, 900);
		}
	},

	/*prisonerFalls: function(light, thePrisoner){
		//console.log("lighted a dude!");
		//theDude.body.velocity.x= 0;
		//theDude.body.velocity.y= 0;
		//theDude.body.gravity.y= 600;
		//theDude.body.immovable= true;
		//this.existingDudes-=1;

		thePrisoner.body.enable= false;

		//thePrisoner.animations.destroy();
		//thePrisoner.animations.removeAll();
		//isFalling= true;
		//thePrisoner.animations.getAnimation("climb").stop();
		//thePrisoner.animations.getAnimation("climb").destroy();
		//thePrisoner.animations.add("climb",[13],7.5,false);
		//thePrisoner.animations.add("climb");
		//thePrisoner.animations.getAnimation("climb").enable= false;
		//thePrisoner.animations.add("fall",[9,10,11,12,13]);
		thePrisoner.animations.stop();
		thePrisoner.play("fall",10,false);
		//thePrisoner.animations.getAnimation("fall").isPlaying();

		if(thePrisoner)
		this.falling= this.game.add.tween(thePrisoner).to({y: this.game.height-this.floor.height}, 800, Phaser.Easing.Linear.None,true);
		//this.falling= this.game.add.tween(thePrisoner).to({y: this.game.height*2}, 700, Phaser.Easing.Linear.None,true);
		//console.log(this.falling.isRunning);
		//this.falling.onComplete.add(this.doSomething, this);
		//this.falling.onComplete.add(this.killPrisoner, this);

		this.falling.onComplete.removeAll();
		this.falling.onComplete.add(this.killPrisoner, this);
		score+=10;
		this.font1.text = "Score:"+score;
		//this.font2.text = "Score:"+score;
		//this.font3.text = "Score:"+score;
		//this.falling.onComplete.add(function () {
        //thePrisoner.destroy();
    	//});

		//this.falling.stop();
		//this.falling= null;
		//theDude.y= 300;
		//light.body.enable= false;
		//light.body.enable= true;
		//theDude.body.moves= false;
		//return theDude.body.moves;
		//theDude.destroy();
	},*/

	/*killPrisoner: function(thePrisoner){
		thePrisoner.reset(this.game.width,this.game.height/1.25);
		thePrisoner.kill();
		//console.log("A prisoner has died!");
	},*/

	/*checkPrisoners: function(){
		//if(this.prisoners.countLiving()!=0){
			//console.log(this.existingDudes);
		//var dude= this.dudes.getAt(this.existingDudes-1);
		//var prisoner= this.prisoners.getRandom();
		var prisoner= this.prisoners.next();
		this.prisoners.forEach(this.prisonerClimbs, this, true, prisoner);
		//console.log("Dude coord :" + dude.x);

		//console.log("Picked row number: "+ this.pickedRow)

		//if(prisoner.x <= this.pickedRow){

			//console.log("reched the row");

			//prisoner.animations.stop();
			//prisoner.body.velocity.x= 0;
			//prisoner.body.velocity.y= -200;

			//prisoner.body.enable= false;
			//prisoner.animations.destroy();
			//prisoner.animations.getAnimation("fall").destroy();
			//prisoner.animations.stop();
			//if(!isFalling){
			//lol= prisoner.animations.getAnimation("fall");
			//if(lol.isPlaying)
			//console.log(prisoner.animations.getAnimation("climb").isPlaying());
			///if(this.isFalling.isPlaying)

			//prisoner.play("climb");

			//}
			//this.climbing= true;
			//dude.checkWorldBounds= true;
			//dude.outOfBoundsKill= true;
			//dude.body.immovable= true;
			//dude.body.gravity.y= 0;

		//}

		//}
		//else{
		//	this.climbing==false;
			//dude.body.velocity.y= 0;
		//}
	//}

	},*/

	/*prisonerClimbs: function(prisoner){

		//var prisoner= this.prisoners.getRandom();
		//console.log("Picked row number: "+ this.pickedRow)
		//if(this.climbing==false){
		if(prisoner.x <= this.pickedRow){
			//console.log("reched the row");
			prisoner.animations.stop();
			prisoner.body.velocity.x= 0;
			prisoner.body.velocity.y= -200;
			//prisoner.body.enable= false;
			//prisoner.animations.destroy();
			//prisoner.animations.getAnimation("fall").destroy();
			//prisoner.animations.stop();
			//if(!isFalling){
			//lol= prisoner.animations.getAnimation("fall");
			//if(lol.isPlaying)
			//console.log(prisoner.animations.getAnimation("climb").isPlaying());
			///if(this.isFalling.isPlaying)
			prisoner.play("climb");
		}

	},*/

	/*prisonerFindClimbPlace: function(prisoner,pickedRow, pickRow){
		//console.log("Picked Row: "+pickRow+", Time to reach row: "+(prisoner.x/pickedRow)*1000);
		if(pickedRow< 4*(this.background.width/7))
		var gonnaClimb= this.game.add.tween(prisoner).to({x: pickedRow}, 1800, Phaser.Easing.Linear.None,true);
		else if(pickedRow== 4*(this.background.width/7))
		var gonnaClimb= this.game.add.tween(prisoner).to({x: pickedRow}, 1200, Phaser.Easing.Linear.None,true);			
		else
		var gonnaClimb= this.game.add.tween(prisoner).to({x: pickedRow}, 900, Phaser.Easing.Linear.None,true);			
		gonnaClimb.onComplete.removeAll();
		gonnaClimb.onComplete.add(this.prisonerClimbs2, this);

	},*/

	/*prisonerClimbs2: function(prisoner){
		prisoner.animations.stop();
		prisoner.body.velocity.x= 0;
		//prisoner.body.velocity.y= 0;
		prisoner.body.velocity.y= -200;
		//prisoner.animations.stop();
		prisoner.play("climb");
		//var isClimbing= this.game.add.tween(prisoner).to({y: prisoner.height*1.25}, 1600, Phaser.Easing.Linear.None,true);
		//isClimbing.onComplete.removeAll();
		//isClimbing.onComplete.add(this.killPrisoner, this);
	},*/

	/*createDoges2: function(){
		//console.log(this.doges.countLiving());
		var doge= this.doges.getFirstDead();
		doge.body.enable= true;
		doge.frame=0;

		doge.reset(0,this.game.height/1.25);
		doge.anchor.setTo(0.5,0.5);
		doge.angle= 180;
		doge.scale.y = -1;
		doge.animations.add("run",[0,1]);
		doge.play("run",10,true);
		//var bottomPipe= this.bottomPipes.getFirstDead();
		//bottomPipe.frame=1;

		//////////////////ESPACIO ENTRE PIPAS = 96
		//////////////////COORDENADA Y MINIMA = -280
		//////////////////COORDENADA Y MAXIMA = -74
		//var coordY= Math.floor(Math.random()*207)-280;
		//dude.reset(this.game.width,coordY);
		//bottomPipe.reset(this.game.width-2,topPipe.y+426);

		doge.body.velocity.x= 200;
		doge.checkWorldBounds= true;
		doge.outOfBoundsKill= true;
		if(!doge.inWorld)
			//console.log("A doge has died!");
		doge.body.immovable= true;
		doge.body.gravity.y= 0;

		this.pickRow= Math.floor( Math.random()*8 ) + 1;
		this.pickedRow= this.rows[this.pickRow];

	},*/

	createPrisonersRed: function(){
		//console.log(this.prisoners.countLiving());
		//if(this.prisoners.countLiving()>=0)
		//var prisoner= this.prisoners.getFirstDead();
		var prisoner= redPrisoners.getFirstDead();
		prisoner.body.enable= true;
		prisoner.angle= 0;
		prisoner.scale.y = 1;
		prisoner.animations.add("run",[0,1,2,3,4,5,6,7,8]);
		//prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("climb",[14,15,16,17],7.5,true);
		prisoner.play("run",10,true);
		prisoner.checkWorldBounds= true;
		prisoner.outOfBoundsKill= true;
		//if(!prisoner.inWorld)
			//console.log("A prisoner has died!");
		prisoner.body.immovable= true;
		prisoner.body.gravity.y= 0;
		prisoner.anchor.setTo(0.5,0.5);
		//prisoner.frame=0;
		var pickRow= Math.floor( Math.random()*7 ) + 1;
		var pickedRow= this.rows[pickRow];
		var where= Math.floor(Math.random()+0.5);
		//console.log(where);
		if(where==0){
		prisoner.reset(0,this.game.height/1.25);
		//prisoner.reset(this.game.width,this.game.height/1.25);
		prisoner.angle= 180;
		prisoner.scale.y = -1;

		this.prisonerFindClimbPlace(prisoner, pickedRow, 900, 1800);
		}

		else{
		prisoner.reset(this.game.width,this.game.height/1.25);
		this.prisonerFindClimbPlace(prisoner, pickedRow, 1800, 900);
		}
		/*if(dude.x==60){
			console.log("Reached 60");
		}*/


		//console.log("dude spawned");

		//bottomPipe.body.velocity.x= -200;
		//bottomPipe.checkWorldBounds= true;
		//bottomPipe.outOfBoundsKill= true;
		//bottomPipe.body.immovable= true;

		//topPipe.reset(this.game.width-52,-280);
		//topPipe.reset(this.game.width-52,-74);
		//bottomPipe.reset(this.game.width-54,340);
		//this.climbing= false;
		//this.existingDudes+=1;
	},

	createPrisonersGreen: function(){
		//console.log(this.prisoners.countLiving());
		//if(this.prisoners.countLiving()>=0)
		//var prisoner= this.prisoners.getFirstDead();
		var prisoner= greenPrisoners.getFirstDead();
		prisoner.body.enable= true;
		prisoner.angle= 0;
		prisoner.scale.y = 1;
		prisoner.animations.add("run",[0,1,2,3,4,5,6,7,8]);
		//prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("climb",[14,15,16,17],7.5,true);
		prisoner.play("run",10,true);
		prisoner.checkWorldBounds= true;
		prisoner.outOfBoundsKill= true;
		//if(!prisoner.inWorld)
			//console.log("A prisoner has died!");
		prisoner.body.immovable= true;
		prisoner.body.gravity.y= 0;
		prisoner.anchor.setTo(0.5,0.5);
		//prisoner.frame=0;
		var pickRow= Math.floor( Math.random()*7 ) + 1;
		var pickedRow= this.rows[pickRow];
		var where= Math.floor(Math.random()+0.5);
		//console.log(where);
		if(where==0){
		prisoner.reset(0,this.game.height/1.25);
		//prisoner.reset(this.game.width,this.game.height/1.25);
		prisoner.angle= 180;
		prisoner.scale.y = -1;

		this.prisonerFindClimbPlace(prisoner, pickedRow, 900, 1800);
		}

		else{
		prisoner.reset(this.game.width,this.game.height/1.25);
		this.prisonerFindClimbPlace(prisoner, pickedRow, 1800, 900);
		}
		/*if(dude.x==60){
			console.log("Reached 60");
		}*/


		//console.log("dude spawned");

		//bottomPipe.body.velocity.x= -200;
		//bottomPipe.checkWorldBounds= true;
		//bottomPipe.outOfBoundsKill= true;
		//bottomPipe.body.immovable= true;

		//topPipe.reset(this.game.width-52,-280);
		//topPipe.reset(this.game.width-52,-74);
		//bottomPipe.reset(this.game.width-54,340);
		//this.climbing= false;
		//this.existingDudes+=1;
	},

	createPrisonersBlue: function(){
		//console.log(this.prisoners.countLiving());
		//if(this.prisoners.countLiving()>=0)
		//var prisoner= this.prisoners.getFirstDead();
		var prisoner= bluePrisoners.getFirstDead();
		prisoner.body.enable= true;
		prisoner.angle= 0;
		prisoner.scale.y = 1;
		prisoner.animations.add("run",[0,1,2,3,4,5,6,7,8]);
		//prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("fall",[9,10,11,12,13]);
		prisoner.animations.add("climb",[14,15,16,17],7.5,true);
		prisoner.play("run",10,true);
		prisoner.checkWorldBounds= true;
		prisoner.outOfBoundsKill= true;
		//if(!prisoner.inWorld)
			//console.log("A prisoner has died!");
		prisoner.body.immovable= true;
		prisoner.body.gravity.y= 0;
		prisoner.anchor.setTo(0.5,0.5);
		//prisoner.frame=0;
		var pickRow= Math.floor( Math.random()*7 ) + 1;
		var pickedRow= this.rows[pickRow];
		var where= Math.floor(Math.random()+0.5);
		//console.log(where);
		if(where==0){
		prisoner.reset(0,this.game.height/1.25);
		//prisoner.reset(this.game.width,this.game.height/1.25);
		prisoner.angle= 180;
		prisoner.scale.y = -1;

		this.prisonerFindClimbPlace(prisoner, pickedRow, 900, 1800);
		}

		else{
		prisoner.reset(this.game.width,this.game.height/1.25);
		this.prisonerFindClimbPlace(prisoner, pickedRow, 1800, 900);
		}
		/*if(dude.x==60){
			console.log("Reached 60");
		}*/


		//console.log("dude spawned");

		//bottomPipe.body.velocity.x= -200;
		//bottomPipe.checkWorldBounds= true;
		//bottomPipe.outOfBoundsKill= true;
		//bottomPipe.body.immovable= true;

		//topPipe.reset(this.game.width-52,-280);
		//topPipe.reset(this.game.width-52,-74);
		//bottomPipe.reset(this.game.width-54,340);
		//this.climbing= false;
		//this.existingDudes+=1;
	},

	prisonerFindClimbPlace: function(prisoner,pickedRow, x1, x2){
		//console.log("Picked Row: "+pickRow+", Time to reach row: "+(prisoner.x/pickedRow)*1000);
		if(pickedRow< 4*(background.width/7))
		gonnaClimb= this.add.tween(prisoner).to({x: pickedRow}, x1, Phaser.Easing.Linear.None,true);
		else if(pickedRow== 4*(background.width/7))
		gonnaClimb= this.add.tween(prisoner).to({x: pickedRow}, 1200, Phaser.Easing.Linear.None,true);			
		else
		gonnaClimb= this.add.tween(prisoner).to({x: pickedRow}, x2, Phaser.Easing.Linear.None,true);			
		gonnaClimb.onComplete.removeAll();
		gonnaClimb.onComplete.add(this.prisonerClimbs, this);

	},

	prisonerClimbs: function(prisoner){
		prisoner.animations.stop();
		prisoner.body.velocity.x= 0;
		//prisoner.body.velocity.y= 0;
		prisoner.body.velocity.y= -200;
		//prisoner.animations.stop();
		prisoner.play("climb");
		//var isClimbing= this.game.add.tween(prisoner).to({y: prisoner.height*1.25}, 1600, Phaser.Easing.Linear.None,true);
		//isClimbing.onComplete.removeAll();
		//isClimbing.onComplete.add(this.killPrisoner, this);
	},

	prisonerFalls: function(light, thePrisoner){
		//console.log("lighted a dude!");
		//theDude.body.velocity.x= 0;
		//theDude.body.velocity.y= 0;
		//theDude.body.gravity.y= 600;
		//theDude.body.immovable= true;
		//this.existingDudes-=1;
		//console.log(lightColor);
		if( (lightColor==1 && thePrisoner.name=="red") || (lightColor==2 && thePrisoner.name=="green") || (lightColor==3 && thePrisoner.name=="blue") )
		{

		thePrisoner.body.enable= false;

		//thePrisoner.animations.destroy();
		//thePrisoner.animations.removeAll();
		//isFalling= true;
		//thePrisoner.animations.getAnimation("climb").stop();
		//thePrisoner.animations.getAnimation("climb").destroy();
		//thePrisoner.animations.add("climb",[13],7.5,false);
		//thePrisoner.animations.add("climb");
		//thePrisoner.animations.getAnimation("climb").enable= false;
		//thePrisoner.animations.add("fall",[9,10,11,12,13]);
		thePrisoner.animations.stop();
		thePrisoner.play("fall",10,false);
		//thePrisoner.animations.getAnimation("fall").isPlaying();

		if(thePrisoner)
		falling= this.add.tween(thePrisoner).to({y: this.game.height-floor.height}, 800, Phaser.Easing.Linear.None,true);
		//this.falling= this.game.add.tween(thePrisoner).to({y: this.game.height*2}, 700, Phaser.Easing.Linear.None,true);
		//console.log(this.falling.isRunning);
		//this.falling.onComplete.add(this.doSomething, this);
		//this.falling.onComplete.add(this.killPrisoner, this);

		falling.onComplete.removeAll();
		falling.onComplete.add(this.killPrisoner, this);
		score+=10;
		font1.text = "Score:"+score;
		//this.font2.text = "Score:"+score;
		//this.font3.text = "Score:"+score;
		//this.falling.onComplete.add(function () {
        //thePrisoner.destroy();
    	//});

		//this.falling.stop();
		//this.falling= null;
		//theDude.y= 300;
		//light.body.enable= false;
		//light.body.enable= true;
		//theDude.body.moves= false;
		//return theDude.body.moves;
		//theDude.destroy();
		}
	},

	killPrisoner: function(thePrisoner){
		thePrisoner.reset(this.game.width,this.game.height/1.25);
		thePrisoner.kill();
		//console.log("A prisoner has died!");
	},


	dogeFalls: function(light, theDoge){

		if(lightColor==1){
		//console.log("lighted a dude!");
		//theDude.body.velocity.x= 0;
		//theDude.body.velocity.y= 0;
		//theDude.body.gravity.y= 600;
		//theDude.body.immovable= true;
		//this.existingDudes-=1;
		theDoge.body.enable= false;
		if(theDoge)
		this.falling= this.add.tween(theDoge).to({y: this.game.height*2}, 2500, Phaser.Easing.Linear.None,true);

		//this.falling.onComplete.add(this.doSomething, this);
		this.falling.onComplete.removeAll();
		//this.falling.stop();
		//this.falling= null;
		//theDude.y= 300;
		//light.body.enable= false;
		//light.body.enable= true;
		//theDude.body.moves= false;
		//return theDude.body.moves;
		//theDude.destroy();
		}
	},

	/*checkDoges: function(){
		if(this.doges.countLiving()!=0){
			//console.log(this.existingDudes);
		//var dude= this.dudes.getAt(this.existingDudes-1);
		var doge= this.doges.getRandom();
		//console.log("Dude coord :" + dude.x);
		//console.log("Picked row number: "+ this.pickedRow)
		//if(this.climbing==false){
		if(doge.x >= this.pickedRow){
			//console.log("reched the row");
			doge.body.velocity.x= 0;
			doge.body.velocity.y= -200;
			//this.climbing= true;
			//dude.checkWorldBounds= true;
			//dude.outOfBoundsKill= true;
			//dude.body.immovable= true;
			//dude.body.gravity.y= 0;
		}
		//}
		//else{
		//	this.climbing==false;
			//dude.body.velocity.y= 0;
		//}
	}

	},*/

	/*createDudes: function(){
		//console.log(this.dudes.countLiving());
		var dude= this.dudes.getFirstDead();
		dude.body.enable= true;
		dude.frame=0;

		dude.reset(this.game.width,this.game.height/1.25);
		dude.anchor.setTo(0.5,0.5);
		dude.animations.add("run",[0,1,2,3]);
		dude.play("run",10,true);
		//var bottomPipe= this.bottomPipes.getFirstDead();
		//bottomPipe.frame=1;

		//////////////////ESPACIO ENTRE PIPAS = 96
		//////////////////COORDENADA Y MINIMA = -280
		//////////////////COORDENADA Y MAXIMA = -74
		//var coordY= Math.floor(Math.random()*207)-280;
		//dude.reset(this.game.width,coordY);
		//bottomPipe.reset(this.game.width-2,topPipe.y+426);

		dude.body.velocity.x= -200;
		dude.checkWorldBounds= true;
		dude.outOfBoundsKill= true;
		if(!dude.inWorld)
			//console.log("A dude has died!");
		dude.body.immovable= true;
		dude.body.gravity.y= 0;

		this.pickRow= Math.floor( Math.random()*8 ) + 1;
		this.pickedRow= this.rows[this.pickRow];
		//console.log("dude spawned");

		//bottomPipe.body.velocity.x= -200;
		//bottomPipe.checkWorldBounds= true;
		//bottomPipe.outOfBoundsKill= true;
		//bottomPipe.body.immovable= true;

		//topPipe.reset(this.game.width-52,-280);
		//topPipe.reset(this.game.width-52,-74);
		//bottomPipe.reset(this.game.width-54,340);
		//this.climbing= false;
		//this.existingDudes+=1;
	},*/

	/*dudeFalls: function(light, theDude){
		//console.log("lighted a dude!");
		//theDude.body.velocity.x= 0;
		//theDude.body.velocity.y= 0;
		//theDude.body.gravity.y= 600;
		//theDude.body.immovable= true;
		//this.existingDudes-=1;
		theDude.body.enable= false;
		if(theDude)
		this.falling= this.game.add.tween(theDude).to({y: this.game.height*2}, 2500, Phaser.Easing.Linear.None,true);

		//this.falling.onComplete.add(this.doSomething, this);
		this.falling.onComplete.removeAll();
		//this.falling.stop();
		//this.falling= null;
		//theDude.y= 300;
		//light.body.enable= false;
		//light.body.enable= true;
		//theDude.body.moves= false;
		//return theDude.body.moves;
		//theDude.destroy();
	},

	doSomething: function(){
		this.falling.destroy();
	},*/

	/*checkDudes: function(){
		if(this.dudes.countLiving()!=0){
			//console.log(this.existingDudes);
		//var dude= this.dudes.getAt(this.existingDudes-1);
		var dude= this.dudes.getRandom();
		//console.log("Dude coord :" + dude.x);
		//console.log("Picked row number: "+ this.pickedRow)
		//if(this.climbing==false){
		if(dude.x <= this.pickedRow){
			//console.log("reched the row");
			dude.body.velocity.x= 0;
			dude.body.velocity.y= -200;
			//this.climbing= true;
			//dude.checkWorldBounds= true;
			//dude.outOfBoundsKill= true;
			//dude.body.immovable= true;
			//dude.body.gravity.y= 0;
		}
		//}
		//else{
		//	this.climbing==false;
			//dude.body.velocity.y= 0;
		//}
	}

	},*/

};

// Create torch objects
// Torch constructor
var Torch = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, '');

    // Set the pivot point for this sprite to the center
    this.anchor.setTo(0.5, 0.5);
    this.scale.setTo(1.5);
};

// Torches are a type of Phaser.Sprite
Torch.prototype = Object.create(Phaser.Sprite.prototype);
Torch.prototype.constructor = Torch;