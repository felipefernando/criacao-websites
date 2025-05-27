
import { MessageSquare, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de criação de websites e landing pages.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              WebCraft
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Criamos websites e landing pages que convertem visitantes em clientes. 
              Sua presença digital profissional começa aqui.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <MessageSquare size={20} />
              </button>
              <a 
                href="mailto:contato@webcraft.com.br"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Landing Pages</li>
              <li>Websites Responsivos</li>
              <li>E-commerce</li>
              <li>Integração WhatsApp</li>
              <li>Redes Sociais</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <MessageSquare size={16} />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>contato@webcraft.com.br</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin size={16} className="mt-1" />
                <span>São Paulo, SP<br />Atendimento Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 WebCraft. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              Desenvolvido com ❤️ para seu sucesso digital
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
