function id(idd){
    return document.getElementById(idd);
}
var Bookmarks = {
    "All" : ["W3Schools,http://www.w3schools.com,Developement","Cssreference,http://cssreference.io,Design","Google Play,http://play.google.com,Mobile apps"],
    "Development" : ["W3Schools,http://www.w3schools.com"],
    "Design" : ["Cssreference,http://cssreference.io"],
    "Moblie apps" : ["Google Play,http://play.google.com"]
}
var jsonKeys;
function getKey(){
    jsonKeys = Object.keys(Bookmarks);
}
function DisplayCategories(a,b){
    getKey();
    id(a).innerHTML = "";
    for(var i = 0; i < jsonKeys.length;i++){
        var P = document.createElement(b);
        P.innerText = jsonKeys[i];
        if(a == "CatDetails"){
            P.onclick = UrlDisplay;
        }
        if(a == "CatList"){
            P.value = jsonKeys[i];
        }
        id(a).appendChild(P);
    }
}
var A;
function animateout(){
    id(A).classList.toggle('Ani');     
}
function animate(a){
    A = a;
    var i = id(a).classList.toggle('Ani');
    setTimeout(animateout,1000);
}
function UrlDisplay(){
    id("BottomRight").innerText = "";
    var Text = this.innerText;
    var UrlNo = Bookmarks[Text].length;
    for(var i = 0; i < UrlNo; i++){
        var NU = Bookmarks[Text][i].split(",");
        var div = document.createElement('div');
        div.setAttribute('class','Urldiv');
        for(var j = 0; j < NU.length; j++){
            if(j == 1){
                var p = document.createElement('a');
                p.href = NU[j];
            }
            else{
                var p = document.createElement('h4');
            }
            p.innerText = NU[j];
            div.appendChild(p);
        }
        
        id("BottomRight").appendChild(div);
    }
    animate("BottomRight");
}
function Addcategory(c,e){
    var b = id(e).classList.toggle('catip');
    if(b){
        id(c).style.animation = 'Addpagein 1s 1 running forwards';
    }
    else{
        id(c).style.animation = 'Addpageout 1s 1 running forwards';
    }
}
function check(){
    id('BottomRight').innerHTML = '';
    var input = id('searchBox').value;
	for(var i = 0; i < Bookmarks.All.length; i++){
        var array = Bookmarks.All[i].split(',');
		var arraysplit = '';
		for(var j = 0; j < input.length; j++){
			arraysplit += array[0].charAt(j);
			if(input == arraysplit){
				id('BottomRight').innerHTML += "<div class = 'Urldiv'>"+Bookmarks.All[i]+"</div>";
			}
		}
	}
}
function out(){
    id('searchBox').value = '';
}
function Addcate(k){
    if(k.key == 'Enter'){
        var add = id('addcategory').value;
        Bookmarks[add] = [];
        DisplayCategories('CatDetails','p');
        Addcategory('addcategory','addcategory');
    }
    
}
function AddUrl(){
    DisplayCategories('CatList','option');
    Addcategory('Form','FormDiv');
}
function New(){
    var Name = id('U').value;
    var Url = id('Uu').value;
    var Opt = id('CatList').value;
    Bookmarks.All.push(Name+","+Url+","+Opt);
    Bookmarks[Opt].push(Name+","+Url);
    AddUrl();
}
function Gridview(){
    var value = id("BottomRight").classList.toggle('BottomRight');    
    if(value)
        id('Grid').innerHTML = "<i class='material-icons'>list</i>";
    else    
        id('Grid').innerHTML = "<i class='material-icons'>grid_on</i>";
}
function Setting(){
    // id('Settings_Div').classList.toggle('Setting');
    id('Color').classList.toggle('Settings_Color');
    id('Font').classList.toggle('Settings_Font');
    id('Theme').classList.toggle('Settings_Theme');
}
function Settingout(){
    Setting();
}
