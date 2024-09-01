
import { Box, Divider, Drawer, List, Toolbar, Typography, TextField } from "@mui/material"
import { useNyseStore } from "../../hooks"
import { SidebarItems } from "./SidebarItems"
import { useState } from "react"

export const SideBar = ({ drawerWidth }) => {
    const { stoks } = useNyseStore()
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStocks = stoks.filter(stok =>
        stok.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stok.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <TextField
                        type="text"
                        variant="filled"
                        fullWidth
                        placeholder="Search"
                        label="Search"
                        sx={{ border: 'none', mb: 1 }}
                        name='search'
                        value={ searchTerm }
                        onChange={ handleSearchChange }
                    />
                    {
                        filteredStocks.map( stok => (
                            <SidebarItems key={ stok.id } { ...stok } />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
