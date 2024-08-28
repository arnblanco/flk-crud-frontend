import { createSlice } from "@reduxjs/toolkit";

export const nyseSlice = createSlice({
    name: 'nyse',
    initialState: {
        checkingStocks: true,
        isSaving: false,
        isEditing: false,
        formNyse: false,
        messageSaved: '',
        stoks: [],
        activeStock: null
    },
    reducers: {
        setInitialStockData: ( state, data ) => {
            state.checkingStocks = false
            state.stoks = data.payload
        },
        setActiveStock: ( state, data ) => {
            state.activeStock = data.payload
            state.formNyse = false
            state.isEditing = false
            state.isSaving = false
        },
        removeActiveStock: ( state ) => {
            state.activeStock = null
        },
        startingEdigitnActiveStock: ( state ) => {
            state.formNyse = true
            state.isEditing = true
        },
        addNewStockToList: ( state, data ) => {
            state.stoks.push( data.payload )
            state.activeStock = data.payload
            state.formNyse = false
            state.isEditing = false
            state.isSaving = false
        },
        modifyStockToList: ( state, data ) => {
            data.payload.id
            state.stoks = state.stoks.map(stock => {
                if( stock.id ===  data.payload.id ) {
                    return  data.payload
                }

                return stock
            })
        },
        createChangeStatus: ( state ) => {
            state.activeStock = null
            state.formNyse = true
            state.isEditing = false
            state.isSaving = false
        },
        editChangeStatus: ( state ) => {
            state.formNyse = true
            state.isEditing = true
            state.isSaving = false
        },
        cancelChangeStatus: ( state ) => {
            state.activeStock = null
            state.formNyse = false
            state.isEditing = false
            state.isSaving = false
        }
    }
})

export const {
    setInitialStockData,
    setActiveStock,
    removeActiveStock,
    startingEdigitnActiveStock,
    addNewStockToList,
    modifyStockToList,
    createChangeStatus,
    editChangeStatus,
    cancelChangeStatus
} = nyseSlice.actions