function readCompany(element) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            element.innerHTML = "";
            companies = this.responseText;
            localStorage.setItem("companies", companies);
            companies.forEach(company => {
                printCompany(element, company);
            });
        } else if(this.readyState !== 4) {
            document.getElementById("response").innerHTML = "<h4>Loading..</h4>";
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            document.getElementById("response").innerHTML = "<h4>Error Reading Users</h4>";
        }
    }

    xhttp.open("GET", "/company/read", true);
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.send();
}

function printCompany(element, company) {
    element.innerHTML += "<option value='"+company.cid+"'>"+company.name+"</option>";
}

function createCompany(name) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            console.log("created Company");
        } else if(this.readyState !== 4) {
            console.log("trying to create company");
        } else if(this.readyState == 4 && (this.status !== 200 || this.status !== 201)) {
            console.log("failed to create company");
        }
    }

    xhttp.open("POST", "/company/create", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", localStorage.getItem("token"));
    xhttp.send(
        JSON.stringify(
            {
                "name" : name
            }
        )
    );
}