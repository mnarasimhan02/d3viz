

const tooltip = d3.select('.tooltip')
let tooltipWidth, tooltipHeight;

function separateByComma(value) {
    let formatDecimalComma = d3.format(",.2f");
    return formatDecimalComma(value);
}

function showTooltip(d, year) {
    let content = `
        <div>Year: ${year}</div><br />
        <div>Country:${d.name}</div> <br />
        <div>Continent: ${d.continent}</div><br />
        <div>GDP Per Capita: $${isNaN(d.value) ? 'N/A' : separateByComma(d.value)}</div>
      `;
    tooltip.html(content);
    tooltip.transition().style("opacity", 1);
}

function moveTooltip(d) {
    tooltip.style("transform", `translate(${d3.event.clientX - 200}px,${d3.event.clientY}px)`);
}

function hideTooltip() {
    tooltip.transition().style("opacity", 0);
}




const DATA_URL = "/data/data.csv";
const GEO_JSON_URL = "../data/geojson.json";
// read the data from both the csv and the geojson

Promise.all([d3.csv(DATA_URL), d3.json(GEO_JSON_URL)]).then(function (data) {
    const countries_data = data[0];
    const geoJSONData = data[1];
    const dataMap = {};
    // initialize the map with the data and the id of the dropdown
    new WorldMap(countries_data, geoJSONData, "vis-container", 'year-dropdown')
})