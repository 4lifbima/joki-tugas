export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  repo?: string;
  website?: string;
}

export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const projects: ProjectItem[] = [
  {
    title: 'Sistem Manajemen Perpustakaan',
    category: 'Web Development',
    description:
      'Aplikasi web untuk mengelola data buku, anggota, dan transaksi peminjaman dengan fitur lengkap.',
    technologies: ['React', 'Node.js', 'MySQL', 'Express'],
    image:
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    link: '#',
  },
  {
    title: 'Analisis Sentimen Media Sosial',
    category: 'Data Science',
    description:
      'Penelitian dan implementasi machine learning untuk analisis sentimen pada data Twitter.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NLTK'],
    image:
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500',
    link: '#',
  },
  {
    title: 'E-Commerce Mobile App',
    category: 'Mobile Development',
    description:
      'Aplikasi mobile e-commerce dengan fitur pembayaran digital dan tracking pengiriman.',
    technologies: ['React Native', 'Firebase', 'Stripe API'],
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
    link: '#',
  },
  {
    title: 'Dashboard Analytics',
    category: 'Data Visualization',
    description:
      'Dashboard interaktif untuk visualisasi data penjualan dan performa bisnis real-time.',
    technologies: ['Vue.js', 'D3.js', 'Chart.js', 'PostgreSQL'],
    image:
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
    link: '#',
  },
  {
    title: 'Sistem Informasi Akademik',
    category: 'Enterprise System',
    description:
      'Platform terintegrasi untuk manajemen data mahasiswa, nilai, dan jadwal kuliah.',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
    image:
      'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500',
    link: '#',
  },
  {
    title: 'AI Chatbot Customer Service',
    category: 'Artificial Intelligence',
    description:
      'Chatbot cerdas untuk customer service dengan natural language processing.',
    technologies: ['Python', 'OpenAI API', 'Flask', 'MongoDB'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
    link: '#',
  },
];


