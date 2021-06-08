import React from 'react'
import useInput from '../../customhook/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../store/action/noteActions'
import { useHistory } from 'react-router-dom'

const EditForm = () => {
    // Getting note from state, as EDIT_NOTE action fired | not from firestore for faster access
    const note = useSelector(state => state.note)
    const history = useHistory()
    const [title, bindTitle, resetTitle] = useInput(note.title)
    const [content, bindContent, resetContent] = useInput(note.content)
    const dispatch = useDispatch()

    const handelSubmit = e => {
        e.preventDefault()
        dispatch(updateNote({ id: note.id, title, content }));
        resetContent()
        resetTitle()
        // Redirecting to home after submiting the edit
        history.push('/')
    }

    return (
        <div className='section'>
            <form onSubmit={handelSubmit} className='white'>
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field">
                    <input {...bindTitle} type="text" id="note_title" className='validate' />
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea {...bindContent} id="note_content" className='materialize-textarea'></textarea>
                    <label className="active" htmlFor="note_content">Note Content</label>
                </div>
                <button className='btn green'>Update</button>
            </form>
        </div>
    )
}

export default EditForm
