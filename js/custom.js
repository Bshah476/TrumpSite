
var countDownDate = new Date("Nov 9, 2016 00:00:00").getTime();

var total_cost = setInterval(setCost, 15);

var veterans = setInterval(setVets, 30);

var seniors = setInterval(setSeniors, 30);

var students = setInterval(setStudents, 30);

var headstart = setInterval(setHeadstart, 30)


function setCost(){

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = now - countDownDate;
    
    // Time calculations for days, hours, minutes and seconds
    var daily_cost = 400000
    var one_day = new Date("Nov 10, 2016 00:00:00").getTime() - countDownDate;

    total_cost = (distance * daily_cost / one_day) 
    total_cost = total_cost.toFixed(2);
    
    // Output the result in an element with id="demo"
    document.getElementById("Melania-clock").innerHTML = "$" + numberWithCommas(total_cost);
     

}

function learn(x){
    document.getElementById(x).classList.remove("hidden");


}

function unlearn(x){
    document.getElementById(x).classList.add("hidden");
}
function setHeadstart(){
    var kids = total_cost / 7600;
    document.getElementById("kids").innerHTML =  numberWithCommas(kids.toFixed(0));

}

function setStudents(){
    var students = total_cost / 5920;
    document.getElementById("pell-grants").innerHTML =  numberWithCommas(students.toFixed(0));

}

function setVets(){
    var vets = (total_cost / 10000);
    document.getElementById("vets").innerHTML =  numberWithCommas(vets.toFixed(0));

}

function setSeniors(){
    var seniors = (total_cost / 2765);
    document.getElementById("mow").innerHTML =  numberWithCommas(seniors.toFixed(0));

}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

$('#sign_up').one('submit',function(){
        var inputName = encodeURIComponent($('#input-name').val());
        var inputEmail = encodeURIComponent($('#input-email').val());
        var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLScVmJqlyvz_AQsG9Id8U4ANr3Xf4QSnhiIH8uGxiiESa__OLQ/formResponse?entry.2104172939=";
        var submitRef = '&submit=-7006590817714132454';
        var submitURL = baseURL+inputName+"&entry.125931674="+inputEmail+submitRef;
        console.log(submitURL);
        $(this)[0].action=submitURL;
    });

function clicked(){
    document.getElementById("sign_up").classList.add("hidden");
    document.getElementById("joined").classList.remove("hidden");
}
