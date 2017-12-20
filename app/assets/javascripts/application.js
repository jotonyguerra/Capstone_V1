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



           function drawChart() {
             var chartdata = google.visualization.arrayToDataTable([
               [ {type: 'date', label: 'Time'}, 'number'],

               readings.forEach(function(item){
                 let date = new Date(item.time);
                 if (item.glucose_value != null && item.time != null)
                 { [`Date(${date.getYear()}, ${date.getMonth()}, ${date.getDate()})`, item.glucose_value]}
               })
             ]);

             var options = {
               hAxis: {
                 title: 'Time'
               },
               vAxis: {
                 title: 'Glucose'
               },
               series: {
                 1: {curveType: 'function'}
               }
             };

             var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

             chart.draw(chartdata, options);
           }

      }

      })
    });
