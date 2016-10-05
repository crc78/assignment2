function submitForm(){
  var inputs = document.forms.theForm.getElementsByTagName("input");
  var errors = [];
  
  for(var i=0; i<inputs.length; i++){
	  if(inputs[i].value == "" || inputs[i].value == null){
		errors.push("Error: "+inputs[i].name+" can't be blank.<br>");
	  }
	  else if(inputs[i].name == "age" && inputs[i].value<0){
		  errors.push("Error: "+inputs[i].name+" must be a positive number.<br>");
	  }
  }
  
  if(errors.length == 0){
	  document.getElementById("errorsDiv").innerHTML = "";
	  document.getElementById("submitButton").style.display = 'none';
	  document.getElementById("formDiv").innerHTML = "<span class='success'>Form submssion was a success!</span>";
  }
  else{
	  document.getElementById("errorsDiv").innerHTML = errors.join("");
  }
}