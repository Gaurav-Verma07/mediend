export default function CapitalizeFirstLetter(word:string|string[]|undefined){
    if(typeof(word)!=="string") return " "
    return word.charAt(0).toUpperCase()
    + word.slice(1)
}