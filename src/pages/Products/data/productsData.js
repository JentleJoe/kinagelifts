export const productsData = {
  elevators: {
    id: 1,
    category: "Elevators",
    description: "Premium elevator solutions for residential, commercial, and industrial applications",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: 1,
        name: "Passenger Elevators",
        description: "Reliable vertical transportation for people in buildings of all sizes",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Standard (Low/Mid/High-Rise)",
            description: "Versatile elevator solutions for buildings of various heights",
            features: ["Energy efficient", "Smooth operation", "Modern controls", "Safety certified"]
          },
          {
            name: "Premium/Luxury",
            description: "High-end elevators with premium finishes and advanced features",
            features: ["Luxury finishes", "Quiet operation", "Custom interiors", "Smart technology"]
          },
          {
            name: "Panoramic (Glass)",
            description: "Scenic elevators with glass panels for enhanced viewing experience",
            features: ["Glass panels", "Scenic views", "Modern design", "Enhanced lighting"]
          },
          {
            name: "Machine Room-Less (MRL)",
            description: "Space-saving elevator systems without traditional machine rooms",
            features: ["Space efficient", "Easy maintenance", "Cost effective", "Flexible installation"]
          },
          {
            name: "Hydraulic (Low-Rise)",
            description: "Reliable hydraulic systems perfect for low-rise buildings",
            features: ["Smooth ride", "Cost effective", "Reliable operation", "Easy maintenance"]
          }
        ]
      },
      {
        id: 2,
        name: "Freight Elevators",
        description: "Heavy-duty elevators designed for transporting goods and materials",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Industrial/Heavy-Duty",
            description: "Robust elevators for heavy industrial applications",
            features: ["Heavy load capacity", "Durable construction", "Industrial grade", "Safety systems"]
          },
          {
            name: "Service (Goods) Elevators",
            description: "Efficient transportation of goods and materials",
            features: ["Material handling", "Efficient operation", "Versatile design", "Easy loading"]
          },
          {
            name: "Car Parking (Automobile) Elevators",
            description: "Specialized elevators for vehicle transportation",
            features: ["Vehicle transport", "Safe operation", "Space optimization", "Automated systems"]
          }
        ]
      },
      {
        id: 3,
        name: "Home Elevators",
        description: "Residential elevator solutions for private homes and small buildings",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Compact (Pneumatic/Vacuum)",
            description: "Space-efficient pneumatic elevator systems",
            features: ["Compact design", "No machine room", "Quiet operation", "Easy installation"]
          },
          {
            name: "Cabin-Style (Hydraulic/Traction)",
            description: "Traditional cabin-style home elevators",
            features: ["Comfortable cabin", "Smooth operation", "Custom finishes", "Reliable performance"]
          },
          {
            name: "Platform (Wheelchair) Lifts",
            description: "Accessibility-focused platform lifts for mobility assistance",
            features: ["Wheelchair accessible", "Safety features", "Easy operation", "Compliance certified"]
          }
        ]
      }
    ]
  },
  escalators: {
    id: 2,
    category: "Escalators & Moving Walkways",
    description: "Modern escalator and moving walkway systems for seamless horizontal and vertical movement",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: 1,
        name: "Escalators",
        description: "Efficient vertical transportation for high-traffic areas",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Standard (Indoor/Outdoor)",
            description: "Versatile escalators suitable for various environments",
            features: ["Weather resistant", "High capacity", "Safety features", "Energy efficient"]
          },
          {
            name: "Spiral/Circular (Custom Designs)",
            description: "Custom-designed spiral escalators for unique architectural needs",
            features: ["Custom design", "Architectural integration", "Unique aesthetics", "Space optimization"]
          },
          {
            name: "Heavy-Duty (Public Transport)",
            description: "Robust escalators designed for high-traffic public transportation",
            features: ["Heavy-duty construction", "High throughput", "Durable components", "Safety systems"]
          }
        ]
      },
      {
        id: 2,
        name: "Moving Walkways (Travelators)",
        description: "Horizontal transportation systems for long-distance movement",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Horizontal (Flat)",
            description: "Flat moving walkways for airports, malls, and long corridors",
            features: ["Smooth operation", "Variable speed", "Easy maintenance", "High capacity"]
          },
          {
            name: "Inclined (Sloped)",
            description: "Inclined moving walkways for gradual elevation changes",
            features: ["Inclined design", "Comfortable transport", "Safety features", "Efficient operation"]
          }
        ]
      }
    ]
  },
  specialized: {
    id: 3,
    category: "Specialized Mobility Equipment",
    description: "Specialized lifting and mobility solutions for unique applications",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: 1,
        name: "Dumb Waiters",
        description: "Small freight elevators for transporting goods between floors",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Manual/Electric",
            description: "Manual and electric dumbwaiter systems for various applications",
            features: ["Manual or electric", "Compact design", "Easy installation", "Reliable operation"]
          },
          {
            name: "Food Service (Hospitality)",
            description: "Specialized dumbwaiters for restaurants and hospitality",
            features: ["Food service grade", "Hygienic design", "Efficient operation", "Easy cleaning"]
          },
          {
            name: "Hospital/Pharmaceutical",
            description: "Medical-grade dumbwaiters for healthcare facilities",
            features: ["Medical grade", "Sterile operation", "Safety certified", "Precise control"]
          }
        ]
      },
      {
        id: 2,
        name: "Stairlifts & Chair Elevators",
        description: "Mobility solutions for stairs and accessibility needs",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd51721?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Straight-Rail (Residential)",
            description: "Straight-rail stairlifts for residential applications",
            features: ["Straight rail", "Comfortable seat", "Safety features", "Easy operation"]
          },
          {
            name: "Curved-Rail (Custom)",
            description: "Custom curved-rail stairlifts for complex staircases",
            features: ["Custom curves", "Precise fitting", "Smooth operation", "Advanced safety"]
          },
          {
            name: "Outdoor Stairlifts",
            description: "Weather-resistant stairlifts for outdoor use",
            features: ["Weather resistant", "Durable construction", "All-weather operation", "Reliable performance"]
          }
        ]
      },
      {
        id: 3,
        name: "Wheelchair Lifts",
        description: "Specialized lifts for wheelchair accessibility",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Vertical Platform Lifts (VPLs)",
            description: "Vertical platform lifts for wheelchair accessibility",
            features: ["Wheelchair accessible", "Safety certified", "Easy operation", "Compliance ready"]
          },
          {
            name: "Inclined Platform Lifts",
            description: "Inclined platform lifts for stairway accessibility",
            features: ["Inclined design", "Platform operation", "Safety systems", "Smooth travel"]
          }
        ]
      }
    ]
  },
  components: {
    id: 4,
    category: "Components & Modernization",
    description: "Spare parts, components, and modernization services for existing systems",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subcategories: [
      {
        id: 1,
        name: "Spare Parts & Components",
        description: "Quality replacement parts and components for all elevator systems",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Doors, Controllers, Buttons",
            description: "Essential control components for elevator operation",
            features: ["Quality components", "Easy replacement", "Compatible systems", "Reliable operation"]
          },
          {
            name: "Motors, Cables, Safety Gear",
            description: "Critical mechanical components for elevator systems",
            features: ["High-quality materials", "Safety certified", "Durable construction", "Easy maintenance"]
          }
        ]
      },
      {
        id: 2,
        name: "Retrofitting & Upgrades",
        description: "Modernization services to upgrade existing elevator systems",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        products: [
          {
            name: "Energy-Efficient Modernization",
            description: "Upgrade to energy-efficient elevator systems",
            features: ["Energy savings", "Modern technology", "Improved performance", "Cost effective"]
          },
          {
            name: "Aesthetic/Functional Refits",
            description: "Aesthetic and functional improvements to existing systems",
            features: ["Modern aesthetics", "Enhanced function", "Updated controls", "Improved user experience"]
          }
        ]
      }
    ]
  }
};
