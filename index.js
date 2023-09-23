let userName =  prompt('Who is there?');
if(userName == 'Admin')  {
   let password = prompt('Password?')
   if (password=='TheMaster'){
    alert('Welcome!');
   }
   else if (password){
    alert('Wrong Password');
   }
   else {
    alert('Canceled');
   }
}
else if (userName){
     alert(`I dont you know`);
 } 
else {
     alert('Canceled');
 }