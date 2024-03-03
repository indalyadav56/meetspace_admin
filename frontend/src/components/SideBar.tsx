import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const SideBar = () => {
  const menus = ['Users', 'Chats', 'Chat Groups']
  return (
    <Box
      style={{
        height: 'calc(100vh - 64px)',
        width: '320px',
        borderRight: '1px solid gray',
      }}
    >
      <List>
        {menus.map((item) => (
          <ListItemButton key={item} component="a">
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default SideBar
