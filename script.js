var i = 0;
var data = [];

function savedata(){
    var fname = document.getElementById("fname").value;
    var lname = document.querySelector("#lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if(fname == "" || lname == "" || email == "" || phone == ""){
        alert("Please fill all the blanks")
        return;
    }
    data[i] = [fname, lname, email, phone];
    i++;
    document.getElementById("data").innerHTML = "Record Saved";
}

function searchdata(){
    var fname = document.getElementById("fname").value;
    var phone = document.getElementById("phone").value;
    var lname = document.querySelector("#lname").value;
    for(j = 0; j < data.length; j++){
        if(data[j][0] == fname || data[j][3] == phone){
            document.getElementById("fname").value = data[j][0]; 
            document.querySelector("#lname").value = data[j][1];
            document.getElementById("email").value = data[j][2];
            document.getElementById("phone").value = data[j][3];
            document.getElementById("data").innerHTML = `${data[j][0]} `+` ${data[j][1]}`;
            return;
        }
    }
    document.getElementById("data").innerHTML = "Record not found";
}

function newdata(){
    document.getElementById("fname").value = "";
    document.querySelector("#lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}