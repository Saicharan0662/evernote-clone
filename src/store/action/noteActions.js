
// Add note action, stores in firestore, using add method
export const addNote = note => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes')
            .add({
                ...note,
                favorite: false,
                createdAt: new Date()
            })
            .then(() => {
                console.log('note added succesfully');
            })
            .catch(err => {
                console.log(err);
            })
    }
}

// Deleting the specific note, using delete method
export const deleteNote = note => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                console.log('note deleted succesfully');
            })
            .catch(err => {
                console.log(err);
            })
    }
}

// ToggleFav action using, update method
export const toggleFav = note => {
    return (dispatch, getState, { getFirestore }) => {
        const favstatus = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: favstatus
        })
            .then(() => console.log("toggle favorite succesfully"))
            .catch(err => console.log(err))
    }
}

// Updating note title and content, using update method
export const updateNote = note => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            content: note.content
        })
            .then(() => console.log("edited succesfully"))
            .catch(err => console.log(err))
    }
}