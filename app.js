function getGender(){
    var yourGender = document.getElementById("gender").value;
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("https://api.genderize.io?name="+yourGender, requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result);
        var genderType = JSON.parse(result);
        console.log(genderType);
        var displayGender = 
        "Name: " +
        genderType.name +
        "<br>" +
        "Gender: " +
        genderType.gender +
        "<br>" +
        "Probability: " +
        genderType.probability
        document.getElementById("displayGender").innerHTML = displayGender;
    })
    .catch(error => console.log('error', error));
}