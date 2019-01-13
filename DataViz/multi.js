let live_meat_data = [6058.36, 6521.78, 7758.11, 8302.90, 9223.20, 9866.28, 9951.94, 10985.52,
    12419.46, 11558.62, 8350.00, 7997.59, 7872.68, 7909.76, 6947.29, 7232.56, 7661.20,
    7335.19, 7365.58]
let meat_data = [3260.54,3827.67,4256.18,4283.46,4426.80,5718.50,5751.92,5243.63,5367.32,
    5059.82,4612.10,5087.84,5755.23,6245.21,6529.83,8940.36,9991.72,8589.10,8877.56]
let fish_data = [8859.78,9879.78,9663.26,9963.35,10859.89,11106.29,11840.23,
    13112.29,13434.57,13911.95,12933.85,14516.66,16459.37,16467.53,17784.32,20053.52,
    18520.80,19260.73,21324.07]
let dairy_data = [930.31,922.33,995.75,1008.77,1110.30,1292.30,1388.44,1405.67,1500.81,
    1595.57,1353.43,1347.20,1502.12,1604.17,1649.07,1844.34,1893.47,1875.77,1827.17]
let veg_data = [3631.59,3771.36,4156.61,4391.09,5082.41,5729.99,6043.08,6619.30,7256.04,
    7800.57,7525.21,8705.59,9666.64,9945.60,10733.51,10929.74,11290.19,12469.21,12742.98]
let fruit_data = [4764.46,4629.48,4665.21,5067.56,5557.74,5962.38,6873.76,7707.09,
    9217.31,9888.16,9639.79,10648.98,11973.91,12537.87,13602.26,14807.72,15954.86,17157.02,18383.12]

let height = 500;
let scaleFactor = .03;
let barWidth = 10;
let colors = ["#D6EFFF","#FED18C", "#FED99B", "#FE654F", "#9CC4B2","#C5C392"]
let i = 0
function createGraph(data) {
    var graph = d3.select("body")
                .append("svg")
                .attr("height", height)
                .attr("width", barWidth * data.length)
                .attr("transform", "translate(" + i * 200 + ",0)")
                .attr("transform", "rotate(180)")

    var bar = graph.selectAll("g")
                .data(data)
                .enter()
                .append("g")
                .attr("transform", function(d, i) {
                   return "translate(" + i * barWidth + ", 0)";
                });

    // graph.append("rect")
    //     .attr("width", 200)
    //     .attr("height", 20)
    //     //.attr("fill", "transparent")
    //     .attr("fill", "black")
    //     .attr("xlink:href","https:// www.google.com")
    //     .on("mouseover", function(d){
	// 		return tooltip.style("visibility", "visible").text("car");
	// 	})


    bar.append("rect").transition().attr("height", function(d) {
        return d * scaleFactor;
    }).attr("width", barWidth - 1)
    .duration(1000)
    .attr("fill", colors[i])

    graph.selectAll("rect")
    .on("mouseover", function(d){
        return tooltip.style("visibility", "visible").text("cat");
    })

    i++;

}

createGraph(live_meat_data)
createGraph(meat_data)
createGraph(fish_data)
createGraph(dairy_data)
createGraph(veg_data)
createGraph(fruit_data)
