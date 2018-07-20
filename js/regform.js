$(function(){
    
  if(localStorage.getItem("students") == null){
     localStorage.setItem("students" ,JSON.stringify([]));
  }  
  showRegistredStudents(); 
    
    
   dialog = $("#dialog").dialog({
    autoOpen: false,
    height:500,
    width:500,
    modal:true
   }); 
    
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
    
    $("#dob").datepicker({
       changeYear : true,
       changeMonth : true,
       maxDate : "0d" 
        
        
    });
    
   
   $(".submit").click(function(){
       var isValid = $("#regform").validate({
    rules : {
         
         usn : {
             required:true,
             minlength : 10,
             maxlength : 10
          }, 
         name : {
             required : true
        },
        email : {
             required : true
        },
        mobile : {
             required : true,
            minlength : 10,
             maxlength : 10
        },
       course : {
             required : true
        }, 
         cgpa : {
             required : true
        } 
     },  
      messages:{
          usn:{
              required : "USN can't be empty",
              minlength : "USN must be 10 characters",
              maxlength : "USN must have only 10 characters"
          },
        name : {
                          
          required : "Name can't be empty"                
      }, 
       email : {
            required : "Email can't be empty"
             }, 
                          
       mobile : {
                          
            required : "Mobile number is required",
            minlength : "Mobile number must be 10 digits",
              maxlength : "Number must have only 10 digits"
         
        },
     course : {
              required : "please select your branch "           
             },
          cgpa : {
              required : "CGPA is required"           
             }
    }
   }).form();
  if(isValid){
   var usn = $("#usn").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var course = $("#course").val();
    var cgpa = $("#cgpa").val();
      var dob = $("#dob").val();
    $(".reset").click();
    
    student = {
        "usn" : usn,
         "name" : name,
         "email" : email,
         "mobile" : mobile,
         "course" : course,
         "cgpa" : cgpa,
        "dob" : dob
       }
      
   var students = getDataFromLocalStorage();
   students.push(student);
    updateLocalStorageData(students);
      showRegistredStudents();
      dialog.dialog("close");
      return false;
}
       
   });   

/*end registred form validation */
    
   function showRegistredStudents(){
       var students = getDataFromLocalStorage();
       var data ="";
       
       if(students.length == 0){
          data = "<h3>No students registred yet..</h3>" 
      }else{
          data += "<table id='regstudents'><thead><tr>";
          data += "<th>#</th>";
          data += "<th>USN</th>";
          data += "<th>Name</th>";
          data += "<th>Email</th>";
          data += "<th>Mobile</th>";
          data += "<th>Course</th>";
          data += "<th>CGPA</th>";
          data += "<th>DOB</th>";
          data += "</tr></thead>";
          
          for(var i=0; i < students.length; i++){
           var j = i+1;
              data += "<tr>";
              data += "<td>"+j+"</td>";
              data += "<td>"+students[i].usn+"</td>";
              data += "<td>"+students[i].name+"</td>";
              data += "<td>"+students[i].email+"</td>";
              data += "<td>"+students[i].mobile+"</td>";
              data += "<td>"+students[i].course+"</td>";
              data += "<td>"+students[i].cgpa+"</td>";
              data += "<td>"+students[i].dob+"</td>";
              data += "</tr>";
                       }
          
           data += "</table>";
     }
       $("#content").html(data);
       $("#regstudents").dataTable({
           "pageLength" : 2
       });
   
   } 
     function getDataFromLocalStorage(){
        var students = JSON.parse(localStorage.getItem("students"));
        return students;
    }
    
   function updateLocalStorageData(updatedStudentsArr){
       localStorage.setItem("students", JSON.stringify(updatedStudentsArr));
   } 
   
    
    });