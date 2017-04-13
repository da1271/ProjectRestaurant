angular.module('myApp')
  .controller('yelpController', yelpController)

yelpController.$inject = ['$state', '$scope', '$http']

function yelpController($state, $scope, $http) {
  var vm = this
  vm.title = "Random Restaurant"
  vm.yelpSearch = yelpSearch
  vm.search = {}
  vm.allRestaurants = []
  vm.favorite = []
  vm.yelpFavorite = yelpFavorite

function yelpFavorite(){
$http.post('/users/addFavorite', vm.allRestaurants)
  .then(function(data){
    console.log(data)
  })


}

  function yelpSearch() {
    var searchTerm = vm.search.term,
        openNow    = vm.search.open,
        price      = String(vm.search.price),
        zipSearch  = vm.search.zip
        rating     = vm.search.rating
        $http({
                  url: '/restaurants/search',
                  method: "GET",
                  params: {term: searchTerm, zip: zipSearch, categories: 'restaurants', open_now: openNow, price: price, rating: rating}
                })
                .then(function(res) {
                  console.log(res.data.businesses)
                  vm.allRestaurants = res.data.businesses[Math.floor(Math.random() * res.data.businesses.length)]
                    console.log(vm.allRestaurants)
                })
              }}
