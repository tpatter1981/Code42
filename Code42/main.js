//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//

function doubleChar(str){
retun [...str].map(v=>v+v).join('')
}