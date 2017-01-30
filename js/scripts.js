// Business Logic
function Movie(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.cost = 0;
}

Movie.prototype.totalCost = function() {
  var total = 0;
  if (this.title === "Movie A") {
    this.cost = 5;
  } else if (this.title === "Movie B") {
    this.cost = 3;
  } else {
    this.cost = 7;
  }
  total = this.cost;

  if (this.time === "12:00 AM") {
    this.cost = 10;
  } else {
    this.cost = 5;
  }
  total += this.cost;

  if (this.age > 0 && this.age <= 12) {
    this.cost = -2;
  } else if (this.age >= 65) {
    this.cost = -3;
  } else {
    this.cost = 3;
  }
  total += this.cost;
  return this.cost = total;
};

// User Interface Logic
$(document).ready(function() {
  $("form#movie-form").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("input:radio[name=movie-name]:checked").val();
    var inputtedTime = $("select#movie-time").val();
    var inputtedAge = parseInt($("input#age").val());

    var customer = new Movie(inputtedTitle, inputtedTime, inputtedAge);

    $("#result").text("Your total is $" + customer.totalCost() + ".");
  });
});
