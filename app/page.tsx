import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[Roboto,sans-serif] bg-white">
      {/* Navbar */}
      <nav className="w-full border-b border-[#DBDBDB] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-10 h-10 md:w-12 md:h-12 relative">
              <Image src="/images/logo.png" alt="EduHub Logo" width={48} height={48} className="object-contain" />
            </div>
            <span className="text-lg md:text-xl font-bold text-black">EduHub</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-[#8692A6] hover:text-black transition-colors font-medium text-[15px]">Features</Link>
            <Link href="/login" className="text-[#8692A6] hover:text-black transition-colors font-medium text-[15px]">For Teachers</Link>
            <Link href="/login" className="text-[#8692A6] hover:text-black transition-colors font-medium text-[15px]">For Parents</Link>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/login" className="px-4 md:px-6 py-2 md:py-2.5 rounded-md text-black hover:bg-gray-50 transition-colors font-medium text-sm md:text-base border border-[#DBDBDB]">
              Log in
            </Link>
            <Link href="/signup" className="px-4 md:px-6 py-2 md:py-2.5 rounded-md bg-[#FDC832] text-black hover:bg-[#fdd45c] transition-all font-semibold shadow-sm text-sm md:text-base">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20 gap-12 lg:gap-16">

        {/* Left Content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF9E6] border border-[#FDC832]/20">
            <span className="text-2xl">🚀</span>
            <span className="text-[#8692A6] text-sm md:text-base font-medium">The Future of Learning</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight text-black">
            Make Learning <br className="hidden md:block" />
            <span className="text-[#FDC832]">Fun & Engaging</span>
          </h1>

          <p className="text-base md:text-lg lg:text-[18px] text-[#8692A6] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Connect parents, teachers, and students in one seamless platform. Track progress, assign tasks, and celebrate achievements together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-md bg-[#FDC832] text-black font-semibold text-base md:text-lg hover:bg-[#fdd45c] shadow-md hover:shadow-lg transition-all text-center"
            >
              Get Started
            </Link>
            <Link
              href="#demo"
              className="px-8 py-4 rounded-md bg-white border-2 border-[#DBDBDB] text-black font-semibold text-base md:text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </Link>
          </div>

          <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm md:text-base text-[#8692A6]">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#CFCEFF] flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#05D227] flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#FDC832] flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#2584E9] flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">D</span>
              </div>
            </div>
            <p className="font-medium">
              Trusted by <span className="font-bold text-black">10,000+</span> happy parents
            </p>
          </div>
        </div>

        {/* Right Content - Hero Illustration */}
        <div className="flex-1 relative w-full max-w-lg h-[350px] md:h-[500px] flex items-center justify-center">
          <div className="relative z-10 w-full">
            <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-[0_4px_40px_rgba(0,0,0,0.08)] border border-[#DBDBDB] relative">
              <div className="aspect-video bg-gradient-to-br from-[#F5F4F9] to-[#E8E7EE] rounded-[12px] overflow-hidden relative group cursor-pointer">
                {/* Mock Video UI */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FDC832" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-4 h-2 bg-[#EDEDED] rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#FDC832] rounded-full" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-6 md:-right-8 -top-6 md:-top-8 bg-white p-4 rounded-[16px] shadow-lg border border-[#DBDBDB] animate-bounce">
                <span className="text-3xl">💡</span>
              </div>
              <div className="absolute -left-6 md:-left-8 bottom-12 md:bottom-16 bg-white p-4 rounded-[16px] shadow-lg border border-[#DBDBDB] animate-pulse">
                <span className="text-3xl">📚</span>
              </div>
              <div className="absolute -right-8 md:-right-12 bottom-20 md:bottom-24 bg-white p-3 rounded-[12px] shadow-md border border-[#DBDBDB] hidden sm:block">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#DBDBDB] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative">
                <Image src="/images/logo.png" alt="EduHub" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-sm text-[#8692A6]">© 2025 EduHub. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-[#8692A6] hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-[#8692A6] hover:text-black transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm text-[#8692A6] hover:text-black transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
