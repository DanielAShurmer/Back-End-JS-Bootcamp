function Ones(InputNum) {
    switch (InputNum) {
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        case 10: return "Ten";
        case 11: return "Eleven";
        case 12: return "Twelve";
        case 13: return "Thirteen";
        case 14: return "Fourteen";
        case 15: return "Fifteen";
        case 16: return "Sixteen";
        case 17: return "Seventeen";
        case 18: return "Eighteen";
        case 19: return "Nineteen";
        default: return "Error";
    }
}

function Tens(InputNum) {
    switch (InputNum) {
        case 20: return "Twenty";
        case 30: return "Thirty";
        case 40: return "Fourty";
        case 50: return "Fifty";
        case 60: return "Sixty";
        case 70: return "Seventy";
        case 80: return "Eighty";
        case 90: return "Ninety";
        default: return "Error";
    }
}

function DigitsToWords(InputNum) {
    let Answer = "";

    if (InputNum == 0) {
        Answer = "Zero";
    }

    if (InputNum >= 1000 && InputNum <= 9999) {
        Answer += Ones(Math.floor(InputNum / 1000)) + " Thousand ";
        InputNum %= 1000;
    }

    if (InputNum >= 100) {
        Answer += Ones(Math.floor(InputNum / 100)) + " Hundered ";
        InputNum %= 100;
    }

    if (InputNum >= 20) {
        Answer += Tens((Math.floor(InputNum / 10) * 10)) + " ";
        InputNum %= 10;
    }

    if (InputNum > 0 && InputNum <= 19) {
        Answer += Ones(InputNum);
    }

    return Answer;
}

console.log(DigitsToWords(3829));
console.log(DigitsToWords(284));
console.log(DigitsToWords(149));
console.log(DigitsToWords(57));
console.log(DigitsToWords(0));
console.log(DigitsToWords(1004));