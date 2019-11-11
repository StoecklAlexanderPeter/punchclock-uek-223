//create is already in auth.js file

function readUsers(element) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && (this.status === 200 || this.status === 201)) {
            element.innerHTML = "";
            users = this.responseText;
            localStorage.setItem("users", users);
            users.foreach(user => {
                user.printUserInTable(element, user);
            });
        } else if(this.readyState !== 4) {
            console.log("loading users")
        } else if(this.readyState === 4 && (this.status !== 200 || this.status !== 201)) {
            console.log("error getting users")
        }
    }

    xhttp.open("GET", "/users/read", true);
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.send();
}

function updateUser(uid, username, company) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && (this.status == 200 || this.status == 201)) {
            console.log("User updated");
        } else if(this.readyState !== 4) {
            console.log("loading updating user");
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            console.log("creating user");
        }
    }
    xhttp.open("POST", "/users/update", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.send(
        JSON.stringify(
            {
                "uid" : uid,
                "username" : username,
                "company" : company
            }
        )
    );
}

function deleteUsers(uid) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            console.log("user deleted");
        } else if(this.readyState !== 4) {
            console.log("loading user");
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            console.log("error deleting user");
        }
    }
    xhttp.open("DELETE", "/users/delete", true);
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(
        JSON.stringify(
            {
                "uid": uid
            }
        )
    );
}

function printUserInTable(element, user) {
    element.innerHTML += 
        "<tr>" +
            "<th>"+user.uid+"</th>"+
            "<th>"+user.username+"</th>"+
            "<th>"+user.company+"</th>"+
            "<th><button data-toggle='modal' data-target='#updateUser'>"+user.uid+"</th>"+
            "<th><button class='btn btn-danger' onclick='deleteUser('"+user.uid+"')>Delete</button></th>"+
        "</tr>";
}