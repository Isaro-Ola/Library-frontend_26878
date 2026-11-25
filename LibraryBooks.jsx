import React from 'react'

function LibraryBooks() {
  const books = [
    { 
        code: '3046', 
        name: 'Web Technology', 
        price: 100 
    },
    { 
        code: '3047', 
        name: 'Java Programming', 
        price: 200 
    },
    { 
        code: '6500', 
        name: 'Software Development', 
        price: 400 
    },
  ]

  return (
    <div>
      <h2>Library Books</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.code}>
              <td>{book.code}</td>
              <td>{book.name}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}


export default LibraryBooks
