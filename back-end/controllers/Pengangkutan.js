const { Pengangkutan } = require('../models');

exports.findAllPengangkutan = async (req, res) => {
    try {
        const data = await Pengangkutan.findAll()
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findPengangkutanById = async (req, res) => {
    try {
        const data = await Pengangkutan.findByPk(req.params.id
        )
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createPengangkutan = async (req, res) => {
    try {
        await Pengangkutan.create(req.body)
        res.json({ 'message': 'Pengangkutan Created successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updatePengangkutan = async (req, res) => {
    try {
        await Pengangkutan.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'Pengangkutan Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deletePengangkutan = async (req, res) => {
    try {
        await Pengangkutan.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'Pengangkutan Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllPengangkutan = async (req, res) => {
    try {
        await Pengangkutan.destroy({
            truncate: true
        })
        res.json({ 'message': 'Pengangkutan All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}
