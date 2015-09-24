function iniciar(){
	var height = $(window).height();
	var width = $(window).width();

	//console.log(width, height);
	var game= new Phaser.Game(750, 500, Phaser.AUTO,"");
	//var game= new Phaser.Game(width, height, Phaser.AUTO,"");
	//var game= new Phaser.Game(400,200, Phaser.AUTO,"");

	//$(window).resize(function() { 
		//var height = $(window).height();
		//	var width = $(window).width();
				
		//	game.width = width;
		//	game.height = height;
	//		game.stage.bounds.width = width;
	//		game.stage.bounds.height = height;
				
	//		if (game.renderType === Phaser.WEBGL)
	//		{
	//			game.renderer.resize(width, height);
	//		}
	//} );

	//game.scale.setMaximum();
	//game.scale.setScreenSize(true);
	/*this.scale.scaleMode= Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.pageAlignHorizontally = true;
    	this.scale.pageAlignVertically = true;
		this.scale.setScreenSize(true);*/

	game.state.add('Boot',boot);
	game.state.add("Preload",preload);
	//game.state.add("Menu",menu);
	game.state.add("GameTitle",gameTitle);
	game.state.add("GamePre",gameStatePre);
	//game.state.add("GamePlay",gameStatePlay);
	//game.state.add("GameOver",gameover);

	game.state.start('Boot');
}