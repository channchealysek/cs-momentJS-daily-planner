
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
for (var i = 9; i<=17; i++){
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
        .addClass("col-sm-9 textarea present"),

        $('<div>')
        .attr("id", "saveBtn" + i)
        .addClass("col-sm-1 saveBtn")
        .text("💾")
    );
 
};

for(var j= 0; j< arrDateTime.length; j++){
    var getIdexJ = j + 9;
    var getClassNameTextArea = "#textarea" + getIdexJ;
    if( Number(getIdexJ) < Number(currentIndex)){
        $( getClassNameTextArea ).removeClass( "col-sm-9 textarea present" ).addClass( "col-sm-9 textarea past" );
    }
    if (Number(getIdexJ) > Number(currentIndex)) {
        $( getClassNameTextArea ).removeClass( "col-sm-9 textarea present" ).addClass( "col-sm-9 textarea future" );
    }
}

    $(divdatetime_24).click(function (event) {
        var btnTarget = event.target.id
        var textareaClassName = "#textarea" + btnTarget.match(/\d+/);
        
        if(btnTarget === "saveBtn9"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn10"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn11"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn12"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn13"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn14"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn15"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn16"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }
            btnSave(todayEvent);
        }

        if(btnTarget === "saveBtn17"){
            var getTextEvents = $(textareaClassName).val();
            var todayEvent = {
                eventID:textareaClassName,
                eventText:getTextEvents
            }

            btnSave(todayEvent);
        }

    });

function btnSave(arr) {
    var arrtemp = [];
    arrtemp = JSON.parse(localStorage.getItem('todayEvents')) || [];
    arrtemp.push(arr);
    localStorage.setItem('todayEvents', JSON.stringify(arrtemp));
}

function btnLoadEvents () {
    var todayEvents = JSON.parse(localStorage.getItem('todayEvents')) || [];
    var totalEvents = Object.keys(todayEvents).length;

    for(var i=0; i<totalEvents; i++){
        var eventID = todayEvents[i]['eventID'];
        var eventText = todayEvents[i]['eventText'];
        $(eventID).val(eventText);
    }
}

$(document).ready(function(){
    btnLoadEvents ();
});
