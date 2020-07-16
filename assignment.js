/**Feet to Mile*/
function feetToMile(feet){
    var mile = feet / 5280;
    if(feet < 0){
        return "Distance cannot be negative.";
    }
    return mile;  
}

var result = feetToMile(5280);
console.log(result);





/**Wood Calculator*/
function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    if(chair < 0){
        return "Quantity cannot be negative.";
    }
    if(table < 0){
        return "Quantity cannot be negative.";
    }
    if(bed < 0){
        return "Quantity cannot be negative.";
    }
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

var result = woodCalculator(1, 3, 1);
console.log(result);





/**Brick Calculator*/
function brickCalculator(floor){
    if (floor < 0){
        return 'Value cannot be negative.';
    }
    else if (floor <= 10){
        var brick = floor * 15 * 1000;
        return brick;
    }
    else if (floor <= 20){
        floor = floor - 10;
        var brick = 150000 + floor * 12 * 1000;
        return brick;
    }
    else {
        floor = floor - 20;
        var brick = 270000 + floor * 10 * 1000;
        return brick;
    }
}

var result = brickCalculator(21);
console.log(result);






/**Tiny Friend*/
function tinyFriend(name){
    var tinyName = name[0];
    for(var i =0; i < name.length; i++){
    var element = name [i];
    if(element.length < tinyName.length){
            tinyName = element;
        }
    }
    return tinyName;
}

var friendsName = ['razor', 'skib', 'bz', 'ronald'];
var result = tinyFriend(friendsName);
console.log(result);
