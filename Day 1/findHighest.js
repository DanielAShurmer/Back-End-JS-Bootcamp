function findHighest() {
    if (arguments.length == 0){
        return "No Values Entered";
    }
    Highest = arguments[0];
    for (value in arguments){
        if (Highest < arguments[value]){
            Highest = arguments[value];
        }
    }
    return Highest;
}

console.log(findHighest(9,2,4,12,8));
console.log(findHighest(-28,-24,-13,-43,-39));
console.log(findHighest(-249,148,395,149,248,281,321,318,-219));
console.log(findHighest());