import * as React from 'react'
import SideBar from '../components/SideBar'
import { Avatar, Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const HomePage = () => {
  const users = [
    {
      id: '1',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      profile: 'profile-url1',
    },
    {
      id: '2',
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      profile: 'profile-url2',
    },
    {
      id: '3',
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice.johnson@example.com',
      profile: 'profile-url3',
    },
    {
      id: '4',
      first_name: 'Bob',
      last_name: 'Brown',
      email: 'bob.brown@example.com',
      profile: 'profile-url4',
    },
    {
      id: '5',
      first_name: 'Emily',
      last_name: 'Williams',
      email: 'emily.williams@example.com',
      profile: 'profile-url5',
    },
    {
      id: '6',
      first_name: 'Michael',
      last_name: 'Miller',
      email: 'michael.miller@example.com',
      profile: 'profile-url6',
    },
    {
      id: '7',
      first_name: 'Olivia',
      last_name: 'Davis',
      email: 'olivia.davis@example.com',
      profile: 'profile-url7',
    },
    {
      id: '8',
      first_name: 'William',
      last_name: 'Garcia',
      email: 'william.garcia@example.com',
      profile: 'profile-url8',
    },
    {
      id: '9',
      first_name: 'Sophia',
      last_name: 'Rodriguez',
      email: 'sophia.rodriguez@example.com',
      profile: 'profile-url9',
    },
    {
      id: '10',
      first_name: 'James',
      last_name: 'Martinez',
      email: 'james.martinez@example.com',
      profile: 'profile-url10',
    },
    {
      id: '11',
      first_name: 'Ethan',
      last_name: 'Hernandez',
      email: 'ethan.hernandez@example.com',
      profile: 'profile-url11',
    },
    {
      id: '12',
      first_name: 'Charlotte',
      last_name: 'Lopez',
      email: 'charlotte.lopez@example.com',
      profile: 'profile-url12',
    },
    {
      id: '13',
      first_name: 'Alexander',
      last_name: 'Gonzalez',
      email: 'alexander.gonzalez@example.com',
      profile: 'profile-url13',
    },
    {
      id: '14',
      first_name: 'Mia',
      last_name: 'Wilson',
      email: 'mia.wilson@example.com',
      profile: 'profile-url14',
    },
    {
      id: '15',
      first_name: 'Benjamin',
      last_name: 'Taylor',
      email: 'benjamin.taylor@example.com',
      profile: 'profile-url15',
    },
    {
      id: '16',
      first_name: 'Amelia',
      last_name: 'Anderson',
      email: 'amelia.anderson@example.com',
      profile: 'profile-url16',
    },
    {
      id: '17',
      first_name: 'Elijah',
      last_name: 'Thomas',
      email: 'elijah.thomas@example.com',
      profile: 'profile-url17',
    },
    {
      id: '18',
      first_name: 'Harper',
      last_name: 'Harris',
      email: 'harper.harris@example.com',
      profile: 'profile-url18',
    },
    {
      id: '19',
      first_name: 'Daniel',
      last_name: 'Martin',
      email: 'daniel.martin@example.com',
      profile: 'profile-url19',
    },
    {
      id: '20',
      first_name: 'Ava',
      last_name: 'Clark',
      email: 'ava.clark@example.com',
      profile: 'profile-url20',
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <SideBar />

      <Box
        width="100%"
        style={
          {
            // backgroundColor: 'red',
          }
        }
      >
        {/* <List>
          {users.map(() => (
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          ))}
        </List> */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Profile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <Avatar />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default HomePage
