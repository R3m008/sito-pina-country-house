import React, { useState } from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { blogPosts } from '../mock';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');

  const categories = ['Tutti', 'Eventi', 'Itinerari', 'Territorio'];

  const filteredPosts = selectedCategory === 'Tutti'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              Pina News: Eventi, Sagre e Itinerari del Territorio
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Resta aggiornato su tutto ciò che succede intorno a Pina Country House! Questa sezione è la tua guida agli eventi, alle sagre enogastronomiche, ai mercatini e ai percorsi naturalistici da non perdere durante il tuo soggiorno.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-700 text-white shadow-lg scale-105'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-stone-800 px-3 py-1.5 rounded-full shadow-lg">
                        <Tag size={14} />
                        <span className="text-xs font-semibold">{post.category}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-4">{post.excerpt}</p>
                    <Button variant="outline" className="w-full group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700 transition-all duration-300">
                      Leggi di Più
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-stone-600">Nessun articolo trovato in questa categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
                Esplora il Territorio
              </h2>
              <p className="text-lg text-stone-600">
                Scopri le meraviglie che circondano Pina Country House
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-rose-700" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Città d'Arte</h3>
                  <p className="text-stone-600 text-sm">A pochi km dalle più belle città storiche</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Natura Incontaminata</h3>
                  <p className="text-stone-600 text-sm">Sentieri e percorsi immersi nel verde</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">Enogastronomia</h3>
                  <p className="text-stone-600 text-sm">Degusta i sapori autentici del territorio</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Non Perdere le Novità!
            </h2>
            <p className="text-xl mb-8 text-stone-200">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti sugli eventi e le iniziative del territorio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-6 py-4 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 text-lg whitespace-nowrap">
                Iscriviti
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;