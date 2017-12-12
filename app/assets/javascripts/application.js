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
//= require Chart.bundle
//= require_tree .
//= require chartkick


$(function(){ $(document).foundation(); });

$(document).ready(function () {
  $.ajax({
      type: 'GET',
      url: '/readings',
      data: { get_param: 'readings' },
      dataType: 'json',
      success: function (data) {
          $.each(data, function(index, element) {

            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['corechart']});
            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
              // Create the data table.
              var data = new google.visualization.DataTable([
                ['Time', 'Glucose Value'],
                [element.name, element.name] // conditional?  element = glucosevalue?
              ]);
              // Set chart options
              var options = {'title':'Glucose Readings',
                             'width':800,
                             'height':500};
              // Instantiate and draw our chart, passing in some options.
              var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
              chart.draw(data, options);
            };
          });
      }
  });
});
