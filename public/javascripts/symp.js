let step_a_val;
let step_b_val;

$( document ).ready(function() {

    $(document).on('click', '[data-step="a"]', function() {
        step_a_val = $(this).attr("data-val");
        if(step_a_val == 'symptome'){
            $( '#step_a' ).addClass('hide')
            $( '#step_b' ).removeClass('hide')
        }else{
            $( '#step_a' ).addClass('hide')
            $( '#step_2' ).removeClass('hide')
        }
    });

    // Partie Symptome
    $(document).on('click', '[data-val="symptome"]#inp-step-b-symp', function() {
        $( this ).val('Mal de tête')
        $( '#step_c' ).removeClass('hide')
    });

    $(document).on('click', '[data-val="symptome"]#inp-step-c-symp', function() {
        $( this ).val('Nausée')
        $( '#step_d' ).removeClass('hide')
    });

    $(document).on('click', '[data-val="symptome"]#inp-step-d-symp', function() {
        $( this ).val('Depuis 1 jour')
        $( '#step_e' ).removeClass('hide')
    });

    $(document).on('click', '[data-val="symptome"]#inp-step-e-symp', function() {
        $( this ).val('Douleur 4 / 10')
        $( '#send_btn-symptome' ).removeClass('hide')
    });

    

    // Partie urgence
    $(document).on('click', '[data-val="urgence"]#inp-step-2-symp', function() {
        $( this ).val('Coupure')
        $( '#step_3' ).removeClass('hide')
    });

    $(document).on('click', '[data-val="urgence"]#inp-step-3-symp', function() {
        $( this ).val('Hémoragie')
        $( '#step_4' ).removeClass('hide')
    });

    $(document).on('click', '[data-val="urgence"]#inp-step-4-symp', function() {
        $( this ).val('15 minutes')
        $( '#step_5' ).removeClass('hide')
    });

    $(document).on('click', '[data-val="urgence"]#inp-step-5-symp', function() {
        $( this ).val('Douleur 9 / 10')
        $( '#send_btn-urgence' ).removeClass('hide')
    });
});
