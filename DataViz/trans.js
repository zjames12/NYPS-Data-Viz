// d3.selectAll("h3")
//     .transition()
//     .style("color", "blue")
//     .duration(5000);

let data = [6058.36, 6521.78, 7758.11, 8302.90, 9223.20, 9866.28, 9951.94, 10985.52,
    12419.46, 11558.62, 8350.00, 7997.59, 7872.68, 7909.76, 6947.29, 7232.56, 7661.20,
    7335.19, 7365.58]
console.log(data)
// let ag = [];
// d3.csv("https://www.ers.usda.gov/webdocs/DataFiles/53736/Alltables.xlsx?v=0", function(da){
//     da.forEach(function(d){
//         ag.push(d[1999])
//     });
// });
// console.log(ag)
let width = 600;
let scaleFactor = .05;
let barHeight = 10;

var graph = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);

var bar = graph.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
               return "translate(0," + i * barHeight + ")";
            });

bar.append("rect").attr("width", function(d) {
    return d * scaleFactor;
}).attr("height", barHeight - 1)
.attr("fill", "lightblue");
