import React from 'react'
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import data from './Data'
import { Container } from '@mui/system'
import { TbListDetails } from 'react-icons/tb';

const Summary = () => {

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3" mt={4} sx={{ textAlign: "center", backgroundColor: "white", color: "black" }}> Summary Card <TbListDetails /> </Typography>
        <Card sx={{ maxHeight: 300, overflow: 'auto', margin: "10%" }}>
          <TableContainer>
            <Table>
              <TableHead position='sticky' sx={{ backgroundColor: "#000000" }}>
                <TableRow >
                  <TableCell sx={{ color: "#fff", fontSize: 15 }} align="center">Device Id</TableCell>
                  <TableCell sx={{ color: "#fff", fontSize: 15 }} align="center">Device Type</TableCell>
                  <TableCell sx={{ color: "#fff", fontSize: 15 }} align="center">Latest TimeStamp</TableCell>
                  <TableCell sx={{ color: "#fff", fontSize: 15 }} align="center">Latest Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((list, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{list.DeviceId}</TableCell>
                    <TableCell align="center">{list.DeviceType}</TableCell>
                    <TableCell align="center">{list.Timestamp}</TableCell>
                    <TableCell align="center">{list.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container >
    </>
  )
}

export default Summary