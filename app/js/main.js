window.onload = function() {

   $('.page-block2_new').addClass("expand animated zoomIn");
    $('.page-block1_text').addClass("page-block1_text_top");
    $('.page-audio_menu').addClass("page-audio_menu_js");
    $('.page-audio_block1_wrapper').addClass("page-block1_text_top");




    $(".page-wrapper1_content1_button").click(function(){
        $(".page-wrapper1_content1_audio").toggleClass("expand animated zoomIn");
    });


    $('.slider1').adipoli({
        'startEffect' : 'overlay',
        'hoverEffect' : 'sliceDown'
    });






    $('#slidorion').slidorion({
        speed: 500,
        interval: 90000000
    });

    $(function() {

        $(window).scroll(function() {





            if($(this).scrollTop() > 1) {

                $('.header_wraper2').addClass("sticky");
                $('.logo-a ').addClass("sticky-a");
                $('.header_wraper-ul').addClass("sticky-ul");
                $('.header_wraper-menu').addClass("sticky-menu");

            } else {

                $('.header_wraper2').removeClass("sticky");
                $('.logo-a').removeClass("sticky-a");
                $('.header_wraper-ul').removeClass("sticky-ul");
                $('.header_wraper-menu').removeClass("sticky-menu");


            }

        });

        $(window).scroll(function() {

            if($(this).scrollTop() > 100) {

                $('.page-wrapper1_content1_text_er1').addClass("page-wrapper1_content1_text_er1_stick");




            } else {

                $('.page-wrapper1_content1_text_er1').removeClass("page-wrapper1_content1_text_er1_stick");



            }

            if($(this).scrollTop() > 200) {

                $('.page-wrapper1_content1_text_er1').addClass("page-wrapper1_content1_text_er1_stick2");
                $('.page-wrapper1_content1_button').addClass("page-wrapper1_content1_text_er1_stick2");
                $('.page-wrapper1_content1_audio').addClass("page-wrapper1_content1_text_er1_stick2");
            }

            else {

                $('.page-wrapper1_content1_text_er1').removeClass("page-wrapper1_content1_text_er1_stick2");
                $('.page-wrapper1_content1_button').removeClass("page-wrapper1_content1_text_er1_stick2");
                $('.page-wrapper1_content1_audio').removeClass("page-wrapper1_content1_text_er1_stick2");


            }

            if($(this).scrollTop() > 500) {
                $(".page-wrapper3_content3-r").addClass('animated zoomIn');
                $(".page-wrapper3_content3-l").addClass('animated zoomIn');

                $('.page-wrapper2_content2-button').addClass("page-wrapper2_content2-button-ml");
                $('.page-wrapper2_content2-button2').addClass("page-wrapper2_content2-button-mr");
            }

            else {
                $(".page-wrapper3_content3-r").removeClass('animated zoomIn');
                $(".page-wrapper3_content3-l").removeClass('animated zoomIn');

                $('.page-wrapper2_content2-button').removeClass("page-wrapper2_content2-button-ml");
                $('.page-wrapper2_content2-button2').removeClass("page-wrapper2_content2-button-mr");


            }
            if($(this).scrollTop() > 1000) {
                $(".page-wrapper3_content3-r").addClass('animated zoomIn ml');
                $(".page-wrapper3_content3-l").addClass('animated zoomIn ml');
            }
            else {
                $(".page-wrapper3_content3-r").removeClass('animated zoomIn ml');
                $(".page-wrapper3_content3-l").removeClass('animated zoomIn ml');
            }

            if($(this).scrollTop() > 1700) {
                $(".page-wrapper4_content4-el-ut").addClass('cirl');
            }
            else {
                $(".page-wrapper4_content4-el-ut").removeClass('cirl');
            }

            });

    });

}