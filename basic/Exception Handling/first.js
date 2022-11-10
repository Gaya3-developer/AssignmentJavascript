/*Check output in console of the browser*/

/* TRY AND CATCH BLOCK */
try{
    console.log(a);
    console.log("hi bye");
}
catch(error)
{
    console.log("we got an error "+ error);
}

// try{
//     console.log(a);
// }
// console.log("hi bye");

try{
    console.log(a);
}
catch
{
    console.log("we got an error ");
}


/* THROW KEYWORD and FINALLY BLOCK */
function a(age)
{
    if(age < 16)
    {
        try{
            throw new Error("You are under age");
        }
        catch(error)
        {
            console.log(error);
        }
        finally
        {
            console.log("Prgm ended");
        }
    }
    else{
        console.log("You can vote");
    }
}
a(13);


try{
    console.log(a);
}
finally
{
        console.log("Prgm ended");
}