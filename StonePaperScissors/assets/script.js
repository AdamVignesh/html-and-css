let adamPoints = 0;
    let botPoints = 0;
  
function newGame()
{
    console.log("new game");
    adamPoints = 0;
    botPoints = 0;
    document.getElementById('botPoints').innerHTML ="Points: "+ botPoints;
    document.getElementById('adamPoints').innerHTML ="Points: "+ adamPoints;
    document.getElementById('result').innerHTML="";

}




function getChoice() {
    const choice = document.getElementById('choices');
    const selectedChoice = choice.value;
    console.log("Selected value: ", selectedChoice);



    if(selectedChoice!="")
    {
        if(selectedChoice == 1)
        {
            document.querySelector('.adamsChoice').src="assets/images/stone.png"
        }
        else if(selectedChoice == 2)
        {
            document.querySelector('.adamsChoice').src="assets/images/paper.png"
        }
        else if(selectedChoice == 3)
        {
            document.querySelector('.adamsChoice').src="assets/images/scissors.png"
        }
    }
    else
    {
        document.querySelector('.adamsChoice').src="assets/images/all.jpg"
    }


    const randomDecimal = Math.random();
    const botsChoice = Math.floor(randomDecimal * 3) + 1;
  
    console.log(botsChoice);
    if(botsChoice!="")
    {
        if(botsChoice == 1)
        {
            document.querySelector('.botsChoice').src="assets/images/stone.png"
        }
        else if(botsChoice == 2)
        {
            document.querySelector('.botsChoice').src="assets/images/paper.png"
        }
        else if(botsChoice == 3)
        {
            document.querySelector('.botsChoice').src="assets/images/scissors.png"
        }
    }
    else
    {
        document.querySelector('.botsChoice').src="assets/images/all.jpg"
    }

    // game theory
    

    if(selectedChoice === botsChoice)
    {
        // draw;
    }
    else if(selectedChoice==1 && botsChoice==2)
    {
        botPoints++;
    }
    else if(selectedChoice==1 && botsChoice==3)
    {
        adamPoints++;
    }
    else if(selectedChoice==2 && botsChoice==1)
    {
        adamPoints++;
    }
    else if(selectedChoice==2 && botsChoice==3)
    {
        botPoints++;
    }
    else if(selectedChoice==3 && botsChoice==1)
    {
        botPoints++;
    }
    else if(selectedChoice==3 && botsChoice== 2)
    {
        adamPoints++;
    }
    
    document.getElementById('botPoints').innerHTML ="Points: "+ botPoints;
    document.getElementById('adamPoints').innerHTML ="Points: "+ adamPoints;
    if(adamPoints==5)
    {
        console.log("inside points");
        const photo = document.querySelector('#myPic');
        photo.classList.add("shake-animation");
        const margin = adamPoints-botPoints;

        adamPoints=0;
        botPoints=0;
        document.getElementById('result').innerHTML="Adam won with margin of "+ margin;
        setTimeout(function() {
            photo.classList.remove("shake-animation");
          }, 5000);
          setTimeout(function() {
            document.getElementById('result').innerHTML=""
              }, 5000); 
    }
    else if(botPoints==5)
    {
        const photo = document.querySelector('#botPic');
        photo.classList.add("shake-animation");
        const margin = botPoints-adamPoints;
       adamPoints=0;
       botPoints=0;
        document.getElementById('result').innerHTML="Bot won with margin of "+ margin;
        setTimeout(function() {
            photo.classList.remove("shake-animation");
          }, 5000);
          setTimeout(function() {
        document.getElementById('result').innerHTML="";
          }, 5000);
          document.getElementById('playBtn')
    }
    document.getElementById('botPoints').innerHTML ="Points: "+ botPoints;
    document.getElementById('adamPoints').innerHTML ="Points: "+ adamPoints;

    console.log("bot Points: "+botPoints+ "adam Points: "+adamPoints);






}

