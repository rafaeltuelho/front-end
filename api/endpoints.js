(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    //@TODO: change catalogue and tags endpoints URL
    catalogueAggregatorUrl:  util.format("http://shop-catalogue-api-aggregator%s:8080/camel", domain),
    tagsAggregatorUrl:       util.format("http://shop-catalogue-api-aggregator%s:8080/camel/catalogue/tags", domain),
    socksCatalogueUrl:  util.format("http://catalogue%s", domain),
    shoesCatalogueUrl:  util.format("http://shoes-catalogue-application%s:8080", domain),
    cartsUrl:      util.format("http://carts%s/carts", domain),
    ordersUrl:     util.format("http://orders%s", domain),
    customersUrl:  util.format("http://user%s/customers", domain),
    addressUrl:    util.format("http://user%s/addresses", domain),
    cardsUrl:      util.format("http://user%s/cards", domain),
    loginUrl:      util.format("http://user%s/login", domain),
    registerUrl:   util.format("http://user%s/register", domain),
  };
}());
