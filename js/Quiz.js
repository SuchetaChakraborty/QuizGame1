class Quiz {
  constructor(){
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Question()
      form.display();
    }

  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 200;
      var y = 250;

      image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5);

      for(var plr in allPlayers){
      
        y = y+30;

        var correctAnswer = "2";
        if(correctAnswer = allPlayers[plr].answer){
          fill("green");
        }

        else{
          fill("red");
        }

        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 120, y);
      }

    }
  }

}
