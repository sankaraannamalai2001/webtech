const http = require("http");
const querystring = require("querystring");
var qs, fname, lname;

http
  .createServer(function (req, res) {
    var data1 = "";
    req.on("data", function (chunk) {
      data1 += chunk;
    });
    req.on("end", function () {
      qs = querystring.parse(data1);
      fname = qs["fname"];
      lname = qs["lname"];
      gender = qs["gender"];
      yos = qs["yos"];
      mobile = qs["mobile"];
      email = qs["email"];
      dept = qs["dept"];
      rollno = qs["rollno"];
      html = `
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css'>
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        <title>Post</title>
    </head>
    <body>
    <div class="student-profile py-4">
  <div class="container mt-5">
    <div class="row mt-5">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="student dp">
            <h3>${fname + " " + lname}</h3>
          </div>
          <div class="card-body">
            <p class="mb-0"><strong class="pr-1">Email:</strong>${email}</p>
            <p class="mb-0"><strong class="pr-1">Phone:</strong>${mobile}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>The details we got from you :)</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%">First Name</th>
                <td width="2%">:</td>
                <td> ${fname}</td>
              </tr>
              <tr>
                <th width="30%">Last name</th>
                <td width="2%">:</td>
                <td>${lname}</td>
              </tr>
              <tr>
                <th width="30%">Roll Number</th>
                <td width="2%">:</td>
                <td>${rollno}</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>${gender}</td>
              </tr>
              <tr>
                <th width="30%">Department</th>
                <td width="2%">:</td>
                <td>${dept}</td>
              </tr>
              <tr>
                <th width="30%">Year of Study</th>
                <td width="2%">:</td>
                <td>${yos}</td>
              </tr>
              
             
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </body>
    
</html>

<style>
    body {
   background: #ad5389; 
    background: -webkit-linear-gradient(to right, #3c1053, #ad5389); 
    background: linear-gradient(to right, #3c1053, #ad5389); 



    padding: 0;
    margin: 0;
    font-family: "Roboto Slab", serif;
   
    color: #000;
}
.student-profile .table th,
.student-profile .table td {
    font-size: 14px;
    padding: 5px 10px;
    color: #000;
}
.student-profile .card p {
    font-size: 16px;
    color: #000;
}
.student-profile .card h3 {
    font-size: 20px;
    font-weight: 700;
}
.student-profile .card .card-header .profile_img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin: 10px auto;
    border: 10px solid #ccc;
    border-radius: 50%;
}
</style>
`;
      res.write(html);
      res.end();
    });
  })
  .listen(7070);
console.log("server started");
