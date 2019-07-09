function Message() {
    console.log("Hey There!");

}

function Message2(name) {
    console.log("Hey There " + name + "!");
} 

function AddProcedure(A,B) {
    result = A + B;
    console.log ("The Result Is " + result);
}

function AddFunction(A,B) {
    return A + B;
}

Message();
Message2("Dan");
AddProcedure(15,19);
console.log("The Result Is " + AddFunction(15,19));