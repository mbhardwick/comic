//action for when saved button is clicked and sends it to saved comic div
$(document).on('click', '#saved', (event) => {
    console.log("saved clicked");
      event.preventDefault();
      //takes character name infomation from dynamically created button and stores it in variable
      let characterName = event.target.name;
      console.log(event.target);
      //creates list item to store in Saved comics
     let characterNameList =  $("<li>").text(characterName);
     $("#saved-comic").append(characterNameList);
      // Send the POST request.
      $.ajax("/data/comic/update/", {
        type: "POST",
        data: { characterName }
      }).then(
        //returns sql id from database of which id character is saved under
        function(results) {
          console.log(results);
        }
      );
  });

  