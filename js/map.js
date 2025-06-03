// Tour itinerary data organized by day
const itinerary = {
    day1: {
        name: 'Day 1: Negros Occidental Heritage',
        locations: [
            {
                name: 'Bacolod-Silay Airport',
                position: [10.766667, 123.016667],
                description: 'Arrival point for Negros Occidental tour',
                metrics: {
                    distance: '0km',
                    time: '0min',
                    cost: '₱0'
                }
            },
            {
                name: 'El Ideal Bakery',
                position: [10.8031, 122.9784],
                description: 'Lunch at the oldest bakery in Silay, famous for heritage pastries.',
                metrics: {
                    distance: '2km',
                    time: '10min',
                    cost: '₱300/meal'
                }
            },
            {
                name: 'Balay Negrense',
                position: [10.800722, 122.976417],
                description: 'Ancestral home of Victor Fernandez Gaston, showcasing 19th century Negrense lifestyle.',
                metrics: {
                    distance: '5km',
                    time: '30min',
                    cost: '₱50 entrance'
                }
            },
            {
                name: 'The Ruins',
                position: [10.737917, 122.964333],
                description: 'Exact location of the iconic sugar mansion ruins in Talisay City.',
                metrics: {
                    distance: '8km',
                    time: '45min',
                    cost: '₱100 entrance'
                }
            },
            {
                name: 'Manokan Country',
                position: [10.6900, 122.9580],
                description: 'Dinner at famous Bacolod chicken inasal street food area.',
                metrics: {
                    distance: '4km',
                    time: '20min',
                    cost: '₱200/meal'
                }
            },
            {
                name: "L'Fisher Hotel",
                position: [10.6831, 122.9563],
                description: "Check-in and overnight stay at Bacolod’s premier heritage-inspired hotel.",
                metrics: {
                    distance: '3km',
                    time: '15min',
                    cost: '₱1200/night'
                }
            }
        ]
    },
    day2: {
        name: 'Day 2: Revolutionary Journey',
        locations: [
            {
                name: 'Negros Museum',
                position: [10.671667, 122.951944],
                description: 'Main museum documenting Negros Revolution history.',
                metrics: {
                    distance: '10km',
                    time: '45min',
                    cost: '₱50 entrance'
                }
            },
            {
                name: 'Bantayan Park',
                position: [10.538611, 122.837222],
                description: 'Exact monument location honoring Bago\'s revolutionary heroes.',
                metrics: {
                    distance: '20km',
                    time: '1h',
                    cost: 'free'
                }
            },
            {
                name: 'Mabinay Spring Resort',
                position: [9.7275, 122.9019],
                description: 'Lunch stop with local cuisine by natural springs.',
                metrics: {
                    distance: '85km',
                    time: '2h 30min',
                    cost: 'included'
                }
            },
            {
                name: 'Restaurante Balay Daku',
                position: [9.3105, 123.3078],
                description: 'Heritage mansion fine dining experience.',
                metrics: {
                    distance: '1km',
                    time: '5min',
                    cost: '₱500/meal'
                }
            },
            {
                name: 'Dumaguete Boulevard',
                position: [9.3100, 123.3080],
                description: 'Evening leisure walk along the seaside promenade.',
                metrics: {
                    distance: '0.5km',
                    time: '30min',
                    cost: 'free'
                }
            },
            {
                name: 'Florentina Homes',
                position: [9.3107, 123.3076],
                description: 'Check-in and overnight stay at Dumaguete’s charming boutique hotel.',
                metrics: {
                    distance: '2km',
                    time: '10min',
                    cost: '₱1500/night'
                }
            }
        ]
    },
    day3: {
        name: 'Day 3: Cultural Exploration',
        locations: [
            {
                name: 'Silliman University',
                position: [9.3139, 123.3075],
                description: 'Tour of historic campus buildings and museums.',
                metrics: {
                    distance: '0km',
                    time: '2h',
                    cost: '₱50 donation'
                }
            },
            {
                name: 'Dumaguete Cathedral',
                position: [9.3086, 123.3069],
                description: 'Visit historic church and bell tower.',
                metrics: {
                    distance: '0.5km',
                    time: '30min',
                    cost: 'free'
                }
            },
            {
                name: 'Valencia Forest Camp',
                position: [9.2810, 123.2470],
                description: 'Lunch amidst nature with local cuisine.',
                metrics: {
                    distance: '12km',
                    time: '45min',
                    cost: 'included'
                }
            },
            {
                name: 'San Antonio de Padua Church',
                position: [9.3580, 123.2850],
                description: 'Historic church with Spanish-era architecture.',
                metrics: {
                    distance: '15km',
                    time: '30min',
                    cost: 'free'
                }
            },
            {
                name: 'Lab-as Seafood Restaurant',
                position: [9.3100, 123.3080],
                description: 'Dinner at a popular seafood restaurant in Dumaguete.',
                metrics: {
                    distance: '1km',
                    time: '5min',
                    cost: '₱400/meal'
                }
            },
            {
                name: 'Dumaguete Food Crawl',
                position: [9.3100, 123.3080],
                description: 'Evening sampling of local favorites (Sans Rival, Hayahay, Painitan).',
                metrics: {
                    distance: '1km',
                    time: '1h',
                    cost: '₱300/own expense'
                }
            },
            {
                name: 'The Flying Fish Hostel',
                position: [9.3103, 123.3076],
                description: 'Check-in at this heritage-inspired backpacker hostel near Rizal Boulevard.',
                metrics: {
                    distance: '1km',
                    time: '5min',
                    cost: '₱1200/night'
                }
            }
        ]
    },
    day4: {
        name: 'Day 4: Completing the Cycle',
        locations: [
            {
                name: 'Sibulan Port',
                position: [9.359722, 123.284722],
                description: 'Ferry to San Carlos',
                metrics: {
                    distance: '15km',
                    time: '1h',
                    cost: '₱200/head'
                }
            },
            {
                name: 'San Carlos City',
                position: [10.4929, 123.4205],
                description: 'Heritage walk and lunch stop',
                metrics: {
                    distance: '25km',
                    time: '1h ferry',
                    cost: 'included'
                }
            },
            {
                name: 'San Carlos Seafood Market',
                position: [10.4930, 123.4210],
                description: 'Lunch with fresh local seafood.',
                metrics: {
                    distance: '0.5km',
                    time: '1h',
                    cost: '₱400/meal'
                }
            },
            {
                name: 'San Carlos Heritage Walk',
                position: [10.4929, 123.4205],
                description: 'Afternoon tour of Plaza and San Carlos Cathedral.',
                metrics: {
                    distance: '0.5km',
                    time: '1h',
                    cost: 'free'
                }
            },
            {
                name: 'Bacolod-Silay Airport',
                position: [10.766667, 123.016667],
                description: 'Departure completing the cycle',
                metrics: {
                    distance: '80km',
                    time: '1.5h',
                    cost: '₱0'
                }
            }
        ]
    },
    all: {
        name: 'Full Itinerary',
        locations: [
            {
                name: 'Bacolod-Silay Airport',
                position: [10.766667, 123.016667],
                description: 'Arrival point for Negros Occidental tour',
                metrics: {
                    distance: '0km',
                    time: '0min',
                    cost: '₱0'
                }
            },
            {
                name: 'El Ideal Bakery',
                position: [10.8031, 122.9784],
                description: 'Lunch at the oldest bakery in Silay, famous for heritage pastries.',
                metrics: {
                    distance: '2km',
                    time: '10min',
                    cost: '₱300/meal'
                }
            },
            {
                name: 'Balay Negrense',
                position: [10.800722, 122.976417],
                description: 'Ancestral home of Victor Fernandez Gaston, showcasing 19th century Negrense lifestyle.',
                metrics: {
                    distance: '5km',
                    time: '30min',
                    cost: '₱50 entrance'
                }
            },
            {
                name: 'The Ruins',
                position: [10.737917, 122.964333],
                description: 'Exact location of the iconic sugar mansion ruins in Talisay City.',
                metrics: {
                    distance: '8km',
                    time: '45min',
                    cost: '₱100 entrance'
                }
            },
            {
                name: 'Manokan Country',
                position: [10.6900, 122.9580],
                description: 'Dinner at famous Bacolod chicken inasal street food area.',
                metrics: {
                    distance: '4km',
                    time: '20min',
                    cost: '₱200/meal'
                }
            },
            {
                name: "L'Fisher Hotel",
                position: [10.6831, 122.9563],
                description: "Check-in and overnight stay at Bacolod’s premier heritage-inspired hotel.",
                metrics: {
                    distance: '3km',
                    time: '15min',
                    cost: '₱1200/night'
                }
            },
            {
                name: 'Negros Museum',
                position: [10.671667, 122.951944],
                description: 'Main museum documenting Negros Revolution history.',
                metrics: {
                    distance: '10km',
                    time: '45min',
                    cost: '₱50 entrance'
                }
            },
            {
                name: 'Bantayan Park',
                position: [10.538611, 122.837222],
                description: 'Exact monument location honoring Bago\'s revolutionary heroes.',
                metrics: {
                    distance: '20km',
                    time: '1h',
                    cost: 'free'
                }
            },
            {
                name: 'Mabinay Spring Resort',
                position: [9.7275, 122.9019],
                description: 'Lunch stop with local cuisine by natural springs.',
                metrics: {
                    distance: '85km',
                    time: '2h 30min',
                    cost: 'included'
                }
            },
            {
                name: 'Restaurante Balay Daku',
                position: [9.3105, 123.3078],
                description: 'Heritage mansion fine dining experience.',
                metrics: {
                    distance: '1km',
                    time: '5min',
                    cost: '₱500/meal'
                }
            },
            {
                name: 'Dumaguete Boulevard',
                position: [9.3100, 123.3080],
                description: 'Evening leisure walk along the seaside promenade.',
                metrics: {
                    distance: '0.5km',
                    time: '30min',
                    cost: 'free'
                }
            },
            {
                name: 'Florentina Homes',
                position: [9.3107, 123.3076],
                description: 'Check-in and overnight stay at Dumaguete’s charming boutique hotel.',
                metrics: {
                    distance: '2km',
                    time: '10min',
                    cost: '₱1500/night'
                }
            },
            {
                name: 'Silliman University',
                position: [9.3139, 123.3075],
                description: 'Tour of historic campus buildings and museums.',
                metrics: {
                    distance: '0km',
                    time: '2h',
                    cost: '₱50 donation'
                }
            },
            {
                name: 'Dumaguete Cathedral',
                position: [9.3086, 123.3069],
                description: 'Visit historic church and bell tower.',
                metrics: {
                    distance: '0.5km',
                    time: '30min',
                    cost: 'free'
                }
            },
            {
                name: 'Valencia Forest Camp',
                position: [9.2810, 123.2470],
                description: 'Lunch amidst nature with local cuisine.',
                metrics: {
                    distance: '12km',
                    time: '45min',
                    cost: 'included'
                }
            },
            {
                name: 'San Antonio de Padua Church',
                position: [9.3580, 123.2850],
                description: 'Historic church with Spanish-era architecture.',
                metrics: {
                    distance: '15km',
                    time: '30min',
                    cost: 'free'
                }
            },
            {
                name: 'Lab-as Seafood Restaurant',
                position: [9.3100, 123.3080],
                description: 'Dinner at a popular seafood restaurant in Dumaguete.',
                metrics: {
                    distance: '1km',
                    time: '5min',
                    cost: '₱400/meal'
                }
            },
            {
                name: 'Dumaguete Food Crawl',
                position: [9.3100, 123.3080],
                description: 'Evening sampling of local favorites (Sans Rival, Hayahay, Painitan).',
                metrics: {
                    distance: '1km',
                    time: '1h',
                    cost: '₱300/own expense'
                }
            },
            {
                name: 'The Flying Fish Hostel',
                position: [9.3103, 123.3076],
                description: 'Check-in at this heritage-inspired backpacker hostel near Rizal Boulevard.',
                metrics: {
                    distance: '1km',
                    time: '5min',
                    cost: '₱1200/night'
                }
            },
            {
                name: 'Sibulan Port',
                position: [9.359722, 123.284722],
                description: 'Ferry to San Carlos',
                metrics: {
                    distance: '15km',
                    time: '1h',
                    cost: '₱200/head'
                }
            },
            {
                name: 'San Carlos City',
                position: [10.4929, 123.4205],
                description: 'Heritage walk and lunch stop',
                metrics: {
                    distance: '25km',
                    time: '1h ferry',
                    cost: 'included'
                }
            },
            {
                name: 'San Carlos Seafood Market',
                position: [10.4930, 123.4210],
                description: 'Lunch with fresh local seafood.',
                metrics: {
                    distance: '0.5km',
                    time: '1h',
                    cost: '₱400/meal'
                }
            },
            {
                name: 'San Carlos Heritage Walk',
                position: [10.4929, 123.4205],
                description: 'Afternoon tour of Plaza and San Carlos Cathedral.',
                metrics: {
                    distance: '0.5km',
                    time: '1h',
                    cost: 'free'
                }
            },
            {
                name: 'Bacolod-Silay Airport',
                position: [10.766667, 123.016667],
                description: 'Departure completing the cycle',
                metrics: {
                    distance: '80km',
                    time: '1.5h',
                    cost: '₱0'
                }
            }
        ]
    }
};

// Static photo URLs for locations
const locationPhotos = {
  'Bacolod-Silay Airport': 'images/map_locations/bacolod-silay.jpg',
  'El Ideal Bakery': 'images/map_locations/el_ideal_bakery.jpg',
  'Balay Negrense': 'images/map_locations/balay_negrense.jpg',
  'The Ruins': 'images/map_locations/the_ruins.jpg',
  'Manokan Country': 'images/map_locations/manokan_country.jpg',
  "L'Fisher Hotel": 'images/map_locations/l_fisher_hotel.jpg',
  'Negros Museum': 'images/map_locations/negros_museum.jpg',
  'Bantayan Park': 'images/map_locations/bantayan_park.jpg',
  'Mabinay Spring Resort': 'images/map_locations/mabinay_spring_resort.jpg',
  'Restaurante Balay Daku': 'images/map_locations/restaurante_balay_daku.jpg',
  'Dumaguete Boulevard': 'images/map_locations/dumaguete_boulevard.jpg',
  'Florentina Homes': 'images/map_locations/florentina_homes.jpg',
  'Silliman University': 'images/map_locations/silliman_univ.jpg',
  'Dumaguete Cathedral': 'images/map_locations/dumaguete_cathedral.jpg',
  'Valencia Forest Camp': 'images/map_locations/valencia_forest_camp.jpg',
  'San Antonio de Padua Church': 'images/map_locations/san_antonio_de_padua_church.jpg',
  'Lab-as Seafood Restaurant': 'images/map_locations/lab-as_seafood.jpg',
  'Dumaguete Food Crawl': 'images/map_locations/dumaguete_food_crawl.jpg',
  'The Flying Fish Hostel': 'images/map_locations/the_flying_fish_hostel.jpg',
  'Sibulan Port': 'images/map_locations/sibulan_port.jpg',
  'San Carlos City': 'images/map_locations/san_carlos_city.jpg',
  'San Carlos Seafood Market': 'images/map_locations/san_carlos_seafood_market.jpg',
  'San Carlos Heritage Walk': 'images/map_locations/san_carlos_heritage_walk.jpg',
  'Sibulan Airport Terminal': 'images/map_locations/sibulan_airport.jpg'
};

// Pexels API Configuration (only declare once)
const PEXELS_API_KEY = 'S6YsEWf484ZrbOFrIVqU92AGsBlpMX8MomXebcBPmzUw9Wk8lhc1kKOV';

// Enhanced Pexels API service
const pexelsService = {
    cache: {},
    
    async searchPhotos(query) {
        // Check cache first
        if (this.cache[query]) return this.cache[query];
        
        try {
            const response = await fetch(
                `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}` +
                `&per_page=3&orientation=landscape&size=medium`,
                {
                    headers: {
                        'Authorization': PEXELS_API_KEY,
                        'Accept': 'application/json'
                    }
                }
            );

            if (!response.ok) throw new Error(`API error: ${response.status}`);

            const data = await response.json();
            
            // Select best photo with fallback logic
            const bestPhoto = data.photos.find(p => p.alt?.toLowerCase().includes(query.toLowerCase())) ||
                            data.photos[0];
            
            if (bestPhoto) {
                this.cache[query] = bestPhoto.src.medium;
                return bestPhoto.src.medium;
            }
            
            return null;
        } catch (error) {
            console.error('Pexels API error:', error);
            return null;
        }
    },
    
    async loadImage(url) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }
};

// Function to load and display photos
async function loadAndDisplayPhotos() {
    const photoContainers = document.querySelectorAll('[data-photo-keyword]');
    
    for (const container of photoContainers) {
        const keyword = container.dataset.photoKeyword;
        const photoUrl = await pexelsService.searchPhotos(keyword);
        
        if (photoUrl) {
            const img = document.createElement('img');
            img.src = photoUrl;
            img.alt = keyword;
            img.className = 'w-full h-full object-cover';
            img.onerror = () => {
                container.classList.add('image-loading');
            };
            
            container.innerHTML = '';
            container.appendChild(img);
            container.classList.remove('image-loading');
        }
    }
}

let map;
let currentMarkers = [];
let currentRoute;
let mapInitialized = false;

function initMap() {
    if (mapInitialized) {
        console.log('Map already initialized');
        return;
    }
    
    console.log('Initializing map...');
    
    try {
        // Ensure map container exists and has dimensions
        const mapContainer = document.getElementById('tourMap');
        if (!mapContainer || mapContainer.offsetHeight === 0) {
            console.error('Map container not found or has no height');
            mapContainer.style.height = '500px';
        }
        
        // Map center coordinates (Negros Island)
        const center = [10.6407, 122.9687];
        
        console.log('Creating map instance');
        map = L.map('tourMap', {
            preferCanvas: true
        }).setView(center, 9);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
        
        mapInitialized = true;
        console.log('Map initialized successfully');
    } catch (error) {
        console.error('Map initialization failed:', error);
    }
}

async function showDay(day) {
    if (!map) return;
    
    console.log('[DEBUG] Loading day:', day);
    
    // Clear existing markers and route
    currentMarkers.forEach(marker => map.removeLayer(marker));
    if (currentRoute) map.removeLayer(currentRoute);
    currentMarkers = [];
    
    const dayData = itinerary[day];
    if (!dayData) return;
    
    // Create markers
    const bounds = L.latLngBounds([]);
    
    for (const location of dayData.locations) {
        console.log('[DEBUG] Processing location:', location.name);
        
        const photoPath = locationPhotos[location.name];
        console.log('[DEBUG] Image path:', photoPath);
        
        let popupContent = `
            <div class="w-72 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                ${photoPath ? 
                    `<div class="relative h-40 overflow-hidden">
                        <img 
                            src="${photoPath}" 
                            alt="${location.name}" 
                            class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            onload="console.log('Image loaded:', this.src)"
                            onerror="console.error('Image failed:', this.src)">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>` : 
                    ''}
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2 text-gray-800">${location.name}</h3>
                    <p class="text-gray-600 text-sm mb-3">${location.description}</p>
                    <div class="flex justify-between items-center text-xs text-gray-500 mb-2">
                        <span>📍 ${location.position[0].toFixed(6)}, ${location.position[1].toFixed(6)}</span>
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">${dayData.name}</span>
                    </div>
                    <div class="flex justify-between items-center text-xs text-gray-500">
                        <span>🚶‍♂️ ${location.metrics.distance}</span>
                        <span>⏰ ${location.metrics.time}</span>
                        <span>💸 ${location.metrics.cost}</span>
                    </div>
                </div>
            </div>
        `;
        
        const marker = L.marker(location.position)
            .addTo(map)
            .bindPopup(popupContent);
            
        currentMarkers.push(marker);
        bounds.extend(location.position);
    }
    
    // Draw route line if multiple locations
    if (dayData.locations.length > 1) {
        currentRoute = L.polyline(
            dayData.locations.map(loc => loc.position),
            {
                color: '#3b82f6',
                weight: 5,
                opacity: 0.7,
                dashArray: '10, 10',
                lineJoin: 'round'
            }
        ).addTo(map);
        
        map.fitBounds(currentRoute.getBounds(), { 
            padding: [50, 50],
            maxZoom: 12,
            animate: true 
        });
    } else if (dayData.locations.length === 1) {
        map.setView(dayData.locations[0].position, 14, { animate: true });
    }
}

function drawHamiltonianCycle() {
    if (currentRoute) {
        currentRoute.setMap(null);
    }
    
    const cyclePath = [];
    Object.values(itinerary).forEach(day => {
        day.locations.forEach(location => {
            // Skip duplicate airport entry in day4
            if (!(day === itinerary.day4 && location.name === 'Bacolod-Silay Airport')) {
                cyclePath.push({
                    lat: location.position[0],
                    lng: location.position[1]
                });
            }
        });
    });
    
    // Complete the cycle by returning to start
    cyclePath.push({
        lat: itinerary.day1.locations[0].position[0],
        lng: itinerary.day1.locations[0].position[1]
    });
    
    currentRoute = new google.maps.Polyline({
        path: cyclePath,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map
    });
    
    // Add info window explaining the cycle
    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Graph Theory Application</h3>' +
                '<p>This tour follows a Hamiltonian Cycle - visiting each destination exactly once.</p>' +
                '<p>Route: Silay → Talisay → Bacolod → Bago → Kabankalan → Dumaguete → Valencia → Sibulan → San Carlos → Silay</p>'
    });
    
    infoWindow.open(map, currentMarkers[0]);
}

// Show Street View for a location
function showStreetView(lat, lng) {
    // This function is currently not implemented for Leaflet/OpenStreetMap
    // You may need to use a different library or API to display Street View
}

// Enhanced API debugging
async function testPexelsAPI() {
    try {
        console.log('Testing Pexels API connection...');
        
        const testUrl = 'https://api.pexels.com/v1/search?query=test&per_page=1';
        const response = await fetch(testUrl, {
            headers: {
                'Authorization': PEXELS_API_KEY,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            console.error('API Test Failed:', {
                status: response.status,
                statusText: response.statusText,
                headers: Object.fromEntries(response.headers.entries())
            });
            return false;
        }

        const data = await response.json();
        console.log('API Test Successful:', data);
        return true;
    } catch (error) {
        console.error('API Test Error:', error);
        return false;
    }
}

// Update initialization to load photos
async function initializeTourMap() {
    console.log('Initializing tour map...');
    
    try {
        await initMap();
        await showDay('all');
        await loadAndDisplayPhotos();
        drawHamiltonianCycle();  // Automatically show the cycle
        console.log('Tour map and photos initialized successfully');
    } catch (error) {
        console.error('Initialization failed:', error);
    }
}

// Update DOMContentLoaded listener
if (document.readyState !== 'loading') {
    initializeTourMap();
} else {
    document.addEventListener('DOMContentLoaded', initializeTourMap);
}

// Smooth scroll functionality for navigation links and other elements
document.addEventListener('click', function(e) {
  // Check if clicked element is:
  // 1. A nav link (either direct or child of link)
  // 2. The title text in header
  // 3. A hero button with data-scroll attribute
  const scrollElement = e.target.closest('nav a[href^="#"], .hero-section a[href^="#"], .hero-section button[data-scroll], .title-logo[href^="#"]');
  
  if (scrollElement && !scrollElement.classList.contains('mobile-menu-button')) {
    e.preventDefault();
    const targetId = scrollElement.getAttribute('href') || scrollElement.dataset.scroll;
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
});
