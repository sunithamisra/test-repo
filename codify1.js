function modify_text() {
  var $this = $(this), tokens
  tokens = $this.text().split(/\.?\,?\s+|\.$/).slice(0,-1)
  $this.html('<span>' + tokens.join('</span> <span>') + '</span>')
}

function handle_tokenize_button_click(e) {
  print("HHHHHHHHHH");
  $(e.target).attr('disabled','disabled')
  $('#codify').removeAttr('disabled')
  $('p').each(modify_text)
}

$('#modify_text').click(handle_tokenize_button_click)
$('#codify').click(handle_codify_button_click)


