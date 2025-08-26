import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowLeft, ExternalLink, Github, Globe, MessageCircle, Instagram, Mail } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { projects, slugify } from '../shared/projects';


interface PortfolioDetailProps {
	isDarkMode: boolean;
	toggleDarkMode?: () => void;
	onBack: () => void;
	project?: {
		title: string;
		category: string;
		description: string;
		technologies: string[];
		image: string;
		link?: string;
		repo?: string;
		website?: string;
	};
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ isDarkMode, toggleDarkMode, onBack, project }) => {
	const [isLoading, setIsLoading] = useState(true);
	const { slug } = useParams();
	const fromSlug = slug ? projects.find(p => slugify(p.title) === slug) : undefined;
	const display = fromSlug ?? project ?? {
		title: 'Lux Project Experience',
		category: 'Web Development',
		description:
			'Pengalaman proyek kelas premium dengan fokus pada performa, keamanan, dan estetika UI/UX modern. Halaman detail ini menampilkan ringkasan proyek, teknologi yang digunakan, serta tautan terkait.',
		technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
		image:
			'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200',
		link: '#',
		repo: '#',
		website: '#',
	};

	useEffect(() => {
		// Scroll to top when the page opens
		window.scrollTo({ top: 0, behavior: 'smooth' });
		// Fake loading to show skeleton
		const t = setTimeout(() => setIsLoading(false), 2000);
		return () => clearTimeout(t);
	}, []);

	return (
		<div
			className={`min-h-screen ${
				isDarkMode
					? 'bg-gradient-to-b from-gray-950 to-black text-white'
					: 'bg-gradient-to-b from-white to-gray-50 text-gray-900'
			} pb-20`}
		>
			{/* Navbar */}
			<Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode ?? (() => {})} />
			{/* Hero */}
			<section className="relative pt-24">
				<div className="absolute inset-0">
					<div
						className={`h-72 md:h-96 w-full ${
							isDarkMode
								? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent'
								: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent'
						}`}
					/>
				</div>
				<div className="relative max-w-6xl mx-auto px-6 pt-24">
					<button
						onClick={onBack}
						className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur transition-all ${
							isDarkMode
								? 'border-gray-800 bg-black/50 text-gray-300 hover:border-yellow-400/60 hover:text-yellow-400'
								: 'border-gray-200 bg-white/70 text-gray-700 hover:border-yellow-500/60 hover:text-yellow-600'
						}`}
					>
						<ArrowLeft className="h-4 w-4" />
						<span>Kembali</span>
					</button>

					<div className="mt-8 grid gap-10 md:grid-cols-2">
						{/* Image / Skeleton */}
						<div className={`overflow-hidden rounded-3xl border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} shadow-2xl` }>
							{isLoading ? (
								<div className={`h-72 md:h-[420px] w-full animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
							) : (
								<img
									src={display.image}
									alt={display.title}
									className="h-72 w-full object-cover md:h-[420px]"
								/>
							)}
						</div>

						{/* Content / Skeleton */}
						<div className="flex flex-col justify-center">
							{isLoading ? (
								<div className="space-y-4">
									<div className={`h-8 w-2/3 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
									<div className={`h-4 w-full rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
									<div className={`h-4 w-5/6 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
									<div className="mt-4 flex gap-2">
										<div className={`h-6 w-24 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
										<div className={`h-6 w-20 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
										<div className={`h-6 w-16 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
									</div>
									<div className="mt-6 grid gap-3 sm:grid-cols-3">
										<div className={`h-10 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
										<div className={`h-10 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
										<div className={`h-10 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
									</div>
								</div>
							) : (
								<>
									<h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
										<span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
											{display.title}
										</span>
									</h1>
									<p className={`mt-4 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
										{display.description}
									</p>

									<div className="mt-6 flex flex-wrap gap-2">
										<span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
											{display.category}
										</span>
										{display.technologies.map((t) => (
											<span
												key={t}
												className={`${
													isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
												} rounded-md px-2 py-1 text-xs font-medium`}
											>
												{t}
											</span>
										))}
									</div>

									<div className="mt-8 grid gap-3 sm:grid-cols-3">
										<a
											href={display.website}
											target="_blank"
											rel="noreferrer"
											className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
												isDarkMode
													? 'bg-gray-800 hover:bg-yellow-400/20 text-gray-200 hover:text-yellow-400'
													: 'bg-gray-100 hover:bg-yellow-50 text-gray-800 hover:text-yellow-700'
											}`}
										>
											<Globe className="h-4 w-4" /> Website
										</a>
										<a
											href={display.link}
											target="_blank"
											rel="noreferrer"
											className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
												isDarkMode
													? 'bg-gray-800 hover:bg-yellow-400/20 text-gray-200 hover:text-yellow-400'
													: 'bg-gray-100 hover:bg-yellow-50 text-gray-800 hover:text-yellow-700'
											}`}
										>
											<ExternalLink className="h-4 w-4" /> Live Demo
										</a>
										<a
											href={display.repo}
											target="_blank"
											rel="noreferrer"
											className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
												isDarkMode
													? 'bg-gray-800 hover:bg-yellow-400/20 text-gray-200 hover:text-yellow-400'
													: 'bg-gray-100 hover:bg-yellow-50 text-gray-800 hover:text-yellow-700'
											}`}
										>
											<Github className="h-4 w-4" /> Repository
										</a>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className={`mt-14 px-6` }>
				<div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
					<div className={`rounded-2xl border p-6 ${isDarkMode ? 'border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950' : 'border-gray-200 bg-white shadow'} md:col-span-2`}>
						{isLoading ? (
							<div className="space-y-3">
								<div className={`h-6 w-48 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
								<div className={`h-4 w-full rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
								<div className={`h-4 w-5/6 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
							</div>
						) : (
							<>
								<h2 className="text-xl font-bold mb-4">Ringkasan Proyek</h2>
								<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
									Halaman detail ini dirancang dengan nuansa premium: tipografi tebal, gradien subtil, dan kartu berlapis untuk depth yang elegan. Anda dapat menghubungkan data proyek nyata ke komponen ini dengan mengirimkan properti `project`.
								</p>
							</>
						)}
					</div>
					<div className={`rounded-2xl border p-6 ${isDarkMode ? 'border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950' : 'border-gray-200 bg-white shadow'}`}>
						{isLoading ? (
							<div className="space-y-3">
								<div className={`h-5 w-32 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
								<div className={`h-4 w-full rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
								<div className={`h-4 w-5/6 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
								<div className={`h-4 w-3/4 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />
							</div>
						) : (
							<>
								<h3 className="text-lg font-semibold mb-4">Highlights</h3>
								<ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
									<li>Performa tinggi dengan lazy assets</li>
									<li>UI konsisten light/dark</li>
									<li>Aksesibilitas: kontras dan fokus terlihat</li>
								</ul>
							</>
						)}
					</div>
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

export default PortfolioDetail;
