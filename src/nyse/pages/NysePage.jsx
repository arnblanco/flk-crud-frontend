import { IconButton } from "@mui/material"
import { NyseLayout } from "../layout"
import { FormNyseView, FullNyseView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useNyseStore } from "../../hooks"

export const NysePage = () => {
  const { formNyse, onFormCompanyAdd, activeStock } = useNyseStore()

  return (
    <NyseLayout>
      {
        ( activeStock && ! formNyse)
        ? <FullNyseView />
        : ( formNyse )
          ? <FormNyseView />
          : <NothingSelectedView />
      }
      
      { !formNyse &&
        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { background: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50,
          }}
          onClick={ onFormCompanyAdd }
          disabled={ formNyse }
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      }
    </NyseLayout>
  )
}
