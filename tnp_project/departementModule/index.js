function updateYear(event) {
    console.log("hii")
    const selectedYear = event.target.textContent;
    document.getElementById('selectedYear').textContent = 'Selected Year: ' + selectedYear;
}