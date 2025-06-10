import React from 'react'

const Stats = () => {
  const stats = [
    {
      number: '2.5M',
      label: 'Toneladas de CO₂ Evitadas',
      description: 'Impacto ambiental positivo mensurável',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '850K',
      label: 'Usuários Ativos',
      description: 'Cidadãos engajados na reciclagem',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      number: '1,200',
      label: 'Totens Instalados',
      description: 'Rede em expansão contínua',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: '45',
      label: 'Cidades Parceiras',
      description: 'Crescimento em todo o Brasil',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: 'R$ 12M',
      label: 'Em Cashback Distribuído',
      description: 'Valor retornado aos cidadãos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      number: '95%',
      label: 'Precisão de Reconhecimento',
      description: 'Tecnologia comprovadamente eficaz',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Números que <span className="text-green-300">Impressionam</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Resultados concretos que demonstram o impacto real do SmartCiclo 
            na transformação da reciclagem urbana no Brasil.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-hover border border-white/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-green-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-white/80">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Crescimento Exponencial
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Nossos números crescem mensalmente, refletindo a aceitação e o impacto 
              positivo da solução SmartCiclo em todo o país.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-1">+150%</div>
                <div className="text-white/80">Crescimento Anual</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-1">24/7</div>
                <div className="text-white/80">Disponibilidade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-1">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats