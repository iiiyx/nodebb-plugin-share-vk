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
  
  VkShare.addNetwork = function (networks, cb) {
    networks.push({
      id: "vkontakte",
      name: "Vkontakte",
      class: "fa-vk"
    });
    if (cb && typeof cb === 'function')
      cb(null, networks);
  };
  module.exports = VkShare;
}(module));