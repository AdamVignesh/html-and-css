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
    

}

