import { Router } from 'express'
import bugtubeController from './controllers/bugtubeController.js'

const router = Router()

router.get('/api/bugtube', bugtubeController.getAll)
router.get('/api/bugtube/:id', bugtubeController.getOne)
router.post('/api/bugtube', bugtubeController.create)
router.put('/api/bugtube/:id', bugtubeController.update)
router.delete('/api/bugtube/:id', bugtubeController.delete)

export default router
