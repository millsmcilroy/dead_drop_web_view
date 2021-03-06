// This service handles CRUD actions with the back-end
angular.module('starter.services')
.service('crudService', ['$http', '$window', crudService]);

function crudService($http) {

  var URL = "http://localhost:5000/api";

  return {
    getAllPins: function (token) {
      return $http.get(URL + '/getpins', {
          headers: {
            'x-access-token': token
          }
        })
        .then(function(res){
          return res;
        })
        .catch(function(err){
          return err;
        });
    },
    getCardsByDeck: function (deck_id, token) {
      return $http.get(URL+'cardsbydeck/' + deck_id, {
          headers: {
            'x-access-token': token
          }
        })
        .then(function(res){
          return res;
        })
        .catch(function(err){
          return err;
        });
    },
    createNewDeck: function (deck, cards,token) {
      return $http.post(URL+'newdeck/', {
          headers: {
            'x-access-token': token,
          },
          deck: deck,
          cards: cards
        })
        .then(function(res){
          return res;
        })
        .catch(function(err){
          return err;
        });
    }
  };
}
