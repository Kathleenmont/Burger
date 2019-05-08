alert("hi")
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function (event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");
    var newDevouredState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to ", newDevouredState);

        location.reload();
      }
    );
  });

  $("#add-burger").on("click", function(event) {
    event.preventDefault();
console.log("on submit")
    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: false
    };
    console.log(newBurger)

    $.ajax("/api/burgers", {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
  });
});

