import { CircularProgress, Grid } from "@mui/material"

export const LoadingStocks = () => {
  return (
    <Grid container
        spacing={ 0 }
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight:'calc(100vh - 110px)', backgroundColor:'#f0f0f0', borderRadius: 3 }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Grid item
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
            <CircularProgress color='warning' />
        </Grid>
    </Grid>
  )
}
