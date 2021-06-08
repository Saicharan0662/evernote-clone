import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import Notelist from './Notelist'

const Favorite = () => {
    // Getting the note whose favorite is true
    useFirestoreConnect([{ collection: 'notes', where: ['favorite', '==', true], orderBy: ['createdAt', 'desc'], storeAs: 'favnotes' }])
    const favnotes = useSelector(state => state.firestore.ordered.favnotes)
    // console.log("fav ", favnotes)
    return (
        <Notelist notes={favnotes} />
    )
}

export default Favorite
