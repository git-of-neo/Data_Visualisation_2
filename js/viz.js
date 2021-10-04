var disable_action = {actions: false};

var map = "js/choropleth_map.vg.json";
    vegaEmbed("#choropleth_map", map, disable_action).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bump = "js/bump_chart.vg.json";
    vegaEmbed("#bump_chart", bump, disable_action).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bar = "js/bar_chart.vg.json";
    vegaEmbed("#bar_chart", bar, disable_action).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);