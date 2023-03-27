let input_field = $(".input-text")
let add_btn = $(".add-btn")
let show_item_listed = $(".box-item")



// get text inserted on input_field
function getTextItemList(){
    let text = input_field.val()
    console.log(text)
    showItemList(text)
}
function showItemList(text){
    console.log(text + " on show")
    show_item_listed.text(text)
}