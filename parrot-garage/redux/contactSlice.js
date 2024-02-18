// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     contacts: [],
//     center: { lat: 49.443232, lng: 1.099971 },
//     userPos: null,
//     selectedContact: null,
//     refresh: false
// }

// export const contactSlice = createSlice({
//     name:"contact",
//     initialState,
//     reducers: {
//         save: (state, action) => {
//             state.contacts = action.payload
//         },
//         setCenter: (state, action) => {
//             state.center = action.payload
//         },
//         setUserPos: (state, action) => {
//             state.userPos = action.payload
//         },
//         setSelectedContact: (state, action) => {
//             state.selectedContact = action.payload
//         },
//         setRefresh: (state, action) => {
//             state.refresh = action.payload;
//         }
//     }
// })

// export const { save, setCenter, setUserPos, setSelectedContact, setRefresh } = contactSlice.actions
// export default contactSlice.reducer