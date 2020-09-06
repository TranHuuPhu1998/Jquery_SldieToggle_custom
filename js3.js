


var toggle = $('.toggle').prev().height()
var temp_height = toggle - 260;
$('.toggle').prev().height(temp_height);
console.log("toggle", toggle)
var height_value = 0;
$('.toggle').click(function(e) {
  e.preventDefault();

  let $this = $(this);

  if ($this.prev().hasClass('show')) {
    $this.prev().removeClass('show');
    $this.prev().height(temp_height);
} else {
    $this.parent().parent().find('li .inner').removeClass('show');
    $this.parent().parent().find('li .inner').height(temp_height);
    $this.prev().toggleClass('show');

    $this.prev().height(toggle);
}
});