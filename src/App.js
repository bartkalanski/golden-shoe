import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import BottomNav from './components/BottomNav'
import Header from './components/Header'
import Footer from './components/Footer'
import CartScreen from './screens/CartScreen'
import ContactScreen from './screens/ContactScreen'
import HelpScreen from './screens/HelpScreen'
import HomeScreen from './screens/HomeScreen'
import OrderLookupScreen from './screens/OrderLookupScreen'
import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'
import ReturnsScreen from './screens/ReturnsScreen'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/cart' component={CartScreen} exact />
        <Route path='/contact' component={ContactScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/productlist' component={ProductListScreen} exact />
        <Route path='/mens' component={ProductListScreen} exact />
        <Route path='/womens' component={ProductListScreen} exact />
        <Route path='/kids' component={ProductListScreen} exact />
        <Route path='/orderLookup' component={OrderLookupScreen} exact />
        <Route path='/help' component={HelpScreen} exact />
        <Route path='/returns' component={ReturnsScreen} exact />
      </main>
      <BottomNav />
      <Footer />
    </Router>
  )
}

export default App
