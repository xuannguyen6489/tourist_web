$(document).ready(function(){
	$("ul li a.hey").click(function(){
		li=$(this).parent();
		if(li.hasClass("selected")){//check class Select live or die
			li.removeClass("selected");	 
		}else{
		li.addClass("selected").siblings().removeClass("selected");//tim cac cac the hang xom
		}
		return false;  //vo hieu hoa tra ve href=''
	})	
}) 