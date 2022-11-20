alert("Hello and welcome");

        function sayHi() {
        let usersName = prompt ("what is your name?");
        while (usersName == ""){
            usersName = prompt("Please tell me your name"); 
        }

        usersName = usersName.toLocaleLowerCase();
        console.log("The user's name is: ", usersName);
        document.write("Hello and welcome to my page, "+ usersName);
        }
function likeGuitar(){
        let response = prompt("do you like guitar's?")
        response = response.toLocaleLowerCase();
        if (response == "yes"){
            alert("You've come to the right page!")
        } 
        else if(response == "no"){
        alert("I'm sure I can change your mind");
        }
        else if(response == ""){
            alert("Please type yes or no");
            response = prompt("Please tell me if you like guitar's...."); 
        }
        
        
            else { 
                alert("I'm not sure what that means...");

            }
        }
function ownGuitars(){
    let own  = prompt ("If you can own a guitar today, how many would you buy? ");
    for (let i = 0; i < own; i++){
        
        document.write("<img class='own-guitar' src='guitar.jpg' alt='guitar rating'/>"); 
    }
}
