import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const ticketSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    hour: {
        type: String,
        required: true,
        trim: true
    },
    room: {
        type: Number,
        required: true,
        trim: true
    },
    seat: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }

})

ticketSchema.plugin(mongoosePaginate);
export default mongoose.model('Ticket', ticketSchema);