// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require_tree .

// $(function(){ $(document).foundation(); });

$(document).ready(function () {
  $.ajax({
      type: 'GET',
      url: 'api/v1/readings',
      data: { get_param: 'readings' },
      dataType: 'json',
      success: function (data) {
           google.charts.load('current', {'packages':['corechart']});
           google.charts.setOnLoadCallback(drawChart);

           var readings = data.readings;

           var timeArray = readings.map(function(obj) {
             var rObj = [];
             rObj = new Date(obj.time);
             return rObj;
           });


           var timeChart = readings.slice(8).map(function(obj) {
             var rObj = [];
             date = new Date(obj.time);
             rObj = [date, obj.glucose_value];
             return rObj;
           });

           console.log(timeChart);

         function printArray(arr){
           for(var i = 0; i < arr.length; i++) {
             if(arr[i] != arr.length) {
               console.log(arr[i]);
               return arr[i] + ',';
             }
             else {
               return null;
             }
            }
          };

          function chartsArray(arr) {
            arr.forEach(function(element) {
              return element;
            })
          };



           function drawChart() {
             
             var chartdata = new google.visualization.DataTable();
                chartdata.addColumn('datetime', 'Time of Day');
                chartdata.addColumn('number', 'Glucose Value');

                chartdata.addRows(timeChart);

             var options = {
              height: 450
             };

             var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
             chart.draw(chartdata, options);
           }
         }
      })
    });
