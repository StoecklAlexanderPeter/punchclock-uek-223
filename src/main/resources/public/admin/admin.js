function readUsers() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {

        } else if(this.readyState !== 4) {
            document.getElementById("response").innerHTML = "<h4>Loading..</h4>";
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            document.getElementById("response").innerHTML = "<h4>Error Reading Users</h4>";
        }
    }

    xhttp.open("GET", "/users", true);
    xhttp.send();
}

function updateUser() {

}

function deleteUsers() {

}