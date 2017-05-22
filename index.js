exports.progressBar = function(width, height, color, time) {
  width = width || '0';
  color = color || 'red';
  height = height || '10';
  time = time || '5';
  var theJockBarDetails = "<div class='loading-bar' style='width: " + width + "%; transition: all " + time + "s; height: " + height +"px; background-color: " + color + ";'></div>";
  return theJockBarDetails;
}

exports.triggerBar = function(barId){
  //document.getElementById(barId);
  //var theBar = '#' + barId + ' .loading-bar';
  //document.getElementById(barId).getElementsByClassName("loading-bar").style.width = "100%";
  document.getElementById(barId).find('div').style.width = "100%";
}
