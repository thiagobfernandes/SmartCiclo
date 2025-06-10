import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Secretária de Meio Ambiente',
      city: 'São Paulo, SP',
      content: 'O SmartCiclo revolucionou nossa gestão de resíduos. Conseguimos reduzir os custos de coleta em 45% e aumentar nossa taxa de reciclagem em 300%. Os cidadãos estão mais engajados do que nunca.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      role: 'Prefeito',
      city: 'Curitiba, PR',
      content: 'Implementamos o SmartCiclo em 50 pontos da cidade e os resultados superaram todas as expectativas. A população abraçou a iniciativa e nossa cidade se tornou referência em sustentabilidade.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Diretora de Sustentabilidade',
      city: 'Belo Horizonte, MG',
      content: 'A tecnologia de reconhecimento é impressionante. A precisão de 95% nos dá total confiança no sistema. Nossos relatórios ambientais nunca foram tão detalhados e confiáveis.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Roberto Santos',
      role: 'Coordenador de Limpeza Urbana',
      city: 'Rio de Janeiro, RJ',
      content: 'O sistema de monitoramento em tempo real nos permite otimizar as rotas de coleta. Reduzimos o número de viagens desnecessárias e melhoramos significativamente nossa eficiência operacional.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Fernanda Lima',
      role: 'Gestora Ambiental',
      city: 'Porto Alegre, RS',
      content: 'O engajamento da população aumentou drasticamente. O app é intuitivo e o sistema de cashback motiva os cidadãos. Conseguimos criar uma verdadeira cultura de reciclagem na cidade.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'João Oliveira',
      role: 'Secretário de Inovação',
      city: 'Brasília, DF',
      content: 'A implementação foi surpreendentemente rápida e sem complicações. O suporte técnico é excepcional e os resultados apareceram já no primeiro mês. Recomendo para qualquer cidade.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que Dizem Nossos <span className="gradient-text">Parceiros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gestores públicos de todo o Brasil compartilham suas experiências 
            transformadoras com o SmartCiclo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 text-primary-200">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary-600 font-medium">
                    {testimonial.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Junte-se aos Líderes em Sustentabilidade
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Mais de 45 cidades já transformaram sua gestão de resíduos com o SmartCiclo. 
              Seja a próxima a liderar a revolução da reciclagem inteligente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Agendar Apresentação
              </button>
              <button className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Ver Casos de Sucesso
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials