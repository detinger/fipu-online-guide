import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TopNav from './components/TopNav'
import DemoBadge from './components/DemoBadge'
import HomeModule from './components/modules/HomeModule'
import NastavaModule from './components/modules/NastavaModule'
import PutovanjeModule from './components/modules/PutovanjeModule'
import KvizModule from './components/modules/KvizModule'

const VIEW_MAP = {
  home: 'home', nastava: 'nastava', putovanje: 'putovanje', kviz: 'kviz',
}

export default function App() {
  const [active, setActive] = useState('home')
  const navigate = (id) => {
    setActive(VIEW_MAP[id] || id)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  const views = {
    home:      <HomeModule onNavigate={navigate} />,
    nastava:   <NastavaModule onNavigate={navigate} />,
    putovanje: <PutovanjeModule onNavigate={navigate} />,
    kviz:      <KvizModule onNavigate={navigate} />,
  }

  return (
    <div className="app-shell">
      <TopNav active={active} onNavigate={navigate} />
      <DemoBadge />
      <main className="app-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="module-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {views[active]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
