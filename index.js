exports.progressBar = function(width, height, color, time) {
  width = width || '0';
  color = color || 'red';
  height = height || '10';
  time = time || '5';
  var theJockBarDetails = "<div id='loading-bar' style='width: " + width + "%; transition: all " + time + "s; height: " + height +"px; background-color: " + color + ";'></div>";
  return theJockBarDetails;
}

exports.triggerBar = function(){
  document.getElementById("loading-bar").style.width = "100%";
}
