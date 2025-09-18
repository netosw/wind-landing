
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ahora puedo gestionar a mis clientes en la misma plataforma donde les cobro, esto ha hecho mis procesos mucho más simples y con menos errores.",
      author: "Sarah Johnson",
      position: "CFO en TechCorp",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "Las capacidades de análisis en tiempo real y detección de fraudes nos han ahorrado millones. Podemos detectar problemas antes de que se conviertan en crisis.",
      author: "Michael Chen",
      position: "Jefe de Riesgo en FinanceFlow",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "El cumplimiento solía ser una pesadilla. Ahora nuestros reportes regulatorios están automatizados y siempre estamos listos para auditorías.",
      author: "Leila Rodriguez",
      position: "Directora de Operaciones en GlobalPay",
      avatar: "bg-cosmic-light/40"
    }
  ];
  
  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Confianza de equipos financieros en todo el mundo
          </h2>
          <p className="text-muted-foreground text-lg">
            Ve cómo nuestra plataforma transforma las operaciones financieras de empresas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
