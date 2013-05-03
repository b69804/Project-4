
// Matthew Ashton
// SDI 1304
// Project 4

var myLibrary = function(){
    
    // Turn String into Number
    var stringIntoNumber = function(str){
        return parseFloat(str)
    }
    
    // Email Pattern check
    var checkEmailAddress = function(str){
        if (str = "/^\(?(\d{})\)?[@ ]?(\d{})[. ]?(\d{})$/"){
            return true;
        } else {
            return false;
            }
    }
    
    // Check Phone Number Pattern
    var checkPhoneNumber = function(str){
        if (str = "/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/"){
            return true;
        } else {
            return false;
            }
    }
        
    // Title Case a String
       var titleString = function(str){
        return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    // Round numbers to specific
    var roundNumber = function(num, val){
        return num.toFixed(val);
    }
    
    // Adding numbers in an array
    var arrayAdding = function (){
    var total = 0;
    for(var i = 0; i < array.length; i++){
    var val = parseInt(array[i]);
        if(!isNaN(val)){
        total += val;
        }
    }
 return total;
}
   
    return {
        "stringIntoNumber": stringIntoNumber,
        "checkEmailAddress": checkEmailAddress,
        "checkPhoneNumber": checkPhoneNumber,
        "titleString": titleString,
        "roundNumber": roundNumber,
        "arrayAdding": arrayAdding,
    }
}

var newLib = new myLibrary();
var array = [3, 4, "yup", 5];


console.log( + newLib.stringIntoNumber("42"));
console.log("My Name is " + newLib.titleString("matt ashton"));
console.log("Is 239-691-3090 a phone number? "+ newLib.checkPhoneNumber("239-691-3090"));
console.log("Is mashton237@fullsail.com an email address? " + newLib.checkEmailAddress("mashton237@fullsail.com"));
console.log( + newLib.roundNumber(3.145653, 2));
console.log( + newLib.arrayAdding([array]));


