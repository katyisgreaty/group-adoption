//back-end logic
function Dog(nameOfDog, gender, breed, age, about, picture) {
  this.nameOfDog = nameOfDog,
  this.gender = gender,
  this.breed = breed,
  this.age = age,
  this.about = about,
  this.picture = picture,
}

Dog.prototype.displayAllInfo = function() {
  return this.nameOfDog + ", " + this.gender + ", " + this.breed + ", "+ this.age;
}




//front-end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var newDog = new Dog(inputtedName, inputtedGender, inputtedBreed, inputtedAge, inputtedAbout, inputtedImageUrl);

     var inputtedName = $("input#name").val();
     var inputtedGender = $("input#gender").val();
     var inputtedBreed = $("input#breed").val();
     var inputtedAge = $("input#age").val();
     var inputtedAbout = $("input#about").val();
     var inputtedImageUrl = $("input#image").val();

     $(".added-pets").append("<div class='col-md-4'>" + "<div class='panel-default'>" + "<div class='panel-heading'>" + newDog.nameOfDog + "</div>" + "<div class='panel-body'>" + newDog.displayAllInfo + "</div>" + "</div>" + "</div>");



  });



});
