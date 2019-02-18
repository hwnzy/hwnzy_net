/**
 * Created by Administrator on 2017/3/5.
 */
window.onload = function(){
    var xmlDoc;
    loadXMLDoc("sharing.xml");
    xmlDoc = xmlhttp.responseXML;
    for(var num1 = 0; num1 < 16; num1++){

        for(var num2 = 0; num2 < 3; num2++){
            document.getElementById("role" + num1).innerHTML = xmlDoc.getElementsByTagName("NAME")[num1].childNodes[0].nodeValue;
            document.getElementById("role" + num1 + "p" + num2).innerHTML = xmlDoc.getElementsByTagName("PARAGRAPH" + num2)[num1].childNodes[0].nodeValue;
        }

    }
}