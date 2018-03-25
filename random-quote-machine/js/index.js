const url = 'https://got-quotes.herokuapp.com/quotes';
const requestQuote = async () => {
  try{
    let response = await fetch(url);
    let json = await response.json();
    $('.quoteAuthor').text('Author: ' + json.character);
    $('.quoteText').text('Quote: ' + json.quote);
  }
  catch(e){
    console.log('Error getting json: ', e.message )
  }
}

$("#btnNewQuote").on("click", function() {
  requestQuote();
});