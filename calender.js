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
    }
}