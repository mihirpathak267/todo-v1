exports.getDate = function (){
    let currentDay = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

let day = currentDay.toLocaleDateString("en-US", options);
return day;
}

exports.getDay = function (){
    let currentDay = new Date();
    let options = {
    weekday: "long"
}

let day = currentDay.toLocaleDateString("en-US", options);
return day;
}