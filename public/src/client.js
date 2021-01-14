"use strict";

$(window).on('action:share.addHandlers', function (evt, params) {
  addHandler('[component="share/vkontakte"]', function () {
    return params.openShare('https://vk.com/share.php?url=', getPostUrl($(this)), 500, 570);
  });
});

function addHandler(selector, callback) {
  $('#content').off('click', selector).on('click', selector, callback);
}

function getPostUrl(clickedElement) {
  var pid = parseInt(clickedElement.parents('[data-pid]').attr('data-pid'), 10);
  return '/post' + (pid ? '/' + (pid) : '');
}