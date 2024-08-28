import 'sweetalert2/dist/sweetalert2.css'

import { CancelOutlined, SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField } from "@mui/material"
import { useForm, useNyseStore } from '../../hooks'
import { useState } from 'react'

const initialForm = {
    name: '',
    symbol: '',
    description: ''
}

const formValidations = {
    name: [ (value) => value.length >= 1 && value.length <= 50, 'Invalid company name.'],
    symbol: [ (value) => value.length >= 1 && value.length <= 5, 'Invalid company symbol.'],
    description: [ (value) => value.length >= 1 && value.length <= 100, 'Invalid company description.']
}

export const FormNyseView = () => {
    const { isSaving, isEditing, activeStock, onFormCompanyCancel, saveStockCompany } = useNyseStore()

    const {
        name,
        symbol,
        description,
        onInputChange,
        isFormValid,
        nameValid,
        symbolValid,
        descriptionValid
     } = useForm( ( isEditing )?activeStock:initialForm , formValidations )
    
    const [ formSubmitted, setFormSubmitted ] = useState( false )

    const onSubmitform = ( event ) => {
        event.preventDefault()
        setFormSubmitted( true )

        if( !isFormValid ) return

        saveStockCompany({ name, symbol, description })
        
    }

    return (
        <Grid container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 2 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Button
                    color='primary'
                    sx={{ padding: 2 }}
                    onClick={ onFormCompanyCancel }
                    disabled={ isSaving }
                >
                    <CancelOutlined sx={{ fontSize:30, mr:1 }} />
                    Cancel
                </Button>
            </Grid>
            <Grid item>
                <Button
                    color='primary'
                    sx={{ padding: 2 }}
                    onClick={ onSubmitform }
                    disabled={ isSaving }
                >
                    <SaveOutlined sx={{ fontSize:30, mr:1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Company Name"
                    label="Name"
                    sx={{ border: 'none', mb: 1 }}
                    name='name'
                    value={ name }
                    onChange={ onInputChange }
                    error={ !!nameValid && formSubmitted }
                    helperText={ ( formSubmitted ) ? nameValid : '' }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Company Symbol"
                    label="Symbol"
                    sx={{ border: 'none', mb: 1 }}
                    name='symbol'
                    value={ symbol }
                    onChange={ onInputChange }
                    error={ !!symbolValid && formSubmitted }
                    helperText={ ( formSubmitted ) ? symbolValid : '' }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Company Description"
                    label="Company Description"
                    minRows={ 5 }
                    name='description'
                    value={ description }
                    onChange={ onInputChange }
                    error={ !!descriptionValid && formSubmitted }
                    helperText={ ( formSubmitted ) ? descriptionValid : '' }
                />
            </Grid>
        </Grid>
    )
}
