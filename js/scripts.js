$(document).ready(function() {
    function newItem() {
      // Adding a new item to the list of items
      var inputValue = $('#input').val();
      if (inputValue === '') {
        alert('You must write something!');
      } else {
        $('#list').append('<li>' + inputValue + '<crossOutButton>X</crossOutButton></li>');
        $('#input').val('');
      }
    }
  
    // Crossing out an item from the list of items
    $(document).on('dblclick', 'li', function() {
      $(this).toggleClass('strike');
    });
  
    // Adding the delete button "X"
    $(document).on('click', 'crossOutButton', function() {
      $(this).parent().addClass('delete');
    });
  
    // Reordering the items
    $('#list').sortable();
    
    // Event listener for adding new item
    $('#button').click(function() {
      newItem();
    });
  });
  