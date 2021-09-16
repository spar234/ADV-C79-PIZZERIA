menu_list_array = menu_list_array = ["Veg Margherita Pizza",
"Chicken Tandoori Pizza",
"Veg Supreme Pizza",
"Panner Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravaganza Pizza",];

function getmenu(){
var htmldata;
htmldata="ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.lenght;i++){
    htmldata=htmldata+ '<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTM = htmldat;
var item=document.getElementById("add_item").value;

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
     
    htmldata=htmldata+'<div class="card">'
      +'<img src="images/pizzaImg.png"/>'
      + menu_list_array[i] + '</div>'
}
   htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").u=innerHTM = htmldata;

}

function add_top(){
    var item=document.getElementById("add_iteam").value;
    menu_list_array.push(item)
    add_item();
}
