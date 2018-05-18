  // alert($('#mainImage').attr('src'));
  var images=['Images/1.jpg', 'Images/2.jpg', 'Images/3.jpg', 'Images/4.jpg']
  var index=0;
function changeImage() {
    $('#mainImage').attr('src',images[index]);
    index++;

    if(index >images.length ){
       index=0;
    }

}
setInterval(changeImage,1000);


  var mainImage=$('#mainImage');

  $('#img1').click(function () {
      mainImage.attr('src',$(this).attr('src'));
  })
  $('#img2').click(function () {
      mainImage.attr('src',$(this).attr('src'));
  })
  $('#img3').click(function () {

      mainImage.attr('src',$(this).attr('src'));
  })
  $('#img4').click(function () {
      mainImage.attr('src',$(this).attr('src'));
  })





var floatingMenuposition=$('#floatingMenu').position();
// alert(floatingDivposition.top);


$(window).scroll(function () {
    // alert("browser scroll");
   // var currentScrollposition=$(window).scrollTop();
   $('#scrollposition').text(currentScrollposition);
   if(currentScrollposition>=floatingMenuposition.top)
   {
      $('#floatingMenu').css({
          'position' : 'fixed',
          'top'  : '0px',
          'width' : '90%'
      })

   }else{
       $('#floatingMenu').css({
           'position' : 'relative',
           'top'  : '0px',
           'width' : '100%'
       })

   }

})