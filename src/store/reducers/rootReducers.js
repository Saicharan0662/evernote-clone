import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import noteReducer from './noteReducer'

// Combining noteReducer, firebaseReducer, firestoreReducer
const rootReducer = combineReducers({
    note: noteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer