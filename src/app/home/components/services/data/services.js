import { Users, Code2, Rocket, Database } from 'lucide-react';

export const services = [
  {
    id: 1,
    number: "01",
    title: "Web DevOps",
    description: "Streamline your development workflow with our comprehensive DevOps solutions",
    progress: 75,
    stats: {
      icon: Users,
      label: "Customers",
      value: 1218,
      change: -12.4
    },
    feature: "Smart widgets"
  },
  {
    id: 2,
    number: "02",
    title: "UI UX Design",
    description: "Create visually stunning and user-friendly interfaces",
    progress: 85,
    stats: {
      icon: Code2,
      label: "Projects",
      value: 856,
      change: 24.6
    },
    feature: "Custom solutions"
  },
  {
    id: 3,
    number: "03",
    title: "Marketing",
    description: "Strategic marketing solutions to grow your business",
    progress: 60,
    stats: {
      icon: Database,
      label: "Servers",
      value: 2435,
      change: 18.2
    },
    feature: "High availability"
  },
  {
    id: 4,
    number: "04",
    title: "Content Writing",
    description: "Creating engaging and informative content for your audience",
    progress: 90,
    stats: {
      icon: Rocket,
      label: "Speed Index",
      value: 982,
      change: 32.8
    },
    feature: "Lightning fast"
  },
  {
    id: 5,
    number: "05",
    title: "Product Development",
    description: "Bringing your vision to life with our expertise in product development",
    progress: 90,
    stats: {
      icon: Rocket,
      label: "Speed Index",
      value: 982,
      change: 32.8
    },
    feature: "Lightning fast"
  },
  {
    id: 6,
    number: "06",
    title: "Tech Training",
    description: "Empowering teams with the latest technology skills",
    progress: 90,
    stats: {
      icon: Rocket,
      label: "Speed Index",
      value: 982,
      change: 32.8
    },
    feature: "Lightning fast"
  },
];