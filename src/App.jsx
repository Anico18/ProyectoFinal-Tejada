import MainRouter from './routes/MainRouter'
import MainLayout from './layouts/MainLayout'
import { CartProvider } from './context/CartContext'

const App = () => {
  // const [count, setCount] = useState(0)
  
  // const sumar = () => {
  //   setCount(count + 1);
  // }

  // const restar = () => {
  //   setCount(count - 1);
  // }

  return (
    <CartProvider>
      <MainLayout>
      <MainRouter />
    </MainLayout>
    </CartProvider>
  )
}

export default App
