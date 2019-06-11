/**
 * Created by Administrator on 2017/3/5.
 */
var xmlhttp;

function loadXMLDoc(url){
    if(window.XMLHttpRequest){
        //code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        //code for IE6 IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(xmlhttp != null){
        xmlhttp.onreadystatechange = stateChange;
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML;
    }
    else{
        alert("对不起，你的浏览器版本过低，不支持XMLHTTP!")
    }

}

function stateChange(){
    if(xmlhttp.readyState == 4){
        //4 = "loaded"
        if(xmlhttp.status == 200){
            //200 = "OK"
            document.getElementById("show1").innerHTML = xmlhttp.status;
            document.getElementById("show2").innerHTML = xmlhttp.statusText;
            document.getElementById("show3").innerHTML = xmlhttp.responseText
         }
        else{
            alert("对不起，接收XML数据出错！ERROR:" + xmlhttp.statusText);
        }
    }
}