// app/page.tsx
import { redirect } from 'next/navigation';

const ENGLISH_SPEAKING_COUNTRIES = [
  // North America
  'US', 'CA',
  
  // Europe
  'GB', 'IE', 'MT',
  
  // Oceania
  'AU', 'NZ',
  
  // Caribbean
  'JM', 'BS', 'BB', 'GD', 'TT', 'AG', 'DM', 'LC', 'VC', 'KN',
  
  // Africa
  'ZA', 'NG', 'GH', 'KE', 'UG', 'TZ', 'ZM', 'ZW', 'MW', 'LS', 'BW', 'NA', 'SZ',
  
  // Asia
  'IN', 'PK', 'BD', 'LK', 'MY', 'SG', 'PH', 'HK', 'IL', 
  
  // Others
  'GY', 'FJ', 'PG', 'SB', 'VU', 'WS', 'KI', 'TO', 'NR', 'FM', 'MH', 'PW'
];

const WESTERN_EUROPEAN_COUNTRIES = [
  'AT', 'BE', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IS', 'IT', 'LI', 
  'LU', 'MT', 'MC', 'NL', 'NO', 'PT', 'SE', 'SM', 'VA', 'AD'
];

const OTHER_ENGLISH_FRIENDLY = [
  // Scandinavian
  'SE', 'NO', 'DK', 'FI', 'IS',
  
  // Benelux
  'NL', 'BE', 'LU',
  
  // DACH region
  'DE', 'AT', 'CH',
  
  // Baltic
  'EE', 'LV', 'LT',
  
  // Other European with high English proficiency
  'CZ', 'SK', 'SI', 'HR', 'PL', 'HU', 'RO', 'BG'
];

// Объединенный список всех стран для редиректа на английский
const ALL_WESTERN_COUNTRIES = [
  ...new Set([
    ...ENGLISH_SPEAKING_COUNTRIES,
    ...WESTERN_EUROPEAN_COUNTRIES, 
    ...OTHER_ENGLISH_FRIENDLY
  ])
];

async function getRedirectPath() {
  try {
    // Try to get country from Vercel headers first
    let country = null;
    
    try {
      const headers = await import('next/headers').then(mod => mod.headers());
      country = headers.get('x-vercel-ip-country');
    } catch (error) {
      console.log('Vercel headers not available');
    }

    // If no Vercel headers, try IP geolocation API
    if (!country) {
      try {
        const response = await fetch('https://ipapi.co/country/', {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; NextJS App)'
          },
          next: { revalidate: 3600 }
        });
        
        if (response.ok) {
          country = await response.text();
        }
      } catch (error) {
        console.log('IP geolocation failed');
      }
    }

    // 🎯 FOR TESTING - uncomment the line you need:
    // return '/en'; // force English
    // return '/ru'; // force Russian

    console.log('Detected country:', country);

    if (country && ALL_WESTERN_COUNTRIES.includes(country)) {
      return '/en';
    }

    // Fallback: check browser language
    try {
      const headers = await import('next/headers').then(mod => mod.headers());
      const acceptLanguage = headers.get('accept-language');
      
      if (acceptLanguage) {
        const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
        
        // Check for English or major Western European languages
        const westernLanguages = ['en', 'de', 'fr', 'es', 'it', 'nl', 'sv', 'no', 'da', 'fi'];
        const hasWesternLanguage = languages.some(lang => 
          westernLanguages.includes(lang.split('-')[0].toLowerCase())
        );
        
        if (hasWesternLanguage) {
          return '/en';
        }
      }
    } catch (error) {
      console.log('Browser language detection failed');
    }

  } catch (error) {
    console.log('Error in redirect detection:', error);
  }
  
  // Default to Russian for:
  // - CIS countries (RU, UA, BY, KZ, etc.)
  // - Eastern Europe
  // - Asia (except English-speaking)
  // - Middle East
  // - Africa (except English-speaking)
  // - Latin America
  return '/ru';
}

export default async function HomePage() {
  const redirectPath = await getRedirectPath();
  redirect(redirectPath);
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Detecting your language...</p>
      </div>
    </div>
  );
}