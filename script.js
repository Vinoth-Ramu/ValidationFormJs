
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    var count = 0;
    var Name = document.myform.name.value;
    var Age = document.myform.age.value;
    var Email = document.myform.email.value;
    var Password = document.myform.password.value;

    console.log(Name);


    if (Name == null || Name == "") {
        document.getElementById("namepart").innerHTML = "Please Enter A Name!!!";
        count++;
    }

    if (Age == null || Age == "") {
        document.getElementById("agepart").innerHTML = "Please Enter Age!!!";
        count++;

    }

    if (Email == null || Email == "") {
        document.getElementById("emailpart").innerHTML = "Please Enter A Email!!!";
        count++;

    }

    if (Password == null || Password == "") {
        document.getElementById("passwordpart").innerHTML = "Please Enter A Password!!!";
        count++;

    }
    if (count > 0) {
        return false;
    }
    else {
        //  document.getElementById("result").value = Name;
        alert(Name + ' has Registered successfully');
         document.getElementById("f1").innerText="UserName: " +  Name;
         document.getElementById("f2").innerText="Age: " +  Age;
         document.getElementById("f3").innerText="Email: " +  Email;
         document.getElementById("f4").innerText="Password: " +  Password;
        return true;
    }

  
});


function firstname() {
    var Name = document.myform.name.value;

    if (Name !== null || Name !== "")
        document.getElementById("namepart").innerHTML = "";
    if (Name.match(/[^a-zA-Z]/g)) {
        document.getElementById("namepart").innerHTML = "Please Enter Only Aphabetics";
        return false;
    }
    return true;
}

function ages() {
    var Age = document.myform.age.value;
    if (Age !== null || Age !== "")
        document.getElementById("agepart").innerHTML = "";
    if (Age.match(/[^0-9]/g)) {
        document.getElementById("agepart").innerHTML = "Please Enter Only Numerics";
        return false;
    }
    return true;
}

function emails() {
    var Email = document.myform.email.value;
    var emailvalidate = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    if (Email !== null || Email !== "")
        document.getElementById("emailpart").innerHTML = "";
    if (!Email.match(emailvalidate)) {
        document.getElementById("emailpart").innerHTML = "Please Enter Valid Email";
        return false;
    }
    return true;
}

function passwords() {
    var Password = document.myform.password.value;
    if (Password !== null || Password !== "")
        document.getElementById("passwordpart").innerHTML = "";
    return true;
}

