//ajax call that pulls info that comicRouteAPi created
$.ajax({
    contentType: "application/json",
    url: "/api/name/comic-json",
    method: "GET"
}).then((results) => {
    //results are objects created in comicRouteAPI
    //console.log(results);
    //displays image
    let image_url = results.image;
    let image_urlDisplay = $('<img>');
    image_urlDisplay.addClass('img-display');
    image_urlDisplay.attr('src', image_url);
    $('#results').append(image_urlDisplay);
    console.log(results.image);
//Displays Name
    let name = results.name;
    console.log(results.name);
    let nameDisplay = $('<h4>').text(name);
    nameDisplay.addClass('character-name');
    $('#results').append(nameDisplay);
//display for gender
    let gender = results.gender;
    let genderDisplay = $('<p>').text(gender);
    genderDisplay.addClass('gender');
    $('#results').append(genderDisplay);
    console.log(results.gender);
//display for alignment
    let alignment = results.alignment;
    console.log(results.alignment);
//display for base (city location of base)
    let base = results.base;
    let baseDisplay = $('<p>').text(base);
    baseDisplay.addClass('base');
    $('#results').append(baseDisplay);
    console.log(results.base);
    //displays publisher
    let publisher = results.publisher;
    let publisherDisplay = $('<p>').text(publisher);
    console.log(results.publisher);
//display for aliases -- need to loop through for better display
    let aliases = results.aliases;
    //console.log(aliases);
    //loops through the alias array and displays them as a list
    for (let i = 0; i < aliases.length; i++) {
        let aliasList = aliases[i];
        console.log(aliasList + " test");
     let aliasesDisplay = $("<li>").text(aliasList);
     aliasesDisplay.addClass('alias');
     $('#list-results').append(aliasesDisplay);
    }
});

