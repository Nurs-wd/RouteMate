function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d * 1000;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}
function generate(arr) {
    let currentCoords = arr[arr.length - 1];
    arr.pop();
    let closePathes = []
    let pathesHtml = ``

    for (i in arr) {
        console.log(calcCrow(currentCoords[0], currentCoords[1], arr[i].to[0], arr[i].to[1]))
        if (calcCrow(currentCoords[0], currentCoords[1], arr[i].to[0], arr[i].to[1]) < currentCoords[2])
            closePathes.push(arr[i]);
    }
    for (i in closePathes) {
        let pathHtml = `
        <div class='path'>
        name: ${closePathes[i].name}<br>
        contact: ${closePathes[i].contact}<br>
        description: ${closePathes[i].description}<br>       
        </div>
        <hr/>
        `

        pathesHtml = pathHtml + pathesHtml;
    }
    if (closePathes.length == 0)
        return `
    <div class='path'>
    Sorry , it seems no one travels similiar like you , try again later , maybe someone is going to travel like you      
    </div>
    <hr/>
    `
    return pathesHtml;
}