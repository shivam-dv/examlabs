function chart(chartNumber, once) {
  console.log("CHART FUNCTION")
  $(chartNumber).easyPieChart({
    size: 170,
    barColor: function (percent) {
      var ctx = this.renderer.getCtx();
      var canvas = this.renderer.getCanvas();
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      // gradient.addColorStop(0, "#584DC4");
      // gradient.addColorStop(1, "#22c4ff");
      // gradient.addColorStop(.8, "#22c4ff");
      gradient.addColorStop(.4, "#22c4ff");
      // gradient.addColorStop(.7, "#22c4ff");
      // gradient.addColorStop(.2, "#584DC4");
      gradient.addColorStop(0, "#584DC4");
      ctx.fillStyle = gradient;
      return gradient;
    },
    scaleLength: 0,
    lineWidth: 20,
    trackColor: "transparent",
    lineCap: "butt",
    animate: 2000,
  });

  var percentage = $(chartNumber).attr('data-percent');
  percentAnimation(percentage, `${chartNumber}>span`, once);

}

function percentAnimation(percentage, chartNumber, once) {
  console.log("PERCENT FUNCITON START")
  let a = 0;
  let loop = setInterval(() => {
    let random = Math.floor(Math.random() * 10);
    if (a > (percentage - 4)) {
      a = percentage;
      $(chartNumber).text(a + '%');
      console.log("LOOP RUNNING")
      clearInterval(loop);
    }
    else if (a < percentage) {
      a += Math.floor(Math.random() * 10);
      $(chartNumber).text(a + '%');
    }
  }, 100);
  once = 1;
}

$(document).ready(function () {
  var onceCh1 = 0;
  var chart1Reference = function () {
    if ($(window).scrollTop() > $('.chart-1').offset().top - 600 && Number($('.chart-1>span').text().trim().slice(0, -1)) >= Number('0') && onceCh1 === 0) {
      chart('.chart-1', onceCh1);
      window.removeEventListener('scroll', chart1Reference, false);
    }
  }
  window.addEventListener('scroll', chart1Reference, false);

  var onceCh2 = 0;
  var chart2Reference = function () {
    if ($(window).scrollTop() > $('.chart-2').offset().top - 600 && Number($('.chart-2>span').text().trim().slice(0, -1)) >= Number('0') && onceCh2 === 0) {
      chart('.chart-2', onceCh2);
      window.removeEventListener('scroll', chart2Reference, false);
    }
  }
  window.addEventListener('scroll', chart2Reference, false);

  var onceCh3 = 0;
  var chart3Reference = function () {
    if ($(window).scrollTop() > $('.chart-3').offset().top - 600 && Number($('.chart-3>span').text().trim().slice(0, -1)) >= Number('0') && onceCh3 === 0) {
      chart('.chart-3', onceCh3);
      window.removeEventListener('scroll', chart3Reference, false);
    }
  }
  window.addEventListener('scroll', chart3Reference, false);

  var onceCh4 = 0;
  var chart4Reference = function () {
    if ($(window).scrollTop() > $('.chart-4').offset().top - 600 && Number($('.chart-4>span').text().trim().slice(0, -1)) >= Number('0') && onceCh4 === 0) {
      chart('.chart-4', onceCh4);
      window.removeEventListener('scroll', chart4Reference, false);
    }
  }
  window.addEventListener('scroll', chart4Reference, false);
  
  
  
  
  
  
var speed = 10;
function incEltNbr(id) {
  $(id).each(function() {
    var elt = this;
    var spinrefer = function () {
    if ($(window).scrollTop() > $(elt).offset().top - 600 && Number($(elt).text().trim().slice(0, -1)) >= Number('0')) {
      incNbrRec(0, elt.dataset.value, elt);
      window.removeEventListener('scroll', spinrefer, false);
    }
  }
  window.addEventListener('scroll', spinrefer, false);
    
  });
}
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 0.1, endNbr, elt);
    }, speed);
  }
}

function incNbr(){
  incEltNbr("nbr");
}

incEltNbr(".pp-info-data span");
})







