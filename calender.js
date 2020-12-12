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
    
    }
}