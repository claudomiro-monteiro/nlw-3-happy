import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
import Orphanage from './pages/Orphanage'
import { OrphanagesMap } from './pages/OrphanagesMap'
import CreateOrphanage from './pages/CreateOrphanage'

function Routas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/app' element={<OrphanagesMap />} />
                <Route path='/orphanages/create' element={<CreateOrphanage />} />
                <Route path='/orphanages/:id' element={<Orphanage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routas