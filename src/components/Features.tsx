import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";
const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const features = [{
    title: "Automatización de Pagos",
    description: "Automatiza el procesamiento de pagos y conciliación para reducir errores manuales y mejorar la eficiencia.",
    expandedDescription: "Configura flujos de trabajo de pagos automatizados con cadenas de aprobación personalizadas. Programa pagos recurrentes, automatiza el procesamiento de facturas y crea reglas condicionales para diferentes tipos de transacción. Reduce la intervención manual y asegura el cumplimiento de las regulaciones financieras.",
    icon: <Layers size={24} className="text-cosmic-accent" />
  }, {
    title: "Análisis en Tiempo Real",
    description: "Monitorea el desempeño financiero con dashboards en tiempo real y reportes comprensivos.",
    expandedDescription: "Rastrea métricas financieras clave con dashboards personalizables. Monitorea flujo de efectivo, volúmenes de pago y tasas de éxito de transacciones en tiempo real. Genera reportes detallados para stakeholders e identifica tendencias antes de que impacten tu negocio.",
    icon: <Grid3x3 size={24} className="text-cosmic-accent" />
  }, {
    title: "Gestión de Riesgos",
    description: "Herramientas avanzadas de detección de fraudes y evaluación de riesgos para proteger tu negocio.",
    expandedDescription: "Utiliza algoritmos de machine learning para detectar transacciones sospechosas y prevenir fraudes. Configura reglas de riesgo personalizadas, monitorea patrones de transacción y recibe alertas instantáneas de actividad inusual. Protege tu negocio con medidas de seguridad de nivel empresarial.",
    icon: <LayoutDashboard size={24} className="text-cosmic-accent" />
  }, {
    title: "Herramientas de Cumplimiento",
    description: "Características de cumplimiento integradas para cumplir requisitos regulatorios sin esfuerzo.",
    expandedDescription: "Mantente en cumplimiento con regulaciones financieras en múltiples jurisdicciones. Verificaciones KYC/AML automatizadas, monitoreo de transacciones y reportes regulatorios. Genera auditorías y mantén documentación para cumplir estándares de compliance.",
    icon: <ListCheck size={24} className="text-cosmic-accent" />
  }, {
    title: "Soporte Multi-moneda",
    description: "Procesa pagos en múltiples monedas con tasas de cambio en tiempo real.",
    expandedDescription: "Acepta y procesa pagos en más de 150 monedas con tasas de cambio competitivas. Conversión automática de moneda, herramientas de cobertura y contabilidad multi-moneda. Expande tu negocio globalmente con procesamiento de pagos internacionales sin problemas.",
    icon: <Star size={24} className="text-cosmic-accent" />
  }, {
    title: "Integración API",
    description: "APIs poderosas para integración perfecta con tus sistemas financieros existentes.",
    expandedDescription: "Conecta con tu ERP, software de contabilidad y sistemas bancarios a través de nuestras APIs comprensivas. Webhooks en tiempo real, documentación detallada y SDKs para lenguajes de programación populares. Construye integraciones personalizadas que se ajusten a las necesidades únicas de tu negocio.",
    icon: <BookOpen size={24} className="text-cosmic-accent" />
  }];
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  return <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Todo lo que necesita tu negocio
          </h2>
          <p className="text-cosmic-muted text-lg">Tu nuevo centro de control para eficientar todos tus procesos de gestion y operación financiera</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Collapsible key={index} open={openFeature === index} onOpenChange={() => toggleFeature(index)} className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}>
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${openFeature === index ? 'rotate-180' : ''}`} />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>)}
        </div>
      </div>
    </section>;
};
export default Features;