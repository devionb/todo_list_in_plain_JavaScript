var enter_button = document.getElementById("enter");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function input_length(){
    return input.value.length;
}

function list_length(){
    return item.length;
}

function create_list_element(){
    var li = document.createElement("li"); // creates element li
    li.appendChild(document.createTextNode(input.value)); // makes text from li input 
    ul.appendChild(li); // li adds to ul
    input.value = ""; // resets text input


    // start strikethrough. since it's in the function, it only adds it for new items
    function cross_out(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", cross_out);
    // end strikethrough

    // start add delete button
    var delete_button = document.createElement("button");
    delete_button.appendChild(document.createTextNode("X"));
    li.appendChild(delete_button); // delete_button adds to li
    delete_button.addEventListener("click",delete_list_item);
    // end delete button

    // add class delete (display: none)
    function delete_list_item(){
        li.classList.add("delete")
    }
    // end class delete 
}

function add_list_after_click(){
    if (input_length() > 0) // makes sure that an empty input field does not create a li
    {
        create_list_element();
    }
}

function add_list_after_keypress(event){
    if (input_length() > 0 && event.which === 13) // this now looks o see if you hit the enter/return key
    {
        create_list_element();
    }
}

enter_button.addEventListener("click", add_list_after_click);

input.addEventListener("keypress", add_list_after_keypress);