function showReservoir(code) {
    console.log("Trying to show "+code);
    //$("#graph").css('width',$(window).width());
    $("#topinfo").hide();
    $("#graph").height(300);
    
        g = new Dygraph(
            document.getElementById("graph"),
            code+"_pct.csv", // path to CSV file
            {ylabel: 'Percent Full',
             axes: {
                 y: {
                     axisLabelFormatter: function(y) {
                         return y+'%';
                     }
                 }
             },
             rollPeriod: 10
             }
        );

    $("#topinfo").html('<h1>'+reservoirs[code].name+'</h1><h3>Capacity: '+reservoirs[code].capacity+' acre-feet </h3> <a href="'+reservoirs[code].wiki+'">Wikipedia</a>');
    $("#topinfo").fadeIn();
    $("#graph").fadeIn();
    return;
}
