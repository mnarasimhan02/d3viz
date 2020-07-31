/**
 * @class WorldMap
 */
class WorldMap {

    // Elements
    svg = null;
    g = null;
    xAxisG = null;
    yAxisG = null;
    continents = ["Asia", "Europe", "Africa", "Oceania", "Americas"];

    // Configs
    svgW = 960;
    svgH = 760;
    margin = { top: 50, right: 25, bottom: 75, left: 75 };
    width = this.svgW - (this.margin.right + this.margin.left);
    height = this.svgH - (this.margin.top + this.margin.bottom);
    color = d3.

        // Tools
        // tip = d3.tip()
        //     .attr('class', 'd3-tip')
        //     .offset([-10, 0])
        //     .html((d) => {
        //         const data = this.countryNameMap[d.properties.name];
        //         let value;
        //         const format = d3.format(",");
        //         if (!data) {
        //             value = 'N/A'
        //         } else {
        //             value = data[this.metric];
        //             value = format(value)
        //         }
        //         return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>" + this.metric + ": </strong><span class='details'>" + value + "</span>";
        //     });

        path = d3.geoPath();
    countryNameMap = {}


    /*
    Constructor
     */
    constructor(_data, topojson, _target, _dropdown_id) {
        //iterate the data point for each year
        const dataByYear = {};
        //maps the country code to continent
        const continentMap = { "AFG": "Asia", "ALA": "Europe", "ALB": "Europe", "DZA": "Africa", "ASM": "Oceania", "AND": "Europe", "AGO": "Africa", "AIA": "Americas", "ATA": "", "ATG": "Americas", "ARG": "Americas", "ARM": "Asia", "ABW": "Americas", "AUS": "Oceania", "AUT": "Europe", "AZE": "Asia", "BHS": "Americas", "BHR": "Asia", "BGD": "Asia", "BRB": "Americas", "BLR": "Europe", "BEL": "Europe", "BLZ": "Americas", "BEN": "Africa", "BMU": "Americas", "BTN": "Asia", "BOL": "Americas", "BES": "Americas", "BIH": "Europe", "BWA": "Africa", "BVT": "Americas", "BRA": "Americas", "IOT": "Africa", "BRN": "Asia", "BGR": "Europe", "BFA": "Africa", "BDI": "Africa", "CPV": "Africa", "KHM": "Asia", "CMR": "Africa", "CAN": "Americas", "CYM": "Americas", "CAF": "Africa", "TCD": "Africa", "CHL": "Americas", "CHN": "Asia", "CXR": "Oceania", "CCK": "Oceania", "COL": "Americas", "COM": "Africa", "COG": "Africa", "COD": "Africa", "COK": "Oceania", "CRI": "Americas", "CIV": "Africa", "HRV": "Europe", "CUB": "Americas", "CUW": "Americas", "CYP": "Asia", "CZE": "Europe", "DNK": "Europe", "DJI": "Africa", "DMA": "Americas", "DOM": "Americas", "ECU": "Americas", "EGY": "Africa", "SLV": "Americas", "GNQ": "Africa", "ERI": "Africa", "EST": "Europe", "SWZ": "Africa", "ETH": "Africa", "FLK": "Americas", "FRO": "Europe", "FJI": "Oceania", "FIN": "Europe", "FRA": "Europe", "GUF": "Americas", "PYF": "Oceania", "ATF": "Africa", "GAB": "Africa", "GMB": "Africa", "GEO": "Asia", "DEU": "Europe", "GHA": "Africa", "GIB": "Europe", "GRC": "Europe", "GRL": "Americas", "GRD": "Americas", "GLP": "Americas", "GUM": "Oceania", "GTM": "Americas", "GGY": "Europe", "GIN": "Africa", "GNB": "Africa", "GUY": "Americas", "HTI": "Americas", "HMD": "Oceania", "VAT": "Europe", "HND": "Americas", "HKG": "Asia", "HUN": "Europe", "ISL": "Europe", "IND": "Asia", "IDN": "Asia", "IRN": "Asia", "IRQ": "Asia", "IRL": "Europe", "IMN": "Europe", "ISR": "Asia", "ITA": "Europe", "JAM": "Americas", "JPN": "Asia", "JEY": "Europe", "JOR": "Asia", "KAZ": "Asia", "KEN": "Africa", "KIR": "Oceania", "PRK": "Asia", "KOR": "Asia", "KWT": "Asia", "KGZ": "Asia", "LAO": "Asia", "LVA": "Europe", "LBN": "Asia", "LSO": "Africa", "LBR": "Africa", "LBY": "Africa", "LIE": "Europe", "LTU": "Europe", "LUX": "Europe", "MAC": "Asia", "MDG": "Africa", "MWI": "Africa", "MYS": "Asia", "MDV": "Asia", "MLI": "Africa", "MLT": "Europe", "MHL": "Oceania", "MTQ": "Americas", "MRT": "Africa", "MUS": "Africa", "MYT": "Africa", "MEX": "Americas", "FSM": "Oceania", "MDA": "Europe", "MCO": "Europe", "MNG": "Asia", "MNE": "Europe", "MSR": "Americas", "MAR": "Africa", "MOZ": "Africa", "MMR": "Asia", "NAM": "Africa", "NRU": "Oceania", "NPL": "Asia", "NLD": "Europe", "NCL": "Oceania", "NZL": "Oceania", "NIC": "Americas", "NER": "Africa", "NGA": "Africa", "NIU": "Oceania", "NFK": "Oceania", "MKD": "Europe", "MNP": "Oceania", "NOR": "Europe", "OMN": "Asia", "PAK": "Asia", "PLW": "Oceania", "PSE": "Asia", "PAN": "Americas", "PNG": "Oceania", "PRY": "Americas", "PER": "Americas", "PHL": "Asia", "PCN": "Oceania", "POL": "Europe", "PRT": "Europe", "PRI": "Americas", "QAT": "Asia", "REU": "Africa", "ROU": "Europe", "RUS": "Europe", "RWA": "Africa", "BLM": "Americas", "SHN": "Africa", "KNA": "Americas", "LCA": "Americas", "MAF": "Americas", "SPM": "Americas", "VCT": "Americas", "WSM": "Oceania", "SMR": "Europe", "STP": "Africa", "SAU": "Asia", "SEN": "Africa", "SRB": "Europe", "SYC": "Africa", "SLE": "Africa", "SGP": "Asia", "SXM": "Americas", "SVK": "Europe", "SVN": "Europe", "SLB": "Oceania", "SOM": "Africa", "ZAF": "Africa", "SGS": "Americas", "SSD": "Africa", "ESP": "Europe", "LKA": "Asia", "SDN": "Africa", "SUR": "Americas", "SJM": "Europe", "SWE": "Europe", "CHE": "Europe", "SYR": "Asia", "TWN": "Asia", "TJK": "Asia", "TZA": "Africa", "THA": "Asia", "TLS": "Asia", "TGO": "Africa", "TKL": "Oceania", "TON": "Oceania", "TTO": "Americas", "TUN": "Africa", "TUR": "Asia", "TKM": "Asia", "TCA": "Americas", "TUV": "Oceania", "UGA": "Africa", "UKR": "Europe", "ARE": "Asia", "GBR": "Europe", "USA": "Americas", "UMI": "Oceania", "URY": "Americas", "UZB": "Asia", "VUT": "Oceania", "VEN": "Americas", "VNM": "Asia", "VGB": "Americas", "VIR": "Americas", "WLF": "Oceania", "ESH": "Africa", "YEM": "Asia", "ZMB": "Africa", "ZWE": "Africa" }

        _data.forEach(function (d) {
            for (let startYear = 2000, endYear = 2015; startYear <= endYear; startYear++) {
                if (!continentMap[d['Country Code']]) {
                    console.log(d)
                }
                const currentData = {
                    name: d['Country Name'],
                    continent: continentMap[d['Country Code']],
                    value: +d[`${startYear} [YR${startYear}]`]
                }
                if (!dataByYear[startYear])
                    dataByYear[startYear] = [currentData];
                else
                    dataByYear[startYear].push(currentData)
            }
        });
        this.data = dataByYear;
        this.topojson = topojson;
        this.target = _target;
        //append the years to the dropdown and listen for change
        const years = Object.keys(this.data);
        const select = d3.select('#' + _dropdown_id);
        select.selectAll('option').data(years)
            .enter().append('option')
            .html(function (d) { return d })
        const vis = this;
        select.on('change', function () {
            vis.currentYear = d3.select(this).property('value');
            vis.render()
        })
        // set the default year
        this.currentYear = years[0];
        this.init();
    }



    /** @function init()
     * Perform one-time setup function
     *
     * @returns void
     */
    init() {
        // Define this vis
        const vis = this;

        // Set up the svg/g work space
        vis.svg = d3.select(`#${vis.target}`)
            .append('svg')
            .attr('width', vis.svgW)
            .attr('height', vis.svgH);
        vis.g = vis.svg.append('g')
            .attr('class', 'map')
            .style('transform', `translate(${vis.margin.left},${vis.margin.top})`);

        vis.projection = d3.geoMercator()
            .scale(130)
            .translate([this.width / 2, this.height / 1.6]);

        vis.path = d3.geoPath().projection(this.projection);

        vis.color = d3.scaleOrdinal().domain(vis.continents).range(["#ee4035", "#ffbf00", "#e86af0", "#028900", "#0392cf"])

        vis.render();
    }


    /** @function wrangle()
     * Builds, updates, removes elements in vis
     *
     * @returns void
     */
    render() {
        // Define this vis
        const vis = this;

        //get the data for the currently selected year
        const data = vis.data[vis.currentYear];
        data.forEach(d => {
            vis.countryNameMap[d.name] = d;
        })

        // clear the content of the map
        vis.g.html("")
        vis.g.append("g")
            .attr("class", "countries")
            .selectAll("path")
            .data(this.topojson.features)
            .enter().append("path")
            .attr("class", (d) => {
                const data = this.countryNameMap[d.properties.name];
                if (!data) {
                    return 'continent'
                }
                return "continent " + data.continent
            })
            .attr("d", this.path)
            .style("fill", (d) => {
                const data = this.countryNameMap[d.properties.name];
                if (!data) {
                    d.color = 'grey'
                    return d.color;
                }
                d.color = vis.color(data.continent);
                return d.color;
            })
            .style('stroke', 'white')
            .style('stroke-width', 1.5)
            .style("opacity", 0.9)
            // tooltips
            .style("stroke", "white")
            .style('stroke-width', 0.3)
            .on('mouseover', function (d) {
                let data = vis.countryNameMap[d.properties.name];
                if (!data) {
                    data = {
                        name: d.properties.name,
                        continent: 'N/A',
                        value: 'N/A'
                    }
                }
                showTooltip(data, vis.currentYear)
                d3.select(this)
                    .style("opacity", 1)
                    .style("stroke", "white")
                    .style("stroke-width", 3);
            })
            .on('mouseout', function (d) {
                hideTooltip(d)
                d3.select(this)
                    .style("opacity", 0.8)
                    .style("stroke", "white")
                    .style("stroke-width", 0.3);
            })
            .on('mousemove', function (d) {
                moveTooltip(d)
            });

        vis.g.append("path")
            .datum(topojson.mesh(this.topojson.features, function (a, b) { return a.id !== b.id; }))
            .attr("class", "names")
            .attr("d", this.path);

        // append legend and listen for clicks to filter the paths
        const legend = vis.g.selectAll('.legend').data(vis.continents)
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', (d, index) => `translate(${vis.width - 50}, ${index * 25})`)
            .style('cursor', 'pointer')
            .on('click', function (d) {
                d3.selectAll('.continent').style('fill', 'grey')
                d3.selectAll('.' + d).style('fill', vis.color(d));
                d3.selectAll('.legend').attr('opacity', .5)
                d3.select(this).attr('opacity', 1)
                d3.event.stopPropagation();
            });
        legend.append('rect')
            .attr('width', 20)
            .attr('height', 20)
            .style('fill', d => vis.color(d));
        legend.append('text')
            .text(d => d)
            .attr('x', 25)
            .attr('y', 15)
            .style('font-weight', 'bold');

        //clear the filter on the map
        vis.svg.on('click', function () {
            d3.selectAll('.continent').style('fill', d => d.color);
            d3.selectAll('.legend').attr('opacity', 1)
        })
    }



}