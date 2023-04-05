let create_new_list_btn = $('.new-list')
let input_text_create_list = $('.input-list-name')
let insert_list_name = $('.insert-list-name')

create_new_list_btn.click(function(){
    if(insert_list_name.hasClass('hide')){
        insert_list_name.removeClass('hide')
        insert_list_name.addClass('show')
    }else{
        insert_list_name.removeClass('show')
        insert_list_name.addClass('hide')
    }
})


function createList(){
    let list_name = input_text_create_list.val()
    console.log(list_name)
}