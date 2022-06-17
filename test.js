function smallFunc(x,y) {
    console.log(x + y);
}

function bigFunc(x,y, callBack){
    console.log(x * y);
    callBack(x,y);
}

bigFunc(3,4, smallFunc);