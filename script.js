alert("Hello and welcome");
        let usersName = prompt ("what is your name?");
        usersName = usersName.toLocaleLowerCase();
        console.log("The user's name is: ", usersName);
        document.write("Hello and welcome to my page, "+ usersName);

        let response = prompt("do you like guitar's?")
        response = response.toLocaleLowerCase();
        if (response == "yes"){
            alert("You've come to the right page!")
        } else if(response == "no"){
        alert("I'm sure I can change your mind");
        }
        
            else { 
                alert("I'm not sure what that means...");

            }
            