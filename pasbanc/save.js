 /*let the calculation begin*/
 //duration is less than 3 months
 
    function calculate(){

   let inputType = document.getElementById("add_type").value;
    let duration = document.getElementById("duration").value;
    let rent = parseFloat(document.getElementById("amount").value);
    let dropdown = document.getElementById("dropDown").value;
    let leastDuration = parseFloat(duration);
    console.log(inputType);
    console.log(rent);
    console.log(typeof rent);

    console.log(leastDuration);
    console.log(dropdown);
//console.log(typeof leastDuration);
    console.log(leastDuration);
    let monthlyRate = (5/300);
   if(inputType === "Daily"  ){
   	     let n = (leastDuration * 1);
     console.log(n);

   	if(dropdown === "Days" && n < 30 ){
     //interest rate per period
    let i = (monthlyRate/30);
    console.log(i);
    let rounded = (n*i);
   let final_value = (rounded)*(n*rent) + (rent*n);
   console.log(final_value);
       const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " days.";
       document.getElementById("container-ans").appendChild(paragraph);
   };
		//if(leastDuration === 30 && inputType === "Daily" ){
         // paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " 1 month";
   
     // }
    if(dropdown === "Weeks" && n < 4){
    let i = (monthlyRate/4);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent*7.5);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " weeks.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
    if(dropdown === "Months" && n < 12){
    let i = (monthlyRate);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent*30);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " months.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
     if(dropdown === "Years"){
    let i = (monthlyRate*12);
    console.log(i);
     let rounded = (n*i);
     console.log(rounded);
     let newRent = (rent*365);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " years.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
};
   if(inputType === "Weekly"){
   	   let n = (leastDuration * 1);
   	if(dropdown === "Days" && n < 30 ){
     //interest rate per period
    let i = (monthlyRate/30);
    console.log(i);
    let rounded = (n*i);
     let newRent = (rent/7.5);
   let final_value = (rounded)*(n*newRent) + (newRent*n);
   console.log(final_value);
       const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " days.";
       document.getElementById("container-ans").appendChild(paragraph);
   };
    if(dropdown === "Weeks" && n < 4){
    let i = (monthlyRate/4);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent*1);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " weeks.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
     if(dropdown === "Months" && n < 12){
    let i = (monthlyRate);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent*4);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " months.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
     if(dropdown === "Years"){
    let i = (monthlyRate*12);
    console.log(i);
     let rounded = (n*i);
     console.log(rounded);
     let newRent = (rent*52);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " years.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
   

};
//this is the end of saving weekly
   if(inputType === "Monthly"){
   	 let n = (leastDuration * 1);

    if(dropdown === "Days" && n < 30 ){
     //interest rate per period
    let i = (monthlyRate/30);
    console.log(i);
    let rounded = (n*i);
    let newRent = (rent/30);
   let final_value = (rounded)*(n*newRent) + (newRent*n);
   console.log(final_value);
       const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " days.";
       document.getElementById("container-ans").appendChild(paragraph);
   }
    if(dropdown === "Weeks" && n < 4){
    let i = (monthlyRate/4);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent/4);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " weeks.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
     if(dropdown === "Months" && n < 12){
    let i = (monthlyRate);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " months.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
      if(dropdown === "Years"){
    let i = (monthlyRate*12);
    console.log(i);
     let rounded = (n*i);
     console.log(rounded);
     let newRent = (rent*12);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " years.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
   };//end of saving monthly
    
   if(inputType === "Annually"){
 let n = (leastDuration * 1);

    if(dropdown === "Days" && n < 30 ){
     //interest rate per period
    let i = (monthlyRate/30);
    console.log(i);
    let rounded = (n*i);
    let newRent = (rent/365);
   let final_value = (rounded)*(n*newRent) + (newRent*n);
   console.log(final_value);
       const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " days.";
       document.getElementById("container-ans").appendChild(paragraph);
   }
      if(dropdown === "Weeks" && n < 4){
    let i = (monthlyRate/4);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent/52);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " weeks.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
     if(dropdown === "Months" && n < 12){
    let i = (monthlyRate);
    console.log(i);
     let rounded = (n*i);
     let newRent = (rent/12);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " months.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
      if(dropdown === "Years"){
    let i = (monthlyRate*12);
    console.log(i);
     let rounded = (n*i);
     console.log(rounded);
     let newRent = (rent);
    let final_value = (rounded)*(n*newRent) + (newRent*n);
      console.log(final_value);
   const paragraph = document.createElement('p');
       paragraph.textContent = "Your new account balance is Ugx" + final_value + " after " + leastDuration + " years.";
       document.getElementById("container-ans").appendChild(paragraph);

    }
   }

























};//end of function

document.getElementById("calc").addEventListener('click',calculate);
