import { fetchWord } from "./ApiFetchLogic";
const letters = document.querySelectorAll(".box");

let boxNumber=0;
let numberOfChances=5;
let secretWord="";
let arrayOfSecretWord=[];
let currentWord="";


async function wordConverted()
{
    let obtainedWord=await fetchWord();
    secretWord=obtainedWord;
}

   wordConverted();
   arrayOfSecretWord=secretWord.split("");



export function isLetter(value)
{
    return /^[a-zA-Z]$/.test(value);
}

arrayOfSecretWord=secretWord.split("");

export function backspace()
{
    if(currentWord.length<1)
    {
        return;
    }else 
    {
        currentWord=currentWord.substring(0,currentWord.length-1);
        letters[boxNumber-1].innerText="";
        if(boxNumber!==0)boxNumber--;
    }
}


export let addLetter=value =>
{


    if(currentWord.length<5)        
    {
    letters[boxNumber].innerText=value;
        currentWord +=value;

    boxNumber++;

    }else 
    {
        
        letters[boxNumber-1].innerText=value;
        currentWord=currentWord.substring(0,currentWord.length-1);
        currentWord +=value;

    }
}



export let ent = value =>
{
    if(currentWord==secretWord)
    {
        if(currentWord.length ==0) return;
        else 
        alert("you win");
        
    }else if(currentWord.length==5) 
    {   
            if(numberOfChances==0) alert("you lose");
            numberOfChances--;
            let loop=boxNumber-5;
            let currentWordArray=currentWord.split("");
            for(loop;loop<boxNumber;loop++)
            {
                
                if(arrayOfSecretWord[loop%5]==currentWordArray[loop%5])
                {
                    letters[loop].style.backgroundColor="green";
                }else 
            letters[loop].style.backgroundColor="grey";
            }
            currentWord="";

    }
}




