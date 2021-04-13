const axios = require('axios');

const fetch = require('node-fetch');


const baseURL = 'https://api.fbi.gov/wanted/v1/list';

// axios.get(baseURL).then(resp => {

//     console.log(resp.data);
// });


// fetch(baseURL)
//     .then(res => res.text())
//     .then(body => console.log(body));


//     import fetch from './fetch'

(async () => {
  const content = await fetch(baseURL);
  const data = await content;
  console.log(data);
})();