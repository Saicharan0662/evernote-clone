import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isEmpty } from 'react-redux-firebase'
import moment from 'moment'

const NoteDetail = () => {
    // Getting the prop id using useParams
    const { id } = useParams()
    // Getting the selected note
    useFirestoreConnect([{ collection: 'notes', doc: 'id' }])
    const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[id])

    // Checking for invalid id, Show note is empty if that id does not exits
    const noteMarkup = isEmpty(note) ? (
        <div className='container section'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">The note content is empty</span>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                </div>
            </div>
        </div>
    ) : (
        <div className='container section'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{note?.title}</span>
                    <p>{note?.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )

    return noteMarkup
}

export default NoteDetail
