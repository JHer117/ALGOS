
//MIN TO FRONT
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
function removeat(arr,x){
    var val = arr[x];

    for( var i=x; i<arr.length; i++){
        var currVal = arr[i+1];
        arr[i] = currVal;
    }

    arr.length--
    return arr
}


function pushfront(arr, num){
    
    for (var i = arr.length; i>0 ; i--){
        var currVal = arr[i -1];
        arr[i] = currVal;

    }
    arr[0] = num;

    return arr;
}



function mintofront(arr){
    var minVal = arr[0];
    var minI =  0;
    for(var i = 1; i <arr.length; i++){
        var currVal = arr[i];
        
        if (currVal < minVal){
            minVal = currVal;
            minI = i;

        }
    }
    removeat(arr, minI);
    pushfront(arr, minVal);
    return arr
}
console.log(mintofront([4,2,1,3,5]))