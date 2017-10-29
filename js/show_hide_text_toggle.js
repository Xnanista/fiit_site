
function change_text(element, number) {
    if(element.dataset.state == "show") {
        element.innerHTML = "Skryť <img data-toggle=\"collapse\" data-target=\"#step" + number + "\" height=\"12\" src=\"../images/arrows/up.svg\">"
        element.dataset.state = "hide";
    }
    else {
        element.innerHTML = "Zobraziť <img data-toggle=\"collapse\" data-target=\"#step" + number + "\" height=\"12\" src=\"../images/arrows/down.svg\">"
        element.dataset.state = "show";
    }
}
