$(document).ready(function(){
  // console.log("hello!");

  var _stocks, _balance;
  

  function randomPrice(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }

  Stock = function(name, minPrice, maxPrice, quantity){
    this.name = name;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.quantity = quantity;
    // this.previousPrice = previousStockPrice();
    this.currentPrice = randomPrice(minPrice, maxPrice);
  }

  _stocks = [
  new Stock('Silver', 250, 500, 0),
  new Stock('Titanium', 100, 250, 0),
  new Stock('Sugar', 350, 500, 0),
  new Stock('Gold', 1000, 1500, 0),
  new Stock('Coffee', 5, 25, 0),
  ];

  function printStocks(){
    for (i=0; i<_stocks.length; i++){
    //for (i=0; i<4; i++){
      var $row, $stock;
      $row=$("<tr>");
      $stock=$("<td>").addClass('stock');
      // console.log(_stocks[i].name);
      // console.log($row);
      // console.log(_stocks[i].currentPrice);

      $(".prices_monitor .table tbody").append('<tr>');
      $(".prices_monitor .table tbody").append('<td>' + _stocks[i].name +'</td>');
      $(".prices_monitor .table tbody").append('<td class ="current_price' + i + '">' + '$' + _stocks[i].currentPrice +'</td>');
      $(".prices_monitor .table tbody").append('<td><button data-stock-id="'+i+'" class="btn game-buy">Buy</button></td>');
      // console.log('<td><button data-stock-id="'+i+'">Buy</button></td>');
      $(".prices_monitor .table tbody").append('</tr>');
    }
  }

  //listens for button press
  _balance = 500;


  function printInitialBalance(){
    $(".balance").append('<th class="balance_value">' + '$' + _balance +'</th>');
  }

  function updatedBalance(dollars){
    _balance = _balance + dollars;
    // console.log(_balance);
    $('.balance_value').replaceWith('<th class="balance_value">' + '$' + _balance +'</th>');
  }

  function buyItem(id){
    var currentItem = _stocks[id];
    // console.log(currentItem);
    var quantity = parseInt(prompt("How much would you like to buy? All metrics are in pounds."));
    
    //check if they can afford it
    var cost = quantity * currentItem.currentPrice;
    // console.log(cost);
    if (_balance<cost){
      alert("You can't afford this!");
    }
    else{
      updatedBalance(-cost);
      alert("You just bought " + quantity + "lb. of " + currentItem.name + " for $" + cost);
      updateInventory(id, quantity);
    }  
  }


  function sellItem(id){
    var currentItem = _stocks[id];
    // console.log(currentItem);
    var quantity = parseInt(prompt("How much would you like to sell? All metrics are in pounds."));
    var funds = quantity * currentItem.currentPrice

    //check if they have the amount
    if (currentItem.quantity<quantity){
      alert("You can't sell this much!");
    }
    else{
      updatedBalance(funds);
      alert("You just sold " + quantity + "lb. of " + currentItem.name + " for $" + currentItem.currentPrice);
      updateInventory(id, -quantity);
    }  
  }


  function printInventory(){
     for (i=0; i<_stocks.length; i++){

      var currentValue = _stocks[i].currentPrice * _stocks[i].quantity;

      $(".user_panel .table tbody").append('<tr>');
      $(".user_panel .table tbody").append('<td>' + _stocks[i].name +'</td>');
      $(".user_panel .table tbody").append('<td class="current_quantity'+i+'">' +  _stocks[i].quantity +'</td>');
      $(".user_panel .table tbody").append('<td class="current_value'+i+'">' + '$' + currentValue +'</td>');
      $(".user_panel .table tbody").append('<td><button data-stock-id="'+i+'" class="btn game-sell">Sell</button></td>');
      $(".user_panel .table2 tbody").append('</tr>');
    }console.log('<td class="current_quantity'+i+'">');
  }

  function updateInventory(id, quantity){
    _stocks[id].quantity += quantity;
    var currentValue = _stocks[id].currentPrice * _stocks[id].quantity;
    $('.current_quantity'+id).replaceWith('<td class="current_quantity'+id+'">' +  _stocks[id].quantity +'</td>');
    $('.current_value'+id).replaceWith('<td class="current_value'+id+'">' + '$' + currentValue +'</td>');
  }
      // $(".prices_monitor .table tbody").append('<td class ="current_price' + i + '">' + '$' + _stocks[i].currentPrice +'</td>');

  function updatePrices(id){
    // _stocks[id].quantity += quantity;
    $('.current_price'+id).replaceWith('<td class ="current_price' + id + '">' + '$' + _stocks[id].currentPrice +'</td>');
    console.log('.current_value'+id);
  }

  function nextTurn(){
    for (i=0; i<_stocks.length;i++){
      _stocks[i].currentPrice = randomPrice(_stocks[i].minPrice, _stocks[i].maxPrice);
      updatePrices(i)
      updateInventory(i,0);
    }

  }

  function gameOver(){
    //http://www.webdeveloperjuice.com/2012/03/29/how-to-make-snake-game-using-jquery/
  }

//*******ACTUAL GAME*********//

    printStocks();
    printInitialBalance();
    printInventory();
    playGame();


  function playGame(){
    var count = 15;
      $(".game-buy").click(function(){
          // alert($(this).attr("data-stock-id"));
          var id = $(this).attr("data-stock-id");
          buyItem(id);
      });

      $(".game-sell").click(function(){
          // alert($(this).attr("data-stock-id"));
          var id = $(this).attr("data-stock-id");
          sellItem(id);
      });

      $(".next_day_btn").click(function(){
          console.log(count);
          count -= 1;
          nextTurn();
          if (count ===0){
            alert("Game Over! Your score was $" + _balance);
      $(".next_day_btn").replaceWith("<a><button class='btn btn-large btn-danger' style='margin-top:20px'>High Scores</button></a>");
          }
      $('.turns').replaceWith('<p class="turns"> Turns Remaining: ' + count +'</p>');

    });

  }

});