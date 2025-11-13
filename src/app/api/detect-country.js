// pages/api/detect-country.js
export default function handler(req, res) {
  // Vercel автоматически добавляет страну в заголовки
  const country = req.headers['x-vercel-ip-country'] || 'RU';
  
  res.status(200).json({ country });
}