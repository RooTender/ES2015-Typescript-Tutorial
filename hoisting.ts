// hoising example
function greetPerson(name){
    if(name === "Chandler"){
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
    
    var greet; // Declaration will be lifted
}

greetPerson("Chandler");
