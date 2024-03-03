import { Box } from '@mui/material'

const UserItem = ({ user }: any) => {
  return (
    <Box>
      <h1>{user.email}</h1>
      <button>Delete</button>
    </Box>
  )
}

export default UserItem
