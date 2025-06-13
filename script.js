function proceed() {
  const select = document.getElementById("circuitSelect");
  const selectedPage = select.value;
  if (selectedPage) {
    window.location.href = selectedPage;
  } else {
    alert("Please select a circuit type.");
  }
}
