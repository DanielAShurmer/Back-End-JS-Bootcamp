function codeRed(option) {
    let Code = null;
    if (option == 1) {
        Code = function (A, B) {
            console.log("Result: " + (A + B));
        }
    }
    if (option == 2) {
        Code = function (A, B) {
            console.log("Result: " + (A - B));
        }
    }
    return Code;
}

let F = codeRed(1);
F(17,13);
F = codeRed(2);
F(17,13);