
// Matthew Ashton
// SDI 1304
// Project 4

var myLibrary = function(){
    
    // Check Numeric Function
    var checkNumeric = function(val){
        
        if (isNan(val)){
            return false;
        } else {
            return true;
        }
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

    return {
        "checkNumeric": checkNumeric,
        "checkEmailAddress": checkEmailAddress,
        "checkPhoneNumber": checkPhoneNumber,
        "titleString": titleString
    }
}

var newLib = new myLibrary();

var myString = "123-456";


console.log("My Name is " + newLib.titleString("matt ashton"));
console.log("Is 239-691-3090 a phone number? "+ newLib.checkPhoneNumber("239-691-3090"));
console.log("Is mashton237@fullsail.com an email address? " + newLib.checkEmailAddress("mashton237@fullsail.com"));

