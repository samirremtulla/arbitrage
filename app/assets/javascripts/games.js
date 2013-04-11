$(document).ready(function(){
  console.log("hello!");

  var _stocks;
  

  function randomPrice(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }

  Stock = function(name, minPrice, maxPrice){
    this.name = name;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    // this.previousPrice = previousStockPrice();
    this.currentPrice = randomPrice(minPrice, maxPrice);
  }

  _stocks = [
  new Stock('Silver', 250, 500),
  new Stock('Titanium', 100, 250),
  new Stock('Sugar', 350, 500),
  new Stock('Gold', 1000, 1500),
  new Stock('Coffee', 5, 25),
  ];

  function printStocks(){
    for (i=0; i<1; i++){
      var $row, $stock;
      $row=$("<tr>");
      $stock=$("<td>").addClass('stock');
      console.log(_stocks[i].name);
      console.log($row);
      console.log(_stocks[i].currentPrice);

      $(".prices_monitor .table tbody").append('<tr>');
      $(".prices_monitor .table tbody").append('<td>' + _stocks[i].name +'</td>');
      $(".prices_monitor .table tbody").append('<td>' + _stocks[i].currentPrice +'</td>');
      $(".prices_monitor .table tbody").append('<td>t3</td>');
      $(".prices_monitor .table tbody").append('<td><button>Buy</button></td>');
      $(".prices_monitor .table tbody").append('</tr>');
    }
  }


  // function previousStockPrice(){
  //   for (i=0;i<1;i++){
  //     if (_stocks[i].currentPrice===0){
  //       return 0;
  //     }
  //     else{
  //       return _stocks[i].currentPrice;  
  //     }
  //   }
  // }

  printStocks()

});

// var isis = function(){
//   var $_stocks
//   var _stocks

//   function getRandomIntInRange(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
//   }

//   Stock = function(name, minPrice, maxPrice){
//     this.name = name;
//     this.minPrice = minPrice;
//     this.maxPrice = maxPrice;
//     this.recalculatePrice();
//   }

//   Stock.prototype.recalculatePrice = function(){
//     this.currentPrice = getRandomIntInRange(this.minPrice, this.maxPrice)
//   }

//   _stocks = [
//     new Stock('Silver', 250, 500),
//     new Stock('Titanium', 100, 250),
//     new Stock('Sugar', 350, 500),
//     new Stock('Gold', 1000, 1500),
//     new Stock('Coffee', 5, 25),
//   ];

// function printStocks(){
//   $_stocks.text('')

//   for (k in _stocks){
//     var v, stocks, $row, $stock, $value, $buttonGroup;
//     $row = $('<tr>');
//     $stock = $('<td>').addClass('stock');
//     $value = $('<td>').addClass('value');
//     v = stocks[k];

//     $stock.text(v.name);
//     $stock.text('$' + v.currentPrice);
      
//     $row.append($stock);
//     $row.append($value);
      
//     $_stocks.append($row);

//   }

// }

// }();