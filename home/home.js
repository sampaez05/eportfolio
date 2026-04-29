/*document.addEventListener("DOMContentLoaded", function () {;
    const viewProjectsButton1 = document.getElementById("viewProjectsButton1");
    //redirect to projects page if Click to See Projects Button is clicked
    viewProjectsButton1.addEventListener("click", function () {
        console.log("viewProjectsButton1 clicked")
        window.location.href = "projects/projects.html";
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".viewProjectsButton");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("viewProjectsButton clicked");
            window.location.href = "projects/projects.html";
        });
    });
});


