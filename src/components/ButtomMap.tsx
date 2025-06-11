import React, { useState } from 'react';
import { X } from 'lucide-react';
import imagem from './imagem.jpeg'
export default function ModernModalDemoMap() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      {/* Botão */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
      >
        Ver localidades
      </button>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 mt-20">
            <div className="bg-white rounded-xl w-[1000px] shadow-2xl overflow-hidden ">
              
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Localidades</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>
              
              {/* Imagem */}
              <div className="p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2576.4372982353766!2d-52.37746495517722!3d-24.04402147217707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-24.044198140603125!2d-52.37762427025705!5e0!3m2!1spt-BR!2sbr!4v1749682418060!5m2!1spt-BR!2sbr" 
                  className="w-[970px] h-[500px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}