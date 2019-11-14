$('#search-btn').click(() => {
  let nameSubmission = $("input:text").val();
      console.log(nameSubmission);
      $.post("/api/name/comic-json", 
          {
              name: nameSubmission
          },
          (results) => {
                //results are objects created in comicRouteAPI
                console.log(results);
                //displays image
                let image_url = results.image;
                let image_urlDisplay = $('<img>');
                image_urlDisplay.addClass('img-display');
                image_urlDisplay.attr('src', image_url);
                $('#results').append(image_urlDisplay);
              //  console.log(results.image);
              //Displays Name
              let name = results.name;
              //console.log(results.name);
              let nameDisplay = $('<h4>').text(name);
              nameDisplay.addClass('character-name');
              $('#results').append(nameDisplay);
              //Save button
              let saveButton = $('<button>').text('Save Character');
              saveButton.addClass('btn btn-primary');
              saveButton.attr({ type: 'submit', id: "saved", name});
              $('#results').append(saveButton);
            //display for gender
                let gender = results.gender;
                let genderDisplay = $('<p>').text(gender);
                genderDisplay.addClass('gender');
                $('#results').append(genderDisplay);
                //console.log(results.gender);
            //display for alignment
                let alignment = results.alignment;
                let alignmentDisplay = $('<p>').text(alignment);
                alignmentDisplay.addClass('alignment');
                $('#results').append(alignmentDisplay);
               // console.log(results.alignment);
            //display for base (city location of base)
                let base = results.base;
                let baseDisplay = $('<p>').text(base);
                baseDisplay.addClass('base');
                $('#results').append(baseDisplay);
              //  console.log(results.base);
                //displays publisher
                let publisher = results.publisher;
                let publisherDisplay = $('<p>').text(publisher);
                publisherDisplay.addClass('base');
                $('#results').append(publisherDisplay);
              //  console.log(results.publisher);
            //Title for list 
                let listTitle = $('<h4>').text('Character Alias');
                listTitle.addClass('list-title');
                $('#results').append(listTitle);
            //list of aliases
                let aliases = results.aliases;
                for (let i = 0; i < aliases.length; i++) {
                    let aliasList = aliases[i];
                  //  console.log(aliasList + " test");
                 let aliasesDisplay = $("<li>").text(aliasList);
                 aliasesDisplay.addClass('alias');
                 $('#list-results').append(aliasesDisplay);
                }
            });
          });
          
         
// //infomation for when user inputs charater's name
// $.ajax({
//     contentType: "application/json",
//     url: "/api/name/comic-json",
//     method: "POST"
// // }).then((results) => {
// //     //results are objects created in comicRouteAPI
// //     console.log(results);
// //     //displays image
// //     let image_url = results.image;
// //     let image_urlDisplay = $('<img>');
// //     image_urlDisplay.addClass('img-display');
// //     image_urlDisplay.attr('src', image_url);
// //     $('#results').append(image_urlDisplay);
// //   //  console.log(results.image);
// //   //Displays Name
// //   let name = results.name;
// //   //console.log(results.name);
// //   let nameDisplay = $('<h4>').text(name);
// //   nameDisplay.addClass('character-name');
// //   $('#results').append(nameDisplay);
// //   //Save button
// //   let saveButton = $('<button>').text('Save Character');
// //   saveButton.addClass('btn btn-primary');
// //   saveButton.attr({ type: 'submit', id: "saved", name});
// //   $('#results').append(saveButton);
// // //display for gender
// //     let gender = results.gender;
// //     let genderDisplay = $('<p>').text(gender);
// //     genderDisplay.addClass('gender');
// //     $('#results').append(genderDisplay);
// //     //console.log(results.gender);
// // //display for alignment
// //     let alignment = results.alignment;
// //     let alignmentDisplay = $('<p>').text(alignment);
// //     alignmentDisplay.addClass('alignment');
// //     $('#results').append(alignmentDisplay);
// //    // console.log(results.alignment);
// // //display for base (city location of base)
// //     let base = results.base;
// //     let baseDisplay = $('<p>').text(base);
// //     baseDisplay.addClass('base');
// //     $('#results').append(baseDisplay);
// //   //  console.log(results.base);
// //     //displays publisher
// //     let publisher = results.publisher;
// //     let publisherDisplay = $('<p>').text(publisher);
// //     publisherDisplay.addClass('base');
// //     $('#results').append(publisherDisplay);
// //   //  console.log(results.publisher);
// // //Title for list 
// //     let listTitle = $('<h4>').text('Character Alias');
// //     listTitle.addClass('list-title');
// //     $('#results').append(listTitle);
// // //list of aliases
// //     let aliases = results.aliases;
// //     for (let i = 0; i < aliases.length; i++) {
// //         let aliasList = aliases[i];
// //       //  console.log(aliasList + " test");
// //      let aliasesDisplay = $("<li>").text(aliasList);
// //      aliasesDisplay.addClass('alias');
// //      $('#list-results').append(aliasesDisplay);
// //     }
// // });

// });