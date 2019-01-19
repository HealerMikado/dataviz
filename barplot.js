var margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 30
},
width = 920 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

var y = d3.scaleLinear()
.range([height, 1]);

var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);

var xAxisScale = d3.scaleLinear()
.range([ 0, width]);

var xAxis = d3.axisBottom()
.scale(xAxisScale)
.tickFormat(function(d){ return d.x;});


var yAxis = d3.axisLeft(y);

var svg = d3.select("#chart").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/nuts2_croissance.csv", type, function(error, data) {
x.domain(data.map(function(d) {
    return d.id_anc;
}));
y.domain(d3.extent(data, function(d) {
    return d.croissance;
})).nice();


svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", function(d) {

        if (d.croissance < 0){
            return "bar negative";
        } else {
            return "bar positive";
        }

    })
    .attr("id_anc", function(d){
        return d.id_anc;
    })
    .attr("croissance", function(d){
        return d.croissance;
    })
    .attr("title", function(d){
        return (d.id_anc + ": " + d.croissance + " °C")
    })
    .attr("y", function(d) {

        if (d.croissance > 0){
            return y(d.croissance);
        } else {
            return y(0);
        }

    })
    .attr("x", function(d) {
        return x(d.id_anc);
    })
    .attr("width", x.bandwidth())
    .attr("height", function(d) {
        return Math.abs(y(d.croissance) - y(0));
    })
    .on("mouseover", function(d){
        // alert("id_anc: " + d.id_anc + ": " + d.croissance + " croissance");
        d3.select("#_id_anc")
            .text("id_anc : " + d.id_anc);
        d3.select("#_croissance")
            .text("croissance :  " +d.croissance);
    });

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate( 30 ,0)")
    .call(yAxis);

svg.append("g")
    .attr("class", "y axis")
    .append("text")
    .text("croissance")
    .attr("transform", "translate(50, 50), rotate(-90)")

svg.append("g")
    .attr("class", "X axis")
    .attr("transform", "translate(" + (margin.left - 6.5) + "," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "x axis")
    .append("line")
    .attr("y1", y(0))
    .attr("y2", y(0))
    .attr("x2", width);

svg.append("g")
    .attr("class", "infowin")
    .attr("transform", "translate(60, 5)")
    .append("text")
    .attr("id", "_id_anc");

svg.append("g")
    .attr("class", "infowin")
    .attr("transform", "translate(150, 5)")
    .append("text")
    .attr("id","_croissance");

});


function type(d) {
d.croissance = +d.croissance;
return d;
}