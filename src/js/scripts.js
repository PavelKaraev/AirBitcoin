(function($){
    $('.accordion-header').click(function(){
        if($(this).next().is(":visible")){
            $(this).next().hide('slow');
        }
        else{
            $('.accordion-body:visible').hide('slow');
            $(this).next().show('slow');
        }
    });
    $('.open-popup').click(function(){
        $('.b-popup').fadeIn();
    });
    $('.close-popup').click(function(){
        $('.b-popup').fadeOut();
    });
    $(document).mouseup(function (e) {
        var container = $('.b-popup-content');
        if (container.has(e.target).length === 0){
            $('.b-popup').fadeOut();
        }
    });
    $('.sum-radio').change(function(){
        $('.sum-radio').each(function(){
            if($(this).prop("checked")){
                $('.sum-input').val($(this).val());
            }
        })
    })
    $('.sum-input').change(function(){
        $('.sum-radio').each(function(){
            if($(this).val() == $('.sum-input').val()){
                $(this).prop('checked', 'true');
            }
        })
    })
    $('.copy-link').click(copyLink);
    function copyLink() {
      /* Get the text field */
        var target = document.getElementById('referal-link')
        var rng, sel;
        if (document.createRange) {
          rng = document.createRange();
          rng.selectNode(target)
          sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(rng);
        } else {
          var rng = document.body.createTextRange();
          rng.moveToElementText(target);
          rng.select();
        }
        document.execCommand("copy");
    }
})(jQuery)
