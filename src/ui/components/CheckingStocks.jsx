import { CircularProgress, Grid } from "@mui/material"

export const CheckingStocks = () => {
  return (
    <Grid container
        spacing={ 0 }
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight:'100vh', backgroundColor:'primary.main', padding:4 }}
    >
        <Grid item
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
            <CircularProgress color='warning' />
        </Grid>
    </Grid>
  )
}
