function init(){
           
            fieldFocus();
            bindEvents();
        }
        // Arrow Functions (ES6)
        const properCase=(str)=>str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
        const fieldFocus = ()=>document.getElementById("fname").focus();
        /*function fieldFocus(){
            document.getElementById("fname").focus();
        }*/
        function validate(){
           var isValid = true; 
           var firstName =  document.getElementById("fname").value;
           for(let i =0; i<firstName.length; i++){
               if(!((firstName.charAt(i)>='A' && firstName<='Z') || (firstName.charAt(i)>='a' && firstName<='z'))){
                        isValid = false;
                        break;
               }
           }
            if(!isValid){
                document.getElementById("fnameerror").innerHTML="Only A-Z Allowed";
            }
            else{
                document.getElementById("fnameerror").innerHTML="";
            }
        }
        function bindEvents(){
            document.getElementById("fname").addEventListener("keyup",validate);
            document.getElementById("greet").addEventListener("click",sayWelcome);
            document.getElementById("clear").addEventListener("click",clearAll);
        }

        window.addEventListener("load",init);
        //window.onload=init;
        // Logic
        function sayWelcome(){
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        document.getElementById("result").innerHTML=properCase(firstName) + " "+properCase(lastName);
        }
        function clearAll(){
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("result").innerHTML = "[ResultComeHere]";
            fieldFocus();
        }
