
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      category: "Loja Virtual",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Plataforma completa com integração de pagamentos e WhatsApp"
    },
    {
      title: "Landing Page Médica",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Site responsivo para clínica com agendamento online"
    },
    {
      title: "Portfólio Criativo",
      category: "Design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Website moderno para designer freelancer"
    },
    {
      title: "Site Corporativo",
      category: "Empresa",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Presença digital profissional para consultoria"
    },
    {
      title: "App de Delivery",
      category: "Restaurante",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Plataforma de pedidos com integração WhatsApp"
    },
    {
      title: "Curso Online",
      category: "Educação",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Portal educacional com área do aluno"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nosso <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-12 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pronto para Começar Seu Projeto?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido especialmente para atender as necessidades do seu negócio. 
              Entre em contato e vamos criar algo incrível juntos!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>✓ Desenvolvimento personalizado</span>
              <span>✓ Design responsivo</span>
              <span>✓ Integração WhatsApp</span>
              <span>✓ Suporte contínuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
