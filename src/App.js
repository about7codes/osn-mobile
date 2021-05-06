import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router';
import HomeAr from './components/HomeAr/HomeAr';
import HomeEn from './components/HomeEn/HomeEn';
import './styles/App.css';

const containerVariants = {
  hidden: {
      opacity: 0
  },
  visible: {
      opacity: 1,
      transition: { delay: .5, duration: .5 }
  },
  exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' }
  }
}

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path='/' exact>
            <HomeEn containerVariants={containerVariants} />
          </Route>
          <Route path='/home-en'>
            <HomeEn containerVariants={containerVariants} />
          </Route>
          <Route path='/home-ar'>
            <HomeAr containerVariants={containerVariants} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App;
