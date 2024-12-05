// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}

//function with valid url
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

//function with invalid url

fetchURLData('https://invalid-url.typicode.com')
.then(data => console.log(" Function invalid url:", data))
.catch(error => console.error(" Function Error:", error.message));


//use async/await

async function fetchURLAsync(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw error;
    }
}

//async function with valid url

fetchURLAsync('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

//async function with invalid url

fetchURLAsync('https://invalid-url.typicode.com')
.then(data => console.log('async function with invalid url:'+data))
.catch(error => console.error('async function  error:'+error.message));