function openProjects(evt, projectSectionName) {
    // Declaring all the variables
    var i, tabContent, tabLinks;


    // Getting all the elements with clas="tabContent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }


    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(projectSectionName).style.display = "block";
    evt.currentTarget.className += " active";




}