function today() {
    var now = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var day = now.getDate();
    var weekday = days[ now.getDay() ];
    var month = months[ now.getMonth() ];
    var year = now.getFullYear();

    return `Today is ${weekday} the ${day} of ${month}, ${year}`;
}

console.log(today());

