let meat_data = [3260.54,3827.67,4256.18,4283.46,4426.80,5718.50,5751.92,5243.63,5367.32,
    5059.82,4612.10,5087.84,5755.23,6245.21,6529.83,8940.36,9991.72,8589.10,8877.56]

console.log(meat_data)


var meat_graph = d3.select("body")
            .append("svg")
            .attr("height", height)
            .attr("width", barWidth * meat_data.length)
            .attr("transform", "translate(600,200)")
            .attr("transform", "rotate(180)");
var meat_bar = meat_graph.selectAll("g")
            .data(meat_data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
               return "translate(" + i * barWidth + ", 0)";
            });

meat_bar.append("rect").transition().attr("height", function(d) {
    return d * scaleFactor;
})
.attr("width", barWidth - 1)
.duration(1000)
.attr("fill", "rgb(249, 182, 87)")
