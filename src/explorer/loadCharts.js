/**
 * Created by calin.crist on 15/01/2017.
 */

$(document).ready(function () {

    //  Google geo charts
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawCharts);


    function drawCharts() {
        // drawLineChart();
        drawGeoChart();
    }

    function drawLineChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'No. of people');
        data.addColumn('number', 'Germany');
        data.addColumn('number', 'United States');
        data.addColumn('number', 'Brazil');

        data.addRows([
            [1,  37.8, 80.8, 41.8],
            [2,  30.9, 69.5, 32.4],
            [3,  25.4,   57, 25.7],
            [4,  11.7, 18.8, 10.5],
            [5,  11.9, 17.6, 10.4],
            [6,   8.8, 13.6,  7.7],
            [7,   7.6, 12.3,  9.6],
            [8,  12.3, 29.2, 10.6],
            [9,  16.9, 42.9, 14.8],
            [10, 12.8, 30.9, 11.6],
            [11,  5.3,  7.9,  4.7],
            [12,  6.6,  8.4,  5.2],
            [13,  4.8,  6.3,  3.6],
            [14,  4.2,  6.2,  3.4]
        ]);

        var options = {
            chart: {
                title: 'Category',
                subtitle: 'subcategory (in billions)'
            },
            width: '850',
            height: '550',
            axes: {
                x: {
                    0: {
                        side: 'bottom'
                    }
                }
            }
        };

        var chart = new google.charts.Line(document.getElementById('linechart'));

        chart.draw(data, google.charts.Line.convertOptions(options));
    }

    function drawGeoChart() {
        // Define the chart to be drawn.
        var data = google.visualization.arrayToDataTable([
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]
        ]);

        var options = {

          width: '850',
          height: '550'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('geochart'));

        chart.draw(data, options);

    }
});
