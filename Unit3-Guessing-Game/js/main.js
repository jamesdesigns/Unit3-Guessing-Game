// JavaScript Document
    

var correctNumber = Math.floor((Math.random() * 15) + 1);
var totalGuesses = 0;


function guessMyNumber() {

    // Generate a random integer
    var guessedNum = parseInt(document.getElementById("number").value);
    totalGuesses++;
    document.getElementById("attempts").innerHTML = totalGuesses;

     if (guessedNum < correctNumber) {
        document.getElementById("suggestions").innerHTML = "Your Guess was Too Low";
     }

     else if (guessedNum > correctNumber) {
        document.getElementById("suggestions").innerHTML = "Your Guess was Too High";
     }

     else if (guessedNum === correctNumber)  {
        document.getElementById("suggestions").innerHTML = "You are Correct";

        var pathToImage;

        switch (totalGuesses) {
            case 1:
            case 2:
            case 3:
                // 1-3 guesses award a First Place Blue Ribbon
                pathToImage = "images/Blue-Ribbon-First.png";
                break;
            case 4:
            case 5:
            case 6:
                // 4-6 guesses award a Second Place Red Ribbon
                pathToImage = "images/Red-Ribbon-Second.png";
                break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12: 
            case 13:
            case 14:
            case 15:
                // 7 or more award a Third Place Yellow Ribbon
                pathToImage = "images/Yellow-Ribbon-Third.png";
                break;
            }

        //var awardImage = docment.createElement("IMG");
        //awardImage.setAttribute('src', pathToImage);
        document.getElementById('ribbon').setAttribute('src', pathToImage);

     }


    if (guessedNum < 1 || guessedNum > 15)  {
        var feedback = "Please choose a number between 1 and 15 and try again.";
        document.getElementById("suggestions").innerHTML = feedback;
    }

}

document.getElementById('ribbon')