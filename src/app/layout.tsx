import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avnish Tripathi | AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Avnish Tripathi, a final-year Computer Science and Engineering student focused on AI, Machine Learning, Generative AI, and Full-Stack Development.",
  keywords: [
    "Avnish Tripathi","AI Engineer","Full Stack Developer",
    "Machine Learning","Generative AI","React Developer",
    "Python","Next.js","Computer Science","Hyderabad",
  ],
  authors: [{ name: "Avnish Tripathi" }],
  creator: "Avnish Tripathi",
  openGraph: {
    type: "website", locale: "en_IN",
    title: "Avnish Tripathi | AI Engineer & Full Stack Developer",
    description: "Portfolio of Avnish Tripathi — AI Engineer & Full Stack Developer.",
    siteName: "Avnish Tripathi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avnish Tripathi | AI Engineer & Full Stack Developer",
    description: "Portfolio of Avnish Tripathi — AI Engineer & Full Stack Developer",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050816" />
        {/* Anti-flash: pre-apply saved theme before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var s = localStorage.getItem('portfolio-theme');
              var p = s ? JSON.parse(s) : {};
              var mode = p.mode || 'light';
              var h = document.documentElement;
              h.setAttribute('data-theme', mode);
              var accents = {
                blue:{a:'#4f9eff',b:'#8b5cf6',rgb:'79,158,255',rgb2:'139,92,246'},
                violet:{a:'#8b5cf6',b:'#ec4899',rgb:'139,92,246',rgb2:'236,72,153'},
                cyan:{a:'#06b6d4',b:'#4f9eff',rgb:'6,182,212',rgb2:'79,158,255'},
                green:{a:'#10b981',b:'#06b6d4',rgb:'16,185,129',rgb2:'6,182,212'},
                orange:{a:'#f59e0b',b:'#ef4444',rgb:'245,158,11',rgb2:'239,68,68'},
                rose:{a:'#ec4899',b:'#8b5cf6',rgb:'236,72,153',rgb2:'139,92,246'},
              };
              var darkBgs={v1:'#050816',v2:'#0a0a0a',v3:'#0d1117',v4:'#0d0820'};
              var lightBgs={v1:'#ffffff',v2:'#f8fafc',v3:'#f0f4ff',v4:'#fafaf9'};
              var ac = accents[p.accent] || accents.blue;
              var isLight = mode !== 'dark';
              var bg = (isLight ? lightBgs : darkBgs)[p.bgVariant||'v1'];
              h.style.setProperty('--bg', bg);
              h.style.setProperty('--bg-card', isLight ? '#ffffff' : 'rgba(8,14,40,0.7)');
              h.style.setProperty('--bg-card-solid', isLight ? '#ffffff' : '#080e28');
              h.style.setProperty('--bg-alt', isLight ? '#f8fafc' : 'rgba('+ac.rgb+',0.018)');
              h.style.setProperty('--text-h',    isLight ? '#0f172a' : '#ffffff');
              h.style.setProperty('--text-p',    isLight ? '#334155' : '#f1f5f9');
              h.style.setProperty('--text-sub',  isLight ? '#64748b' : '#94a3b8');
              h.style.setProperty('--text-dim',  isLight ? '#94a3b8' : '#64748b');
              h.style.setProperty('--text-card', isLight ? '#1e293b' : '#e2e8f0');
              h.style.setProperty('--accent',    ac.a);
              h.style.setProperty('--accent-2',  ac.b);
              h.style.setProperty('--accent-rgb', ac.rgb);
              h.style.setProperty('--accent-2-rgb', ac.rgb2);
              h.style.setProperty('--border',       isLight ? '#e2e8f0' : 'rgba('+ac.rgb+',0.14)');
              h.style.setProperty('--border-hover', 'rgba('+ac.rgb+',0.4)');
              h.style.setProperty('--card-shadow',  isLight ? '0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.04)' : 'none');
              h.style.setProperty('--card-shadow-hover', isLight ? '0 8px 32px rgba(0,0,0,0.1)' : '0 4px 40px rgba('+ac.rgb+',0.12)');
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
