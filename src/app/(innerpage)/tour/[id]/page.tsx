import TourDetailsPage from './TourDetailsClient';
import { getTourData } from '@/lib/tourData';

// Серверный компонент для получения данных
export default async function Page({ params }) {
  const { id } = await params;
  const tour = await getTourData(id);
  
  return <TourDetailsPage initialTour={tour} id={id} />;
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const tour = await getTourData(id);
  
  if (!tour) {
    return {
      title: 'Тур не найден',
    };
  }
  
  return {
    title: tour.title,
    description: tour.description?.substring(0, 160) || '',
  };
}