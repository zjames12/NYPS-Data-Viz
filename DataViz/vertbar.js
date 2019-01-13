let live_meat_data = [6058.36, 6521.78, 7758.11, 8302.90, 9223.20, 9866.28, 9951.94, 10985.52,
    12419.46, 11558.62, 8350.00, 7997.59, 7872.68, 7909.76, 6947.29, 7232.56, 7661.20,
    7335.19, 7365.58]
//console.log(data)

let height = 600;
let scaleFactor = .05;
let barWidth = 10;

var graph = d3.select("body")
            .append("svg")
            .attr("height", height)
            .attr("width", barWidth * data.length)
            .attr("transform", "translate(0,200)")
            .attr("transform", "rotate(180)");
var bar = graph.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
               return "translate(" + i * barWidth + ", 0)";
            });

bar.append("rect").transition().attr("height", function(d) {
    return d * scaleFactor;
}).attr("width", barWidth - 1)
.duration(1000)
.attr("fill", "rgb(114, 166, 249)")
