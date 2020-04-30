class Game {
  constructor(){}
  
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
      var playerCountRef=await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
playerCount=playerCountRef.val();

      
      player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30)
    text("Game Started",200,200);
    Player.getinfo();
    if(aplayers!==undefined){
      var dpos=250;
      for(var plr in aplayers){
        if(plr=="player"+player.index){
          fill("red")
        
        }
        else{
          fill("green");
        }
        dpos+=20;
        textSize(23);
        text(aplayers[plr].name+":"+aplayers[plr].distance,250,dpos);
      }

    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=100;
player.update();

    }
  }
}
