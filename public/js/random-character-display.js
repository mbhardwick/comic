//code for when random hero is generated after random button is clicked
$('#random-btn').click(() => {
  
//When "random" button is clicked then random hero is called
    $.ajax({
        contentType: "application/json",
        url: "/api/random/comic-json",
        method: "GET"
    }).then((results) => {
       // console.log(results);
       //dynamically created -- displays image
       let image_url = results.image.url;
        let image_urlDisplay = $('<img>');
        image_urlDisplay.addClass('img-display');
        image_urlDisplay.attr('src', image_url);
        $('#random-results').append(image_urlDisplay);
        console.log(results.image.url);
        //displays name    
       let name = results.name;
       //console.log(results.name);
          let nameDisplay = $('<h4>').text(name);
          nameDisplay.addClass('character-name');
          $('#random-results').append(nameDisplay);
           console.log(results.name);
        //Save button
        let saveButton = $('<button>').text('Save Character');
        saveButton.addClass('btn btn-primary');
        saveButton.attr({ type: 'submit', id: "saved", name});
        $('#random-results').append(saveButton);
    //display for gender
        let gender = results.appearance.gender;
        let genderDisplay = $('<p>').text(gender);
        genderDisplay.addClass('gender');
       $('#random-results').append(genderDisplay);
        console.log(results.appearance.gender);
        //displays biography
        //display for alignment
         let alignment = results.biography.alignment;
         let alignmentDisplay = $('<p>').text(alignment);
         alignmentDisplay.addClass('alignment');
         $('#random-results').append(alignmentDisplay);
         console.log(results.biography.alignment);
         //Display for city base
         let base = results.work.base;
         let baseDisplay = $('<p>').text(base);
         baseDisplay.addClass('base');
         $('#random-results').append(baseDisplay);
         console.log(results.work.base);
         //publisher
         let publisher = results.biography.publisher;
         let publisherDisplay = $('<p>').text(publisher);
         publisherDisplay.addClass('base');
         $('#random-results').append(publisherDisplay);
         console.log(results.biography.publisher);
         //aliases title
         let listTitle = $('<h4>').text('Character Alias');
         listTitle.addClass('list-title');
         $('#random-results').append(listTitle);
         //alias list output
         let aliases = results.biography.aliases;
         console.log(aliases);
        //loops through the alias array and displays them as a list
        for (let i = 0; i < aliases.length; i++) {
            let aliasList = aliases[i];
            console.log(aliasList + " alias test")

        let aliasesDisplay = $("<li>").text(aliasList);
        aliasesDisplay.addClass('alias');
        $('#random-results').append(aliasesDisplay);
        }
      
    });
});
