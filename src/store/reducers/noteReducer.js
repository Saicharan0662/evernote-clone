// Initiali state
const initialstate = {
    note_to_edit: {}
}

// Edit note action
const noteReducer = (state = initialstate, { type, payload }) => {
    switch (type) {

        case 'EDIT_NOTE':
            return payload

        default:
            return state
    }
}

export default noteReducer