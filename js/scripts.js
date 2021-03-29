$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const person1 = $("input#person1").val();
    const person2 = $("input#person2").val();
    const animal = $("input#animal").val();
    const exclamation = $("input#exclamation").val();
    const verb = $("input#verb").val();
    const noun = $("input#noun").val();
    const inputs = [person1, person2, animal, exclamation, verb, noun];
    inputs.forEach(function (input) {
      console.log(input);
    });
  });
});