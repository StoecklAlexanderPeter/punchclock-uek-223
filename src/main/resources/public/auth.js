function login(username, password) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && (this.status == 200 || this.status == 201)) {
            localStorage.setItem('token', this.getResponseHeader('Authorization'));
            window.location.href = '/entries/index.html';
        } else if(this.readyState !== 4) {
            document.getElementById("response").innerHTML = "<h4>Loading..</h4>";
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            document.getElementById("response").innerHTML = "<h4>Error Reading Users</h4>";
        }
    }

    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(
        JSON.stringify(
            {
                "username" : username,
                "password" : password
            }
        )
    );
}

function signup(username, password, company) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && (this.status == 200 || this.status == 201)) {
            localStorage.setItem('token', this.getResponseHeader('Authorization'));
            window.location.href = '/index.html';
        } else if(this.readyState !== 4) {
            console.log("Loading creating user")
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            console.log("Error creating user")
        }
    }

    xhttp.open("POST", "/users/sign-up", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(
        JSON.stringify(
            {
                "username" : username,
                "password" : password,
                "company" : company
            }
        )
    );
}