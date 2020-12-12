var cal = {
    mName: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Month Names
    data: null,
    sDay: 0,
    sMth: 0,
    sYear: 0,
    sMon: false,

   
    list: function () {
        cal.sMth = parseInt(document.getElementById("cal-mth").value); 
        cal.sYear = parseInt(document.getElementById("cal-yr").value); 
        var daysInMth = new Date(cal.sYear, cal.sMth + 1, 0).getDate(), 
            startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), 
            endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(); 
     
        cal.data = localStorage.getItem("cal-" + cal.sMth + "-" + cal.sYear);
        if (cal.data == null) {
            localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, "{}");
            cal.data = {};
        } else {
            cal.data = JSON.parse(cal.data);
        }

        var squares = [];
        if (cal.sMon && startDay != 1) {
          var blanks = startDay==0 ? 7 : startDay ;
          for (var i=1; i<blanks; i++) { squares.push("b"); }
        }
        if (!cal.sMon && startDay != 0) {
          for (var i=0; i<startDay; i++) { squares.push("b"); }
        }
    
    
        for (var i=1; i<=daysInMth; i++) { squares.push(i); }
    
     
        if (cal.sMon && endDay != 0) {
          var blanks = endDay==6 ? 1 : 7-endDay;
          for (var i=0; i<blanks; i++) { squares.push("b"); }
        }
        if (!cal.sMon && endDay != 6) {
          var blanks = endDay==0 ? 6 : 6-endDay;
          for (var i=0; i<blanks; i++) { squares.push("b"); }
        }
        var container = document.getElementById("cal-container"),
        cTable = document.createElement("table");
    cTable.id = "calendar";
    container.innerHTML = "";
    container.appendChild(cTable);

    
    var cRow = document.createElement("tr"),
        cCell = null,
        days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    if (cal.sMon) { days.push(days.shift()); }
    for (var d of days) {
      cCell = document.createElement("td");
      cCell.innerHTML = d;
      cRow.appendChild(cCell);
    }
    cRow.classList.add("head");
    cTable.appendChild(cRow);

  
    var total = squares.length;
    cRow = document.createElement("tr");
    cRow.classList.add("day");
    for (var i=0; i<total; i++) {
      cCell = document.createElement("td");
      if (squares[i]=="b") { cCell.classList.add("blank"); }
      else {
        cCell.innerHTML = "<div class='dd'>"+squares[i]+"</div>";
        if (cal.data[squares[i]]) {
          cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
        }
        cCell.addEventListener("click", function(){
          cal.show(this);
        });
      }
      cRow.appendChild(cCell);
      if (i!=0 && (i+1)%7==0) {
        cTable.appendChild(cRow);
        cRow = document.createElement("tr");
        cRow.classList.add("day");
      }
    }
    cal.close();  
    },
}