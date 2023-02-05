import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
    try {

        const { page } = req.query

        const tickets = await Ticket.paginate({}, {
            limit: 12,
            page
        });

        if (!tickets) {
            return res.json({
                status: "error",
                error: "No tickets found"
            })
        }

        res.json(tickets)

    } catch (error) {
        res.status(500).json({
            status: "error",
            error
        })
    }
}

export const getTicket = async (req, res) => {

    const { id } = req.params;

    try {

        const ticket = await Ticket.findById(id)

        if (!ticket) {
            return res.json({
                status: "error",
                error: "No ticket found"
            })
        }

        res.json(ticket)

    } catch (error) {
        res.status(500).json({
            status: "error",
            error
        })
    }

}

export const createTicket = async (req, res) => {

    const { title, date, hour, room, seat, price } = req.body;

    try {

        const ticket = await Ticket.create({
            title,
            date,
            hour,
            room,
            seat,
            price
        })

        await ticket.save()

        res.json({
            status: "success",
            message: "Ticket created successfully",
            task
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            error
        })
    }

}

export const updateTicket = async (req, res) => {

    const { id } = req.params;

    const { title, date, hour, room, seat, price } = req.body;

    try {

        const ticket = await Ticket.findByIdAndUpdate(id, {
            title,
            date,
            hour,
            room,
            seat,
            price
        }, { new: true })

        res.json(ticket)

    } catch (error) {
        res.status(500).json({
            status: "error",
            error
        })
    }

}

export const deleteTicket = async (req, res) => {

    const { id } = req.params;

    try {

        const ticket = await Ticket.findByIdAndDelete(id);

        res.json(ticket);

    } catch (error) {
        res.status(500).json({
            status: "error",
            error
        })
    }
}