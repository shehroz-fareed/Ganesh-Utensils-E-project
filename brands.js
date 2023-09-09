// JavaScript Documentvar a;
function brnd(a)
{
if (a=="- Select Brand -")
{
document.getElementById("modelcount").innerHTML="";
document.getElementById("model").options.length=1;
document.getElementById("model").selectedIndex = 0;
}
if (a=="Hawkins")
{
document.getElementById("modelcount").innerHTML="- (in this: 7)";	
document.compare.model.options.length=10;
document.compare.model.options[1].text="Pressure Cooker"; 
document.compare.model.options[2].text="Cutlery";
document.compare.model.options[3].text="Fry pan";
document.compare.model.options[4].text="Wok";
document.compare.model.options[5].text="Deep fry pan";
document.compare.model.options[6].text="Tawa"; 
document.compare.model.options[7].text="Cook Bowl";

}
if (a=="Rosle")
{
document.getElementById("modelcount").innerHTML="- (in this: 7)";	
document.compare.model.options.length=10;
document.compare.model.options[1].text="Cutlery"; 
document.compare.model.options[2].text="Fry Pan";
document.compare.model.options[3].text="Wok"; 
document.compare.model.options[4].text="Pressure Cooker";
document.compare.model.options[5].text="Cookware set ";
document.compare.model.options[6].text="Deep Frypan";
document.compare.model.options[7].text="Cook Bowl";


}
if (a=="Kyocera")
{
document.getElementById("modelcount").innerHTML="- (in this:7)";	
document.compare.model.options.length=10;
document.compare.model.options[1].text="Cookware"; 
document.compare.model.options[2].text="Cutlery";
document.compare.model.options[3].text="Pressure cooker";
document.compare.model.options[4].text="Fry Pan";
document.compare.model.options[5].text="Wok";
document.compare.model.options[6].text="Deep Fry Pan";
document.compare.model.options[7].text="Cook Bowl";

}
if (a=="OXO")
{
document.getElementById("modelcount").innerHTML="- (in this: 7)";	
document.compare.model.options.length=10;
document.compare.model.options[1].text="Cookware"; 
document.compare.model.options[2].text="Cutlery";
document.compare.model.options[3].text="Pressure cooker";
document.compare.model.options[4].text="Fry Pan";
document.compare.model.options[5].text="Wok";
document.compare.model.options[6].text="Deep Fry Pan";
document.compare.model.options[7].text="Cook Bowl";

}
if (a=="Sonex")
{
document.getElementById("modelcount").innerHTML="- (in this:7)";	
document.compare.model.options[1].text="Cookware"; 
document.compare.model.options[2].text="Cutlery";
document.compare.model.options[3].text="Pressure cooker";
document.compare.model.options[4].text="Fry Pan";
document.compare.model.options[5].text="Wok";
document.compare.model.options[6].text="Deep Fry Pan";
document.compare.model.options[7].text="Cook Bowl";

}
if (a=="Prestige")
{
document.compare.model.options[1].text="Cookware"; 
document.compare.model.options[2].text="Cutlery";
document.compare.model.options[3].text="Pressure cooker";
document.compare.model.options[4].text="Fry Pan";
document.compare.model.options[5].text="Wok";
document.compare.model.options[6].text="Deep Fry Pan";
document.compare.model.options[7].text="Cook Bowl";
}

}

function clr()
{
	var c=document.getElementById("content").src.value;
	document.getElementById("content").src="";
	document.getElementById("model").selectedIndex = 0;
}
function formReset()
{
document.getElementById("compare").reset();
document.getElementById("content").src="";
document.getElementById("modelcount").innerHTML="";
document.getElementById("model").options.length=1;
document.getElementById("model").selectedIndex = 0;
}
function dropinvalid()
{
document.getElementById("model").options.length=1;
document.getElementById("model").selectedIndex = 0;
}