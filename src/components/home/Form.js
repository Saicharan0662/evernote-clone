import React from 'react'
import useInput from '../../customhook/useInput'
import { useDispatch } from 'react-redux'
import { addNote } from '../../store/action/noteActions'

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput()
    const [content, bindContent, resetContent] = useInput()
    const dispatch = useDispatch()

    const handelSubmit = e => {
        e.preventDefault()
        dispatch(addNote({ title, content }));
        resetContent()
        resetTitle()
    }
    return (
        <div className='section'>
            <form onSubmit={handelSubmit} className='white'>
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field">
                    <input {...bindTitle} type="text" id="note_title" className='validate' />
                    <label htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea {...bindContent} id="note_content" className='materialize-textarea'></textarea>
                    <label htmlFor="note_content">Note Content</label>
                </div>
                <button className='btn green'>Add</button>
            </form>
        </div>
    )
}

export default Form

