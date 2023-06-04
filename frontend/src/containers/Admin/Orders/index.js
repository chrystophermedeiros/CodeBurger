import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './order-status'
import Row from './row'
import { Container, Menu, LinkMenu } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const [filterOrders, setFilterOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(1)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')

      setOrders(data)
      setFilterOrders(data)
    }

    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filterOrders.map(ord => createData(ord))
    setRows(newRows)
  }, [filterOrders])

  useEffect(() => {
    if (activeStatus === 1) {
      setFilterOrders(orders)
    } else {
      const statusIndex = status.findIndex(sts => sts.id === activeStatus)
      const newfilterOrders = orders.filter(
        order => order.status === status[statusIndex].value
      )
      setFilterOrders(newfilterOrders)
    }
  }, [activeStatus, orders])

  function handleStatus(status) {
    if (status.id === 1) {
      setFilterOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilterOrders(newOrders)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map(status => (
            <LinkMenu
              onClick={() => handleStatus(status)}
              key={status.id}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
