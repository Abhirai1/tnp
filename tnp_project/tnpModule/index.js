const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


{/* <script> */}
    // function submitForm() {
    //     // Get form values
    //     const companyName = document.getElementById('companyName').value;
    //     const hireDate = document.getElementById('hireDate').value;
    //     const applyLink = document.getElementById('applyLink').value;

    //     // Create a relative URL with parameters and navigate to studentModule.html
    //     const url = `/studentModule/studentModule.html?companyName=${companyName}&hireDate=${hireDate}&applyLink=${applyLink}`;
    //     window.location.href = url;
    // }
// </script>


// Retrieve data from localStorage
function submitForm() {
    // Get form values
    const companyName = document.getElementById('companyName').value;
    const hireDate = document.getElementById('hireDate').value;
    const applyLink = document.getElementById('applyLink').value;

    // Create an object to represent the job application
    const jobApplication = {
        companyName: companyName,
        hireDate: hireDate,
        applyLink: applyLink
    };

    // Store the data in localStorage
    localStorage.setItem('jobApplication', JSON.stringify(jobApplication));

    // Navigate to the studentModule.html page
    window.location.href = '/studentModule/studentModule.html';
}

