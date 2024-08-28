import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNyseStore } from "../../hooks"

export const SidebarItems = ({ id, name, symbol }) => {
  const { defineStockActive } = useNyseStore()

  const onStockSelected = ( ) => {
    defineStockActive( id )
  }

  return (
    <ListItem disablePadding >
        <ListItemButton onClick={ onStockSelected }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container >
                <ListItemText primary={ `${ name } (${ symbol })` } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
