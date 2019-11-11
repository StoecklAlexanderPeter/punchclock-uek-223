function createEntry(checkIn, checkOut) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            readEntries(document.getElementById("response"));
        } else if(this.readyState !== 4) {
            document.getElementById("response").innerHTML = "<h4>Loading..</h4>";
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            document.getElementById("response").innerHTML = "<h4>Error creating entry</h4>";
        }
    }

    xhttp.open("POST", "/entries", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.send(
        JSON.stringify(
            {
                "checkIn" : checkIn, 
                "checkOut" : checkOut
            }
        )
    );
}

function readEntries(element) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            element.innerHTML += "";
            localStorage.setItem("entries", this.responseText);
            entries = JSON.parse(this.responseText);
            entries.forEach(entry => {
                printEntry(element, entry);
            });
        } else if(this.readyState !== 4) {
            console.log("loading");
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            console.log("error creating user");
        }
    }

    xhttp.open("GET", "/entries/read", true);
    xhttp.send();
}

function printEntry(element, entry) {
    element.innerHTML += 
    "<tr>" +
        "<th>"+entry.id+"</th>"+
        "<th>"+entry.checkIn+"</th>"+
        "<th>"+entry.checkOut+"</th>"+
        "<th>"+entry.user+"</th>"+
        "<th><button class='btn btn-primary'>update</button></th>"+
        "<th><button class='btn btn-danger' onclick='deleteEntry("+entry.id+")'>delete</button></th>"+
    "</tr>";
}

function updateEntry(id, checkin, checkout) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && (this.status == 200 || this.status == 201)) {
            console.log("Entry updated");
        } else if(this.readyState !== 4) {
            console.log("loading entry user");
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            console.log("error updating entry");
        }
    }
    xhttp.open("POST", "/entries/update", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.send(
        JSON.stringify(
            {
                "id" : id,
                "checkin" : checkin,
                "checkout" : checkout
            }
        )
    );
}

function deleteEntry(id) {
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
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.send(
        JSON.stringify(
            {
                "id": id
            }
        )
    );
}