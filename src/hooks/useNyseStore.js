import { useDispatch, useSelector } from "react-redux"
import { cancelChangeStatus, createChangeStatus, setInitialStockData, setActiveStock, removeActiveStock, startingEdigitnActiveStock, addNewStockToList, modifyStockToList } from "../store"
import CompanyApi from "../api/CompanyApi"

export const useNyseStore = () => {
    const dispatch = useDispatch()

    const {
        checkingStocks,
        isSaving,
        isEditing,
        formNyse,
        messageSaved,
        stoks,
        activeStock
    } = useSelector( store => store.nyse )

    const loadInitialStocks = ( data ) => {
        dispatch( setInitialStockData( data ) )
    }

    const defineStockActive = ( id ) => {
        const selectedStock = stoks.find( stock => stock.id === id )
        dispatch( setActiveStock( selectedStock ) )
    }

    const cancelActiveStock = () => {
        dispatch( removeActiveStock() )
    }

    const editActiveStock = () => {
        dispatch( startingEdigitnActiveStock() )
    }

    const saveStockCompany = async({ name, symbol, description }) => {
        try {
            if( isEditing ) {
                const response = await CompanyApi.put(`/companies/${ activeStock.id }/`, { name, symbol, description } )
                dispatch( modifyStockToList( response.data ) )
            } else {
                const response = await CompanyApi.post('/companies/', { name, symbol, description } )
                dispatch( addNewStockToList( response.data ) )
            }
        } catch (error) {
            console.log( error )
        }      
    }

    const onFormCompanyAdd = () => {
        dispatch( createChangeStatus() )
    }

    const onFormCompanyEdit = () => {

    }

    const onFormCompanyCancel = () => {
        dispatch( cancelChangeStatus() )
    }

    return {
        //* Propiedades
        checkingStocks,
        isSaving,
        isEditing,
        formNyse,
        messageSaved,
        stoks,
        activeStock,

        //* Metodos
        loadInitialStocks,
        defineStockActive,
        cancelActiveStock,
        editActiveStock,
        saveStockCompany,
        onFormCompanyAdd,
        onFormCompanyEdit,
        onFormCompanyCancel
    }
}
