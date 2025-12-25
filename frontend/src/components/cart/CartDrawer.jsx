import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Progress for discount tiers
  const getDiscountProgress = () => {
    if (itemCount >= 7) return { tier: 3, percent: 20, next: null };
    if (itemCount >= 5) return { tier: 2, percent: 14, next: 7 - itemCount };
    if (itemCount >= 3) return { tier: 1, percent: 10, next: 5 - itemCount };
    return { tier: 0, percent: 0, next: 3 - itemCount };
  };

  const discount = getDiscountProgress();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0f0f0f] z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#333]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-[#c9a962]" size={22} />
            <h2 className="text-lg font-semibold text-white">Tu Carrito – {itemCount}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#c9a962] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Discount Progress */}
        <div className="p-4 bg-[#1a1a1a]">
          <p className="text-sm text-gray-400 mb-2">
            {discount.next !== null 
              ? `Agregue ${discount.next} más para obtener un ${discount.percent === 0 ? 10 : discount.percent + 4}% de descuento`
              : '¡Felicidades! Tienes el máximo descuento'
            }
          </p>
          <div className="flex gap-2">
            <div className={`flex-1 h-2 rounded-full ${itemCount >= 3 ? 'bg-[#c9a962]' : 'bg-[#333]'}`}>
              <span className="sr-only">10% Off</span>
            </div>
            <div className={`flex-1 h-2 rounded-full ${itemCount >= 5 ? 'bg-[#c9a962]' : 'bg-[#333]'}`}>
              <span className="sr-only">14% Off</span>
            </div>
            <div className={`flex-1 h-2 rounded-full ${itemCount >= 7 ? 'bg-[#c9a962]' : 'bg-[#333]'}`}>
              <span className="sr-only">20% Off</span>
            </div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>10% Off</span>
            <span>14% Off</span>
            <span>20% Off</span>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-[#333] mb-4" />
              <p className="text-gray-400 mb-4">Tu carrito está vacío</p>
              <button
                onClick={onClose}
                className="text-[#c9a962] hover:underline"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-[#1a1a1a] rounded-lg p-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-white text-sm font-medium line-clamp-2">{item.name}</h4>
                    <p className="text-[#c9a962] font-semibold mt-1">${item.price.toLocaleString()} MXN</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded bg-[#333] text-white hover:bg-[#444] transition-colors flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-white w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded bg-[#333] text-white hover:bg-[#444] transition-colors flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[#333] p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-xl font-bold text-white">${subtotal.toLocaleString()} MXN</span>
            </div>
            {discount.percent > 0 && (
              <div className="flex items-center justify-between text-[#c9a962]">
                <span>Descuento ({discount.percent}%)</span>
                <span>-${Math.round(subtotal * discount.percent / 100).toLocaleString()} MXN</span>
              </div>
            )}
            <p className="text-xs text-gray-500">Impuestos, descuentos y envío calculados en la pantalla de pago</p>
            <button className="w-full py-3 bg-[#c9a962] text-black font-semibold rounded-lg hover:bg-[#d4b872] transition-colors">
              PROCEDER A PAGO
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;