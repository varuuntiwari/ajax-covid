const apiURL = "https://api.covid19api.com/summary"

function getSummary() {
    fetch(apiURL)
        .then((res) => {
            return res.json();
        })
        .then((data) => getJSON(data))
}

function getJSON(json) {
    const table = document.querySelector("#table-data")
    document.querySelector('#date').innerText = json["Date"]
    json["Countries"].forEach(e => {
        table.innerHTML += `
            <tr>
                <td>${e["Country"]}</td>
                <td>${e["TotalConfirmed"]}</td>
                <td>${e["NewConfirmed"]}</td>
                <td>${e["NewDeaths"]}</td>
                <td>${e["TotalDeaths"]}</td>
                <td>${e["NewConfirmed"]}</td>
                <td>${e["TotalRecovered"]}</td>
            </tr>
        `
    });
}