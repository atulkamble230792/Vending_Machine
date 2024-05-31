const request = require('request');

console.log(request);

let options = {
    url: 'http://localhost:3000/products',
    method : 'GET',
    qs: {},
    headers: {
      "content-type": "application/json"
    },
    json: true,
  };

const show_products = () => {
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            
            if(!error){
                resolve(body);
            }else{
                reject({error:error , body:body});
            }
            
        });
    })
}



const testProducts = async () => { 
    try {
        const products = await show_products();
        console.log(products);
    } catch (error) {
        console.log(error);
    }
 }

 const testprod = testProducts();