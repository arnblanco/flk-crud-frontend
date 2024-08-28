import { Grid, Paper, Typography } from "@mui/material"
import { LoadingStocks } from "../../ui"
import { useFetch, useNyseStore } from "../../hooks"

import { MarketChart } from "./"

export const FullNyseView = () => {
    const { activeStock } = useNyseStore()
    const { response, error, loading } = useFetch(
        activeStock ? { method: 'GET', url: `/api/companies/${ activeStock.id }` } : null
    );
    
    if ( loading ) return <LoadingStocks />

    const {
        name,
        type,
        locale,
        market_cap,
        description,
        sic_description,
        homepage_url,
        total_employees,
        primary_exchange,
    } = response.alpha_vantage;

    return (
        <Grid container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 2 }}
            spacing={ 2 }
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item xs={ 12 } sx={{ mb: 1 }}>
                <Typography variant="subtitle1" color="textSecondary">
                    { name } - { sic_description }
                </Typography>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, p: 3 }}>

                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="body1">{ description.substring(0, 500) }</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="body2">Type: { type }</Typography>
                        <Typography variant="h6">Market Information</Typography>
                        <Typography variant="body2">Market Cap: ${ market_cap }</Typography>
                        <Typography variant="body2">Locale: { locale }</Typography>
                        <Typography variant="body2">Primary Exchange: { primary_exchange }</Typography>
                        
                        <Typography variant="body2">Total Employees: ${ total_employees }</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, p: 3 }}>
                {
                    ( response.time_serie )
                    ? <MarketChart timeSeries={ response.time_serie } />
                    : <Typography variant="subtitle1" color="textSecondary">No stock data.</Typography>
                }
            </Grid>
        </Grid>
    )
}
