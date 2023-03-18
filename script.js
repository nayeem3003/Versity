function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var now = new Date();
    var ageInMilliseconds = now.getTime() - birthdate.getTime();
    var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    document.getElementById("result").innerHTML = "Your age is " + ageInYears + " years.";
}
  