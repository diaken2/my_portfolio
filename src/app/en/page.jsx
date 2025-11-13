
import EnDeveloperPortfolio from '../../components/EnPageComponent'
// app/layout.js или в твоей странице
export const dynamic = 'force-static';

 export async function generateMetadata({ params }) {
  
  return {
  title: "Kenan - Fullstack Developer | Web Applications & SaaS",
  description: "Fullstack developer with 3+ years experience. I build CRM systems, admin panels, and web applications using React/Next.js and Node.js. 50+ completed projects.",
  keywords: "fullstack developer, next.js developer, web application development, react developer, node.js developer",
  openGraph: {
    title: "Kenan - Fullstack Developer",
    description: "Building complex web applications and business systems", 
    type: "website",
    locale: "en_US"
  }
}
}
export default function EnPage() {
  return(
    <EnDeveloperPortfolio/>
  )
}