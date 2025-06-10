import React, { useState } from 'react';
import { X } from 'lucide-react';
import imagem from './imagem.jpeg'
export default function ModernModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      {/* Botão */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
      >
        Ver Demonstração
      </button>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 mt-20">
            <div className="bg-white rounded-xl max-w-lg w-full shadow-2xl overflow-hidden ">
              
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Demonstração</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>
              
              {/* Imagem */}
              <div className="p-4">
                <img
                  src={imagem}
                  alt="LAL"
                  className="w-full h-78 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}