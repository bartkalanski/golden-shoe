import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import OrderLookupScreen from './screens/OrderLookupScreen'
import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='main'>
          <Route path='/product/:id' component={ProductScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/orderLookup' component={OrderLookupScreen} exact />
          <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
