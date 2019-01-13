let width = 600
let height = 600

let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

let g = svg.append("g")

let proj = d3.geoAlbers()
    .scale(75000)
    .rotate([74.0060,0])
    .center([0,40.7128])
    .translate( [width/2,height/2] );

let path = d3.geoPath().
    projection(proj)

    g.selectAll("path")
        .data(police_data.features)
        .enter()
        .append("path")
        .attr("fill", "#ccc")
        .attr("stroke", "#333")
        .attr("d", path)
        .on("mouseover", function(d){
        console.log("cat");
		d3.select("h2").text(`New York's ${d.properties.Precinct} Precinct`);
		d3.select(this).attr("class","incident hover").append(text).text("cat");
	})
	.on("mouseout", function(d){
		d3.select("h2").text("Hover over the map");
		d3.select(this).attr("class","incident");
	});
