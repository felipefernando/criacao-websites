
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vi seu site e gostaria de solicitar um orçamento para criação de website/landing page. Podem me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
      >
        <MessageSquare size={24} />
        <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Solicite seu orçamento!
        </div>
      </button>
      
      <div className="absolute -top-2 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-2 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
    </div>
  );
};

export default WhatsAppFloat;
