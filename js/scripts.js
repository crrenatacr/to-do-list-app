
// scripts.js

function newItem() {
    // Adding a new item to the list of items
    let inputValue = $('#input').val();

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let li = $('<li></li>').text(inputValue);
        $('#list').append(li);
        $('#input').val(''); // Clear the input field after adding

        // Crossing out an item from the list of items
        li.on('dblclick', function() {
            $(this).toggleClass("strike");
        });

        // Adding the delete button "X"
        let crossOutButton = $('<button>X</button>');
        li.append(crossOutButton);

        crossOutButton.on('click', function() {
            $(this).parent().addClass("delete");
        });
    }

    // Reordering the items
    $('#list').sortable();
}
