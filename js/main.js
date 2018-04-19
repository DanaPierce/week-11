//#1
var arr = [2,3,1,4,12,25,46];

function even(a){
  return a.filter(function(val){return val%2===0})
}

alert(even(arr));


//#2
for( var i=1; i<21; i++ ) {
    if( (i%3) === 0 && (i%5) === 0 ) {
        console.log( "FizzBuzz" );
    }else if( (i%3) === 0 ) {
        console.log( "Fizz" );
    }else if( (i%5) === 0 ) {
        console.log( "Buzz" );
    }else{
        console.log( i );
    }
}

if ( i % 5 ===0 && i % 3 ===0) {
console.log("FizzBuzz");

}

else if ( i % 3 === 0 ) { 
console.log("Fizz");
}

else if ( i % 5 === 0) {
console.log("Buzz");

}

else {
console.log(i);
}


//#3
var txt = "My name is Dana and I like cats!";
document.getElementById("charNum").innerHTML = txt.length;


//#4
last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };



var pets = ["dog", "fish", "cat"];
document.getElementById("pets").innerHTML = pets[2]; 

//#5
  function alphabeticalOrder (string){
      string = string.toString();
      console.log(string.toLowerCase().split("").sort().join(""));
    
    }
    alphabeticalOrder ("Apples are your friend");


//#6
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("i like jon bon jovi and am also sleep deprived!"));
















