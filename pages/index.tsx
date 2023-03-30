import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout titulo='Página inicial'  subtitulo='Estamos contruindo algo legal aqui'>
      <h3>Conteudo</h3>
    </Layout>
  )
}
