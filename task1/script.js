function shortenUrl() {
    var longUrl = document.getElementById("longUrlInput").value;
    var accessToken = "c807b0d3934a7d91482c056dbe74f1013fb23f09";

    $.ajax({
        url: "https://api-ssl.bitly.com/v4/shorten",
        type: "POST",
        beforeSend: function(a) {
            a.setRequestHeader("Authorization", "Bearer " + accessToken);
            a.setRequestHeader("Content-Type", "application/json");
        },
        data: JSON.stringify({ "long_url": longUrl }),
        success: function(response) {
            var shortUrl = response.link;
            document.getElementById("shortUrl").innerHTML = "<a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a>";
        },
        error: function(a, status, error) {
            console.error(a.responseText);
            document.getElementById("shortUrl").innerHTML = "Error occurred. Please try again.";
        }
    });
}