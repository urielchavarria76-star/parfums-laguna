import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

const NewsletterPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail('');
      setName('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="relative bg-[#0f0f0f] rounded-2xl max-w-md w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Header Image */}
          <div className="h-32 bg-gradient-to-r from-[#c9a962]/20 to-[#c9a962]/5 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">
                <span className="text-[#c9a962]">Parfums</span> TRC
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {!submitted ? (
              <>
                <h4 className="text-xl font-bold text-white text-center mb-2">
                  Se parte de Parfums TRC
                </h4>
                <p className="text-gray-400 text-center text-sm mb-6">
                  Únete a una comunidad que valora el perfume como una forma de expresión.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-[#333] focus:border-[#c9a962] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-[#333] focus:border-[#c9a962] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#c9a962] text-black font-semibold rounded-lg hover:bg-[#d4b872] transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    ¡Quiero ser Parte!
                  </button>
                </form>

                <button 
                  onClick={onClose}
                  className="w-full mt-4 text-gray-500 text-sm hover:text-gray-400 transition-colors"
                >
                  No Gracias
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">¡Gracias!</h4>
                <p className="text-gray-400">Te has unido a nuestra comunidad.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterPopup;