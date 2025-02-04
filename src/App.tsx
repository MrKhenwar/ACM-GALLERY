import React from 'react';
import { Star } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "EVENT 1",
    images: [
      "https://images.unsplash.com/photo-1563089145-599997674d42",
      "https://images.unsplash.com/photo-1558383331-f520f2888351",
      "https://images.unsplash.com/photo-1563089145-599997674d42",
      "https://images.unsplash.com/photo-1558383331-f520f2888351"
    ]
  },
  {
    id: 2,
    title: "EVENT 2",
    images: [
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf",
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf",
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf",
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf"
    ]
  },
  {
    id: 3,
    title: "EVENT 3",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968"
    ]
  },
  {
    id: 4,
    title: "EVENT 4",
    images: [
      "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ]
  },
  {
    id: 5,
    title: "EVENT 5",
    images: [
      "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11",
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
      "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11",
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#a3e7ff] overflow-y-auto">
      {/* Header */}
      <header className="p-4 pb-0 sticky top-0 bg-[#a3e7ff] z-10">
        <div className="flex items-center space-x-2">
          <h1 className="text-7xl font-bold tracking-wider text-white">
            /////GALLERY///////////////////////////////////////////////////////////////////////
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 grid grid-cols-5 gap-2 min-h-[calc(100vh-80px)]">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-[2rem] p-2 shadow-lg relative flex flex-col overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 160px)' }} // Set the max height of the event container
          >
            <h2 className="text-xl font-bold mb-2 text-center">{event.title}</h2>
            <div className="overflow-y-auto max-h-[calc(100vh-160px)] hide-scrollbar">
              <div className="flex flex-col gap-2">
                {event.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md"
                  >
                    <img
                      src={image}
                      alt={`${event.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
