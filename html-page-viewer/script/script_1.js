
	
function fuck(){
     if(   document.getElementById("a").value==""){
    	
    	alert("Παρακαλώ συμπληρωστε ολους τουσ ορους της εξισωσης!!!");
    }
	
}

function solve(){
	
      
	
	
	var a,b,c, Diakrinousa,x1,x2 ; 
	
	var a= document.getElementById("a").value;
	var b= document.getElementById("b").value;
	var c= document.getElementById("c").value;
	
	
	document.getElementById("equation").innerHTML=a+"x²+"+b+"x+"+c;
	
    if(    (document.getElementById("a").value=="")
    	 ||(document.getElementById("b").value=="")
         ||(document.getElementById("c").value=="")
    ){
    	
    	alert("Παρακαλώ συμπληρωστε ολους τουσ ορους της εξισωσης!!!");
    }else {
	 
    	
		
		Diakrinousa=(b*b)-(4*a*c);
	 
	 console.log("Diakrinousa="+ Diakrinousa);
	  
	//SOLVE OF EQUATION!!!
	 if(a==0){
		 
		 if (c >0){
		     	 
			 document.getElementById("equation").innerHTML=b+"x+"+c+"=0"; 
			 
		 }else if (c<0){
			 document.getElementById("equation").innerHTML=b+"x-"+ Math.abs(c) +"=0";
		 }else{
			 document.getElementById("equation").innerHTML=b+"x=0";
		 }
		 
		 
		 x1=b/-c;
		 document.getElementById("x1").innerHTML =x1 ;
         document.getElementById("x2").innerHTML =x1;
	  }else{ 
		  
		  document.getElementById("hiddenText").innerHTML =Diakrinousa ;     
		  document.getElementById("equation").innerHTML=a+"x²+"+b+"x+"+c+"=0";
		  
	          if (Diakrinousa>0){
		 
		            x1= ((-1*b) + Math.sqrt(Diakrinousa))/(2*a);
		            x2= ((-1*b) - Math.sqrt(Diakrinousa))/(2*a);
		            console.log("x1="+x1);
			        console.log("x2="+x2);
			        document.getElementById("x1").innerHTML =x1 ;
			        document.getElementById("x2").innerHTML =x2;
			
	       }else if (Diakrinousa==0){
		            x1= (-1*b)/(2*a);
                    console.log("The double root of the equation is "+x1)	;
                    document.getElementById("x1").innerHTML =x1 ;
    	            document.getElementById("x2").innerHTML =x1;
         
         
	       } else{
		 
		           console.log("Your equation is impossible in the sumation of R");
		           document.getElementById("x1").innerHTML ="ΑΔΥΝΑΤΗ ΣΤΟ R" ;
		           document.getElementById("x2").innerHTML ="ΑΔΥΝΑΤΗ ΣΤΟ R";
	       }
	      }
	 //=======================================================================================
	 
	 
    }
    
}


function isNumber(evt,id) {
	document.getElementById(id).innerHTML ="";
	evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //document.getElementById("test").innerHTML=charCode;
    if ( (charCode>31 &&charCode<42) || charCode>57 ) {
        
    	 document.getElementById(id).innerHTML ="παρακαλω εισαγετε μονο αριθμους!";
    	return false;
        
    }
    return true;
}
	 

    
    
    
    
    
    
    
    
    


