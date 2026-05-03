export const portfolioData = {
  name: "Zee Pearson",
  title: "Embedded Software Engineer",
  description: "Specialized in low-level programming, firmware development, and hardware integration",
  location: "Metro Detroit Area",
  email: "contact@example.com",
  github: "https://github.com/zeepearson",
  linkedin: "https://linkedin.com/in/zeepearson",
  resume: "/resume.pdf",

  skills: [
    { name: "C/C++", category: "Languages", proficiency: 95 },
    { name: "Python", category: "Languages", proficiency: 85 },
    { name: "Assembly", category: "Languages", proficiency: 80 },
    { name: "RTOS", category: "Embedded Systems", proficiency: 90 },
    { name: "CAN Bus", category: "Embedded Systems", proficiency: 88 },
    { name: "Firmware Development", category: "Embedded Systems", proficiency: 92 },
    { name: "Hardware Integration", category: "Embedded Systems", proficiency: 87 },
    { name: "Git", category: "Tools", proficiency: 90 },
    { name: "Linux", category: "Tools", proficiency: 85 },
    { name: "Embedded Linux", category: "Tools", proficiency: 82 },
  ],

  projects: [
    {
      id: 1,
      title: "Smart IoT Device Controller",
      description: "Real-time embedded system for IoT device management with CAN bus communication",
      longDescription: "Developed a comprehensive embedded firmware solution for IoT devices, implementing real-time OS capabilities, CAN bus protocol handling, and hardware-software integration. The system manages multiple peripheral interfaces and implements robust error handling.",
      tech: ["C++", "RTOS", "CAN Bus", "ARM Cortex-M4"],
      image: "/projects/iot-device.jpg",
      github: "https://github.com/zeepearson/iot-controller",
      demo: "https://demo.example.com",
      metrics: {
        performance: "50ms response time",
        reliability: "99.9% uptime",
        scope: "200+ devices managed",
      },
    },
  ],

  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "Embedded Systems", value: "Expert" },
  ],

  caseStudies: [
    {
      id: 1,
      title: "Optimizing Real-Time Performance",
      challenge: "Device firmware was experiencing inconsistent response times during high-load scenarios",
      solution: "Implemented priority-based task scheduling in RTOS, optimized interrupt handling, and refactored memory allocation patterns",
      results: ["Reduced latency from 150ms to 50ms", "Improved stability under load by 40%", "Decreased power consumption by 25%"],
    },
  ],

  testimonials: [
    {
      author: "John Doe",
      title: "Senior Hardware Engineer",
      company: "Tech Corp",
      feedback: "Zee delivered exceptional embedded software solutions that perfectly integrated with our hardware",
    },
  ],
};

export type Portfolio = typeof portfolioData;
