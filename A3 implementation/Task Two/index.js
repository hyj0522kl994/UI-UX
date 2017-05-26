

document.addEventListener("DOMContentLoaded", function(){

    var myButton = document.getElementById("myBtn");

    myButton.addEventListener("click", myalert);

    function myalert(){
        var txt;
        if (confirm("Do You really want to submit?") == true) {
            txt = "hah";
        } else {
            txt = "haha";
        }
        document.getElementById("complete").innerHTML = txt;
    }
});
