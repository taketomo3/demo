'use strict';
// for(let i=0; i<4; i++){
//     var elements = document.getElementById(`element${i}`);
//     var btn = document.getElementById(`btn${i}`);
//     (function($){
//         $(document).ready(function(){
//             elements.hide();

//             btn.hover(function(){
//                 elements.toggle();
//             });
//         });
//     })(jQuery);
// };

$(function(){
    $('.comment').hide();
    $('.grid_test-child').hover(
    function(){
        $(this).children('.comment').fadeIn('fast');
    },
    function(){
        $(this).children('.comment').fadeOut('fast');
    });
});

// (function($){
//     $(document).ready(function(){
//         $("#element").hide();

//         $("#btn").hover(function(){
//             $("#element").toggle();
//         });
//     });
// })(jQuery);

// (function($){
//     $(document).ready(function(){
//         $("#element1").hide();

//         $("#btn1").hover(function(){
//             $("#element1").toggle();
//         });
//     });
// })(jQuery);
// (function($){
//     $(document).ready(function(){
//         $("#element2").hide();

//         $("#btn2").hover(function(){
//             $("#element2").toggle();
//         });
//     });
// })(jQuery);
// (function($){
//     $(document).ready(function(){
//         $("#element3").hide();

//         $("#btn3").hover(function(){
//             $("#element3").toggle();
//         });
//     });
// })(jQuery);