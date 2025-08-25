import React from 'react';
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
  Instagram
} from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ isDarkMode, onBack }) => {
  const stats = [
    { icon: Clock, label: 'Tahun Pengalaman', value: '5+' },
    { icon: Users, label: 'Klien Puas', value: '1000+' },
    { icon: CheckCircle, label: 'Tugas Selesai', value: '2500+' },
    { icon: Award, label: 'Rating Kepuasan', value: '4.9/5' },
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
      {/* Header */}
      <div className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-full transition-all duration-200 ${
              isDarkMode 
                ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Beranda
          </button>

          <div className="text-center mb-16">
            <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-yellow-400 to-yellow-600'
            }`}>
              <User className="w-16 h-16 text-black" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </h1>
            
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Saya adalah seorang profesional akademik dengan pengalaman lebih dari 5 tahun dalam membantu mahasiswa mencapai kesuksesan akademik mereka.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - About Me */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Profil Profesional
                </span>
              </h2>
              
              <div className={`prose prose-lg ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
                <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Dengan latar belakang pendidikan yang kuat di bidang teknologi informasi dan pengalaman praktis dalam berbagai proyek akademik, saya berkomitmen untuk memberikan layanan joki tugas yang berkualitas tinggi dan tepat waktu.
                </p>
                
                <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Saya memahami tantangan yang dihadapi mahasiswa dalam menyelesaikan tugas-tugas akademik, terutama dengan deadline yang ketat dan standar kualitas yang tinggi. Oleh karena itu, saya hadir untuk memberikan solusi terbaik dengan pendekatan profesional dan personal.
                </p>

                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Setiap tugas yang saya kerjakan selalu melalui proses riset mendalam, analisis yang teliti, dan review berkualitas untuk memastikan hasil yang memuaskan dan sesuai dengan standar akademik tertinggi.
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Keahlian
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
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Riwayat Pendidikan
            </span>
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50' 
                  : 'bg-white border border-gray-200/50 shadow-lg'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-yellow-400/10 border border-yellow-400/20' : 'bg-yellow-50 border border-yellow-200'
                  }`}>
                    <GraduationCap className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-yellow-500 font-semibold mb-1">{edu.institution}</p>
                    <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.year}</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Mari Berkolaborasi
            </span>
          </h2>
          
          <p className={`text-xl mb-12 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Siap membantu Anda mencapai kesuksesan akademik. Hubungi saya untuk konsultasi gratis dan diskusi kebutuhan tugas Anda.
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
        </div>
      </section>
    </div>
  );
};

export default About;