const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function getBookTitle(bookId){
       let b= books.find(book=>bookId==book.id);
    //   if(b){
    //     return "id:"+ b.id +"\ntitle: "+b.title;
    //   }
    //   else{
    //    return  null;
    //   }
        return b ?  "id:"+ b.id +"\ntitle:"+b.title:null;
    }

    console.log(getBookTitle(4));
    console.log(getBookTitle(10));

    function getOldBooks(){
       return books.filter(book=>book.year<1950)
    }
    console.log(getOldBooks());

    function addGenre(){
        let genre=books.map(book=>({...book,genre:'classic'}));
        return genre;
    }

    console.log(addGenre());

    function getTitles(authorInitial){
       const initial= books.filter(book=>book.author.charAt(0)==authorInitial).map(book=>book.title);
       return initial;
    }
    console.log(getTitles('G'));

    function latestBook(){
    
    let Book='';
    let publicationDate=0;

    books.forEach(book=>{
        if(book.year>publicationDate){
            publicationDate=book.year;
            Book=book;
        }
    });
    return Book;
    }

    console.log('\n----recent Book------\n')
   console.log(latestBook());