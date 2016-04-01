(function(module) {
  'use strict';
  /* globals module, require */

  var constants = Object.freeze({
    'name': 'VkShare',
    'admin': {
      'route': '/plugins/share-vkontakte',
      'icon': 'vk fa-vk'
    }
  });

  var VkShare = {
    settings: undefined
  };
  
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

  VkShare.addNetwork = function (networks, cb) {
    networks.push({
      id: "vkontakte",
      name: "Vkontakte",
      class: "fa-vk"
    });
    if (cb && typeof cb === 'function')
      cb(networks);
  }

}(module));