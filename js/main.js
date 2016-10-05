function submitForm(){
  //clear errors div and check for new errors. Display errors or clear form if correct
  var first=document.getElementById("fname").value;
  var last=document.getElementById("lname").value;
  var age=document.getElementById("age").value;
  var col=document.getElementById("color").value;
  
  if(first==null || first==""){
    //add an error to errors div
  }
  
  if(last==null || last==""){
    //add an error to errors div
  }
  
  if(age==null || age==""){
    
  }
  
  if(age<0){
    //error about negative age
  }
  
  if(col==null || col==""){
    //add error to errors div
  }
}