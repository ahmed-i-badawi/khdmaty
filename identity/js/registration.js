async function postData() {
  console.log("bbbbb");

    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("Email").value;
    var userpassword = document.getElementById("password").value;
    var userphone = document.getElementById("Phone").value;
    var type=document.getElementById("customer").checked;
    if(type)
    {
      type="customer";
    }
    else
    {
      type="company";
    }
    var useraddress = document.getElementById("address").value;
    var usergovernment = document.getElementById("government").value;
    var usercity = document.getElementById("city").value;
    let user = {
        name: userName,
        email: userEmail,
        password: userpassword,
        phone: userphone,
        type:type,
        address: useraddress,
        government: usergovernment,
        city: usercity
    }

    console.log("aaaaa");

await fetch('http://localhost:3000/systemusers', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
    console.log("ttttt");
    if(type=="customer")
    {
      location.href = '../customer-profile.html';
    }
    else if(type=="company")
    {
      location.href = '../company-profile.html';
    }
    else
    {
      alert("you are a hacker gratz");
    }
  })
  .catch((error) => {
    console.error('Errooooooooooor:', error);
  });

}
