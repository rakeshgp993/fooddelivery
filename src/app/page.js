import Image from 'next/image'
import Login from './pages/login'
import homeBG from '../../public/assets/images/homeBG.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{backgroundImage: `url(${homeBG.src})`,  width: '100%',
      height: '100%', backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}}>
        <Login />
      </div>
      
    </main>
  )
}
