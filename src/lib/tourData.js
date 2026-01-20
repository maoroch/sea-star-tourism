export async function getTourData(id) {
  try {
    // Для production используйте абсолютный URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/data/tours.json`, {
      cache: 'no-store' // или 'force-cache' для статических данных
    });
    
    if (!response.ok) throw new Error('Failed to fetch tours');
    
    const data = await response.json();
    return data.find(item => item.id === id) || null;
  } catch (error) {
    console.error('Error fetching tour data:', error);
    return null;
  }
}