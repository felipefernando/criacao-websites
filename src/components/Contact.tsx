
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de criação de websites e landing pages. Pode me enviar um orçamento sem compromisso?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const openEmail = () => {
    window.open('mailto:contato@webcraft.com.br?subject=Orçamento Website&body=Olá, gostaria de saber mais sobre os serviços de criação de websites e landing pages.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vamos conversar sobre seu projeto! Orçamento gratuito e sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-sm text-green-600">Resposta rápida garantida!</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <p className="text-gray-600">contato@webcraft.com.br</p>
                    <p className="text-sm text-blue-600">Resposta em até 2 horas</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-sm text-purple-600">Sábados: 9h às 14h</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </Button>
              <Button 
                onClick={openEmail}
                variant="outline"
                size="lg" 
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Por que escolher nossos serviços?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Orçamento Gratuito</h4>
                    <p className="text-blue-100 text-sm">Análise completa sem compromisso</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Entrega Rápida</h4>
                    <p className="text-blue-100 text-sm">Projetos finalizados em até 7 dias</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Suporte Contínuo</h4>
                    <p className="text-blue-100 text-sm">Acompanhamento após a entrega</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Garantia de Qualidade</h4>
                    <p className="text-blue-100 text-sm">Revisões até sua total satisfação</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <p className="text-center text-sm text-blue-100">
                  "Transformamos suas ideias em realidade digital"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
