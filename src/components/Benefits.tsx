import React from 'react'

const Benefits = () => {
  const benefits = [
    {
      category: 'Para Prefeituras',
      items: [
        {
          title: 'Redução de Custos Operacionais',
          description: 'Até 50% de economia nos custos de coleta urbana com otimização de rotas.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          )
        },
        {
          title: 'Melhoria dos Índices Ambientais',
          description: 'Aumento significativo nas taxas de reciclagem e sustentabilidade municipal.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        },
        {
          title: 'Dados e Relatórios Detalhados',
          description: 'Analytics completos para tomada de decisões baseada em dados reais.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        }
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      category: 'Para Cidadãos',
      items: [
        {
          title: 'Cashback por Reciclagem',
          description: 'Receba dinheiro real via PIX por cada material reciclado corretamente.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          title: 'Impacto Ambiental Visível',
          description: 'Acompanhe em tempo real o CO₂ que você evitou e seu impacto positivo.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: 'Gamificação e Conquistas',
          description: 'Sistema de pontos, rankings e desafios que tornam a reciclagem divertida.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          )
        }
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      category: 'Para o Meio Ambiente',
      items: [
        {
          title: 'Créditos de Carbono Reais',
          description: 'Geração certificada de créditos que contribuem para metas climáticas globais.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: 'Economia Circular Efetiva',
          description: 'Fechamento do ciclo de materiais com rastreabilidade completa.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )
        },
        {
          title: 'Educação Ambiental Contínua',
          description: 'Conscientização ativa da população sobre sustentabilidade e impacto.',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        }
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Benefícios <span className="gradient-text">Múltiplos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma solução que gera valor para todos os stakeholders, criando um ecossistema 
            sustentável e economicamente viável para toda a sociedade.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-12">
          {benefits.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${category.color} rounded-full text-white font-semibold text-lg mb-4`}>
                  {category.category}
                </div>
              </div>

              {/* Benefits Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((benefit, index) => (
                  <div
                    key={index}
                    className={`${category.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 card-hover border border-white`}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                      {benefit.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Retorno sobre Investimento Comprovado
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nossos estudos mostram que o SmartCiclo se paga em menos de 18 meses, 
                gerando economia contínua e receita adicional para as cidades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">18</div>
                <div className="text-gray-600">Meses para ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50%</div>
                <div className="text-gray-600">Redução de Custos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">300%</div>
                <div className="text-gray-600">Aumento na Reciclagem</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfação dos Usuários</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits