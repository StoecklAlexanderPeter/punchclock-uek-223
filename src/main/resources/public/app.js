function createEntry() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            document.getElementById("response").innerHTML = "<h4>Created Entry</h4>";
            readEntries();
        } else if(this.readyState !== 4) {
            document.getElementById("response").innerHTML = "<h4>Loading..</h4>";
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            document.getElementById("response").innerHTML = "<h4>Error creating entry</h4>";
        }
    }

    xhttp.open("POST", "/entries", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(
        JSON.stringify(
            {
                "checkIn" : document.getElementById("checkin").value.trim(),
                "checkOut" : document.getElementById("checkout").value.trim()
            }
        )
    );
}

function readEntries() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            document.getElementById("response").innerHTML = "";
            var entries = JSON.parse(this.responseText);
            entries.forEach(entry => {
                document.getElementById("response").innerHTML += "<p>id: " + entry.id + "<br> check in: " + entry.checkIn + "<br> checkout: " + entry.checkOut + "<br><br>";
            });
        } else if(this.readyState !== 4) {
            document.getElementById("response").innerHTML = "<h4>Loading..</h4>";
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            document.getElementById("response").innerHTML = "<h4>Error creating entry</h4>";
        }
    }

    xhttp.open("GET", "/entries", true);
    xhttp.send();
}

function deleteEntry() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            document.getElementById("response").innerHTML = "<h4>Entry deleted</h4>";
            readEntries();
        } else if(this.readyState !== 4) {
            document.getElementById("response").innerHTML = "<h4>Loading..</h4>";
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            document.getElementById("response").innerHTML = "<h4>Error deleting entry</h4>";
        }
    }

    xhttp.open("DELETE", "/entries", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(
        JSON.stringify(
            {
                "id": document.getElementById("id").value.trim()
            }
        )
    );
}