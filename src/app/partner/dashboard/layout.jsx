// app/ru/layout.tsx
export const metadata = {
  title: "Кенан - Fullstack разработчик | Создание веб-приложений",
  description: "Fullstack разработчик с 3+ годами опыта. Создаю CRM, админ-панели, веб-приложения на React/Next.js и Node.js. 50+ завершенных проектов.",
};

export default function RuLayout({ children }) {
  return (
    <html lang="ru">
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