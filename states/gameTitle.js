var gameTitle={
	create:function(){
		//this.background= this.game.add.sprite(0,0,"BG2");
		var background2= this.add.sprite(0,0,"BG2");
		background2.scale.x= this.game.width/background2.width;
		background2.scale.y= this.game.height/background2.height;

		var shadowTexture = this.add.bitmapData(this.game.width, this.game.height);
		var lightSprite = this.add.image(0, 0, shadowTexture);
	    lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

		shadowTexture.context.fillStyle = 'rgb(125, 125, 150)';
		shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);
          //
          //var bubblesEmitter = this.add.emitter(160, 500, 50);
          var bubblesEmitter = this.add.emitter(background2.width/2, background2.height*1.5, 50);
          //bubblesEmitter.makeParticles("bubble");
          //var redLight= this.add.sprite("redLight");
          //redLight.alpha= 0.5;
          bubblesEmitter.makeParticles(["redLight","greenLight","blueLight"]);
          //bubblesEmitter.makeParticles("blueLight");
          //bubblesEmitter.maxParticleScale = 1;
          //bubblesEmitter.minParticleScale = 1;
          //bubblesEmitter.setYSpeed(-30, -40);
          //bubblesEmitter.setXSpeed(-3, 3);
          bubblesEmitter.setYSpeed(-130, -140);
          bubblesEmitter.setXSpeed(-130, 130);
          bubblesEmitter.gravity = 0;
          //bubblesEmitter.width = 820;
          bubblesEmitter.width = background2.width;
          bubblesEmitter.minRotation = 0;
          bubblesEmitter.maxRotation = 0;
          bubblesEmitter.setAlpha(0.4,0.5);
          bubblesEmitter.flow(15000, 2500);

        /*
		//
		var gameTitleSeaLife = this.add.image(background2.width/2,background2.height/6,"gametitle_sealife");
          gameTitleSeaLife.anchor.setTo(0.5,0.5);
          gameTitleSeaLife.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var seaLifeTween = this.add.tween(gameTitleSeaLife);
		seaLifeTween.to({
			angle: -gameTitleSeaLife.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);
		//
		var gameTitleVs = this.add.image(background2.width/2,background2.height/3.75,"gametitle_vs");
          gameTitleVs.anchor.setTo(0.5,0.5);
          gameTitleVs.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var vsTween = this.add.tween(gameTitleVs);
		vsTween.to({
			angle: -gameTitleVs.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);
		//
		var gameTitleMines = this.add.image(background2.width/2,background2.height/2.75,"gametitle_mines");
          gameTitleMines.anchor.setTo(0.5,0.5);
          gameTitleMines.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var minesTween = this.add.tween(gameTitleMines);
		minesTween.to({
			angle: -gameTitleMines.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);
		//
		*/

		var gameTitleColor = this.add.image(background2.width/2,background2.height/6,"gametitle_Color");
          gameTitleColor.anchor.setTo(0.5,0.5);
          gameTitleColor.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var ColorTween = this.add.tween(gameTitleColor);
		ColorTween.to({
			angle: -gameTitleColor.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);

		var gameTitleEscape = this.add.image(background2.width/2,background2.height/2.75,"gametitle_Escape");
          gameTitleEscape.anchor.setTo(0.5,0.5);
          gameTitleEscape.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var EscapeTween = this.add.tween(gameTitleEscape);
		EscapeTween.to({
			angle: -gameTitleEscape.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);

  		var playButton = this.add.button(background2.width/2,background2.height/1.6,"playbutton",this.playTheGame,this)
		playButton.anchor.setTo(0.5,0.5);
          playButton.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var playTween = this.add.tween(playButton);
		playTween.to({
			angle: -playButton.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);

		var playButton2 = this.add.button(background2.width/2,background2.height/1.3,"playbutton",this.playTheGame,this)
		playButton2.anchor.setTo(0.5,0.5);
          playButton2.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var playTween2 = this.add.tween(playButton2);
		playTween2.to({
			angle: -playButton2.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);

		var playButton3 = this.add.button(background2.width/2,background2.height/1.1,"playbutton",this.playTheGame,this)
		playButton3.anchor.setTo(0.5,0.5);
          playButton3.angle = (2+Math.random()*5)*(Math.random()>0.5?1:-1);
          var playTween3 = this.add.tween(playButton3);
		playTween3.to({
			angle: -playButton3.angle
		},5000+Math.random()*5000,Phaser.Easing.Linear.None,true,0,1000,true);
          //

          /*var blackFade = this.add.sprite(0,0,"blackfade");
          var fadeTween = this.add.tween(blackFade);
		fadeTween.to({
			alpha:0
		},2000,Phaser.Easing.Cubic.Out,true);*/
	},

	playTheGame: function(){
		this.state.start("GamePre");
	}
}