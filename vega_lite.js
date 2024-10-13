var vg_1 = 'Json/Map.json';
var vg_2 = "Json/line.json";
var vg_3 = "Json/scatter.json";
var vg_4 = "Json/Area.json";

vegaEmbed("#map", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#line", vg_2).then(function(result) {
}).catch(console.error);

vegaEmbed("#scatter", vg_3).then(function(result) {
}).catch(console.error);

vegaEmbed("#area", vg_4).then(function(result) {
}).catch(console.error);