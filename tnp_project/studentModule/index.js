let btn=document.querySelector('#btn');
let sidebar=document.querySelector('.sidebar');

btn.onclick = function(){
    sidebar.classList.toggle('active');
};

let appliedCount = 0;
    let processCount = 0;
    let pendingCount = 0;

    function updateCounts() {
        document.getElementById("acceptedCount").innerText = appliedCount;
        document.getElementById("appliedCount").innerText = processCount;
        document.getElementById("rejectedCount").innerText = pendingCount;
    }

    // setInterval(function () {
    //     appliedCount++;
    //     processCount++;
    //     pendingCount++;
    //     updateCounts();
    // }, 1000);



    // const urlParams = new URLSearchParams(window.location.search);
    //     const companyName = urlParams.get('companyName');
    //     const hireDate = urlParams.get('hireDate');
    //     const applyLink = urlParams.get('applyLink');

    //     // Display data in the table
    //     document.getElementById('displayCompanyName').innerText = companyName;
    //     document.getElementById('displayHireDate').innerText = hireDate;
    //     document.getElementById('displayApplyLink').innerHTML = `<a href="${applyLink}" target="_blank">${applyLink}</a>`;

    const storedData = localStorage.getItem('jobApplication');
    if (storedData) {
        const jobApplication = JSON.parse(storedData);

        // Display data in the table
        document.getElementById('displayCompanyName').innerText = jobApplication.companyName;
        document.getElementById('displayHireDate').innerText = jobApplication.hireDate;
        document.getElementById('displayApplyLink').innerHTML = `<a href="${jobApplication.applyLink}" target="_blank">${jobApplication.applyLink}</a>`;
    }