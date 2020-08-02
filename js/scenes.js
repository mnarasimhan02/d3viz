





// listen for clicks on all buttons for scenes
d3.selectAll(".step-link").on('click', function () {
    const id = d3.select(this).attr('id');

    // change this link to active
    d3.selectAll('.step-link').classed('active', false);

    // make this link active 
    d3.select(this).classed('active', true);


    // hide all annotations
    d3.selectAll('.annotation-step').style('display', 'none');
    // show the current step annotation
    d3.select(`#${id}-annotation`).style('display', 'block')
    WorldMap.resetContinents();
    WorldMap.fadeIn()
})