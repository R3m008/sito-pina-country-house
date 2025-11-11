import React from 'react';
import { MapPin, Car, Train } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { aboutInfo, heroImages } from '../mock';

export const ChiSiamo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              La Nostra Storia: Un Sogno Chiamato Ospitalità
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImages.main}
                  alt="Pina Country House"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold">LA NOSTRA STORIA</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                  Una Passione per l'Ospitalità
                </h2>
                <p className="text-lg text-stone-700 leading-relaxed mb-4">
                  {aboutInfo.story}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">DOVE CI TROVIAMO</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
                Immersi nella Natura
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed">
                {aboutInfo.location}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={heroImages.interior}
                  alt="Interni della Struttura"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">I Nostri Interni</h3>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={heroImages.aerial}
                  alt="Vista aerea"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Vista dall'Alto</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
                Come Arrivare
              </h2>
              <p className="text-lg text-stone-600">
                Raggiungici facilmente in auto o con i mezzi pubblici
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* By Car */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <Car className="text-emerald-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">In Auto</h3>
                  <p className="text-stone-700 leading-relaxed">
                    {aboutInfo.directions.car}
                  </p>
                </CardContent>
              </Card>

              {/* Public Transport */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Train className="text-blue-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">Mezzi Pubblici</h3>
                  <p className="text-stone-700 leading-relaxed">
                    {aboutInfo.directions.publicTransport}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="relative h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.52614820416!2d14.709852976518402!3d40.728446736607765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc1fdaf06a503%3A0xbd3a1e74f02194be!2sPina%20Country%20House!5e0!3m2!1sit!2sit!4v1762377110602!5m2!1sit!2sit" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Pina Country House"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vieni a Trovarci
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Ti aspettiamo per condividere con te la bellezza e la tranquillità della nostra campagna.
          </p>
          <a href="tel:+393283815813">
            <button className="bg-white text-emerald-800 hover:bg-stone-100 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Contattaci
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;