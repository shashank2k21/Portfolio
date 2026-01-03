// import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900/50 border-t border-white/10 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-gray-400 text-center md:text-left flex items-center gap-2">
//             Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Shashank Singh
//             <span className="mx-2"></span>
            
//           </p>

//           <div className="flex gap-4">
//             <a
//               href="https://github.com/shashank2k21"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
//               aria-label="GitHub"
//             >
//               <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/ss7991?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
//             </a>
//             <a
//               href="https://x.com/whojimmysingh"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
//               aria-label="Twitter"
//             >
//               <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Heart, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-white/10 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-400 text-center md:text-left flex items-center gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            by <span className="font-semibold text-white">Shashank Singh</span> — © {currentYear}
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/shashank2k21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/ss7991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
            </a>

            <a
              href="https://x.com/whojimmysingh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
