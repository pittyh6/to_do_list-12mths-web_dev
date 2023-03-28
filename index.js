let input_field = $(".input-text")
let add_btn = $(".add-btn")
let show_item_listed = $(".box-item")
let get_item_div = $(".items")


// get text inserted on input_field
function getTextItemList() {
    let text = input_field.val()
    //addTextList(text)
    showItemList(text)
}
function addTextList(text, box_item) {
    let getText = text
    show_item_listed.text(getText)
    box_item.text(getText)
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


    addTextList(text, box_item)
}