import Letter from "../models/Letter.js"

export const getLetters = async (req, res) => {

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

}

export const getLetter = async (req, res) => {

    const { id } = req.params;

    const letter = await Letter.findById(id)

    if(!letter) {
        return res.json({
            status: "error",
            error: "No letter found"
        })
    }

    res.json(letter);
}

export const createLetter = async (req, res) => {

    const {title, description, author, date} = req.body;

    const letter = await Letter.create({
        title,
        description,
        author,
        date
    })

    await letter.save();

    res.json(letter);
}

export const updateLetter = async (req, res) => {

    const {title, description, author, date} = req.body;
    const {id} = req.params;

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

}

export const deleteLetter = async (req, res) => {

    const { id } = req.params;

    const removedLetter = await Letter.findByIdAndDelete(id)

    if(!removedLetter) {
        return res.json({
            status: "error",
            error: "No letter found"
        })
    }

    res.json(removedLetter);
}