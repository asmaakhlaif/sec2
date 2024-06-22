 var title = "";
 title += "<h2> Favorite Restaurant </h2>";
 document.querySelector ("div").innerHTML = title;

 var index=["almedan" , "ward" , "solitaire"];
 var result="";

 for(var i=0 ; i<3 ; i++){
    result+= "<li>" + index[i] + "</li>";

 }

 document.querySelector ("ul").innerHTML = result;