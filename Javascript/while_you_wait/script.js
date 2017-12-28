var daysUntilMyBirthday = 60;

for(var i = daysUntilMyBirthday; i >= 0; i--){
    if(i>30){
        console.log(i," days until my party... so lame :(");
    }
    else if(i<=30 && i>=5){
        console.log("there is ",i," days until my birthday! I am about to explode for so much excitement!");
    }
    else if(i<5 && i>0){
        console.log("MI CUMPLEAÑOS ES EN ",i," DÍAS!!!");
    }
    else if(i===0){
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
}