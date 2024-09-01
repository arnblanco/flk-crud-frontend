import Swal from 'sweetalert2'

import { useDispatch, useSelector } from "react-redux"
import { cancelChangeStatus, createChangeStatus, setInitialStockData, setActiveStock, removeActiveStock, startingEdigitnActiveStock, addNewStockToList, modifyStockToList, removeStockFromList } from "../store"

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

    const startToDeleteCompany = () => {
        Swal.fire({
            title: 'Alert',
            text: `Are you sure you want to delete the record ${ activeStock.name }?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(async(result) => {
            if (result.isConfirmed) {
                

                const response = await CompanyApi.delete(`/companies/${ activeStock.id }/`, {} )
                dispatch( removeStockFromList() )

                
                Swal.fire(
                    '¡Deleted!',
                    'The record was deleted.',
                    'success'
                );
            }
        });
    }

    const saveStockCompany = async({ name, symbol, description }) => {
        try {
            if( isEditing ) {
                const response = await CompanyApi.put(`/companies/${ activeStock.id }/`, { name, symbol, description } )
                dispatch( modifyStockToList( response.data ) )
            } else {
                const response = await CompanyApi.post('/companies/', { name, symbol, description } )
                console.log( 'Captura del error:', response )
                dispatch( addNewStockToList( response.data ) )
            }
        } catch (error) {
            const data = error.response.data
            Swal.fire({
                title: 'Alert!',
                text: data.symbol[0],
                icon: 'error',
                confirmButtonText: 'Ok!!'
            });
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
        onFormCompanyCancel,
        startToDeleteCompany
    }
}
