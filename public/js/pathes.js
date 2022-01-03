async function logSubmit(event) {
    let name = document.forms["form1"]['name'].value;
    let description = document.forms["form1"]['description'].value;
    let contact = document.forms["form1"]['contact'].value;

    if (!name || !description || !contact ) {
        window.alert(`Please enter all information!`);
        return false;
    }
    else {
        if (!markers[0] && !markers[1])
            alert("Marker the map")
        let first = [markers[0].position.lat(), markers[0].position.lng()];
        let second = [markers[1].position.lat(), markers[1].position.lng()];
        var data = {
            name: document.forms["form1"]['name'].value,
            description: document.forms["form1"]['description'].value,
            contact: document.forms["form1"]['contact'].value,
            path: {
                from: first,
                to: second
            }
        }


        try {
            const response = await fetch(`${window.location.origin}/path`, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            let html = generate(json);
            document.getElementById('pathes').innerHTML=html
        
            console.log('Success:', JSON.stringify(json));
        } catch (error) {
            console.error('Error:', error);
        }


        console.log(`Form Submitted! Time stamp: ${event.timeStamp}`)
        event.preventDefault();
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    logSubmit(e)
    e.preventDefault();
});


