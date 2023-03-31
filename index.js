let input_field = $(".input-text")
let add_btn = $(".add-btn")
let get_item_div = $(".items")
// delete button for delete item list (red button)
// let delete_btn = ""


// get text inserted on input_field
function getTextItemList() {
    let text = input_field.val()
    if (text.length > 1) {
        showItemList(text)
        input_field.val('')
        input_field[0].style.border = "none"
        input_field[0].style.height = "60px"
    } else {
        console.log("No text")
        input_field[0].style.border = "3px solid var(--medium-red)"
        input_field[0].style.height = "54px"
    }

}
function addTextList(text, box_item) {
    box_item.append(text)
}

function showItemList(text) {
    // Create Item div to put items in separate block
    let item_list = document.createElement('div')
    item_list.className = 'item'
    get_item_div.append(item_list)
    // Create box to add text item list
    let box_item = document.createElement('div');
    box_item.className = 'box-item'
    item_list.append(box_item);
    // Create button delete
    let delete_btn = document.createElement('button')
    delete_btn.className = 'delete-btn'
    item_list.append(delete_btn);
    delete_btn.textContent = 'Delete';
    addTextList(text, box_item)
}

$('.add-btn').on('clickDelete', function () {
    alert("delete-btn clicked")
})
$('.add-btn').click(function () {
    $(this).trigger('clickDelete')
})



// function notify() {
//     alert("clicked");
// }
// $(".add-btn").on("click", notify);