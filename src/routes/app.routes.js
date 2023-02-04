import { Router } from 'express';
import adventureRoutes from './adventure/adventure.routes.js'
import lettersRoutes from './letters/letters.routes.js'
import tasksRoutes from './tasks/tasks.routes.js'
import ticketsRoutes from './tickets/tickets.routes.js'

const router = Router();

router.use('/adventure', adventureRoutes);
router.use('/tasks', tasksRoutes);
router.use('/letters', lettersRoutes);
router.use('/tickets', ticketsRoutes);

router.get("/", (req, res) => {
    res.send("Welcome to OurAdventureBook REST API");
})

export default router;