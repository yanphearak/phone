$(document).ready(function(){
    $(".submain").mouseover(function(){
       $(this).find(".sub-category").show();
    })
    $(".submain").mouseout(function(){
        $(this).find(".sub-category").hide();
    })
})