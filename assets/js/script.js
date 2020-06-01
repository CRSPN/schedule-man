var hour = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
var nowDate = null, nowDateDis = null;
var nowTime = null;

var jumboTime = function() {
    nowDateDis = moment(new Date())
    nowDate.html(nowDateDis.format('dddd, MMMM Do YYYY, h:mm a'));
    
};
$(document).ready(function() {
    nowDate = $('#currentDay')
    jumboTime();
    setInterval(nowTime.jumboTime, 1000);
});

var initDisplay = function() {
    nowTime = moment()
    nowTime.format('h:mm:ss a');

    var nineAm = moment(09,00,00);

    for (let i = 0; i < hour.length; i++) {
        var row = $("<div class='row'>");
        var column1 = $("<div class='col-sm-1'>");
        column1.text(hour[i]);
        var column2 = $("<div class='col-sm-10'>");
        var textarea = $("<textarea class='form-control'>");
        column2.append(textarea);
        var column3 = $("<div class='col-sm-1'>");
        var button = $("<button class='btn btn-primary'>");
        button.text("save");
        column3.append(button);
        
        
        
    
        row.append(column1, column2, column3);
    
        $("#timeBlock").append(row);
        

        //if moment => arr[0] then background
    }if (nowTime.isAfter(nineAm)) {
        $("hour[0] ").css('background', "green");
        
    }
    


} 



var save = function() {
    localStorage.setItem("hour", JSON.stringify(hour));
    console.log(hour);

};
var load = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}


$(".btn-primary").on("click", "button", function() {
    save();
})





initDisplay();
load();