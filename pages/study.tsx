import { Inter } from 'next/font/google'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout titulo='Study'  subtitulo='Estamos contruindo algo legal aqui'>
      <h3>Conteudo</h3>
    </Layout>
  )
}
