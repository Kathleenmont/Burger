
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".change-eaten").on("click", function (event) {
    // use form group for id
    var id = $(this).data("id");
    console.log("id! " + id)
    var newEat = $(this).data("neweat");
    var newDevouredState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {


        location.reload();
        console.log("changed devoured to ", newDevouredState);
        console.log("id! " + id)
      }
    );
  });

  

    $(".create-form").on("submit", function (event) {
      event.preventDefault();
      console.log("on submit")
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
      console.log(newBurger)

      // to prevent empty inputs from creating blank burgers
      if (newBurger.burger_name) {

      $.ajax("/api/burgers", {
        type: "PUT",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");

          location.reload();
        }
      );
    }
    });
  
});

