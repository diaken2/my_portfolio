
import RuPageComponent from '../../components/RuPageComponent';
// app/layout.js или в твоей странице
export const dynamic = 'force-static';
export async function generateMetadata({ params }) {

  return {
  title: "Кенан - Fullstack разработчик | Создание веб-приложений",
  description: "Fullstack разработчик с 3+ годами опыта. Создаю CRM, админ-панели, веб-приложения на React/Next.js и Node.js. 50+ завершенных проектов.",
  keywords: "fullstack разработчик москва, разработчик next.js, создание веб приложений, react разработчик, node.js разработчик",
  openGraph: {
    title: "Кенан - Fullstack разработчик",
    description: "Создаю сложные веб-приложения и бизнес-системы",
    type: "website", 
    locale: "ru_RU"
  }
}
}
 
export default function RuPage() {
  return(
    <RuPageComponent/>
  )
}