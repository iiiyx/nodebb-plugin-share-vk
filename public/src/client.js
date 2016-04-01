$(window).on('action:share.addHandlers', function(evt,params) {
  addHandler('[component="share/vkontakte"]', function () {
    return params.openShare('https://vk.com/share.php?url=', getPostUrl($(this)), 500, 570);
  });
});  

function addHandler(selector, callback) {
  $('#content').off('click', selector).on('click', selector, callback);
}

function getPostUrl(clickedElement) {
  var parts = window.location.pathname.split('/');
  var postIndex = parseInt(clickedElement.parents('[data-index]').attr('data-index'), 10);
  return '/' + parts[1] + '/' + parts[2] + (parts[3] ? '/' + parts[3] : '') + (postIndex ? '/' + (postIndex + 1) : '');
}