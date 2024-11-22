
//creating a json object variable for a book.
const Book ={
    title:"Where the Crawdads Sing",
    description:"This poignant novel follows the life of Kya Clark, the Marsh Girl, who grows up isolated in the marshes of North Carolina. As she navigates loneliness and the harsh realities of life, Kya becomes an expert in the natural world. The story intertwines her coming-of-age journey with a murder mystery that unfolds in the nearby town, exploring themes of love, abandonment, and resilience.",
    author:"Delia Owens",
    numberofpages:368
}

// Print each property individually
console.log("Title: "+ Book.title);
console.log("Description: "+ Book.description);
console.log("Author: "+ Book.author);
console.log("Number of Pages: "+ Book.numberofpages);

// Print the whole Book object
console.log("Book  : ",Book);

//update the description of book

Book.description="An evocative tale of survival and mystery, following Kya Clark, who learns life's secrets through the natural world around her. Set against a backdrop of suspense, the story explores themes of love, loss, and resilience.";

//print updated book object
console.log("Updated Book Object : ",Book);