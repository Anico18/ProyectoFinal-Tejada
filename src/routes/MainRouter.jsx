import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import ItemDetailContainerComponent from '../components/ItemDetailContainerComponent/ItemDetailContainerComponent'
import CreateProducts from '../pages/CreateProducts'

const MainRouter = () => {
    
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                {/* HOC -> High Order Components */}
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:itemId" element={<ItemDetailContainerComponent />} />
                <Route path="/create/products" element={<CreateProducts />} />
            </Routes>
        </Router>
    )
}

export default MainRouter