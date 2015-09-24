console.log("Boot State Initialized");
		//game.scale.setMaximum();
		//game.scale.setScreenSize(true);
var boot= {

	preload:function(){
		this.load.image("loading","assets/preloader.gif");
		//this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	//this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	},

	create: function(){
		/*
		this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		this.game.stage.fullScreenScaleMode = Phaser.StageScaleMode.SHOW_ALL;
		this.game.stage.scale.pageAlignHorizontally = true;
		this.game.stage.scale.pageAlignVeritcally = true;
		this.game.stage.scale.setShowAll();
		this.game.stage.scale.setMaximum();
    	this.game.stage.scale.setScreenSize(true);
		this.game.stage.scale.refresh();
		*/

		//this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		//this.game.stage.scale.pageAlignHorizontally = true;
		//this.game.stage.scale.pageAlignVeritcally = true;
		//this.game.stage.scale.setScreenSize(true);
		//this.game.stage.scale.refresh();

		//this.game.scale.scaleMode= Phaser.ScaleManager.SHOW_ALL;
		//this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		//this.scale.pageAlignHorizontally = true;
    	//this.scale.pageAlignVertically = true;
		//this.scale.setScreenSize(true);
		//this.game.scale.setShowAll();
		//this.game.scale.refresh();

		//if (!this.game.device.desktop){ this.game.input.onDown.add(gofull, this); } //go fullscreen on mobile devices
		//this.game.input.onDown.add(gofull, this);

		/*function gofull() {
	  		if (game.scale.isFullScreen) {
	    	game.scale.stopFullScreen();
	  		} 
	  		else {
	    	game.scale.startFullScreen(false);
	  		}
		}*/

		
		this.state.start('Preload');
	},

};