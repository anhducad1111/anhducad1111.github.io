/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "anhducad1111",
  title: "Hi all, I'm Anh Duc",
  subTitle: emoji(
    "A passionate IoT & Robotics Engineer 🤖 with experience in automation technology, AI applications and embedded systems development. Working on innovative solutions for real-world challenges through smart IoT systems."
  ),
  resumeLink:
    "https://www.canva.com/design/DAGbyXOqKBI/k30bWfuZh-wNNUGhZ-WUYQ/edit", // Will update when you have a resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anhducad1111",
  linkedin: "https://www.linkedin.com/in/anhducad1111/",
  gmail: "anhducad1111@gmail.com",
  gitlab: "https://gitlab.com/anhducad1111",
  facebook: "https://www.facebook.com/anhducad1111",
  medium: "https://medium.com/@anhducad1111",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "IOT & ROBOTICS ENGINEER SPECIALIZING IN SMART AUTOMATION SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop IoT systems and robotics applications for automation and monitoring"
    ),
    emoji(
      "⚡ Machine learning and computer vision integration for smart systems"
    ),
    emoji(
      "⚡ Mobile and web interfaces for IoT device control and data visualization"
    )
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "raspberry-pi",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "arduino",
      fontAwesomeClassname: "fas fa-microchip"
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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName:
        "Vietnam-Korea University (VKU)",
      logo: require("./assets/images/logoVKU.png"),
      subHeader: "IoT & Robotics Engineering",
      duration: "2021 - Present",
      desc: "Currently pursuing studies in IoT systems and robotics applications with GPA: 3.14/4.0",
      descBullets: [
        "Specializing in automation technology and embedded systems",
        "Focus on AI and computer vision integration"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "IoT & Embedded Systems",
      progressPercentage: "65%"
    },
    {
      Stack: "Computer Vision & AI",
      progressPercentage: "55%"
    },
    {
      Stack: "Mobile & Web Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "INNOVATIVE IOT AND ROBOTICS SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "IoT Fire Monitoring and Alert System",
      projectDesc:
        "Real-time monitoring system for temperature, humidity, and fire detection with instant alerts",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/anhducad1111"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Drone Simulation for Workplace Safety",
      projectDesc:
        "Simulation of drones for monitoring workers and checking safety equipment compliance",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/anhducad1111"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Smart Water Meter and Home Monitoring",
      projectDesc:
        "Camera-based water meter reading system with home environment monitoring and remote control",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/anhducad1111"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false
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
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in IoT solutions or just want to connect? Feel free to reach out!",
  number: "+84 943079599",
  email_address: "anhducad1111@gmail.com"
};



const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
