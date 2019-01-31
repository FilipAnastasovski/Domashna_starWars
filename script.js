
// za lugjeto

$("#getPeople").click(function () {
    console.log("clicked")

    $("#planets").hide();
    $("#people").show();
    $('#spin').show()

    let firstPagePeople = 'https://swapi.co/api/people/';
    let everyone = [];

    function allPeople(url) {

        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {

                let people = data.results;
                everyone.push(people);

                let nextPage = data.next;

                if (nextPage) {

                    console.log('calling next page')
                    allPeople(nextPage)

                } else {
                    console.log(' no more data');

                    console.log(everyone);
                    populatePeople(everyone);
                }

            })


    }

    allPeople(firstPagePeople);


})

function populatePeople(data) {
    console.log("drug respond", data)

    for (let i = 0; i < data.length; i++) {
        let array = data[i];

        for (let person of array) {

            let namePerson = person.name.toLowerCase();


            $("#table").append(`
    <tr id="${namePerson}">
        <td>${person.name}</td>
        <td>${person.gender}</td>
        <td>${person.birth_year}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        
    </tr>
`);

            $('#people').show();
            $('#planets').hide();
            $('.logo').hide();
            $('#spin').hide()
        }
    }
}



// za planetite


$("#getPlanets").click(function () {
    console.log("clicked")

    $("#planets").hide();
    $("#people").show();
    $('#spin').show()

    let firstPagePlanets = 'https://swapi.co/api/planets/';
    let everyPlanet = [];

    function allPlanets(url) {

        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {

                let planets = data.results;
                everyPlanet.push(planets);

                let nextPage = data.next;

                if (nextPage) {

                    console.log('calling next page')
                    allPlanets(nextPage)

                } else {
                    console.log(' no more data');

                    console.log(everyPlanet);
                    populatePlanets(everyPlanet);
                }

            })


    }

    allPlanets(firstPagePlanets);


})

function populatePlanets(data) {
    console.log("drug respond", data)

    for (let i = 0; i < data.length; i++) {
        let array = data[i];

        for (let planet of array) {

            let namePlanet = planet.name.toLowerCase();

            $('#body').append(`<tr id="${namePlanet}"> 
            <td>${planet.name}</td>
            <td>${planet.diameter}</td>
            <td>${planet.climate}</td>
            <td>${planet.terrain}</td>
            <td>${planet.rotation_period}</td>
            <td>${planet.population}</td>
             </tr>`);


            $('#people').show();
            $('#planets').hide();
            $('.logo').hide();
            $('#spin').hide()
        }
    }
}

// search 


$(".btnSearch").click(function () {

    let inputName = $("input").val().toLowerCase();

    console.log(inputName);

    if (inputName !== null || inputName !== undefined) {


        $(`tr:visible[id*='${inputName}']`).css("color", "red");





        // $( `#${inputName}` ).css( "color", "red" );

        console.log(inputName);


    }


});








$('#goHome').click(function () {
    $('#people').hide();
    $('#planets').hide();
    $('#body').html("");
    $('.logo').show();
    $('#spin').hide()
})


