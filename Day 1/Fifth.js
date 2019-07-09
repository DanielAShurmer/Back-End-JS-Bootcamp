let i = 0;
while (i <= 10) {
    string = "";
    switch (i) {
        case 10: 
        if (string == ""){
            string = "10" + string;
        }
        else {
            string = "10," + string;
        }
        case 9: 
        if (string == ""){
            string = "9" + string;
        }
        else {
            string = "9," + string;
        }
        case 8: 
        if (string == ""){
            string = "8" + string;
        }
        else {
            string = "8," + string;
        }
        case 7: 
        if (string == ""){
            string = "7" + string;
        }
        else {
            string = "7," + string;
        }
        case 6: 
        if (string == ""){
            string = "6" + string;
        }
        else {
            string = "6," + string;
        }
        case 5: 
        if (string == ""){
            string = "5" + string;
        }
        else {
            string = "5," + string;
        }
        case 4: 
        if (string == ""){
            string = "4" + string;
        }
        else {
            string = "4," + string;
        }
        case 3: 
        if (string == ""){
            string = "3" + string;
        }
        else {
            string = "3," + string;
        }
        case 2: 
        if (string == ""){
            string = "2" + string;
        }
        else {
            string = "2," + string;
        }
        case 1: 
        if (string == ""){
            string = "1" + string;
        }
        else {
            string = "1," + string;
        }
        default: string += "."; 
        if (string != "."){
            console.log(string);
        }
    }
    i++;
}