const svg = d3.select("#clock_area").append("svg")
  .attr("width", 400)
  .attr("height", 100)

var countDownDate = new Date("Jul 24, 2027 16:00:00").getTime();

d3.interval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const text = ""+years + " Jahre"+ days + " Tage " + hours + " Stunden "+ minutes + " Minuten"
    svg.selectAll("text").remove()

    svg
    .append("text")
    .attr("x",0).attr("y",50).attr("font-size","22px").text(text)
    .attr("fill","orange")

},1000);