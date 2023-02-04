import { getTickets, getTicket, createTicket, updateTicket, deleteTicket } from '../../controllers/ticket.controller.js'
import { Router } from 'express'

const router = Router()

router.get('/', getTickets)
router.get('/:id', getTicket)
router.post('/', createTicket)
router.put('/:id', updateTicket)
router.delete('/:id', deleteTicket)

export default router;