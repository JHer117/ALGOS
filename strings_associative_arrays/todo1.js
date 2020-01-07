//REMOVE BLANKS

function removeblanks(str){
    var strArr = str.split(" ");
    strArr = strArr.join("");


    return strArr;
}

console.log(removeblanks("Pl ayTha tF u nkyM usi c"));


//GET DIGITS

function getDigits(str){
    var splitStr = str.split("");
    splitStr.splice(0,2);
    
    splitStr.splice(1,1);
    splitStr.splice(2,1);
    splitStr.splice(3,1);
    splitStr.splice(4,1);
    splitStr.splice(5,1);
    splitStr.splice(6,1);
    splitStr.splice(7,1);
    splitStr.splice(8,1);
    splitStr.splice(9,1);
    splitStr.splice(9,1);


    return splitStr;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


// function getDigits(str){
//     newStr = []
//     var splitStr = str.split("");
//     for (var i=0; i<splitStr.length;i++){
//         if (typeof splitStr[i] != typeof(1)){
//             newStr += splitStr[i];
//             newStr.join("");
//         }
    
//     }
//     return newStr;
// }
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));



//ACRONYMS

function acronyms(str){
    var letters = [];
    var acro = str.split(" ");
    
    //LOOP THROUGH SPLICED STR GRAB ONLY FIRST LETTER AT EACH INDEX
    for(var i =0; i<acro.length; i++){
        letters += acro[i][0];
        
    }
    return letters;
}
console.log(acronyms("there's no free lunch - gotta pay yer way."));



//COUNT NON-SPACES

function countNonSpaces(str){
    var count = 0;
    var countSplit = str.split(" ");
    console.log(countSplit);
    for(var i = 0; i<countSplit.length; i++){
        count += countSplit[i.length];
        // not working???
    }
    return count;

}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));



//REMOVE SHORTER STRINGS

function removeShorterStrings(str,val){
    
    var strSplit = str.split(" ");
    console.log(strSplit);
    for( var i =0; i<strSplit.length;i++){
        if(strSplit[i]<val){
        // splice ?? what am i missing?
           strSplit.splice(i,1);
        }
        
    }
    return strSplit;
}
console.log(removeShorterStrings("The cow jumped over the moon.", 4));