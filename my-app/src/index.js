import React from 'react'
import ReactDOM from 'react-dom'

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false,
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
    },
]

const Note = ({id, content, date }) => {

    return ( 
    <li>
        <p>{content}</p>
        <small>
        <p><time>{date}</time></p>
        </small>
    </li>

    )
}

export default function App() {
    return (
        <ol>
            {notes.map(note => (

             <Note key={note.id} id={note.id} content={note.content} date={note.date} />
        
    ))}
    </ol>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))
