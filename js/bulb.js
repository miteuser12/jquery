$(function(){
  var flag = true;
    $("#onoff").click(function(){
       if(flag){
       var imgname = "images/off.jpg"
      flag = false;
        }else{
    
       var imgname = "images/on.jpg"
       flag = true;
    } 
       $("img").attr("src",imgname);    
    });  
    
    $("#btnhide").click(function(){
      $("#randomtext").hide();      
    });
    
    $("#btnshow").click(function(){
      $("#randomtext").show();      
    });
     $("#fadeIn").click(function(){
      $("#box").fadeIn();      
    });
     $("#fadeOut").click(function(){
      $("#box").fadeOut();      
    });
    $("#btntoggle").click(function(){
      $("#box").toggle();      
    });
});