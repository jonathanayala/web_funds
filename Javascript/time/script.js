var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if(MINUTE > 30 && PERIOD === "AM"){
    HOUR++;
    console.log("It's almost ", HOUR, " in the morning");
}

else if(MINUTE > 30 && PERIOD === "PM"){
    HOUR++;
    console.log("It's almost ", HOUR, " in the evening");
}

else if(MINUTE <= 30 && PERIOD === "AM"){
    console.log("It's just after ", HOUR, " in the morning");
}

else if(MINUTE <= 30 && PERIOD === "PM"){
    console.log("It's just after ", HOUR, " in the evening");
}

//Bonus (Only If You Have Time):
//Add functionality for "quarter after", "half past", "5 after" ...
//Distinguish between "in the afternoon", "at night", "noon", "midnight" ...