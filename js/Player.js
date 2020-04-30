class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" +this.index ;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getinfo(){
var playersinfo=database.ref('players');
playersinfo.on("value",(data)=>{
  aplayers=data.val();
})
  }
}
