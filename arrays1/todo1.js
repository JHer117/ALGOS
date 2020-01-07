//PUSH FRONT
function pushfront(arr, num){
    
    for (var i = arr.length; i>0 ; i--){
        var currVal = arr[i -1];
        arr[i] = currVal;

    }
    arr[0] = num;

    return arr;
}
console.log (pushfront([2,3,4,5],1))





//POP FRONT
function popfront(arr){
    
    var val = arr[0]

    for( var i = 1; i<arr.length; i++){
        var curr_val=arr[i];
        arr[i-1] = curr_val;
    }

    arr.length--;

    return arr;
}
console.log(popfront([5,6,7,8]))




//INSERT AT
function insertat(arr,x,num){
    
    for(var i=arr.length; i>x; i--){
        var val = arr[i-1];
        arr[i]=val;    
    }

    arr[x]=num;

    return arr

}
console.log(insertat([2,4,6],2,8))


//REMOVE AT
function removeat(arr,x){
    var val = arr[x];

    for( var i=x; i<arr.length; i++){
        var currVal = arr[i+1];
        arr[i] = currVal;
    }

    arr.length--
    return arr
}
console.log(removeat([10,11,12],1))


//SWAP PAIRS
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swappairs(arr){
    
    
    return arr
}
console.log(swappairs([2,3,1]))


//REMOVE DUPLICATES
// Sara is looking to hire an awesome web developer and has 
// received applications from various sources. Her assistant 
// alphabetized them but noticed some duplicates. Given a sorted array, 
// remove duplicate values. Because array elements are already in order, 
// all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

