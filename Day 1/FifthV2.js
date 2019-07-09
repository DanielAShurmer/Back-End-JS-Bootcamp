let i = 0;
while (i <= 10) {
    x = i;
    string = "";
    while (x > 0) {
        switch (x) {
            case 10:
                string = "10" + string; break;
            case 9:
                string = "9" + string; break;
            case 8:
                string = "8" + string; break;
            case 7:
                string = "7" + string; break;
            case 6:
                string = "6" + string; break;
            case 5:
                string = "5" + string; break;
            case 4:
                string = "4" + string; break;
            case 3:
                string = "3" + string; break;
            case 2:
                string = "2" + string; break;
            case 1:
                string = "1" + string; break;
            
        }
        string = "," + string; 
        x--;
    }
    string = string + ".";
    string = string.substring(1);
    if (string != "."){
        console.log(string);
    }
    i++;
}