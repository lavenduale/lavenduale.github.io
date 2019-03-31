        // get the current year for the copyright
        $('#year').text(new Date().getFullYear());

        // resume button seperate js&jquery
        $('.port-item').click(function() {
            $('.collapse').collapse('hide');
        });

        //jquery
        $(document).on('click','[data-toggle="lightbox"]', function(e){
            e.preventDefault();
            $(this).ekkoLightbox();
        });