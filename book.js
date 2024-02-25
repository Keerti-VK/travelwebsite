document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var passengers = document.getElementById("passengers").value;
    
  
    var bookingInfo = {
      destination: destination,
      date: date,
      passengers: passengers
    };
    
    
    var bookingResult = document.getElementById("bookingResult");
    bookingResult.innerHTML = "<p>Booking successful! Details:</p><ul>" +
    "<li>Destination: " + bookingInfo.destination + "</li>" +
   "<li>Date: " + bookingInfo.date + "</li>" +
   "<li>Passengers: " + bookingInfo.passengers + "</li>" +
     "</ul>";
    
    document.getElementById("bookingForm").reset();
  });

    var button1 = document.getElementById("button");
    function onpress() {
      window.alert("Ticket booked and Ticket will be sent to your email");
      button1.style.color = "red";
    }
    function onpress2() {
      window.location.href = "book.html";
   }