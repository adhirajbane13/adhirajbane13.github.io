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
  username: "Adhiraj Banerjee",
  title: "Hi, I'm Adhiraj Banerjee 👋",
  subTitle: emoji(
    "I'm a data analyst and data scientist passionate about transforming complex data into actionable insights. From Data-driven Analytics dashboards to machine learning-driven strategies, I deliver data solutions that drive real-world outcomes."
  ),
  resumeLink: "Adhiraj_CV.pdf", // Upload this PDF to your public folder
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/adhirajbane13",
  linkedin: "https://www.linkedin.com/in/adhiraj-banerjee/",
  gmail: "adhirajbane13@gmail.com", // Change this to your preferred contact email
  gitlab: "", // leave empty if unused
  facebook: "", // leave empty if unused
  medium: "", // or "https://medium.com/@adhirajbanerjee" if applicable
  stackoverflow: "", // optional
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Data Analyst & Data Scientist with a passion for building intelligent solutions through automation, visualization, and machine learning.",
  skills: [
    emoji("📊 Design interactive dashboards and KPIs in Power BI and Tableau for real-time decision-making."),
    emoji("⚙️ Automate ETL pipelines, SQL queries and data workflows using Python, SQL, and Docker."),
    emoji("🧠 Apply machine learning to uncover patterns and automate predictions."),
    emoji("🔎 Perform deep-dive exploratory data analysis (EDA) and statistical modelling to extract actionable insights."),
    emoji("☁️ Work with big data technologies like Azure Databricks and PySpark for scalable analysis."),
    emoji("📈 Create predictive models and ML algorithms to drive business growth."),
    emoji("🎯 Translate data into impactful stories for non-technical stakeholders."),
    emoji("💡 Develop end-to-end data projects from ideation to visualization.")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-code" },
    { skillName: "NumPy", fontAwesomeClassname: "fas fa-wave-square" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "The University of Sheffield",
      logo: require("./assets/images/sheffieldLogo1.png"), // optional, or comment this line
      subHeader: "MSc in Data Analytics (Distinction)",
      duration: "September 2023 – November 2024",
      desc: "Graduated with Distinction. Focused on machine learning, scalable computing, NLP, and AI applications.",
      descBullets: [
        "Modules: Data Science with Python, Scalable Machine Learning (PySpark), NLP, GPU Computing",
        "Project: Fine-tuned Vicuna LLM for Smart Home Automation — improved command accuracy by 7%, reduced execution errors by 30%"
      ]
    },
    {
      schoolName: "IIEST Shibpur (Indian Institute of Engineering Science and Technology)",
      logo: require("./assets/images/iiest1.png"),
      subHeader: "B.Tech in Electronics & Telecommunication Engineering (First Class with Honours)",
      duration: "August 2018 – May 2022",
      desc: "Built strong foundations in signal processing, communications, and embedded systems.",
      descBullets: [
        "Modules: DSP, Wireless Communications, Computer Vision",
        "Project: Pulse Oximeter using Arduino and MAX30100 — designed during COVID-19 for healthcare monitoring"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python / Pandas / NumPy",
      progressPercentage: "90%"
    },
    {
      Stack: "SQL / PostgreSQL / Excel",
      progressPercentage: "85%"
    },
    {
      Stack: "Power BI / Data Visualization",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning / Scikit-learn",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Cleaning & ETL",
      progressPercentage: "80%"
    },
    {
      Stack: "Deep Learning / Transformers",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Scientist",
      company: "The University of Sheffield",
      companylogo: require("./assets/images/sheffieldLogo1.png"),
      date: "Feb 2024 – Sept 2024",
      desc: "Designed a hybrid financial forecasting system using Transformer-based models with Markowitz optimization. Delivered insights through Power BI dashboards and automated ETL pipelines, enhancing return predictions and data reliability.",
      descBullets: [
        "Reduced data preparation time by 40% through automated Spark pipelines",
        "Achieved 1.4x return vs. baseline with 0.877 RMSE using custom encoder-only Transformer",
        "Visualized risk-return trade-offs using Power BI and Matplotlib for stakeholders"
      ]
    },
    {
      role: "Data Analyst",
      company: "Cambium Networks",
      companylogo: require("./assets/images/Cambium_Networks_logo.png"),
      date: "Jun 2022 – Jul 2023",
      desc: "Built and automated data pipelines to streamline RF test data extraction, analysis, and reporting. Enabled rapid performance insight delivery to engineering teams through visualizations and Excel dashboards.",
      descBullets: [
        "Improved data accuracy by 40% using Python + SCPI automation",
        "Cut reporting time from 8 hours to 2 hours with robust SQL scripts",
        "Enhanced stakeholder understanding via PivotChart-driven RF KPIs"
      ]
    },
    {
      role: "ML Research Engineer",
      company: "CSIR-CMERI",
      companylogo: require("./assets/images/csir_cmeri_dgp_logo.png"),
      date: "Jun 2021 – Oct 2021",
      desc: "Developed a Gaussian Mixture Model-based speaker recognition system using MFCCs, achieving robust performance in noisy environments. Improved classification accuracy with optimized EM training.",
      descBullets: [
        "Built 96% accurate speaker ID model using scikit-learn and NumPy",
        "Reduced errors by 20% with MFCC-based feature engineering",
        "Enhanced model robustness using SciPy Wiener filters and noise variance analysis"
      ]
    },
    {
      role: "NLP-ML Engineer (Internship)",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs-logo.png"),
      date: "May 2020 – Jul 2020",
      desc: "Implemented a supervised NLP pipeline for grammatical error detection, enhancing accuracy via tokenization and feature engineering using SpaCy and LinearSVC.",
      descBullets: [
        "Boosted classification accuracy from 78% to 85% through custom token pipelines",
        "Reduced false positives by 10% with lemmatization and text normalization",
        "Improved end-to-end computational efficiency by 30%"
      ]
    }
  ]
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
  subtitle: "A selection of real-world analytics, AI, and ML projects I've built end-to-end.",
  projects: [
    {
      image: require("./assets/images/nhs-logo1.png"),
      projectName: "NHS A&E Performance Dashboard",
      projectDesc:
        "Built an interactive Power BI dashboard connected to PostgreSQL via Docker and Python ETL. Enables drill-down insights, KPI tracking, and real-time filtering for trust-wise NHS A&E metrics.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/adhirajbane13/NHS_AandE_Performance_Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/tia.png"),
      projectName: "Tender Intelligence Assistant",
      projectDesc:
        "Streamlit app using GPT-4, FAISS, and OpenAI embeddings for intelligent tender QA. Supports multi-PDF uploads, semantic search, and contextual PDF export with dynamic temperature tuning.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/adhirajbane13/tender-response-generator-GenAI/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/spamShieldLogo.png"), // Add any mail/spam icon or placeholder
      projectName: "Deep Learning Spam Shield",
      projectDesc:
        "Developed a binary email spam classifier using TensorFlow, Keras, and TF-IDF vectorization. Optimized with Keras Tuner and evaluated via AUC, precision, and recall.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/adhirajbane13/Deep_Learning_Spam_Shield"
        }
      ]
    },    
    {
      image: require("./assets/images/financeLogo.png"),
      projectName: "Transformer-Enhanced Portfolio Optimisation",
      projectDesc:
        "Hybrid model integrating Transformer forecasting with Markowitz optimisation for Russell 2000 stocks. Delivered 1.4× return boost and 15% lower risk. Built on Azure Databricks and visualised via Power BI.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/adhirajbane13/Financial-Portfolio-Optimisation-Integrating-Transformers-with-the-Markowitz-Model"
        }
      ]
    },
    {
      image: require("./assets/images/audioLogo.png"),
      projectName: "Speaker Recognition with GMM",
      projectDesc:
        "Developed a MFCC + GMM-based speaker identification system with noise-robust EM training. Delivered >90% accuracy in clean and noisy conditions, validated at CSIR-CMERI lab.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/adhirajbane13/Gaussian-Mixture-Model-based-Speaker-Recognition"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "A selection of certifications showcasing my technical skills and continuous learning.",

  achievementsCards: [
    {
      title: "SQL (Advanced)",
      subtitle: "Issued by HackerRank, this certification validates advanced SQL query building and optimization skills.",
      image: require("./assets/images/hackerrankLogo.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.hackerrank.com/certificates/a2005f4c623d"
        }
      ]
    },
    {
      title: "DP-900: Microsoft Azure Data Fundamentals",
      subtitle: "Covers foundational knowledge of core data concepts and Azure data services, with real-world use cases.",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-2154c74b-2536-4007-b7b8-209daea6aa89/"
        }
      ]
    },
    {
      title: "IoT Specialization",
      subtitle: "An in-depth introduction to IoT systems development from University of California, Irvine via Coursera.",
      image: require("./assets/images/UCI.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/H8YYPEVNLNM9"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44-7438720064",
  email_address: "adhirajbane13@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  twitterDetails,
  isHireable,
  resumeSection
};
