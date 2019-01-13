//import * as d3 from "./d3/d3.js";

let width = 100;
let height = 100;

var svg = d3.select("#svgcontainer")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
         svg.append("line")
            .attr("x1", 100)
            .attr("y1", 100)
            .attr("x2", 200)
            .attr("y2", 200)
            .style("stroke", "rgb(255,0,0)")
            .style("stroke-width", 2);
        svg.append("rect")
            .attr("x", 20)
            .attr("y", 20)
            .attr("width", width)
            .attr("height", height)
            .attr('fill', "green")
            .attr('transform', 'rotate(50)');
