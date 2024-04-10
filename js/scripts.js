function newItem() {
    // Adding a new item to the list of items:
    let inputValue = $('#input').val();
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let li = $('<li></li>').text(inputValue);
        $('#list').append(li);
    }

    // Crossing out an item from the list of items:
    function crossOut() {
        $(this).toggleClass("strike");
    }

    $('#list').on("dblclick", "li", crossOut);

    // Adding the delete button "X":
    let crossOutButton = $('<button>X</button>');
    let li = $('<li></li>').append(inputValue).append(crossOutButton);
    crossOutButton.on("click", deleteListItem);

    // Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        $(this).parent().addClass("delete");
    }

    // Reordering the items:
    $('#list').sortable();
}
