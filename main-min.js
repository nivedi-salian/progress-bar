var wi1 =10;
var wi2 =20;
var wi3 =30;

// increase progress bar
function add(clicked){ 
	if(document.getElementById("purpose").value === "0"){
		var bar = document.getElementById("bar1");
		// checks which add button
		if(clicked == "1"){
				wi1+=10;
           		increase(wi1);
		}
          else{ 	 	
				wi1+=20;
           		increase(wi1);
		}
		
	}
	else if(document.getElementById("purpose").value === "1"){
		var bar = document.getElementById("bar2");
		// checks which add button
		if(clicked == "1"){
		
				wi2+=10;
           		increase(wi2);
		}
          else{ 	 	
				wi2+=20;
           		increase(wi2);
		}
		
	}
	else{
		var bar = document.getElementById("bar3");
		// checks which add button
		if(clicked == "1"){
		
				wi3+=10;
           		increase(wi3);
		}
          else{ 	 	
				wi3+=20;
           		increase(wi3);
		}
		
	}
	// increase function 
	function increase(wi){
		if (wi>100){
			var curr = wi; //If greater than 100 save the value of wi in different variable
			bar.style.backgroundColor = "red"; //change background color
			bar.innerHTML = curr*1 + "%"; // prints ther percentage
			bar.style.width = 100 + "%"; // limits the width to 100%
		}
		else{
		bar.style.backgroundColor = "#0F6"; //change background color
		bar.innerHTML = wi*1 + "%"; // prints ther percentage
		bar.style.width = wi*1 + "%"; // sets the width
		}
		}
}


// Decrease the progress bar	
function minus(clicked){ 
if(document.getElementById("purpose").value === "0"){
		var bar = document.getElementById("bar1");
		if(clicked == "3"){
			if(wi1<=0){//checks if variable is negative
				wi1=0;
			}
			else{
			wi1-=10;
			}
		decrease(wi1);
		}
		else{
			if(wi1<=0){//checks if variable is negative
				wi1=0;
			}
			else{
			wi1-=20;
			}
		decrease(wi1);
		}
	}
	else if(document.getElementById("purpose").value === "1"){
		var bar = document.getElementById("bar2");
		if(clicked == "3"){
			if(wi2<=0){//checks if variable is negative
				wi2=0;
			}
			else{
			wi2-=10;
			}
			decrease(wi2);
		}
		else{
			if(wi2<=0){//checks if variable is negative
				wi2=0;
			}
			else{
			wi2-=20;
			}
		decrease(wi2);
		}
		
	}
	else{
		var bar = document.getElementById("bar3");
		if(clicked == "3"){
			if(wi3<=0){//checks if variable is negative
				wi3=0;
			}
			else{
			wi3-=10;
			}
		decrease(wi3);
		}
		else{
			if(wi3<=0){//checks if variable is negative
				wi3=0;
			}
			else{
			wi3-=20;
			}
		decrease(wi3);
		}
	}
	
	//Decrease function
	function decrease(wi){
			if (wi<=0){ 
				wi= 0;
				bar.style.width = 8*1 + "%";// if width is 0 or less than 0 sets width to 5%
				bar.style.backgroundColor = "#f5f5f5";//change background color	
				bar.style.border = "2px solid #e4e4e4";// sets the border
			}
			else if(wi<=100){
				bar.style.backgroundColor = "#0F6";	//change background color	
				bar.style.width = wi*1 + "%";//sets the width
			}
			else{
				bar.style.width = 100 + "%";	//sets the width
			}
			bar.innerHTML = wi*1 + "%"; //prints the width
		}
}

	
	
	
