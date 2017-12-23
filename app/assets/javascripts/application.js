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
             var rObj = {};
             rObj = new Date(obj.time);
             return rObj;
           });

           var timeChart = readings.slice(8).map(function(obj) {
             var rObj = {};
             date = new Date(obj.time);
             rObj = [`Date(${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()})`, obj.glucose_value];
             return rObj;
           });
          //  var glucoseArray = readings.map(function(obj) {
          //    var rObj = {};
          //    rObj = obj.glucose_value;
          //    return rObj;
          //  });

           console.log(timeChart);

           function drawChart() {
             var chartdata = google.visualization.arrayToDataTable([
              [{type: 'date', label:'Time'}, {type: 'number', label:'Glucose value'}],
              timeChart
             ]);

             var options = {
            //    hAxis: {
            //      viewWindow: {
            //        min: new Date(2017, 2, 31, 18),
            //        max: new Date(2015, 4, 3, 1)
            //      },
            //      gridlines: {
            //        count: -1,
            //        units: {
            //          days: {format: ['MMM dd']},
            //          hours: {format: ['HH:mm', 'ha']},
            //        }
            //      },
            //      minorGridlines: {
            //        units: {
            //          hours: {format: ['hh:mm:ss a', 'ha']},
            //          minutes: {format: ['HH:mm a Z', ':mm']}
            //        }
            //      }
            //    }
              height: 450
             };
             var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
             chart.draw(chartdata, options);
           }
         }
      })
    });
