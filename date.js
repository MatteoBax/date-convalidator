var bisestile = false;
var gmax = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function controlloBisestile(anno){
    var x = anno%100;
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

exports.checkDate = function(date) {
    var splitted = date.split("/");
    var gg = splitted[0];
    var mm = splitted[1];
    var yyyy = splitted[2]
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
                    return true;
                }  
            }
        }else{
            return false;
        }
    }
    else{
        return false;
    }

}
