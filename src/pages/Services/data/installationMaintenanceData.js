import { Grid } from "lucide-react" // Reusing Grid icon for consistency

import { optimizedImages } from "../../../assets/imageCatalog"

export const installationData = [
  {
    id: 1,
    title: "Elevator Installation:",
    description:
      "Ideal for residential and commercial buildings, our elevator installation services ensure precise and secure assembly of passenger elevators, freight elevators, and specialized lift systems. We handle everything from design consultation to final commissioning.",
    image: optimizedImages.installation2,
    icon: Grid,
    layout: "image-left",
  },
  {
    id: 2,
    title: "Escalator Setup:",
    description:
      "Our team provides expert installation and alignment of escalators and moving walkways, ensuring optimal performance and safety for high-traffic areas in commercial buildings, malls, and transportation hubs.",
    image: optimizedImages.escalator,
    icon: Grid,
    layout: "image-right",
  },
  {
    id: 3,
    title: "Specialized Lift Systems:",
    description:
      "We specialize in the installation of dumb waiters, chair lifts, and other specialized mobility systems for various accessibility applications, ensuring seamless integration with existing building infrastructure.",
    image: optimizedImages.stairlift,
    icon: Grid,
    layout: "image-left",
  },
  {
    id: 4,
    title: "On-Site Commissioning:",
    description:
      "Our certified technicians provide comprehensive on-site commissioning services, bringing expertise and precision directly to your project location for thorough testing and system optimization.",
    image: optimizedImages.installation,
    icon: Grid,
    layout: "image-right",
  },
]

export const maintenanceData = [
  {
    id: 1,
    title: "Preventive Maintenance:",
    description:
      "Our preventive maintenance programs are designed to identify and address potential issues before they become major problems, extending the lifespan of your elevator and escalator systems while ensuring optimal performance.",
    image: optimizedImages.maintenance,
    icon: Grid,
    layout: "image-left",
  },
  {
    id: 2,
    title: "Emergency Repairs:",
    description:
      "We provide rapid response emergency repair services to address unexpected breakdowns and malfunctions, minimizing downtime and restoring elevator and escalator operations quickly and safely.",
    image: optimizedImages.maintenance2,
    icon: Grid,
    layout: "image-right",
  },
  {
    id: 3,
    title: "System Modernization:",
    description:
      "Our experts perform comprehensive modernization and retrofitting services on elevator and escalator systems, upgrading outdated components with modern technology to improve safety, efficiency, and performance.",
    image: optimizedImages.modernization,
    icon: Grid,
    layout: "image-left",
  },
  {
    id: 4,
    title: "24/7 Support:",
    description:
      "We offer round-the-clock maintenance support and monitoring services to ensure your elevator and escalator systems operate smoothly and safely, with immediate response to any issues that may arise.",
    image: optimizedImages.elevator,
    icon: Grid,
    layout: "image-right",
  },
]
