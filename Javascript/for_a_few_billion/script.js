var money = 0.1;
var money2 = 0.1;
for(var i = 0; i <= 30; i++){
    money *= 2;
    if(money >= 10000 && money <= 20000){
        console.log(i,"days to make at least $10,000");
    }
}
console.log("$",money);

for(var j = 0; money2 >= 0; j++){
    money2 *= 2;
    if(money2 >= 1000000000){
        console.log(j,"days to make at least a billion");
        break;
    }
}