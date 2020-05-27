class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
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
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage("car1",car1Img);
        car2 = createSprite(150,200);
        car2.addImage("car2",car2Img);
        car3 = createSprite(200,200);
        car3.addImage("car3",car3Img);
        car4 = createSprite(250,200);
        car4.addImage("car4",car4Img);
        cars = [car1,car2,car3,car4];
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background("#c68767");
            Image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index = 0;
            var x = 175;
            var y;
            for(var plr in allPlayers){
                index += 1;
                x += 200;
                y = displayHeight- allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                    cars[index-1].shapeColor === 'red';
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                // diplayPosition = displayPosition + 20;
                // textSize(50);
                // text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition);
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance = player.distance+50;
            player.update();
        }
        drawSprites();
    }
}