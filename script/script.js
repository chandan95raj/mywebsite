function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("cntb").style.backgroundColor = "white";

  
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("cntb").style.backgroundColor = "";
}

function t(){

    var alldate = new Date();
    var tim = alldate.toLocaleTimeString();
    var day = alldate.getDate();
    var month = alldate.getMonth()+1;
    var year = alldate.getFullYear();
    var ti = document.getElementById("time");
    ti.innerHTML = day+ "/" + month + "/" + year + " . " +tim+ " ";
}


setInterval(t,100);
