const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitter_btn = document.getElementById('twitter');
const new_quote = document.getElementById('next-quote');
const loader = document.getElementById('loader');

let quotes;

const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 5000);
}
//  Get the quotes from API
 async function getQuotes(){
  
   const apiURL = 'https://zenquotes.io/api/random';
    try{
      showSpinner();
       await fetch(apiURL)
      .then(response=>response.json())
      .then(data=>{
        hideSpinner();
        quotes = data;
      });

        quote.textContent = quotes[0]['q'];
        author.textContent = quotes[0]['a'];
        console.log(quotes[0]['q'])

    }
  catch(error){
    getQuotes();
    console.log(error)
  }
}

function hideSpinner(){
  spinner.classList.remove('show');
}
// getQuotes();