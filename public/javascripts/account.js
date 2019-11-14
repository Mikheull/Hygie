$(document).on('click', '.edit-btn', function() {
    
    $(this).parent().next('.view').addClass('hide');
    $(this).parent().next('.view').next('.edit').removeClass('hide');
    $(this).addClass('hide');
    
});