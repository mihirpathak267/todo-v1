module.exports.getDate = getDate;


function getDate(){
    let currentDay = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

let day = currentDay.toLocaleDateString("en-US", options);
return day;
}

module.exports.getDay = getDay;
function getDay(){
    let currentDay = new Date();
    let options = {
    weekday: "long"
}

let day = currentDay.toLocaleDateString("en-US", options);
return day;
}