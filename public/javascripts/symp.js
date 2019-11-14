let step_a_val;
let step_b_val;

$(document).on('click', '[data-step="a"]', function() {
    step_a_val = $(this).attr("data-val");
    $( '#step_a' ).addClass('hide')
    $( '#step_b' ).removeClass('hide')
});


$(document).on('click', '[data-step="b"]', function() {

});