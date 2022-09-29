const apiURL = "https://api.covid19api.com/summary"

function getSummary() {
    fetch(apiURL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
}