var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    if (req.url == "/") {
      fs.readFile("home.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
      //res.writeHead(200, { "Content-type": "text/html" });
      // res.write(
      //   "<html><body bgcolor='LavenderBlush' text='Navy'style='font-family: Arial, Helvetica, sans-serif;'>"
      // );
      // res.write("<h1>Welcome to SIRIUS</h1>");
      // res.write("<h3>Be the MOST brilliant business</h2>");
      // res.write(
      //   "<p>Ready to propel your organization to astonishing new heights? Sirius can help you become more agile, innovative and secure than you ever imagined. As a national integrator of comprehensive technology-based solutions, we help you master digital and harness the power of your data through transformation that transcends industries and reinvents the customer experience.</p><br>"
      // );
      // res.write(
      //   "<img src='https://www.siriuscom.com/wp-content/uploads/2021/05/40-years-homepage-slider-min-1536x480.jpg'/>"
      // );
      // res.end(
      //   "<a href='/about'>About us</a><br><a href='/services'>Services</a><br><a href='/insight'>Insights</a><br><a href='/contact'>Contact</a></body></html>"
      // );
    } else if (req.url == "/signin") {
      res.writeHead(200, { "Content-type": "text/html" });
      // res.write(
      //   "<html><body bgcolor='LavenderBlush' text='Navy'style='font-family: Arial, Helvetica, sans-serif;'>"
      // );
      // res.write("<h1>ABOUT US</h1>");
      // res.write(
      //   "<p>Sirius is a national integrator of technology-based business solutions that span the enterprise, including the data center and lines of business. Built on products and services from the world’s top technology companies, Sirius solutions are installed, configured and supported by our dedicated teams of highly certified experts.</p>"
      // );
      // res.write(
      //   "<p>Since its founding in 1980, Sirius has grown to be one of the largest IT solutions integrators in the U.S. Today, Sirius offers integrated, multivendor technology solutions that meet the requirements of the full range of organizations, from small businesses with fewer than 500 employees to large enterprises with thousands of employees and hundreds of locations.</p>"
      // );
      // res.end(
      //   "<a href='/'>Home</a><br><a href='/services'>Services</a><br><a href='/insight'>Insights</a><br><a href='/contact'>Contact</a></body></html>"
      //);
      fs.readFile("signin.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url == "/services") {
      res.writeHead(200, { "Content-type": "text/html" });
      fs.readFile("service.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
      // res.write(
      //   "<html><body bgcolor='LavenderBlush' text='Navy'style='font-family: Arial, Helvetica, sans-serif;'>"
      // );
      // res.write(
      //   "<h1>Sirius Services: Critical components of your project success</h1>"
      // );

      // res.write(
      //   "<p>Even the worlds top technologies wont do you much good if you don’t have the resources or expertise needed to successfully implement them as an optimally performing, cohesive solution.</p>"
      // );
      // res.write(
      //   "<p>Thats why Sirius has built a world-class services organization around hundreds of recognized technology experts who specialize across all disciplines related to enterprise computing.</p>"
      // );
      // res.write(
      //   "<p>Drawing on centuries of combined experience, these highly skilled, certified consultants can determine which technology products are best suited for your specific challenges, and then provide the services that will ensure the fastest return on your investment.</p>"
      // );
      // res.write(
      //   "<p>Sirius also has a dedicated software team capable of helping companies evaluate, acquire and implement software solutions in the areas of commerce, business intelligence, information management, collaboration, identity and access management, business optimization, systems and storage management, and more.</p>"
      // );
      // res.end(
      //   "<a href='/'>Home</a><br><a href='/about'>About us</a><br><a href='/insight'>Insights</a><br><a href='/contact'>Contact</a></body></html>"
      // );
    } else if (req.url == "/contact") {
      res.writeHead(200, { "Content-type": "text/html" });
      fs.readFile("contact.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
      //   res.write(
      //     "<html><body bgcolor='LavenderBlush' text='Navy'style='font-family: Arial, Helvetica, sans-serif;'>"
      //   );
      //   res.write("<h1>CONTACT US</h1>");
      //   res.write(
      //     "<form method='post'><label for='name'>Name</label><br><input type='text' id='name'><br><br><label for='email'>Email</label><br><input type='text' id='email'><br><br><label for='comments'>Comments</label><br><input type='text' id='comments'><br><br><button type='submit'>Submit</button></form>"
      //   );
      //   res.write("<h3>Thank You For Contacting Us</h3>");
      //   res.end(
      //     "<a href='/'>Home</a><br><a href='/about'>About us</a><br><a href='/insight'>Insights</a><br><a href='/services'>Services</a></body></html>"
      //   );
      // } else if (req.url == "/insight") {
      //   res.writeHead(200, { "Content-type": "text/html" });
      //   res.write(
      //     "<html><body bgcolor='LavenderBlush' text='Navy'style='font-family: Arial, Helvetica, sans-serif;'>"
      //   );
      //   res.write("<h1>InSights</h1>");
      //   res.write(
      //     "<p>An acquisitive, publicly traded company, this Sirius client was maintaining five on-premises legacy backup and recovery solutions they had inherited over time. This made centralized reporting on their data protection difficult and time-consuming, and validation of both protection across the environments and daily backup success rates took up an inordinate amount of time for internal resources. In addition, the client had to work with five vendors and varying renewal dates for hardware and software renewals, support and refreshes.</p>"
      //   );
      //   res.end(
      //     "<a href='/'>Home</a><br><a href='/about'>About us</a><br><a href='/contact'>Contact Us</a><br><a href='/services'>Services</a></body></html>"
      //   );
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>ERROR 404</h1><h3>WRONG URL GO BACK :(</h3>");
    }
  })
  .listen(8080);
