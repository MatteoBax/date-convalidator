let bisestile = false;
let gmax = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function controlloBisestile(anno){
    let x = anno%100;
    if((anno%4)==0 & x!=0){
        bisestile = true;
    }else{
        if((anno%400)==0){
            bisestile = true;
        }else{
            bisestile = false;
        }
    } 
}

exports.checkDate = function(date,format) {
    if (!date) {
        console.log("Date is required!");
        return -2;
    }
    if (!format){
        console.log("Format of date is required!");
        return -2;
    }
    let splitted = "";
    if (date.includes("/")) {
        splitted = date.split("/");
    } else if (date.includes("-")) {
        splitted = date.split("-");
    } else if (date.includes(".")) {
        splitted = date.split(".");
    } else {
        console.log("Invalid string separator!\nUse / or - or .")
        return -3;
    }
    
    let gg = "";
    let mm = "";
    let yyyy = "";
    if(format.toLowerCase()=="dd/mm/yyyy") {
        gg = splitted[0];
        mm = splitted[1];
        yyyy = splitted[2];
    } else if (format.toLowerCase()=="yyyy/mm/dd") {
        gg = splitted[2];
        mm = splitted[1];
        yyyy = splitted[0];
    } else if (format.toLowerCase()=="mm/dd/yyyy") {
        gg = splitted[1];
        mm = splitted[0];
        yyyy = splitted[2];
    } else {
        console.log("Wrong date format!\nAllowed formats are (dd/mm/yyyy , yyyy/mm/dd , mm/dd/yyyy) ");
        return -3;
    }
    
    controlloBisestile(yyyy);
    if(bisestile){
        gmax[1] = 29;
    }else{
        gmax[1] = 28;
    }
    //Controllo validità giorni
    if(gg <= gmax[mm-1]){
        //Controllo validità mesi
        if(mm>=1 & mm<=12 & mm.length == 2){
            //Controllo validità anni
            if(yyyy>=0 & yyyy.length == 4){
                if(splitted.length==3){
                    return 0;
                } else{
                    return -1;
                }
            }else{
                return -1;
            }
        }else{
            return -1;
        }
    }
    else{
        return -1;
    }

}
