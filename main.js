var names= [] ;
function submit() {
 var namegg= document.getElementById("name3").value ; 
 names.push(namegg)
 document.getElementById("shower").innerHTML= names;    
}