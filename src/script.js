function bookTrip() {
  let name = prompt("What is your name?");
  let eMail = prompt("What is your e-mail?");
  let tripTime = prompt("Do you prefer to travel at the daytime?");
  if (tripTime === "yes") {
    alert(
      `Thank you, ${name}. Our manager will connect with you during 1 hour 😊.`
    );
  } else {
    alert(
      `Sorry, ${name} 😔. Now we have available trips just at the daytime.`
    );
  }
}
let bookTripButton = document.querySelector("button");
bookTripButton.addEventListener("click", bookTrip);
