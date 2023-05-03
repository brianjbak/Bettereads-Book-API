import styled from 'styled-components'

export default function Book({ title, author, pages, link }) {
  return (
    <BookWrapper>
      <h1>{title}</h1>
      <h2>by {author}</h2>
      <p>Number of Pages: {pages}</p>
      <a href={link}>Learn More:</a>
    </BookWrapper>
  )
}

const BookWrapper = styled.article`
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;

  a {
    display: inline-block;
    padding: 10px;
    background-color: white;
    color: black;
    text-decoration: none;
    border-radius: 5px;
    border: 2px solid black;
    transition: background-color 0.2s ease-in-out;
  }

  a:hover {
    background-color: gray;
  }
`

