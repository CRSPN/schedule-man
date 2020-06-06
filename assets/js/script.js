var hour = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
var militaryHr = [9,10,11,12,13,14,15,16,17]
var nowDate = null, nowDateDis = null;
var nowTime = null;
var event = []
var jumboTime = function() {
    nowDateDis = moment()
    nowDate.html(nowDateDis.format('dddd, MMMM Do YYYY, h:mm a'));
    
};
$(document).ready(function() {
    nowDate = $('#currentDay')
    jumboTime();
   // setInterval(nowTime.jumboTime, 1000);
});

var initDisplay = function() {
    currentHour = moment().hour()
    // nowTime.format('h:mm:ss a');

    console.log(currentHour)

    for (let i = 0; i < hour.length; i++) {
        event[i] = "";
        var row = $("<div class='row'>");
        var column1 = $("<div class='col-sm-1'>");
        column1.text(hour[i]);
        var column2 = $("<div class='col-sm-10'>");
        var textarea;
        if (currentHour >  militaryHr[i]) {
             textarea = $("<textarea class='form-control bg-secondary text-white'>");
          
            
        }
        else if (currentHour === militaryHr[i]) {
            textarea = $("<textarea class='form-control bg-danger text-white'>");
        }
        else {
            textarea = $("<textarea class='form-control bg-success text-white'>");
        }
        textarea.attr("id", "textarea" +i)
        column2.append(textarea);
        var column3 = $("<div class='col-sm-1'>");
        var button = $("<button class='btn btn-primary'>");
        button.text("save");
        button.attr("data-id", i)
        button.on("click", function(){
          //  alert("can you save")
              var dataId = $(this).attr("data-id")

              var getTextVal = $("#textarea" + dataId).val()

              console.log(getTextVal);
              event[dataId] = getTextVal
               localStorage.setItem("events",JSON.stringify(event))
               load();
      //    save();
        })
        column3.append(button);
        
        
        
    
        row.append(column1, column2, column3);
    
        $("#timeBlock").append(row);
        

        //if moment => arr[0] then background
    }
    


} 



var save = function() {
    localStorage.setItem("hour", JSON.stringify(hour));
    console.log(hour);

};
var load = function() {
   event = JSON.parse(localStorage.getItem("events"));
    for (let i = 0; i < event.length; i++) {
        $("#textarea" +i).val(event[i])
        
    }
}


$(".btn-primary").on("click", "button", function() {
    save();
})





initDisplay();
load();