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
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function () {
  $.ajax({
      type: 'GET',
      url: 'api/v1/readings',
      data: { get_param: 'readings' },
      dataType: 'json',
      success: function (data) {
           google.charts.load('current', {'packages':['corechart']});
           google.charts.setOnLoadCallback(drawChart);

          //  redraws chart when resized? responsive
           $(window).resize(function(){
             drawChart();
           });

           var readings = data.readings;

           var timeChart = readings.slice(8).map(function(obj) {
             var rObj = [];
             date = new Date(obj.time);
             rObj = [date, obj.glucose_value];
             return rObj;
           });

           function drawChart() {
             var chartdata = new google.visualization.DataTable();
                chartdata.addColumn('datetime', 'Time of Day');
                chartdata.addColumn('number', 'Glucose Value');

                chartdata.addRows(timeChart);
             var options = {
              title: 'Glucose Readings',
              hAxis: {title: 'Date Time'},
              vAxis: {title: "Glucose Value (mg/dl)",
                baseline: 130,
              },

              selectionMode: 'multiple',
              // Trigger tooltips
              // on selections.
              tooltip: {trigger: 'hover'},
              // Group selections
              // by x-value.
              aggregationTarget: 'Time of Day',
              explorer: { axis: 'horizontal' }

             };
             var chart = new google.visualization.LineChart(document.getElementById('chart'));
             chart.draw(chartdata, options);
           }
         }
      })
    });
