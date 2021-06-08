import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { deleteNote } from '../../store/action/noteActions'
import { toggleFav } from '../../store/action/noteActions'
import { useDispatch } from 'react-redux'

const Note = ({ note }) => {
    const dispatch = useDispatch()

    // dispatching different actions
    const deleteNoteHandeler = () => {
        dispatch(deleteNote(note))
    }
    const toggleFavHandeler = () => {
        dispatch(toggleFav(note))
    }
    const editNoteHandeler = () => {
        dispatch({ type: 'EDIT_NOTE', payload: note })
    }

    // Dynamic Styling
    const heartMarkup = note.favorite ? 'favorite' : 'favorite_border'

    return (
        <div className='note white'>
            <div className="right-aling">
                <i className="material-icons red-text" style={{ cursor: 'pointer' }} onClick={toggleFavHandeler}>{heartMarkup}</i>
                <i className="material-icons" style={{ cursor: 'pointer' }} onClick={deleteNoteHandeler}>delete</i>
            </div>
            <Link to={'/note/' + note.id}><h5 className="black-text">{note.title}</h5></Link>
            <p className="truncate">{note.content}</p>
            <p className="grey-text center-aling">{moment(note.createdAt.toDate()).fromNow()}</p>
            <p className="right-aling"> <Link to={`/editform/${note.id}`}><i className="material-icons black-text" style={{ cursor: 'pointer' }} onClick={editNoteHandeler}>edit</i></Link></p>
        </div>
    )
}

export default Note
