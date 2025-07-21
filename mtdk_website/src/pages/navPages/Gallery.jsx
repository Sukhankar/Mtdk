import { useState } from 'react';

const galleryImages = [
  { id: 1, src: 'https://source.unsplash.com/random/600x400/?campus', alt: 'Campus View', category: 'campus' },
  { id: 2, src: 'https://source.unsplash.com/random/600x400/?classroom', alt: 'Classroom', category: 'facilities' },
  { id: 3, src: 'https://source.unsplash.com/random/600x400/?graduation', alt: 'Graduation', category: 'events' },
  { id: 4, src: 'https://source.unsplash.com/random/600x400/?library', alt: 'Library', category: 'facilities' },
  { id: 5, src: 'https://source.unsplash.com/random/600x400/?sports', alt: 'Sports', category: 'activities' },
  { id: 6, src: 'https://source.unsplash.com/random/600x400/?lab', alt: 'Science Lab', category: 'facilities' },
  { id: 7, src: 'https://source.unsplash.com/random/600x400/?festival', alt: 'Cultural Fest', category: 'events' },
  { id: 8, src: 'https://source.unsplash.com/random/600x400/?seminar', alt: 'Seminar', category: 'events' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'campus', 'facilities', 'events', 'activities'];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Gallery Header */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl">Explore moments from our campus life</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${activeCategory === category ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {filteredImages.length === 0 ? (
            <p className="text-center text-gray-600">No images found in this category</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map(image => (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-gray-800 font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
