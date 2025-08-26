import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { 
  User, 
  GraduationCap, 
  Award, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowLeft,
  Mail,
  MessageCircle,
  Instagram,
  Code,
  BookOpen,
  Database,
  Brain,
  Globe,
  Smartphone
} from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ isDarkMode, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when the page opens
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fake loading to show skeleton
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { icon: Clock, label: 'Tahun Pengalaman', value: '4+' },
    { icon: Users, label: 'Klien Puas', value: '2500+' },
    { icon: CheckCircle, label: 'Tugas Selesai', value: '5000+' },
    { icon: Award, label: 'Rating Kepuasan', value: '4.9/5' },
  ];

  const mentors = [
    {
      name: 'Wahyu S. Tamu`u',
      role: 'Fullstack Developer',
      expertise: 'Information Technology Education',
      experience: '4+ years',
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Javascript', 'Express', 'Node.js', 'Laravel'],
      education: 'Information Technology Education - Universitas Negeri Gorontalo',
      icon: Code,
      description: 'Programmer hebat dengan pengalaman di berbagai proyek instansi dan akademik. '
    },
    {
      name: 'Alif Bima Pradana',
      role: 'Fullstack Developer',
      expertise: 'Infomation System',
      experience: '4+ years',
      avatar: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Next.js', 'Nuxt.js', 'React', 'Laravel', 'Vue.js'],
      education: 'Information System - Universitas Negeri Gorontalo',
      icon: Code,
      description: 'Programmer hebat dengan pengalaman di berbagai proyek instansi dan akademik.'
    },
    {
      name: 'Khairul Azhari Ali',
      role: 'Frontend Developer',
      expertise: 'Infomation System',
      experience: '4+ years',
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Laravel', 'Tailwind CSS', 'Bootstrap', 'Javascript'],
      education: 'Information System - Universitas Negeri Gorontalo',
      icon: Code,
      description: 'Programmer yang bertujuan mengembangkan sistem informasi yang efisien dan sesuai dengan kebutuhan bisnis.'
    },
    {
      name: 'Dr. David Kim',
      role: 'Research & Analytics Lead',
      expertise: 'Research & Statistics',
      experience: '9+ years',
      avatar: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Statistical Analysis', 'Research Methodology', 'Data Visualization'],
      education: 'PhD Statistics - University of California',
      icon: Database,
      description: 'Ahli analisis data dan metodologi penelitian dengan publikasi di jurnal internasional.'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Creative Content Specialist',
      expertise: 'Design & Communication',
      experience: '6+ years',
      avatar: 'https://images.pexels.com/photos/3777955/pexels-photo-3777955.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['UI/UX Design', 'Content Creation', 'Digital Marketing'],
      education: 'MA Design - Parsons School of Design',
      icon: Smartphone,
      description: 'Spesialis desain kreatif dan komunikasi digital dengan portfolio di berbagai brand ternama.'
    },
    {
      name: 'Prof. Robert Wilson',
      role: 'Academic Writing Expert',
      expertise: 'Literature & Research',
      experience: '12+ years',
      avatar: 'https://images.pexels.com/photos/3777958/pexels-photo-3777958.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Academic Writing', 'Literature Review', 'Research Papers'],
      education: 'PhD Literature - Oxford University',
      icon: BookOpen,
      description: 'Ahli penulisan akademik dengan pengalaman sebagai reviewer di berbagai jurnal internasional.'
    }
  ];

  const skills = [
    'Academic Writing',
    'Research & Analysis',
    'Programming (Python, Java, C++)',
    'Data Analysis',
    'Presentation Design',
    'Project Management',
    'Statistical Analysis',
    'Literature Review'
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Universitas Indonesia',
      year: '2019-2021',
      description: 'Fokus pada Machine Learning dan Data Science'
    },
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Institut Teknologi Bandung',
      year: '2015-2019',
      description: 'Cum Laude, GPA 3.8/4.0'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black text-white' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => {}} />

      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Removed back button */}

          {isLoading ? (
            <div className="text-center mb-16">
              <div className={`w-32 h-32 mx-auto mb-8 rounded-full animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <div className={`h-12 w-64 mx-auto mb-4 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <div className={`h-6 w-full max-w-3xl mx-auto mb-2 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <div className={`h-6 w-5/6 mx-auto rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
            </div>
          ) : (
            <div className="text-center mb-16">
              <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-yellow-400 to-yellow-600'
              }`}>
                <Users className="w-16 h-16 text-black" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Tentang Kami
                </span>
              </h1>
              
              <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Tim mentor profesional dengan pengalaman akademik dan industri yang siap membantu Anda mencapai kesuksesan akademik.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 px-6 -mt-10">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50' : 'bg-white border border-gray-200/50 shadow-lg'}`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                  <div className={`h-8 w-16 mx-auto mb-2 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                  <div className={`h-4 w-24 mx-auto rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-yellow-400/50' 
                    : 'bg-white border border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
                }`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-yellow-400/10 border border-yellow-400/20' : 'bg-yellow-50 border border-yellow-200'
                  }`}>
                    <stat.icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                  <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div>
              <div className={`h-8 w-48 mx-auto mb-12 text-center rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50' : 'bg-white border border-gray-200/50 shadow-lg'}`}>
                    <div className={`w-24 h-24 mx-auto mb-4 rounded-full animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className={`h-6 w-3/4 mx-auto mb-2 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className={`h-4 w-1/2 mx-auto mb-3 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className="space-y-2">
                      <div className={`h-3 w-full rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                      <div className={`h-3 w-5/6 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Tim Mentor Profesional
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentors.map((mentor, index) => (
                  <div key={index} className={`group p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-yellow-400/50' 
                      : 'bg-white border border-gray-200/50 hover:border-yellow-400/50 shadow-lg'
                  }`}>
                    <div className="text-center mb-4">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <img 
                          src={mentor.avatar} 
                          alt={mentor.name}
                          className="w-full h-full rounded-full object-cover border-4 border-yellow-400/20"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center ${
                          isDarkMode ? 'bg-yellow-400/10 border border-yellow-400/20' : 'bg-yellow-50 border border-yellow-200'
                        }`}>
                          <mentor.icon className="w-4 h-4 text-yellow-500" />
                        </div>
                      </div>
                      <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {mentor.name}
                      </h3>
                      <p className="text-yellow-500 font-semibold text-sm mb-1">{mentor.role}</p>
                      <p className={`text-xs mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {mentor.expertise} • {mentor.experience}
                      </p>
                    </div>
                    
                    <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {mentor.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className={`text-xs font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Spesialisasi:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.specializations.map((spec, specIndex) => (
                          <span key={specIndex} className={`px-2 py-1 rounded-md text-xs font-medium ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <strong>Pendidikan:</strong> {mentor.education}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - About Us */}
            <div>
              {isLoading ? (
                <div>
                  <div className={`h-8 w-48 mb-8 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                  <div className="space-y-4">
                    <div className={`h-4 w-full rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className={`h-4 w-5/6 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className={`h-4 w-full rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className={`h-4 w-4/5 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className={`h-4 w-full rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                    <div className={`h-4 w-3/4 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      Mengapa Memilih Kami?
                    </span>
                  </h2>
                  
                  <div className={`prose prose-lg ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
                    <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Tim kami terdiri dari mentor-mentor profesional dengan latar belakang pendidikan terkemuka dan pengalaman industri yang luas. Setiap mentor memiliki spesialisasi unik yang memastikan Anda mendapatkan bantuan yang tepat sesuai kebutuhan akademik Anda.
                    </p>
                    
                    <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Kami memahami tantangan yang dihadapi mahasiswa dalam menyelesaikan tugas-tugas akademik, terutama dengan deadline yang ketat dan standar kualitas yang tinggi. Oleh karena itu, kami hadir untuk memberikan solusi terbaik dengan pendekatan profesional dan personal.
                    </p>

                    <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Setiap tugas yang kami kerjakan selalu melalui proses riset mendalam, analisis yang teliti, dan review berkualitas untuk memastikan hasil yang memuaskan dan sesuai dengan standar akademik tertinggi.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Right Column - Skills */}
            <div>
              {isLoading ? (
                <div>
                  <div className={`h-8 w-32 mb-8 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(8)].map((_, index) => (
                      <div key={index} className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'}`}>
                        <div className={`h-4 w-full rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      Keahlian Tim
                    </span>
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className={`p-4 rounded-xl transition-all duration-200 hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border border-gray-700/50 hover:border-yellow-400/50' 
                          : 'bg-gray-50 border border-gray-200/50 hover:border-yellow-400/50'
                      }`}>
                        <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {isLoading ? (
            <div>
              <div className={`h-8 w-48 mx-auto mb-8 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <div className={`h-6 w-full max-w-2xl mx-auto mb-12 rounded animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className={`h-14 w-32 rounded-full animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
                <div className={`h-14 w-24 rounded-full animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Mari Berkolaborasi
                </span>
              </h2>
              
              <p className={`text-xl mb-12 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Tim mentor kami siap membantu Anda mencapai kesuksesan akademik. Hubungi kami untuk konsultasi gratis dan diskusi kebutuhan tugas Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    WhatsApp
                  </span>
                </button>
                
                <button className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' 
                    : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
                }`}>
                  <span className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-6 mt-16 ${
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
};

export default About;