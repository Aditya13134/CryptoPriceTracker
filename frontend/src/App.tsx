
import './App.css'
import CryptoPrice from './components/CryptoPrice';
import AlertForm from './components/AlertForm';
import AlertsList from './components/AlertList';


export default function App() {
  return (
    <div>
      <h1>Crypto Alert System</h1>
      <CryptoPrice />
      <AlertForm />
      <AlertsList />
    </div>
  )
}