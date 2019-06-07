$(function(){
	dataCommonInit();
	eventCommonInit();
});

function dataCommonInit(){
	$("#navigationBar").load("../html/header.html",function(e){
	});
	$("#buttomBar").load("../html/footer.html",function(e){
	});
}
/*-----------------------鼠标悬停在导航栏出现二级菜单开始-------------------------*/
/*function show(obj,id) { 
var objDiv = $("#"+id+""); 
$(objDiv).css("display","block"); 
$(objDiv).css("left", event.clientX); 
$(objDiv).css("top", event.clientY + 10); 
} 
function hide(obj,id) { 
var objDiv = $("#"+id+""); 
$(objDiv).css("display", "none"); 
} */
/*function display() { document.getElementById("mydiv1").style.display = "block"; }

function disappear() { document.getElementById("mydiv1").style.display = "none"; }
function display() { document.getElementById("mydiv2").style.display = "block"; }

function disappear() { document.getElementById("mydiv2").style.display = "none"; }*/
/*-----------------------鼠标悬停在导航栏出现二级菜单结束-------------------------*/