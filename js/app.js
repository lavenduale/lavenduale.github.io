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

        // progress bar function
        function move(num) {
            var numberP = num;
            var elem = document.getElementById("myBar");     
            var width = 20;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= numberP) {
                clearInterval(id);
                numberP = 100;
              } else {
                width++; 
                elem.style.width = width + '%'; 
                elem.innerHTML = width * 1  + '%';
              }
            }
          }