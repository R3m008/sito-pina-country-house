import React from 'react';
import { Coffee, Wifi, ParkingCircle, Sparkles, Thermometer, Sparkle, Trees, Waves, Check } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { services, additionalServices } from '../mock';

const iconMap = {
  coffee: Coffee,
  wifi: Wifi,
  'parking-circle': ParkingCircle,
  sparkles: Sparkles,
  thermometer: Thermometer,
  sparkle: Sparkle,
  trees: Trees,
  waves: Waves
};

export const Servizi = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              Il Comfort che Rende Unica la Tua Esperienza
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Da Pina Country House, ogni dettaglio è curato per assicurarti un soggiorno sereno e senza pensieri. Ecco una panoramica dei servizi inclusi nel tuo pernottamento.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors duration-300">
                      <IconComponent className="text-emerald-700 group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">{service.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Servizi Aggiuntivi
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Arricchisci il tuo soggiorno con i nostri servizi extra su richiesta
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                {additionalServices.map((service) => (
                  <div key={service.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-emerald-700" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-stone-800 mb-1">{service.title}</h3>
                      <p className="text-stone-600">{service.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tutto Pronto per il Tuo Comfort
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Prenota ora e goditi tutti i nostri servizi inclusi nel prezzo.
          </p>
          <a href="tel:+393283815813">
            <button className="bg-white text-emerald-800 hover:bg-stone-100 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Prenota il Tuo Soggiorno
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servizi;