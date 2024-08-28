import { CancelOutlined, DeleteForeverOutlined, EditAttributesOutlined, EditNote, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useNyseStore } from "../../hooks"

export const NavBar = ({ drawerWidth = 240 }) => {
    const { activeStock, isEditing, cancelActiveStock, editActiveStock } = useNyseStore()

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: { sm: `${ drawerWidth }px` }
            }}
        > 
            <Toolbar>
                <IconButton>
                    <MenuOutlined
                        color='inherit'
                        edge='start'
                        sx={{ mr:2, display:{ sm:'none' } }}
                    />
                </IconButton>

                <Grid container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    {
                        (!isEditing && activeStock) && (
                            <>
                                <Typography variant="h6" noWrap component="div">
                                    {`${activeStock.name} (${activeStock.symbol})`}
                                </Typography>

                                <IconButton color='info' onClick={ editActiveStock }>
                                    <EditNote /> Edit
                                </IconButton>

                                <IconButton color='error' >
                                    <DeleteForeverOutlined /> Delte
                                </IconButton>

                                <IconButton color='white' onClick={ cancelActiveStock }>
                                    <CancelOutlined /> Close
                                </IconButton>
                            </>
                        )
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
