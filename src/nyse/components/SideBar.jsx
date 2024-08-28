import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useNyseStore } from "../../hooks"
import { SidebarItems } from "./SidebarItems"

export const SideBar = ({ drawerWidth }) => {
    const { stoks } = useNyseStore()

    return (
        <Box
            component='nav'
            sx={{ width: { sm:drawerWidth }, flexShrink:{ sm: 0} }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{ 
                    display: {xs:'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        NYSE
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        stoks.map( stok => (
                            <SidebarItems key={ stok.id } { ...stok } />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
