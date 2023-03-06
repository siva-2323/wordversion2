
import { isLetter, backspace, addLetter, ent } from "./businessLogic";

try
{
    

    document.addEventListener("keydown",function handleKeyPress(event)
    {
        const pressed=event.key;
    
        if(pressed==="Enter") ent();
        else if(pressed==="Backspace")backspace();
        else if(isLetter(pressed))
            {
            addLetter(pressed.toUpperCase());
            }
    });
    
}

catch
{
    alert("Sorry error occured. Check your internet connection");
}
