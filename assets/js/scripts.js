
var divcurrentDay = $('#currentDay');
var divdatetime_24 = $('#datetime_24h');

// get current date from moment()
var dateTime = moment().format("dddd, MMMM Do YYYY");

// create element div
divcurrentDay.append(
    $('<div>')
    .attr("id", "display-current-date")
    .addClass("display-current-date")
    .text(dateTime)
);

// // /date math
// console.log(moment('2016-03-12 13:00:00').add(1, 'day').format('LLL'));

//time math
var gettime;
var today =moment().format("hA");

var arrDateTime = [];
var currentIndex;

// var before = moment(today.format("hh:mm")).isBefore(moment('03:00', "hh:mm"));
for (var i = 0; i<=23; i++){
    gettime = moment(i+ "","HH").format("hA");
    arrDateTime.push(gettime);
    if (gettime===today) currentIndex = i;

    divdatetime_24.append(
        $('<div>')
        .attr("id", "hour" + i)
        .addClass("col-sm-2 hour time-block")
        .text(gettime),

        $('<textarea rows="3" cols="50">')
        .attr("id", "textarea" + i)
        .addClass("col-sm-9 textarea"),

        $('<div>')
        .attr("id", "saveBtn" + i)
        .addClass("col-sm-1 saveBtn")
        .text("Save")
    );

    // var generateTime  = moment(today.format("hh:mm")).isAfter(moment('00:00', "hh:mm"));

    // if(today.isAfter(gettime)){
    //     $( "textarea" ).removeClass( "col-sm-9 textarea" ).addClass( "col-sm-9 textarea past" );
    // } else {
    //     $( "textarea" ).removeClass( "col-sm-9 textarea past" ).addClass( "col-sm-9 textarea" );
    // }

    // var date = moment("2013-03-24")
    // var now = moment();

    // if (today.valueOf > gettime.valueOf()) {
    //     $( "textarea" ).removeClass( "col-sm-9 textarea" ).addClass( "col-sm-9 textarea past" );
    // } else {
    //     $( "textarea" ).removeClass( "col-sm-9 textarea past" ).addClass( "col-sm-9 textarea" );
    // }

    // console.log(today.valueOf());
    // console.log(gettime.valueOf());
    
};

for(var j= 0; j< arrDateTime.length-1; j++){
    if(j < currentIndex && arrDateTime[j] != arrDateTime[currentIndex]){
        $( "textarea" ).removeClass( "col-sm-9 textarea" ).addClass( "col-sm-9 textarea past" );
    } 
    // else if(j > currentIndex) {
    //     $( "textarea" ).removeClass( "col-sm-9 textarea" ).addClass( "col-sm-9 textarea future" );
    // }else{
    //     $( "textarea" ).removeClass( "col-sm-9 textarea" ).addClass( "col-sm-9 textarea present" );
    // }
}
console.log(arrDateTime)
console.log(today)
console.log(currentIndex)

// today.valueOf() < moment('03:00', 'hh:mm').valueOf()
// However, moment.js also provides methods that are more readable:

// today.isBefore(moment('03:00', 'hh:mm'))

// $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );