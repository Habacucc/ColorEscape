console.log("Preload State Initialized");
var preload= {
	preload: function(){
		//var loading= this.add.sprite(this.width/2,this.height/2,"loading");
		var loading= this.add.sprite(this.width/2,this.height/2,"loading");
		loading.anchor.setTo(0.5,0.5);
		this.load.setPreloadSprite(loading);
		//this.load.image("Title","assets/title.png");
		this.load.image("BG1","assets/Wall1.jpg");

		this.load.image("BG2","assets/Wall2.jpg");
		this.load.image("BGLeft","assets/WallLeftSide.png");
		this.load.image("BGRight","assets/WallRightSide.png");
		//this.load.image("BGComplete","assets/WallComplete.png");

		this.load.image("BG","assets/WallBig.png");
		//this.load.image("test","assets/test.jpg");
		//this.load.image("test2","assets/test2.jpg");
		this.load.image("floor","assets/Floor.png");
		this.load.image("water","assets/water.gif");
		this.load.image("water2","assets/water2.png");
		//this.load.image("light","assets/light.png");
		//this.load.image("BG2","assets/WallSmall.jpg");
		this.load.image("Sky","assets/Clouds2.jpg");
		//this.load.image("moon","assets/moon.png");
		this.load.image("moon4","assets/moon4.png");
		//this.load.image("Ground","assets/ground2.png");
		//this.load.image("bird","assets/bird.png");
		//this.load.spritesheet("bird","assets/bird.png",34,24,3);
		//this.load.image("Start","assets/start-button.png");
		//this.load.image("Ready","assets/get-ready.png");
		//this.load.image("GameOver","assets/gameover.png");
		//this.load.image("Instructions","assets/instructions.png");
		//this.load.image("Medals","assets/medals.png");
		//this.load.spritesheet('pipe', 'assets/pipes.png', 54,320,2);
		//this.load.image('scoreboard', 'assets/scoreboard.png');
		//this.load.spritesheet("dude","assets/dude.png",32,48);
		//this.load.spritesheet("doge","assets/baddie.png",32,32);
		//this.load.spritesheet("sonic","assets/sonic.png",37.75,46);

		//this.load.spritesheet("prisoner","assets/PrisonerRun3.png",45,45);
		//this.load.spritesheet("prisoner","assets/PrisonerFalls.png",63,45);
		this.load.spritesheet("prisoner","assets/Prisoner2.png",45,45);
		this.load.spritesheet("prisonerRed","assets/PrisonerRed.png",45,45);
		this.load.spritesheet("prisonerGreen","assets/PrisonerGreen.png",45,45);
		this.load.spritesheet("prisonerBlue","assets/PrisonerBlue.png",45,45);

		this.load.spritesheet('buttonvertical', 'assets/buttons-big/button-vertical.png',64,64);
	    this.load.spritesheet('buttonhorizontal', 'assets/buttons-big/button-horizontal.png',96,64);
	    this.load.spritesheet('buttondiagonal', 'assets/buttons-big/button-diagonal.png',64,64);
	    //this.load.spritesheet('buttonfire', 'assets/buttons-big/button-round-a.png',96,96);
	    //this.load.spritesheet('buttonjump', 'assets/buttons-big/button-round-b.png',96,96);

	    this.load.image("blueButtonPressed","assets/guibuttons/BlueButton-Active.png");
	    this.load.image("greenButtonPressed","assets/guibuttons/GreenButton-Active.png");
	    this.load.image("redButtonPressed","assets/guibuttons/RedButton-Active.png");

	    this.load.image('BurglarX', 'assets/fonts/BurglarX.png');
	    this.load.image('171', 'assets/fonts/171.png');
	    this.load.image('BubbleMemories', 'assets/fonts/BubbleMemories.png');

	    //this.load.spritesheet('colorButtons', 'assets/buttons.png',32,32);

	    this.time.advancedTiming = true;

	    this.load.image("background","assets/sealife/background.png");
		this.load.image("playbutton","assets/sealife/playbutton.png");
		this.load.image("gametitle_sealife","assets/sealife/gametitle_sealife.png");
        this.load.image("gametitle_vs","assets/sealife/gametitle_vs.png");
        this.load.image("gametitle_mines","assets/sealife/gametitle_mines.png");
        this.load.image("gametitle_Color","assets/Color.png");
        this.load.image("gametitle_Escape","assets/Escape.png");
		this.load.image("blackfade","assets/sealife/blackfade.png");
        this.load.image("bubble","assets/sealife/bubble.png");

        this.load.image("redLight","assets/RedLight.png");
        this.load.image("greenLight","assets/GreenLight.png");
        this.load.image("blueLight","assets/BlueLight.png");

        //this.load.image("BGBlank","assets/BlankBG.jpg");

	},

	create: function(){
		this.state.start("GameTitle");
		//this.state.start("GamePre");
	},
};
