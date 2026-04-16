document.addEventListener("DOMContentLoaded", function () {;
    const viewProjectsButton = document.getElementById("viewProjectsButton");
    //redirect to projects page if Click to See Projects Button is clicked
    viewProjectsButton.addEventListener("click", function () {
        //console.log("viewProjectsButton clicked")
        window.location.href = "projects/projects.html";
    });
});

