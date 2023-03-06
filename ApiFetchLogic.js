
 export async function fetchWord()
{
    const word = await fetch("https://words.dev-apis.com/word-of-the-day");
    const obtainedObject=await word.json();
    const obtainedWord=obtainedObject.word.toUpperCase();
        return obtainedWord; 
}
