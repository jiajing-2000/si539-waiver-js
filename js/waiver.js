document.addEventListener('DOMContentLoaded', function() {

    var figures = document.querySelectorAll('figure');
    for (var i = 0; i < figures.length; i++) {
        figures[i].classList.add('one-third');
    }

    var footer = document.querySelector('footer');
    footer.addEventListener('click', function() {
      footer.remove();
    });

    var figure5 = document.querySelectorAll('figure')[4];
    figure5.addEventListener('dblclick', function() {
      figure5.style.visibility = 'hidden';
    });

    var firstFigureCaption = document.querySelector('figure figcaption');
    var originalFont = getComputedStyle(firstFigureCaption).fontFamily;
  
    firstFigureCaption.addEventListener('mouseover', function() {
      firstFigureCaption.style.fontFamily = 'Cursive';
    });
  
    firstFigureCaption.addEventListener('mouseout', function() {
      firstFigureCaption.style.fontFamily = originalFont;
    });

    firstFigureCaption.setAttribute("tabindex", "0");

    firstFigureCaption.addEventListener("focus", function(){
        firstFigureCaption.style.fontFamily = "Cursive";
    });

    firstFigureCaption.addEventListener("blur", function(){
        firstFigureCaption.style.fontFamily = originalFont;
    });
  


}
);