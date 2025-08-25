import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import About from './pages/About';
import { 
  Clock, 
  Shield, 
  DollarSign, 
  Headphones, 
  FileText, 
  Presentation, 
  Code, 
  BookOpen,
  Star,
  Check,
  MessageCircle,
  Instagram,
  Mail,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Globe
} from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const testimonials = [
    {
      name: "Sarah M.",
      course: "Teknik Informatika",
      rating: 5,
      text: "Pelayanan sangat memuaskan! Tugas coding saya selesai tepat waktu dengan kualitas yang excellent."
    },
    {
      name: "Ahmad R.",
      course: "Manajemen",
      rating: 5,
      text: "Tim profesional dan responsif. Makalah bisnis saya dapat nilai A. Highly recommended!"
    },
    {
      name: "Dina K.",
      course: "Psikologi",
      rating: 5,
      text: "Support 24/7 benar-benar membantu. Revisi cepat dan hasil memuaskan untuk tugas akhir saya."
    }
  ];

  const portfolioProjects = [
    {
      title: 'Sistem Manajemen Perpustakaan',
      category: 'Web Development',
      description: 'Aplikasi web untuk mengelola data buku, anggota, dan transaksi peminjaman dengan fitur lengkap.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      title: 'Analisis Sentimen Media Sosial',
      category: 'Data Science',
      description: 'Penelitian dan implementasi machine learning untuk analisis sentimen pada data Twitter.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NLTK'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      title: 'E-Commerce Mobile App',
      category: 'Mobile Development',
      description: 'Aplikasi mobile e-commerce dengan fitur pembayaran digital dan tracking pengiriman.',
      technologies: ['React Native', 'Firebase', 'Stripe API'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      title: 'Dashboard Analytics',
      category: 'Data Visualization',
      description: 'Dashboard interaktif untuk visualisasi data penjualan dan performa bisnis real-time.',
      technologies: ['Vue.js', 'D3.js', 'Chart.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      title: 'Sistem Informasi Akademik',
      category: 'Enterprise System',
      description: 'Platform terintegrasi untuk manajemen data mahasiswa, nilai, dan jadwal kuliah.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      title: 'AI Chatbot Customer Service',
      category: 'Artificial Intelligence',
      description: 'Chatbot cerdas untuk customer service dengan natural language processing.',
      technologies: ['Python', 'OpenAI API', 'Flask', 'MongoDB'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    }
  ];
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (currentPage === 'about') {
    return <About isDarkMode={isDarkMode} onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <ParticleBackground isDarkMode={isDarkMode} />
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient- to-br from-black via-gray-900 to-black opacity-90' 
            : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-90'
        }`}></div>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${
          isDarkMode 
            ? 'from-yellow-400/5 via-transparent to-transparent' 
            : 'from-yellow-400/10 via-transparent to-transparent'
        }`}></div>
        
        <div className="relative text-center max-w-4xl mx-auto z-10" style={{ zIndex: 10 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className={isDarkMode? 'bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-black/30 via-yellow-400 to-yellow-600 bg-clip-text text-transparent'}>
              Joki Tugas
            </span>
            <br />
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Profesional & Tepat Waktu</span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Solusi cepat, terpercaya, dan berkualitas untuk semua kebutuhan akademik Anda
          </p>
          
          <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25">
            <span className="flex items-center gap-2">
              Pesan Sekarang
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-black to-gray-900' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Mengapa Memilih Kami?
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cepat & Tepat Waktu</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Kami menjamin pengerjaan tugas sesuai deadline dengan kualitas terbaik tanpa kompromi.</p>
            </div>

            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Kualitas Terjamin</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tim ahli berpengalaman mengerjakan setiap tugas dengan standar akademik tertinggi.</p>
            </div>

            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Harga Transparan</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tidak ada biaya tersembunyi. Harga fair dan sesuai dengan tingkat kesulitan tugas.</p>
            </div>

            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-8 h-8 text-black" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Support 24/7</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tim customer service siaga 24 jam untuk membantu dan menjawab pertanyaan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Layanan Kami
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border-yellow-400/20' 
                  : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
              }`}>
                <FileText className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Joki Makalah</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Makalah berkualitas dengan referensi lengkap dan format akademik yang benar</p>
            </div>

            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border-yellow-400/20' 
                  : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
              }`}>
                <Presentation className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Joki PowerPoint</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Presentasi menarik dengan desain profesional dan konten yang engaging</p>
            </div>

            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border-yellow-400/20' 
                  : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
              }`}>
                <Code className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Joki Coding</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pemrograman berbagai bahasa dengan dokumentasi lengkap dan code yang clean</p>
            </div>

            <div className={`group p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 text-center ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border-yellow-400/20' 
                  : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
              }`}>
                <BookOpen className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Tugas Harian</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Bantuan berbagai tugas harian dengan solusi cepat dan akurat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-black to-gray-900' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Portfolio Proyek
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-yellow-400/50' 
                  : 'bg-white border border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
              }`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-2 py-1 rounded-md text-xs font-medium ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-yellow-400/20 text-gray-300 hover:text-yellow-400' 
                        : 'bg-gray-100 hover:bg-yellow-50 text-gray-700 hover:text-yellow-600'
                    }`}>
                      <ExternalLink className="w-4 h-4" />
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Testimoni Klien
            </span>
          </h2>
          
          <div className={`relative rounded-3xl p-8 md:p-12 border max-w-4xl mx-auto ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50' 
              : 'bg-white border-gray-200/50 shadow-xl'
          }`}>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className={`text-xl md:text-2xl mb-8 leading-relaxed italic ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-bold text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <p className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {testimonials[currentTestimonial].name}
                </p>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                  {testimonials[currentTestimonial].course}
                </p>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 border ${
                  isDarkMode 
                    ? 'bg-gray-700/50 hover:bg-yellow-400/20 border-gray-600/50 hover:border-yellow-400/50' 
                    : 'bg-white/80 hover:bg-yellow-50 border-gray-300/50 hover:border-yellow-400/50 shadow-lg'
                }`}
              >
                <ChevronLeft className={`w-6 h-6 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'
                }`} />
              </button>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={nextTestimonial}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 border ${
                  isDarkMode 
                    ? 'bg-gray-700/50 hover:bg-yellow-400/20 border-gray-600/50 hover:border-yellow-400/50' 
                    : 'bg-white/80 hover:bg-yellow-50 border-gray-300/50 hover:border-yellow-400/50 shadow-lg'
                }`}
              >
                <ChevronRight className={`w-6 h-6 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'
                }`} />
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-yellow-400 scale-125'
                      : isDarkMode 
                        ? 'bg-gray-600 hover:bg-gray-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-black to-gray-900' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Paket Layanan
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className={`p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-yellow-400">Rp 50K</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>/tugas</span>
                </div>
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Tugas maksimal 5 halaman</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Pengerjaan 3-5 hari</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>1x revisi gratis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Chat support</span>
                  </li>
                </ul>
                <button className={`w-full py-3 rounded-full transition-all duration-300 font-semibold ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-yellow-400 hover:to-yellow-600 text-white hover:text-black' 
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 hover:from-yellow-400 hover:to-yellow-600 text-gray-700 hover:text-black'
                }`}>
                  Pilih Basic
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className={`p-8 rounded-2xl border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-500 hover:transform hover:-translate-y-2 relative ${
              isDarkMode 
                ? 'bg-gradient-to-br from-yellow-400/10 to-yellow-600/10' 
                : 'bg-gradient-to-br from-yellow-50 to-yellow-100'
            }`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold">
                TERPOPULER
              </div>
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-yellow-400">Rp 100K</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>/tugas</span>
                </div>
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Tugas maksimal 15 halaman</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Pengerjaan 2-3 hari</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>3x revisi gratis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Konsultasi gratis</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black py-3 rounded-full transition-all duration-300 font-semibold hover:shadow-xl hover:shadow-yellow-400/25">
                  Pilih Premium
                </button>
              </div>
            </div>

            {/* VIP Plan */}
            <div className={`p-8 rounded-2xl border transition-all duration-500 hover:transform hover:-translate-y-2 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50 hover:border-yellow-400/50' 
                : 'bg-white border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
            }`}>
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>VIP</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-yellow-400">Rp 200K</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>/tugas</span>
                </div>
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Tugas unlimited halaman</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Pengerjaan 1-2 hari</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Unlimited revisi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>VIP support 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Personal assistant</span>
                  </li>
                </ul>
                <button className={`w-full py-3 rounded-full transition-all duration-300 font-semibold ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-yellow-400 hover:to-yellow-600 text-white hover:text-black' 
                    : 'bg-gradient-to-r from-gray-200 to-gray-300 hover:from-yellow-400 hover:to-yellow-600 text-gray-700 hover:text-black'
                }`}>
                  Pilih VIP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-20 px-6 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Butuh bantuan <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">sekarang juga?</span>
          </h2>
          <p className={`text-xl mb-10 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Kami siap membantu 24/7. Hubungi kami sekarang dan dapatkan solusi terbaik untuk tugas akademik Anda.
          </p>
          
          <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25">
            <span className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Hubungi via WhatsApp
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-6 ${
        isDarkMode 
          ? 'bg-black border-gray-800/50' 
          : 'bg-gray-900 border-gray-200/50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                JOKI TUGAS ONLINE
              </h3>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-300'}>Solusi profesional untuk kebutuhan akademik Anda</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className={`p-4 rounded-full transition-all duration-300 group border ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-yellow-400/20 border-gray-700/50 hover:border-yellow-400/50' 
                  : 'bg-gray-700 hover:bg-yellow-400/20 border-gray-600/50 hover:border-yellow-400/50'
              }`}>
                <MessageCircle className={`w-6 h-6 group-hover:text-yellow-400 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-200'
                }`} />
              </a>
              <a href="#" className={`p-4 rounded-full transition-all duration-300 group border ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-yellow-400/20 border-gray-700/50 hover:border-yellow-400/50' 
                  : 'bg-gray-700 hover:bg-yellow-400/20 border-gray-600/50 hover:border-yellow-400/50'
              }`}>
                <Instagram className={`w-6 h-6 group-hover:text-yellow-400 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-200'
                }`} />
              </a>
              <a href="#" className={`p-4 rounded-full transition-all duration-300 group border ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-yellow-400/20 border-gray-700/50 hover:border-yellow-400/50' 
                  : 'bg-gray-700 hover:bg-yellow-400/20 border-gray-600/50 hover:border-yellow-400/50'
              }`}>
                <Mail className={`w-6 h-6 group-hover:text-yellow-400 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-200'
                }`} />
              </a>
            </div>
          </div>
          
          <div className={`border-t mt-8 pt-8 text-center ${
            isDarkMode ? 'border-gray-800/50' : 'border-gray-700/50'
          }`}>
            <p className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
              © 2025 JOKI TUGAS ONLINE. All rights reserved. | 
              <span className="text-yellow-400 ml-2">Premium Academic Services</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;