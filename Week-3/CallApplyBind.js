//Call invokes the function immediately and allows you to pass in arguments one by one
//Apply invokes the function immediately and allows you to pass in arguments as an array.
//Bind returns a new function, and you can invoke/call it anytime you want by invoking a function.
//Below is an example of all this methods:

let name =  {
    firstname : "Sheetal ",
    lastname : "Chouhan",
}
printFullName =  function(hometown,company){
console.log(this.firstname + " " + this.lastname +", " + hometown + ", " + company)
}
//CALL:the first argument e.g name inside call method is always a reference to (this) variable and latter will be function variable

printFullName.call(name,"Noida","TCS");     
//APPLY:apply method is same as the call method the only diff is that, the function arguments are passed in Array list

printFullName.apply(name, ["Noida","TCS"]);     
//BIND:bind method is same as call except that ,the bind returns a function that can be used later by invoking it (does'nt call it immediately)

let printMyNAme = printFullName.bind(name,"Noida","TCS");

printMyNAme();      
//printMyNAme() is the function which invokes the function