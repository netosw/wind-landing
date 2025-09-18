import React from 'react';
import { Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {

  const features = [
    {
      title: "Automatización de Pagos",
      description: "Wind simplifica y agiliza todo el ciclo de pagos, desde la programación hasta la conciliación automática.",
      expandedDescription: "Gracias a la conexión de cobranza y al SAT, puedes configurar flujos de aprobación personalizados, programar pagos recurrentes y validar facturas emitidas y recibidas sin intervención manual, reduciendo errores y asegurando precisión en cada transacción.",
      icon: <Layers size={24} className="text-cosmic-accent" />
    },
    {
      title: "Agente IA Navi",
      description: "Obten visibilidad financiera inmediata con reportes y análisis proactivo de Navi, tu asistente inteligente.",
      expandedDescription: "Navi te permite hacer las preguntas que quieras y obtener la respuesta en segundos, sin necesidad de buscar y juntar toda la información de forma manual. Además, puede realizar acciones como facturar si se lo pides o crear nuevos clientes.",
      icon: <Grid3x3 size={24} className="text-cosmic-accent" />
    },
    {
      title: "Gestión de Riesgos",
      description: "Protege tu operación con herramientas que previenen errores y anomalías.",
      expandedDescription: "Confronta automáticamente CFDIs emitidos y recibidos, recibe alertas sobre movimientos inusuales y aprovecha el precálculo de facturas para minimizar fraudes y pérdidas. Wind convierte la gestión de riesgos en un proceso continuo y proactivo.",
      icon: <LayoutDashboard size={24} className="text-cosmic-accent" />
    },
    {
      title: "Cumplimiento Integrado",
      description: "Cumple siempre con las regulaciones sin esfuerzo adicional.",
      expandedDescription: "La plataforma está conectada directamente al SAT, generando documentación lista para auditorías y asegurando que cada factura y pago cumpla con los estándares fiscales. Wind integra compliance de forma nativa, dándote la tranquilidad de operar en regla.",
      icon: <ListCheck size={24} className="text-cosmic-accent" />
    },
    {
      title: "Soporte Multi-moneda",
      description: "Procesa pagos en múltiples monedas con tasas de cambio en tiempo real.",
      expandedDescription: "Acepta y procesa pagos en más de 150 monedas con tasas de cambio competitivas. Conversión automática de moneda, herramientas de cobertura y contabilidad multi-moneda. Expande tu negocio globalmente con procesamiento de pagos internacionales sin problemas.",
      icon: <Star size={24} className="text-cosmic-accent" />
    },
    {
      title: "Integración API",
      description: "APIs poderosas para integración perfecta con tus sistemas financieros existentes.",
      expandedDescription: "Conecta con tu ERP, software de contabilidad y sistemas bancarios a través de nuestras APIs comprensivas. Webhooks en tiempo real, documentación detallada y SDKs para lenguajes de programación populares. Construye integraciones personalizadas que se ajusten a las necesidades únicas de tu negocio.",
      icon: <BookOpen size={24} className="text-cosmic-accent" />
    }
  ];

  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Todo lo que necesita tu negocio
          </h2>
          <p className="text-cosmic-muted text-lg">Automatiza el ciclo completo de tus procesos de gestión financiera</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="rounded-xl border border-cosmic-light/40 cosmic-gradient transition-all duration-300"
            >
              <div className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted mb-4">{feature.description}</p>
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;