var balance = 10000000;
var t1 = 1;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var t1Price = 10;
var t2Price = 60;
var t3Price = 120;
var t4Price = 200;
var multiBuy = 1;
var timer = 0;

timer = setInterval("update()", 1000);

//Debug
function stop(){
  document.getElementById("stop").onclick = function(){
    clearInterval(timer);
  }
}
//End Debug

function update(){
  income();
}

//income
function income(){
  balance = balance + (t1 * 1) + (t2 * 10) + (t3 * 50) + (t4 * 500);
  updateNumbers();
}

//write number of generators
function updateNumbers(){
  document.getElementById("t1").innerHTML = t1;
  document.getElementById("t2").innerHTML = t2;
  document.getElementById("t3").innerHTML = t3;
  document.getElementById("t4").innerHTML = t4;
  var shortb;
  convert();
  document.getElementById("balance").innerHTML = shortb;
}

//Buy income generator
function buyBuilding(){
  if (document.getElementById("buyT1")) {
      if (balance >= t1Price) {
        balance = balance - t1Price;
        t1 = t1 + multiBuy;
        updateNumbers();
      }
    }
  else if (document.getElementById("buyT2")) {
    if (balance >= t2Price) {
      balance = balance - t2Price;
      t2 = t2 + multiBuy;
      updateNumbers();
    }
  }
  else if (document.getElementById("buyT3")) {
    if (balance >= t3Price) {
      balance = balance - t3Price;
      t3 = t3 + multiBuy;
      updateNumbers();
    }
  }
  else if (document.getElementById("buyT4")) {
    if (balance >= t4Price) {
      balance = balance - t4Price;
      t4 = t4 + multiBuy;
      updateNumbers();
    }
  }
  else {
    alert("ERROR");
  }
}
