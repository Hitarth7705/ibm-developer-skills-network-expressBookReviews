const axios = require("axios");

// Async/Await
async function getBooks() {
    const res = await axios.get("http://localhost:5000/books");
    console.log(res.data);
}

// Promise
axios.get("http://localhost:5000/isbn/1")
.then(res => console.log(res.data))
.catch(err => console.log(err));
