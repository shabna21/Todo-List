function checkboxes()
{
 var inputElems = document.getElementsByTagName("input"),
  count = 0;
for (var i=0; i<inputElems.length; i++) {       
    if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){    
       count++;
       var cnt=count;
      }         
}
if(cnt==95){
alert("You have successfully completed 5 tasks!!");
}

}