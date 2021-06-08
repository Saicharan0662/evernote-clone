import React from 'react'
import Form from './Form'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import Notelist from '../notes/Notelist'

const Home = () => {
    // Getting the collections notes from firestore
    useFirestoreConnect([{ collection: 'notes', orderBy: ['createdAt', 'desc'] }])
    const notes = useSelector(state => state.firestore.ordered.notes)
    // console.log(notes);
    return (
        <div>
            <div className="container">
                <div className="row center-aling">
                    <div className="col s7"><Form /></div>
                    <div className="col s5"><Notelist notes={notes} /></div>
                </div>
            </div>
        </div>
    )
}

export default Home
