var vg_1 = 'Json/Map.json';
var vg_6 = "Json/combineline.json";
var vg_4 = "Json/Area.json";
var vg_2 = "Json/area2.json";
var vg_5 = "Json/streamgraph.json";

vegaEmbed("#map", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#area", vg_4).then(function(result) {
}).catch(console.error);

vegaEmbed("#area2", vg_2).then(function(result) {
}).catch(console.error);   

vegaEmbed("#streamgraph", vg_5).then(function(result) {
}).catch(console.error);

vegaEmbed("#combineline", vg_6).then(function(result) {
}).catch(console.error);