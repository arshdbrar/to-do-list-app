function newItem() {
    let list = $('#list');
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass('strike');
    });

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }

    $('#list').sortable();
}
