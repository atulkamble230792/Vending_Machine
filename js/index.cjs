//  function show_products(){
//     const response = await fetch("http://localhost:3000/products");
//     let api_status = response.status;
//     //const jsonData = await response.json();
//     //console.log(jsonData);
//     if(api_status == 200){
//         const jsonData = await response.json();
//         if(jsonData.length > 0){
//             let product_data = '<div class="product"><div class="image-box"><img src="assets/Images/kurkure_masala_munch.jpg" alt="Denim Jeans" style="width:100%"></div><div class="text-box"><h2 class="item">Mango</h2><h3 class="price">$4.99</h3></div></div>';

//             document.getElementById("listing_product").innerHTML = product_data;
//         }else{

//         }
//     }

// }
// import {PRODUCT_DATA} from './constants.js';

// console.log(PRODUCT_DATA);

//import * as  request from "request";

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