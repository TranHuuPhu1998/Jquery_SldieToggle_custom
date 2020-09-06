$('.toggle').click(function(e) {
  	e.preventDefault();
  
    let $this = $(this);
  
    if ($this.prev().hasClass('show')) {
        $this.prev().removeClass('show');
        $this.prev().slideUp(500);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.prev().toggleClass('show');
        $this.prev().slideToggle(500);
    }
});