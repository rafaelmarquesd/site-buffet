import React from 'react'
import { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulação de CMS embutida no próprio componente
    const cmsData = {
      boloImage: '/imagens/bolo.jpg',
      headline: 'Receba seus convidados com sofisticação e sabor',
      subheadline: 'Buffet completo para casamentos, aniversários e eventos corporativos.',
      diferenciais: [
        { titulo: 'Ingredientes Selecionados', descricao: 'Utilizamos os melhores ingredientes para garantir sabor e qualidade.' },
        { titulo: 'Equipe Especializada', descricao: 'Profissionais treinados para oferecer o melhor atendimento.' },
        { titulo: 'Eventos Personalizados', descricao: 'Montamos cardápios sob medida para cada ocasião.' },
      ],
      servicos: [
        { nome: 'Casamentos', descricao: 'Serviço completo para o grande dia.', imagem: '/imagens/casamento.jpg' },
        { nome: 'Aniversários', descricao: 'Buffet delicioso para celebrar a vida.', imagem: '/imagens/aniversario.jpg' },
        { nome: 'Eventos Corporativos', descricao: 'Soluções sob medida para empresas.', imagem: '/imagens/corporativo.jpg' },
      ],
      galeria: [
        '/imagens/evento1.jpg',
        '/imagens/evento2.jpg',
        '/imagens/evento3.jpg',
        '/imagens/evento4.jpg',
      ]
    }

    setData(cmsData)
  }, [])

  if (!data) return <div>Carregando...</div>

  return (
    <div>
      {/* Header */}
      <header className="p-4 shadow-md fixed w-full bg-white z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src="/imagens/logo-marina.jpg" alt="Marina Buffet" className="h-10" />
          <nav className="space-x-4">
            <a href="#servicos" className="text-sm">Serviços</a>
            <a href="#galeria" className="text-sm">Galeria</a>
            <a href="#contato" className="text-sm">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${data.boloImage})` }}>
        <div className="bg-black bg-opacity-60 p-8 rounded">
          <h2 className="text-4xl mb-4">{data.headline}</h2>
          <p className="mb-6">{data.subheadline}</p>
          <a href="#contato" className="bg-white text-black py-2 px-4 rounded">Peça seu orçamento</a>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-10">Por que escolher o Marina Buffet</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.diferenciais.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded shadow">
              <h4 className="text-lg font-bold mb-2">{item.titulo}</h4>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 text-center">
        <h3 className="text-2xl font-semibold mb-10">Nossos Serviços</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.servicos.map((servico, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded shadow">
              <img src={servico.imagem} alt={servico.nome} className="h-40 w-full object-cover mb-4 rounded" />
              <h4 className="text-lg font-bold mb-2">{servico.nome}</h4>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-10">Galeria de Eventos</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.galeria.map((img, index) => (
            <img key={index} src={img} alt={`Evento ${index + 1}`} className="h-40 w-full object-cover rounded" />
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Entre em Contato</h3>
        <p className="mb-6">Solicite um orçamento personalizado para seu evento</p>
        <a href="https://wa.me/5531988158795" target="_blank" className="bg-green-600 text-white py-2 px-6 rounded">Chamar no WhatsApp</a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Marina Buffet. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Home
