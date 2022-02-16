var melisDesignTinySlider = (function(window) {
    // variable declarations
    var $body               = $("body"),
        $temp               = $("<input>")
        $btn_copy_clipboard = $(".tiny-slider .btn-clipboard");

    // methods
    function copyToClipboard( element ) {
        $body.append( $temp );
        $temp.val( $(element).text() ).trigger('select');
        document.execCommand("copy");
        $temp.remove();
    }

    // inits and event listeners
    $body.on("click", ".btn-clipboard", function() {
        var $this = $(this);

            copyToClipboard( $this.closest('.tab-pane.active').find('pre') );
    });
})(window);