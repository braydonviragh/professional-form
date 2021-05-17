window.onload = runScript;

function runScript() { 
    var interests = ['Project Management', 'Development', 'Graphic design', 'Digital marketing'];
    var dropdown = document.getElementById('dropdown');
    var menu = "";
    var myForm = document.forms.email__form;
    var button = document.getElementById('submitBtn');
    var underBar = document.getElementById('underBar');



    function dropDownMenu() { 
        for(let x = 0; x < interests.length; x++) { 
            var opt = document.createElement('option');
            opt.innerHTML = interests[x];
            opt.value = interests[x];
            dropdown.appendChild(opt);
        }
    }

    function formValidation() { 
       var email = myForm.email;
       var interests = myForm.interests;
       var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

       if(email.value === "" || email.value === null) { 
           var msg = document.getElementById('errorMsg');
           msg.classList.remove('hidden');
           email.style.border = ' 3px solid red';
           return false;
       }

       if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) === false ) { 
        var msg = document.getElementById('errorMsg');
        msg.classList.remove('hidden');
        email.style.border = ' 3px solid red';
           return false;
       }

       console.log(email.value)
       console.log(interests.value)

       button.innerHTML = "Submitting..."
       
       
       setTimeout(function(){

        //formSection.classList.add('hidden');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 ) {
                if (xhr.status === 200) {
                    underBar.innerHTML = xhr.responseText;
                } else {
                    alert("Connection was unsuccessful");
                }//Ensures connections will go through - if not - welcomed with an error
            }
        }
        xhr.open("GET", "js/thankYouMsg.txt", true);
        xhr.send(null);

           
        
         
    
        }, 2000);

       return false;
    }


    dropDownMenu();
    myForm.onsubmit = formValidation;
}
