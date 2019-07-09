let F = function () { console.log("Hello!"); }

let Add = function (A, B) { console.log(A + B); }
let Sub = function (A, B) { console.log(A - B); }

function Funct(msg){
    msg();
}

function Maths(Func,A,B){
    Func(A,B);
}

Add(10,5);
let S = Sub;
S(10,5);

Funct(F);
Maths(Add,28,3);
Maths(Sub,27,19);

