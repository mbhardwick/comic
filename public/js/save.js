$(document).on('click', '#saved', (event) => {
    console.log("saved clicked");
      event.preventDefault();
      let characterName = event.target.name;
      console.log(event.target);
      $(characterName).appendTo("#saved-box");
      // Send the POST request.
      $.ajax("/data/comic/update/", {
        type: "POST",
        data: { characterName }
      }).then(
        function() {
      //    console.log("changed saved to", true);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

  