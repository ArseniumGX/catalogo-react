import 'express'
import { save, load } from '../data/methods.js'

class BugtubeControllers{
    getAll = (req, res) => {
        const list = load()
        console.log(list)
        return res.status(200).send(list)
    }

    getOne = (req, res) => {
        const { id } = req.params
        const list = load()

        if(!list[id])
            return res.status(404).json({message: "Item não encontrado!"})

        return res.status(200).json(list[id])
    }

    create = (req, res) => {
        const { title, description, link } = req.params

        const list = load()
        const obj = {
            title,
            description,
            link
        }

        list.push(obj)
        save(list)

        return res.status(201).json({message: "Cadastrado com sucesso!"})
    }

    update = (req, res) => {
        const { id } = req.params
        const list = load()

        list[id] = {
            title: req.params.title,
            description: req.params.description,
            link: req.params.link
        }

        save(list)

        return res.status(202).json({message: "Alterado com sucesso!"})
    }

    delete = (req, res) => {
        const { id } = req.params
        const list = load()

        list.splice(id, 1)

        save(list)
        return res.status(202).json({message: "Deletado com Sucesso!"})
    }
}

export default new BugtubeControllers
