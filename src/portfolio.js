/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "anhducad1111",
  title: "Hi all, I'm Nguyen Anh Duc",
  subTitle: emoji(
    "HMI / Embedded Systems & IoT Engineer ⚡ Specializing in high-performance desktop instrumentation (.NET 8 WPF, PyQt6), real-time data acquisition, wireless connectivity (BLE GATT, LTE-M/NB-IoT), and low-level firmware engineering."
  ),
  resumeLink: "https://raw.githubusercontent.com/anhducad1111/anhducad1111/main/CVNAD.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anhducad1111",
  linkedin: "https://www.linkedin.com/in/anhducad1111/",
  gmail: "anhducad1111@gmail.com",
  gitlab: "https://gitlab.com/anhducad1111",
  facebook: "https://www.facebook.com/anhducad1111",
  medium: "https://medium.com/@anhducad1111",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "HMI / EMBEDDED / IOT ENGINEER BRIDGING HARDWARE WITH REAL-TIME SOFTWARE",
  skills: [
    emoji(
      "⚡ High-performance desktop HMI and scientific data acquisition (.NET 8 WPF, ScottPlot 5, PyQt6, OpenGL)"
    ),
    emoji(
      "⚡ Embedded wireless connectivity and binary framing (BLE GATT, LTE-M / NB-IoT, LoRaWAN, UART 1 Mbps+)"
    ),
    emoji(
      "⚡ ARM Cortex-M firmware development, bare-metal peripheral drivers, and hardware bring-up"
    )
  ],
  softwareSkills: [
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "c# / .NET",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "arm cortex",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "bluetooth ble",
      fontAwesomeClassname: "fab fa-bluetooth-b"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName:
        "Vietnam-Korea University of Information Technology and Communications (VKU)",
      logo: require("./assets/images/logoVKU.png"),
      subHeader: "Bachelor of Science in Information Technology — Major: IoT & Robotics",
      duration: "Aug 2021 – Apr 2026",
      desc: "Graduated with GPA: 3.21 / 4.0 · Graduation Thesis: 8.7 / 10",
      descBullets: [
        "Focused on Edge AI, embedded systems, robotics, and industrial IoT communication",
        "Graduation Thesis: Smart Water Meter & Edge AI Monitoring System running offline on ESP32-CAM"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Real-Time HMI & Desktop Software (.NET WPF / PyQt6)",
      progressPercentage: "90%"
    },
    {
      Stack: "Embedded Wireless & Protocols (BLE GATT / LTE-M / UART)",
      progressPercentage: "85%"
    },
    {
      Stack: "Embedded Firmware & Hardware Integration (ARM / C / C++)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Junior Firmware Developer (Secondment)",
      company: "THESIS PTE LTD (Singapore)",
      companylogo: require("./assets/images/nextuLogo.webp"),
      date: "Sep 2026 – Present",
      desc: "Developing and maintaining embedded firmware in C/C++ for ARM Cortex-M platforms under senior engineering guidance.",
      descBullets: [
        "Working with peripheral interfaces including UART, SPI, I²C, GPIO, and ADC across bare-metal systems.",
        "Supporting hardware bring-up, PCB integration, and debugging using J-Link, SWD, and serial analyzers.",
        "Participating in firmware code reviews and maintaining technical design documentation."
      ]
    },
    {
      role: "HMI / Embedded / IoT Engineer",
      company: "Enable Startup (Da Nang)",
      companylogo: require("./assets/images/saayaHealthLogo.webp"),
      date: "Jun 2025 – Present",
      desc: "Architecting high-speed scientific instrumentation, DAQ platforms, and automated test fixtures.",
      descBullets: [
        "Multi-process scientific workbench in Python (PyQt6/PyQtGraph) with SOS Butterworth DSP and auto-lock PID at 60 FPS.",
        "High-performance C# .NET 8 WPF HMIs (MVVM + ScottPlot 5) sustaining 200,000-point real-time plots over 1 Mbps UART.",
        "Dual-port serial ATE system reducing PCB factory functional test cycle time from 10 minutes to under 45 seconds.",
        "Application firmware for PSoC6 host interfacing nRF9160 LTE-M/NB-IoT modem via AT commands."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "PRECISION SCIENTIFIC INSTRUMENTATION, WIRELESS TOOLS & EDGE AI",
  projects: [
    {
      image: require("./assets/images/developerActivity.svg"),
      projectName: "Real-Time Laser Frequency Stabilization Workbench",
      projectDesc:
        "Scientific control workbench with 4th-order SOS Butterworth DSP, phase-sensitive demodulation, and sub-millivolt auto-lock state machine at 60 FPS OpenGL rendering.",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/anhducad1111"
        }
      ]
    },
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "Industrial BLE OTA & Field Diagnostic Tool",
      projectDesc:
        "Android field companion porting Cypress DFU protocol to Kotlin Coroutines; dual-mode transfer, CRC-32C Castagnoli, and 100% success rate across 150+ cycles under factory RF noise.",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/anhducad1111"
        }
      ]
    },
    {
      image: require("./assets/images/pwa.webp"),
      projectName: "Smart Water Meter & Edge AI System",
      projectDesc:
        "Offline edge-AI digit recognition pipeline: ROI preprocessing, INT8-quantized CNN on ESP32-CAM, and LoRa/MQTT remote uplink (~98% accuracy, Thesis scored 8.7/10).",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/anhducad1111"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "ACADEMIC HONORS AND CERTIFICATIONS",
  display: true,
  achievementsCards: [
    {
      title: "Third Prize — VKU Startup 2025",
      subtitle:
        "Awarded Third Prize at VKU Startup Competition for AI-powered autonomous IoT fire detection system.",
      image: require("./assets/images/logoVKU.png"),
      imageAlt: "VKU Award",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/anhducad1111"
        }
      ]
    },
    {
      title: "VSTEP English Certificate — Level B2",
      subtitle:
        "Certified English proficiency for international engineering collaboration and technical documentation.",
      image: require("./assets/images/logoVKU.png"),
      imageAlt: "VSTEP Certificate",
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/anhducad1111"
        }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  title: "Blog Posts",
  subtitle:
    "Sharing thoughts and insights about personal growth and technology",
  display: true,
  blogs: [
    {
      url: "https://medium.com/@anhducad1111/dont-rely-too-much-on-tools-embrace-self-reliance-in-development-a572c39f8e3d",
      title:
        "Don't Rely Too Much on Tools: Embrace Self-Reliance in Development",
      description:
        "Why it's crucial to understand core concepts before heavily relying on development tools and frameworks. Building a strong foundation through self-learning and experimentation."
    },
    {
      url: "https://medium.com/@anhducad1111/the-importance-of-independent-thinking-in-software-engineering-b8f697d23c45",
      title: "The Importance of Independent Thinking in Software Engineering",
      description:
        "How developing your own problem-solving skills and critical thinking can make you a better engineer, rather than always depending on existing solutions."
    },
    {
      url: "https://medium.com/@anhducad1111/balancing-tool-usage-and-fundamental-understanding-c9d84e5a1b2f",
      title: "Balancing Tool Usage and Fundamental Understanding",
      description:
        "Finding the right balance between leveraging tools for productivity while maintaining deep understanding of core principles and concepts."
    }
  ]
};

// Talks Sections

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest verified engineering CV",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in real-time HMI, embedded firmware, or IoT engineering? Feel free to reach out!",
  number: "+84 943079599",
  email_address: "anhducad1111@gmail.com"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
