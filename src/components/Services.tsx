
import { Smartphone, Users, MessageSquare, Palette, Zap, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: "Design Responsivo",
      description: "Websites que se adaptam perfeitamente a todos os dispositivos: desktop, tablet e mobile."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-green-600" />,
      title: "Integração WhatsApp",
      description: "Conecte-se diretamente com seus clientes através de botões e formulários integrados ao WhatsApp."
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Redes Sociais",
      description: "Integração completa com Instagram, Facebook, LinkedIn e outras redes sociais do seu negócio."
    },
    {
      icon: <Palette className="h-12 w-12 text-pink-600" />,
      title: "Design Personalizado",
      description: "Criamos layouts únicos que refletem a identidade visual da sua marca e seus valores."
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Alta Performance",
      description: "Sites otimizados para carregar rapidamente e proporcionar a melhor experiência do usuário."
    },
    {
      icon: <Headphones className="h-12 w-12 text-red-600" />,
      title: "Suporte Dedicado",
      description: "Suporte personalizado e acompanhamento contínuo para garantir o sucesso do seu projeto."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para levar seu negócio ao próximo nível na internet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Ideal para Todos os Tipos de Negócio</h3>
            <p className="text-blue-100 mb-4">
              E-commerce • Prestadores de Serviços • Produtos Digitais • Consultoria • Clínicas • Restaurantes • e muito mais!
            </p>
            <div className="text-sm text-blue-200">
              ✓ Orçamento sem compromisso ✓ Suporte personalizado ✓ Entrega garantida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
