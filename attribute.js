function Fmenu(){	//if onclick happens in menu, the one of the 4 functions will run
  document.getElementById("Stuff1").style.display = "none";
  document.getElementById("Stuff2").style.display = "block";
  document.getElementById("stats1").style.display = "block";
  document.getElementById("stats3").style.display = "block";
  document.getElementById("drop").innerHTML = "Ready?"; 
  document.getElementById("drop").style.background = "#3e8e41";
  document.getElementById("drop").style.color = "black";

  document.getElementById("stats1a").innerHTML = "Prey: "+ prey.name;
  document.getElementById("stats1b").innerHTML = "Speed: "+ prey.speed;
  document.getElementById("stats1c").innerHTML = "Birthrate: "+ prey.birthrate;
  document.getElementById("stats1d").innerHTML = "Deathrate: "+ prey.deathrate;
 
  document.getElementById("stats2a").innerHTML = "Predator: "+ pred.name;  
  document.getElementById("stats2b").innerHTML = "Speed: "+ pred.speed;
  document.getElementById("stats2c").innerHTML = "Birthrate: "+ pred.birthrate;
  document.getElementById("stats2d").innerHTML = "Deathrate: "+ pred.deathrate;  

  document.getElementById("stats3a").innerHTML = "Vegetation: "+ veg.name;    
  document.getElementById("stats3b").innerHTML = "Speed: Planted";
  document.getElementById("stats3c").innerHTML = "Birthrate: "+ veg.birthrate;
  document.getElementById("stats3d").innerHTML = "Deathrate: "+ veg.deathrate;
}

function Fprey(){
  document.getElementById("Stuff1").style.display = "block";
  document.getElementById("Stuff2").style.display = "none";
  document.getElementById("drop").innerHTML = "Prey's Attribute";
  document.getElementById("drop").style.background = "blue";
  document.getElementById("drop").style.color = "white";
  document.getElementById("stats1").style.display = "none";
  document.getElementById("stats3").style.display = "none";  
  document.getElementById("stats2a").innerHTML = "Prey: "+ prey.name;  
  document.getElementById("stats2b").innerHTML = "Speed: "+ prey.speed;
  document.getElementById("stats2c").innerHTML = "Birthrate: "+ prey.birthrate;
  document.getElementById("stats2d").innerHTML = "Deathrate: "+ prey.deathrate;
}

function Fpred(){
  document.getElementById("Stuff1").style.display = "block";
  document.getElementById("Stuff2").style.display = "none";	
  document.getElementById("drop").innerHTML = "Predator's Attribute";
  document.getElementById("drop").style.background = "red";
  document.getElementById("drop").style.color = "white";
  document.getElementById("stats1").style.display = "none";
  document.getElementById("stats3").style.display = "none";    
  document.getElementById("stats2a").innerHTML = "Predator: "+ pred.name;  
  document.getElementById("stats2b").innerHTML = "Speed: "+ pred.speed;
  document.getElementById("stats2c").innerHTML = "Birthrate: "+ pred.birthrate;
  document.getElementById("stats2d").innerHTML = "Deathrate: "+ pred.deathrate;  
}

function Fveg(){
  document.getElementById("Stuff1").style.display = "block";
  document.getElementById("Stuff2").style.display = "none";	
  document.getElementById("drop").innerHTML = "Vegetation's Attribute";
  document.getElementById("drop").style.background = "lightgreen";
  document.getElementById("drop").style.color = "black";
  document.getElementById("stats1").style.display = "none";
  document.getElementById("stats3").style.display = "none";    
  document.getElementById("stats2a").innerHTML = "Vegetation: "+ veg.name;    
  document.getElementById("stats2b").innerHTML = "Speed: Planted";
  document.getElementById("stats2c").innerHTML = "Birthrate: "+ veg.birthrate;
  document.getElementById("stats2d").innerHTML = "Deathrate: "+ veg.deathrate;
}
/*Could make presets happen here*/