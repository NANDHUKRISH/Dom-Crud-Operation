var selectedRow=null;
var submit=document.querySelector(".submitbutton");
submit.addEventListener("click", function(){
    displaydetails(); 
    document.querySelector(".container").style.display="none";
    document.querySelector(".table").style.filter="none";
});

function displaydetails()
{   var tablerow;
    var fname =document.querySelector("#firstname").value;
    var lname =document.querySelector("#lastname").value;
    var Rollnumber =document.querySelector("#rollnumber").value;
    var Email =document.querySelector("#email").value;

    if(!fname || !lname || !Rollnumber || !Email)
    {  
         alert("MANDATORY TO FILL ALL THE BOXES");
         return  }
     
         
     var tablebody = document.querySelector("#table-body");
     if(selectedRow==null){
        tablerow =
        `<tr>
         <td>${fname}</td>
         <td>${lname}</td>
         <td>${Rollnumber}</td>
         <td>${Email}</td>
         <td><button class="Edit-button" onclick="Edit(this)">EDIT</button></td>
         <td><button class="Delete-button"  onclick="Delete(this)">DELETE</button></td>
         </tr>`
         tablebody.innerHTML +=tablerow; 
         selectedRow=null;
     }else{
        selectedRow.children[0].textContent=fname;
        selectedRow.children[1].textContent=lname;
        selectedRow.children[2].textContent=Rollnumber;
        selectedRow.children[3].textContent=Email;
        selectedRow=null;
     }
      
       document.querySelector(".formbox").reset();
  }

// ADD STUDENT
  let AddButton=document.querySelector(".Add-sudent-Button");
  AddButton.addEventListener("click",()=>{
    console.log("add");
    document.querySelector(".container").style.display="block";
    document.querySelector(".table").style.filter="blur(5px)";
  })


// DElete function
  function Delete(e){
    //console.log(e.parentElement.parentElement);
    e.parentElement.parentElement.remove();
  }
// Edit Function
  function Edit(e){
        selectedRow=e.parentElement.parentElement;
        document.querySelector("#firstname").value=selectedRow.children[0].textContent;
        document.querySelector("#lastname").value=selectedRow.children[1].textContent;
        document.querySelector("#rollnumber").value=selectedRow.children[2].textContent;
        document.querySelector("#email").value=selectedRow.children[3].textContent;
    
        document.querySelector(".container").style.display="block";
  }
  // cancel Button
  function CancelButton(){
    document.querySelector(".container").style.display="none";
    document.querySelector(".table").style.filter="none";
  }