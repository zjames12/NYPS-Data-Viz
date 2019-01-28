let width = 550
let height = 550

let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("color", "#FAFBF9")
    .attr("transform", "translate(200,0)")
    //.attr("cx", 200)

let g = svg.append("g")

let proj = d3.geoAlbers()
    .scale(70000)
    .rotate([74.0060,0])
    .center([0,40.7128])
    .translate( [width/2,height/2] );

let path = d3.geoPath().
    projection(proj)

let murder_data_2017 = [0,9,0,0,0,0,0,0,0,3,0,0,0,3,3,0,0,2,1,0,2,0,1,3,2,2,1,0,4,0,1,0,4,2,3,0,0,0,0,0,
6,3,8,10,9,2,10,8,8,3,3,0,2,0,0,0,0,0,0,0,8,2,1,3,0,0,0,17,3,7,6,3,2,9,0,11,2,6,0,5,0,
8,0,4,4,0,0,0,1,0,7,0,0,0,2,0,0,0,0,0,1,3,6,6,2,6,6,0,0,1,5,1,0,9,3,1,0,0,0,0,5,5,3,0]

let murder_data_2016 = [0,0,0,0,0,0,0,1,0,5,0,0,0,2,2,0,0,1,0,2,0,0,0,2,1,4,0,0,3,0,4,0,7,3,4,0,0,0,0,0,14,
8,8,8,13,7,14,8,7,4,4,0,3,0,0,0,0,0,0,0,3,2,0,5,0,0,1,14,3,6,5,5,4,14,0,23,3,10,0,7,0,10,
0,4,3,0,0,0,2,0,3,0,0,0,1,0,0,0,0,0,0,2,5,4,1,1,9,3,3,3,2,2,1,9,2,0,0,0,0,0,6,9,4,2]





let color = d3.scaleThreshold()
    .domain([2, 4, 6, 8, 10, 12])
    .range(["#DEEDCF", "#BFE1B0", "#99D492", "#74C67A", "#56B870", "#39A96B"]);

g.selectAll("path")
    .data(police_data.features)
    .enter()
    .append("path")
    //.attr("fill", "#ccc")
    .attr("fill", function(d) {
        return color(murder_data_2017[d.properties.Precinct]);
    })
    //.attr("stroke", "#333")
    .attr("stroke", "rbg(0,0,0)")
    .attr("stroke-width", 2)
    .attr("d", path)
    .on("mouseover", function(d){
    	d3.select("h2").text(function() {
            if (murder_data_2017[d.properties.Precinct] == 1) {
                return `There was one murder
                in New York's ${d.properties.Precinct}th Precinct in 2017`;
            } else {
                return `There were ${murder_data_2017[d.properties.Precinct]} murders
                in New York's ${d.properties.Precinct}th Precinct in 2017`;
            }
        });
        d3.select(this).attr("class","hover");
	})
	.on("mouseout", function(d){
		d3.select("h2").text("Hover over the map");
		d3.select(this).attr("class","incident");
	});

d3.select("#button_2016").on("click", function() {
    update_2016()
});

function update_2016() {
    g.selectAll("path")
    .data(police_data.features)
    //  .transition()
    .attr("fill", function(d) {
        return color(murder_data_2016[d.properties.Precinct]);
    })
    .on("mouseover", function(d){
    	d3.select("h2").text(function() {
            if (murder_data_2017[d.properties.Precinct] == 1) {
                return `There was one murder
                in New York's ${d.properties.Precinct}th Precinct in 2017`;
            } else {
                return `There were ${murder_data_2016[d.properties.Precinct]} murders
                in New York's ${d.properties.Precinct}th Precinct in 2016`;
            }
        });
    	d3.select(this).attr("class","hover");
       })
}

d3.select("#button_2017").on("click", function() {
    update_2017()
});

function update_2017() {
    g.selectAll("path")
    .data(police_data.features)
    //  .transition()
    .attr("fill", function(d) {
        return color(murder_data_2017[d.properties.Precinct]);
    })
    .on("mouseover", function(d){
    	d3.select("h2").text(function() {
            if (murder_data_2017[d.properties.Precinct] == 1) {
                return `There was one murder
                in New York's ${d.properties.Precinct}th Precinct in 2017`;
            } else {
                return `There were ${murder_data_2017[d.properties.Precinct]} murders
                in New York's ${d.properties.Precinct}th Precinct in 2017`;
            }
        });
    	d3.select(this).attr("class","hover");
       })
}
