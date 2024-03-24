//Day 24 
//Task 1 (Undestanding let in loops)
//this function prints number from 1 to 5 using a loop
 function printnumberWithLet() {
    for(let i=1; i<=5; i++){   //uses for loop variable
        console.log(i);  //logs number 1 through 5 
    }
 } 
 printnumberWithLet(); //it shows that "let" limits "i" to the loop, preventing errors from using "i"
                        //where it's not intended 

//Task 2 (complete Let and Const)
//using let for a variable that can be reassigned 
let age= 22;
age= 27;
console.log(age); //shows 27 because let allows reassignment 

//const-declared variable 
const naMe = "Yemna Mehmood";
try{
    name= "Ali";  //this line is having an error
} catch (error){
    console.log("Error: can't reassign a `const-declared variable."); //this message is shown

}
//this example shows that `const` prevents changing the variable once it's set.

//Task 3 (Block Scope with LET and CONST)
//Demonstrating block scope
{ 
    let blocklet="visible inside the block";
    const blockconst = "also only inside the block";
    console.log(blocklet);
    console.log(blockconst);
}

try {
    console.log(blocklet) ; //this will be fail and showing an error
} catch (error) {
    console.log("`blocklet` is not accessible outside the block.");

}

try {
    console.log(blockconst); //this will also fail and showing an error 
} catch (error) {
    console.log("`blockconst` is not accessible outside the block.");

} //this shows that "let" and "const" keep variables safe inside the block where they are defined