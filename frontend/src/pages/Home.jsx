import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Home as HomeIcon, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { siteInfo, services, rooms, blogPosts, heroImages } from '../mock';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages.main})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            {siteInfo.tagline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-stone-100 leading-relaxed">
            {siteInfo.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+393283815813">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Prenota Ora
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Servizi Preview */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">I NOSTRI SERVIZI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Il Comfort che Rende Unica la Tua Esperienza
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Scopri i nostri servizi: colazione genuina, Wi-Fi veloce e tanto relax immersi nella natura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.slice(0, 4).map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="text-emerald-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/servizi">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
                Vedi Tutti i Servizi
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Camere Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
              <HomeIcon size={18} />
              <span className="text-sm font-semibold">LE NOSTRE CAMERE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Tre Gioielli di Comfort
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Smeraldo, Diamante, Rubino: tre modi unici di vivere il tuo soggiorno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 h-80">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{room.name}</h3>
                    <p className="text-sm text-stone-200">{room.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/camere">
              <Button className="bg-stone-800 hover:bg-stone-900 text-white">
                Scopri Le Camere
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <BookOpen size={18} />
              <span className="text-sm font-semibold">PINA NEWS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Eventi e Territorio
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Non perderti gli eventi e le sagre del territorio!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-stone-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-stone-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{post.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/blog">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
                Vai al Blog
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+)' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto per la Tua Vacanza da Sogno?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Prenota ora il tuo soggiorno e scopri la bellezza della campagna italiana.
          </p>
          <a href="tel:+393283815813">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-stone-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Prenota Ora
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;