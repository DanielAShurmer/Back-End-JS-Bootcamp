let i = 0;
while (i <= 10) {
    string = "";
    switch (i) {
        case 10:
            string = "10," + string; 
        case 9:
            string = "9," + string; 
        case 8:
            string = "8," + string; 
        case 7:
            string = "7," + string; 
        case 6:
            string = "6," + string; 
        case 5:
            string = "5," + string; 
        case 4:
            string = "4," + string; 
        case 3:
            string = "3," + string; 
        case 2:
            string = "2," + string; 
        case 1:
            string = "1," + string; 
    }  
    string = string.substring(0,string.length-1);
    string = string + ".";
    if (string != ".") {
        console.log(string);
    }
    i++;
}