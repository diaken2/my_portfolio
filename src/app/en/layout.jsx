// app/en/layout.tsx
export const metadata = {
  title: "Kenan - Fullstack Developer | Web Applications & SaaS",
  description: "Fullstack developer with 3+ years experience. I build CRM systems, admin panels, and web applications using React/Next.js and Node.js. 50+ completed projects.",
};

export default function EnLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#3B82F6',
                    secondary: '#8B5CF6',
                  }
                }
              }
            }
          `
        }} />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body { 
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}