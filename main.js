////resources 
var cash = 0; 
//coal 
var coal = 0;
var coalps = 0;
////silicon
//raw
var rsilicon = 0;
var rsiliconps = 0;
//refined
var silicon = 0;
var siliconps = 0; 

////click logic 
//mine
function Click(number){
	//0
    if(minelvl == 0){
		coalpc = 1; 
		coal = coal + 1; 
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coalpc").innerHTML = coalpc;
	}
	//1
	if(minelvl == 1){
		coalpc = 1; 
		coal = coal + 1; 
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coalpc").innerHTML = coalpc;
	}
	//2
	if(minelvl == 2){
		coalpc = 2; 
		coal = coal + 2; 
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coalpc").innerHTML = coalpc;
	}
	//3
	if(minelvl == 3){
		coalpc = 2; 
		coal = coal + 2; 
		siliconpc = 1;
		rsilicon = rsilicon + 1;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coalpc").innerHTML = coalpc;
		document.getElementById("silicon").innerHTML = rsilicon;
		document.getElementById("siliconpc").innerHTML = siliconpc;
	}
};

////sell logic 
//coal 
function sellcoal(){
	if (coal >= 1*csnumber){
		cash = cash + 2*csnumber;
		coal = coal - 1*csnumber;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("cash").innerHTML = cash;
	} 	
}
var csnumber = 1;
function coalsellup(){
	csnumber = csnumber * 10 
	document.getElementById("csnumber").innerHTML = csnumber;
}
function coalselldown(){
	if(csnumber > 1){
		csnumber = csnumber / 10 
		document.getElementById("csnumber").innerHTML = csnumber;
	}
}

//silicon
function sellsilicon(){
	if (rsilicon >= 1*ssnumber){
		cash = cash + 1*ssnumber;
		rsilicon = rsilicon - 1;
		document.getElementById("silicon").innerHTML = rsilicon;
		document.getElementById("cash").innerHTML = cash;
	} 	
}
var ssnumber = 1;
function siliconsellup(){
	ssnumber = ssnumber * 10 
	document.getElementById("ssnumber").innerHTML = ssnumber;
}
function siliconselldown(){
	if(ssnumber > 1){
		ssnumber = ssnumber / 10 
		document.getElementById("ssnumber").innerHTML = ssnumber;
	}
}
//(refined)

function sellrefinedsilicon(){
	if (silicon >= 1*rssnumber){
		cash = cash + 150*rssnumber;
		silicon = silicon - 1;
		document.getElementById("refinedsilicon").innerHTML = silicon;
		document.getElementById("cash").innerHTML = cash;
	} 	
}
var rssnumber = 1;
function refinedsiliconsellup(){
	rssnumber = rssnumber * 10 
	document.getElementById("rssnumber").innerHTML = rssnumber;
}
function refinedsiliconselldown(){
	if(rssnumber > 1){
		rssnumber = rssnumber / 10 
		document.getElementById("rssnumber").innerHTML = rssnumber;
	}
}

////tick logic 
function PS(){
	//1
	if(minelvl == 1){
		coal = coal + 1; 
		coalps = 1; 
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coalps").innerHTML = coalps;
	}
	//2
	if(minelvl == 2){
		coal = coal + 2; 
		coalps = 2; 
		rsilicon = rsilicon + 1;
		rsiliconps = 1;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coalps").innerHTML = coalps;
		document.getElementById("silicon").innerHTML = rsilicon;
		document.getElementById("siliconps").innerHTML = rsiliconps;
	}
	//3
	if(minelvl == 3){
		coal = coal + 3; 
		coalps = 3; 
		rsilicon = rsilicon + 2;
		rsiliconps = 2;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coalps").innerHTML = coalps;
		document.getElementById("silicon").innerHTML = silicon;
		document.getElementById("siliconps").innerHTML = siliconps;
	}
}

////mine 
var minelvl = 0;

//upgrade
function UpgradeMine(){
	//1
	if(minelvl == 0){
		if(cash >= 60){
		minelvl = minelvl + 1;
		cash = cash - 60;
		cost = " $200, 25 Coal"
		desc = "Let there be light."
		eff = "Coal/Second + 1, Coal/Click + 1. Unlocks resource Silicon."
		document.getElementById("cost").innerHTML = cost;
		document.getElementById("desc").innerHTML = desc;
		document.getElementById("eff").innerHTML = eff;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("cash").innerHTML = cash;
		document.getElementById("minelvl").innerHTML = minelvl;
		}
	}
	//2
	if(minelvl == 1){
		if(coal >= 25,cash >= 200){
		minelvl = minelvl + 1;
		cash = cash - 200;
		coal = coal - 25;
		cost = " $700, 100 Coal, 10 Refined Silicon"
		desc = " Along with silicon, you find another kind of metal, but you don't know what it is yet."
		eff = " Coal/Second + 1, Silicon/Second + 1, Silicon/Click + 1. Unlocks resource Copper."
		document.getElementById("cost").innerHTML = cost;
		document.getElementById("desc").innerHTML = desc;
		document.getElementById("eff").innerHTML = eff;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("cash").innerHTML = cash;
		document.getElementById("minelvl").innerHTML = minelvl;
		}
	}
	//3
	if(minelvl == 2){
		if(silicon >= 10,coal >= 100,cash >= 1000){
		minelvl = minelvl + 1;
		cash = cash - 1000;
		coal = coal - 100;
		silicon = silicon - 10;
		cost = " $6000"
		desc = " Copper, a relatively common, soft, maleable and conductive metal is quite valuable, as it's used to make effective wiring in the elctronics industry."
		eff = " Copper/Second + 1, Silicon/Second + 2, Silicon/Click + 1"
		document.getElementById("cost").innerHTML = cost;
		document.getElementById("desc").innerHTML = desc;
		document.getElementById("eff").innerHTML = eff;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("cash").innerHTML = cash;
		document.getElementById("minelvl").innerHTML = minelvl;
		}
	}
}

////smeltery 
var smeltlvl = 0;
//silicon
function RefineSilicon(){
	if(coal >= 30, rsilicon >= 20){
		rsilicon = rsilicon - 20;
		coal = coal - 30; 
		silicon = silicon + 1;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("silicon").innerHTML = rsilicon;
		document.getElementById("refinedsilicon").innerHTML = silicon;
	}
}
//upgrade 
function US(){
	if(smeltlvl == 0){
		if(cash >= 600){
			cash = cash - 600; 
			smeltlvl = smeltlvl + 1;
			scost = "$5,000"
			sdesc = "Make your mcguiver-esque smelting station easier to work and less prone to accidents."
			seff = "Can refine Copper." 
			document.getElementById("scost").innerHTML = scost;
			document.getElementById("sdesc").innerHTML = sdesc;
			document.getElementById("seff").innerHTML = seff;
			document.getElementById("cash").innerHTML = cash;
			document.getElementById("smeltlvl").innerHTML = smeltlvl;
			document.getElementById("siliconbutton").innerHTML = "Refine Silicon" 
			document.getElementById("siliconbuttoncost").innerHTML = "20 Raw Silicon, 30 Coal" 
		}
	}
}

////loop logic 
window.setInterval(function(){
	PS()
}, 1000); 

//Todo:
//Spritework
//Better buttons
//More resources
//balancing 
//Smeltery
//better descriptions
//saving 