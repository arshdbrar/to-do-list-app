function newItem() {

    //1. Adding a new item to the list of items: 

    let li = $('<li></li>');

    let inputValue = $('#input').val();

    li.append(inputValue);


    if (inputValue === '') {

        alert("You must write something!");

    } else {

        $('#list').append(li);

    }


    function crossOut() {

        li.classList.toggle("strike");

    }


    li.on("dblclick", function crossOut() {

        li.classList.toggle("strike");

    });


    //2. Reordering the items: 

    $('#list').sortable();

}

function deleteListItem() {

    li.addClass("delete");

}

$('#list').sortable();





