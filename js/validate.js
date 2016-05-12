$(document). ready( function(){

	console.log("validator initated");

	var fn;
	var ln;
	var email;
	var isStudent;

	$("#volButt").click(function(){



		fn_var = $("#fn").val();
		ln_var = $("#ln").val();
		ln_var = $("#email").val();
		ln_var = $("#isStudent").val();



		console.log( fn_var );
		console.log( ln_var );
		console.log( email );
		console.log( isStudent);
/*
1 Listen for a click of button
2 Capture values of inputs
3 Send data to a validate function
4 Identify datatype
5 Validate for malicious code
6 if email, then check for @ and . */

		if( fn_var == ""){
			console.log("First Name is required");
			$("#fn").css("border", "solid 3px red");
		}else{
			console.log("First name OK");
			// $("#fn").css("border", "solid 3px green");
			validate( "normalString", fn_var ); //validate normal string, fn_var is the variable to validate
		}

		if( ln_var == ""){
			console.log("Last Name is required");
			$("#ln").css("border", "solid 3px red");
		}else{
			console.log("Last name OK");
			// $("#ln").css("border", "solid 3px green");
			validate( "normalString", ln_var ); //validate normal string, fn_var is the variable to validate
		
		}


	}); //end of when click function

console.log("End of Click function")

function validate( inputType, userInput ){

	switch(inputType){ //evaluates a type of information
		
		case 'normalString' :
				console.log("validate normal string");
				console.log( inputType + " " + userInput);
				cleanUp( userInput );
				console.log("CLEAN UP RESULT:")
				console.log( userInput)

			break; //end of case
		
		case 'emailAddress':
				console.log("validate normal string");
				console.log( inputType + " " + userInput);
			break;
		
		case 'password':
				console.log("validate normal string");
				console.log( inputType + " " + userInput);
			break;
	}

}

function cleanUp( userInput ){
	var temp = userInput;
		temp = temp.replace("<","&lt;");
		temp = temp.replace(">","&gt;");
		return temp;

	console.log( temp.indexOf("<") )
}

});