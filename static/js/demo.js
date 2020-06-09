/**
 * Created by Administrator on 2017/3/4.
 */
$(document).ready(function(){
    $("body nav ul [li!='selected']").mouseenter(
       function(){
           $(this).addClass("selected");
       }
    ).mouseleave(
        function(){
            $(this).removeClass("selected");
        }
    );

});
