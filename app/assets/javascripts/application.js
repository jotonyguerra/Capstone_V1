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

// ajax to grab Readings object.. need to respond_with json.
$(document).ready(function () {
  $.ajax({
      type: 'GET',
      url: '/readings',
      data: { get_param: 'readings' },
      dataType: 'json',
      success: function (data) {
          $.each(data, function(index, element) {
              $('body').append($('<div>', {
                // Load the Visualization API and the corechart package.
                google.charts.load('current', {'packages':['corechart']});

                // Set a callback to run when the Google Visualization API is loaded.
                google.charts.setOnLoadCallback(drawChart);

                // Callback that creates and populates a data table,
                // instantiates the pie chart, passes in the data and
                // draws it.
                function drawChart() {
                  // Create the data table.
                  var chardata = new google.visualization.DataTable([
                    ['Time', 'Glucose Value'],
                  ]);

                  // Set chart options
                  var options = {'title':'Glucose Readings',
                                 'width':800,
                                 'height':500};

                  // Instantiate and draw our chart, passing in some options.
                  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
                  chart.draw(chardata, options);
                }

              }));
          });
      }
  });
