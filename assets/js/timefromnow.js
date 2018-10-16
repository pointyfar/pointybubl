(function () {
  var t = document.getElementsByClassName("timefromnow");
  
  for(var i=0; i< t.length; i++) {
    var then = new Date(parseInt(t[i].dataset.time * 1000));
    var now = new Date;
    var diff = Math.round((then - now) / (1000 * 60 * 60 * 24)); // round the amount of days
    
    var tfn = "";
    if (diff < 14) {
      tfn = diff == 1 ? "1 day" : `${diff} days`;
    } else if ( diff < 60 ) {
      var text = Math.floor(diff / 7);
      tfn = `${text} weeks`;
    } else if ( diff < 365 ) {
      var text = Math.floor(diff / 30);
      tfn = `${text} months`;
    } else {
      var text = Math.floor(diff / 365);
      tfn = text == 1 ? `${text}+ year` : `${text}+ years`;
    }
    t[i].innerHTML = tfn;
    
  }
})();