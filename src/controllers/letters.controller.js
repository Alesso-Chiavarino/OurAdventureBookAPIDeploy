import Letter from "../models/Letter.js"

export const getLetters = async (req, res) => {

    try {
        const { page } = req.query;

        const letters = await Letter.paginate({},{
            page,
            limit: 9
        })

        if(!letters) {
            return res.json({
                status: "error",
                error: "No letters found"
            })
        }

        res.json(letters);
    } catch {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }

}

export const getLetter = async (req, res) => {

    const { id } = req.params;

    try {
        const letter = await Letter.findById(id)

        if(!letter) {
            return res.json({
                status: "error",
                error: "No letter found"
            })
        }

        res.json(letter);

    } catch {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}

export const createLetter = async (req, res) => {

    const {title, description, author, date} = req.body;

    try {
        const letter = await Letter.create({
            title,
            description,
            author,
            date
        })
    
        await letter.save();
    
        res.json(letter);
        
    } catch {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}

export const updateLetter = async (req, res) => {

    const {title, description, author, date} = req.body;
    const {id} = req.params;

    try {
        const updatedLetter = await Letter.findByIdAndUpdate(id, {
            title,
            description,
            author,
            date
        })
    
        if(!updatedLetter) {
            return res.json({
                status: "error",
                error: "No letter found"
            })
        }
    
        res.json(updatedLetter);

    } catch {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }

}

export const deleteLetter = async (req, res) => {

    const { id } = req.params;

    try {
        const removedLetter = await Letter.findByIdAndDelete(id)

        if(!removedLetter) {
            return res.json({
                status: "error",
                error: "No letter found"
            })
        }

        res.json(removedLetter);

    } catch {
        res.status(500).json({
            status: "error",
            error: "Something went wrong"
        })
    }
}