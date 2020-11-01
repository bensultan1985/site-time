$(document).ready(() => {
    // $('#add-grid').hide()
    // $('#add-grid-sister').hide()
})

// $('#add-site').on('click', () => {
//     $('#add-grid').toggle()
// })

// $('#add-site-sister').on('click', () => {
//     $('#add-grid-sister').toggle()
// })

$('.grid-item-sister').on('click', () => {
    $(this).className = 'grid-item-selected'
})

$(".trigger_popup_fricc").click(function(){
    $('.hover_bkgr_fricc').show();
 });
//  $('.hover_bkgr_fricc').click(function(){
//      $('.hover_bkgr_fricc').hide();
//  });
 $('.popupCloseButton').click(function(){
     $('.hover_bkgr_fricc').hide();
 });



 $("#trigger-other-cities").click(function(){
    $('#add-other-cities').show();
 });
 $("#trigger-site").click(function(){
    $('#add-site-site').show();
 });

//  $("#trigger-sister-box").click(function(){
//     $('#add-sister-box').show();
//  });
//  $("#trigger-site-box").click(function(){
//     $('#add-site-box').show();
//  });

 $('.close-sub').click(function(){
     $('.hover_bkgr_fricc-sub').hide();
 });

 $('.close-main').click(function(){
    $('.hover_bkgr_fricc').hide();
});