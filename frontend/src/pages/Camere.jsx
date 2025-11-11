import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { rooms } from '../mock';

export const Camere = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (roomId, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % images.length
    }));
  };

  const prevImage = (roomId, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + images.length) % images.length
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              Tre Gioielli di Comfort, Ciascuno con la Sua Anima
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Ogni stanza di Pina Country House è stata arredata con cura e un design unico, ispirato a pietre preziose, per garantirti un riposo regale.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {rooms.map((room, index) => {
              const currentIndex = currentImageIndex[room.id] || 0;
              const isEven = index % 2 === 0;

              return (
                <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Images */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative group">
                      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={room.images[currentIndex]}
                          alt={`${room.name} - Image ${currentIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>

                      {/* Image Navigation */}
                      {room.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(room.id, room.images)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                          >
                            <ChevronLeft size={20} className="text-stone-800" />
                          </button>
                          <button
                            onClick={() => nextImage(room.id, room.images)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                          >
                            <ChevronRight size={20} className="text-stone-800" />
                          </button>
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {room.images.map((_, idx) => (
                              <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
                          room.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                          room.color === 'slate' ? 'bg-slate-100 text-slate-800' :
                          'bg-rose-100 text-rose-800'
                        }`}>
                          <span className="text-sm font-semibold">{room.name.toUpperCase()}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-3">{room.name}</h2>
                        <p className="text-xl text-stone-600 mb-4">{room.subtitle}</p>
                        <p className="text-stone-700 leading-relaxed">{room.description}</p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-stone-800 mb-4">Dotazioni:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {room.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                                room.color === 'emerald' ? 'bg-emerald-100' :
                                room.color === 'slate' ? 'bg-slate-100' :
                                'bg-rose-100'
                              }`}>
                                <Check size={14} className={`${
                                  room.color === 'emerald' ? 'text-emerald-700' :
                                  room.color === 'slate' ? 'text-slate-700' :
                                  'text-rose-700'
                                }`} />
                              </div>
                              <span className="text-stone-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a href="tel:+393283815813">
                        <Button className={`w-full sm:w-auto ${
                          room.color === 'emerald' ? 'bg-emerald-700 hover:bg-emerald-800' :
                          room.color === 'slate' ? 'bg-slate-700 hover:bg-slate-800' :
                          'bg-rose-700 hover:bg-rose-800'
                        }`}>
                          Prenota {room.name}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Confronta le Camere
            </h2>
            <p className="text-lg text-stone-600">Trova la camera perfetta per te</p>
          </div>

          <div className="overflow-x-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-stone-200">
                      <th className="text-left py-4 px-4 text-stone-800 font-bold">Camera</th>
                      {rooms.map(room => (
                        <th key={room.id} className="text-center py-4 px-4">
                          <div className="text-xl font-bold text-stone-800">{room.name}</div>
                          <div className="text-sm text-stone-600 mt-1">{room.subtitle}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100">
                      <td className="py-4 px-4 font-semibold text-stone-700">Tipo Letto</td>
                      <td className="py-4 px-4 text-center text-stone-600">Queen Size</td>
                      <td className="py-4 px-4 text-center text-stone-600">King Size</td>
                      <td className="py-4 px-4 text-center text-stone-600">Matrimoniale</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-4 px-4 font-semibold text-stone-700">Bagno</td>
                      <td className="py-4 px-4 text-center text-stone-600">Doccia Spaziosa</td>
                      <td className="py-4 px-4 text-center text-stone-600">Vasca Idromassaggio</td>
                      <td className="py-4 px-4 text-center text-stone-600">Bagno Privato</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-stone-700">Spazio Extra</td>
                      <td className="py-4 px-4 text-center text-stone-600">Angolo Scrivania</td>
                      <td className="py-4 px-4 text-center text-stone-600">Angolo Salotto + Balcone</td>
                      <td className="py-4 px-4 text-center text-stone-600">Frigobar</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-stone-700">Ideale per</td>
                      <td className="py-4 px-4 text-center text-stone-600">Coppie</td>
                      <td className="py-4 px-4 text-center text-stone-600">Famiglie / Coppie</td>
                      <td className="py-4 px-4 text-center text-stone-600">Weekend Romantici</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Scegli il Tuo Gioiello
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-stone-300">
            Prenota ora la camera dei tuoi sogni e inizia a vivere un'esperienza indimenticabile.
          </p>
          <a href="tel:+393283815813">
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-lg">
              Prenota Ora
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Camere;