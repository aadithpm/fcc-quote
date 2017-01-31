function doQuote()
{
  $.ajax(
    {
      headers:
      {
        "X-Mashape-Key": "yfGfkMggSQmshaas2bFA2NofxGhCp1RfniNjsnrnTv4CJTbrzm",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
      },
      url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
      success:
      function(reply)
      {
        var quote=JSON.parse(reply);
        $("#quote-text").text(quote.quote);
        $("#author-name").text(quote.author);
        $(".text-box-inner").animate({
          opacity:1
        },600);
      }
});
}

$(document)
  .ready(function()
                 {
  doQuote();
$("footer button")
  .click(function()
                   {
                    window.open
                    ("http://github.com/aadithpm","_blank_");
                    
                    });
  $(".new-button").click(function()
                        {
    $(".text-box-inner").animate(
    {
      "opacity":0
    },600);
    
    doQuote();
    
  });
  $(".tweet-button button").click(function()
                          {
    var url="https://twitter.com/intent/tweet?text="+$("#quote-text").text()+'  '+"- "+$("#author-name").text();
    console.log(url);
    window.open(url,"_blank_");
    
  });
});