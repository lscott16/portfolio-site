export const profileData = {
  name: 'Lucas Scott',
  tagline: 'Software Developer • CS & Economics @ University of Guelph',
  location: 'Guelph, Ontario',
  phone: '905-517-5863',
  email: 'lscott16@uoguelph.ca',
  github: 'https://github.com/lscott16',
  githubHandle: 'github.com/lscott16',
  linkedin: 'https://www.linkedin.com/in/lucas-scott16/',
  linkedinHandle: 'linkedin.com/in/lucas-scott16',
  resumeUrl: '/Lucas_Scott_Resume.pdf',
  headshotUrl: '/Headshot.JPG',
}

export const educationData = {
  institution: 'University of Guelph',
  location: 'Guelph, Ontario',
  degree: 'Bachelor of Computing, Honours Co-op',
  major: 'Major in Computer Science; Minor in Economics',
  period: 'Sep. 2023 – Present',
  focusAreas: [
    'Data Structures, Algorithms & Operating Systems',
    'Object-Oriented Software Design & Microservices',
    'Econometric Modeling & Quantitative Analysis',
    'Database Systems (PostgreSQL / MariaDB) & Web Architecture',
  ],
}

export const skillsData = {
  categories: [
    {
      label: 'Languages',
      items: ['Python', 'Java', 'C', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS', 'R'],
    },
    {
      label: 'Frameworks',
      items: ['React', 'Node.js', 'Flask', 'Django', 'FastAPI', 'Spring Boot', 'Express.js'],
    },
    {
      label: 'Developer Tools',
      items: ['Git', 'Docker', 'VS Code', 'Antigravity 2.0'],
    },
    {
      label: 'Libraries & APIs',
      items: ['pandas', 'NumPy', 'Matplotlib', 'Pygame', 'Google Gemini API'],
    },
  ],
}

export const experiencesData = [
  {
    id: 'program-coordinator',
    category: 'news article',
    headline: 'SCOTT LEADS 15-INSTRUCTOR STEM INITIATIVE AT CREATIVE ENCOUNTERS',
    title: 'Program Coordinator',
    company: 'Creative Encounters',
    location: 'Guelph, ON',
    date: 'May 2026 – Present',
    shortDate: '2026–Present',
    companyDescription:
      'Creative Encounters provides hands-on STEM camps, programs, clubs, events, and workshops for elementary and high school youth across Guelph and surrounding communities.',
    lead: 'Directly managing, training, and mentoring a 15-member instructor cohort to deliver curriculum-aligned STEM programming reaching 1,695 students.',
    columns: [
      'Directly managed, trained, and mentored a team of 15 instructors in the planning and execution of STEM workshops and community initiatives across the summer term.',
      'Reviewed safety protocols, program budgets, and Ontario Curriculum relevancy across every camp section to maintain rigorous educational and operational standards.',
      'Coordinated hands-on STEM programming that reached 1,695 elementary and high school students from May through August while fostering an inclusive team culture.',
    ],
    metricsType: 'grid',
    metricsTitle: 'PROGRAM & LEADERSHIP METRICS',
    metrics: [
      { value: '1,695', label: 'Students Reached' },
      { value: '15', label: 'Instructors Led' },
      { value: '100%', label: 'Curriculum Aligned' },
      { value: 'May–Aug', label: 'Camp Season' },
    ],
    learningGoals: [
      {
        goal: 'As a team leader leading a team of 15 individuals, I wish to develop strong oral communication skills to deliver concise, clear instructions without causing confusion amongst instructors.',
        achievement:
          'This summer flowed smoothly in large part due to proactive communication. I provided instructors with clear, timely briefings during two months of curriculum development in May and June, followed by daily floor coordination across camp rooms throughout July and August.',
      },
      {
        goal: 'Since I am leading a team of 15, leadership skills are crucial. My goal is to be a strong, dependable leader whom the team can look up to and rely on.',
        achievement:
          'Every summer camp section ran successfully, and instructors consistently turned to me when escalating questions or coordinating with leadership—reinforcing a dependable, supportive command structure.',
      },
      {
        goal: 'Create an inclusive, safe environment for fellow coordinators and instructors where everyone feels heard, respected, and excited to come to work every day.',
        achievement:
          'Addressed interpersonal concerns early before they could escalate, organized team-bonding initiatives during May and June, and worked with campus security and leadership to handle sensitive safety situations with care.',
      },
    ],
  },
  {
    id: 'stem-specialist',
    category: 'news article',
    headline: 'CUSTOM 40-HOUR PYTHON GAME DESIGN CURRICULUM LAUNCHED FOR YOUTH',
    title: 'STEM Specialist / Instructor',
    company: 'Creative Encounters',
    location: 'Guelph, ON',
    date: 'May 2025 – April 2026',
    shortDate: '2025–2026',
    companyDescription:
      'Delivered custom coding curricula, school-wide STEM workshops, and multi-week after-school Python clubs for youth in Grades 1–8.',
    lead: 'Designed a 40-hour Python & Pygame Game Design course reaching 80 middle-school students alongside 15+ school workshops and two 8-week coding clubs.',
    columns: [
      'Designed a 40-hour custom Game Design curriculum in Python and Pygame that reached 80 youth aged Grade 6–8 from July through August, guiding students to build custom playable games.',
      'Administered over 15 interactive STEM workshops throughout May and June for classrooms spanning Grade 1 to Grade 8.',
      'Designed and led two 8-week sessions of an after-school Python coding club running from October to April, collaborating within a 10-person instructional team.',
    ],
    metricsType: 'chart',
    metricsTitle: 'CURRICULUM REACH',
    chartLabel: '40-Hr Python Course',
    chartValue: '80 Youth',
    chartSub: 'Plus 15+ school workshops & two 8-week coding clubs',
    learningGoals: [
      {
        goal: 'Create a thought-out, robust Game Design summer camp curriculum tailored for Grade 6–8 learners.',
        achievement:
          'Campers consistently finished each week with a working custom Python/Pygame game and practical fluency in tweaking game mechanics (velocity, collision, health systems). Iterated on pacing by replacing lengthy demos with guided studio build time.',
      },
      {
        goal: 'Serve as a consistent, patient, yet firm leader for Grade 6–8 classrooms.',
        achievement:
          'Maintained a positive, respectful classroom environment across four months without a single major disciplinary escalation, using regular self-reflection to keep energy and instruction sharp.',
      },
      {
        goal: 'Collaborate effectively within a 10-instructor cohort—larger than prior 4-person project teams.',
        achievement:
          'Built strong working relationships across the entire instructional cohort, coordinating daily room logistics and peer support seamlessly.',
      },
    ],
  },
  {
    id: 'field-research-assistant',
    category: 'news article',
    headline: 'DRONE ORTHOMOSAICS & PYTHON 3 MIGRATION AT MCMASTER CARBON SINK FOREST',
    title: 'Field Research Assistant',
    company: 'Gonsamo Group, McMaster University',
    location: 'Hamilton, ON',
    date: 'May 2024 – Oct. 2024',
    shortDate: '2024',
    companyDescription:
      'Remote sensing, geospatial modeling, and carbon-flux research laboratory at McMaster University.',
    lead: 'Engineered high-resolution drone orthomosaics, digital elevation models, and modernized Python 3 geospatial pipelines for carbon tracking.',
    columns: [
      'Created high-resolution orthomosaics and digital elevation models (DEMs) of the McMaster Carbon Sink Forest using ArcGIS Drone2Map.',
      'Collaborated with the Chippewa of the Thames First Nations reserve to track and analyze ecological carbon data.',
      'Migrated legacy map-matching software from Python 2.x to Python 3.x and authored custom automation scripts for ArcGIS Pro.',
    ],
    metricsType: 'grid',
    metricsTitle: 'RESEARCH HIGHLIGHTS',
    metrics: [
      { value: 'Py 3.x', label: 'Pipeline Migration' },
      { value: 'DEM', label: '3D Elevation Models' },
      { value: 'ArcGIS', label: 'Custom Pro Scripts' },
      { value: 'Carbon', label: 'First Nations Data' },
    ],
    learningGoals: [
      {
        goal: 'Master geospatial drone photogrammetry and automated scripting in ArcGIS Pro.',
        achievement:
          'Produced full orthomosaics and digital elevation models of the McMaster Carbon Sink Forest and automated repetitive GIS workflows using custom Python scripts.',
      },
      {
        goal: 'Modernize scientific research codebases for long-term maintainability.',
        achievement:
          'Successfully ported deprecated Python 2.x map-matching tools to Python 3.x, restoring compatibility with modern geospatial libraries.',
      },
    ],
  },
]

export const projectsData = [
  {
    id: 'infra-viz',
    category: 'engineering dispatch',
    headline: 'INFRASTRUCTURE VISUALIZATION TOOL MAPS CANADIAN PUBLIC FACILITIES',
    subtitle: 'Docker • Java • Spring Boot • JavaScript • MariaDB',
    date: 'Jan. 2026 – April 2026',
    lead: 'Engineered a Spring Boot & MariaDB RESTful microservice ingesting Statistics Canada datasets to power 4 interactive geospatial and statistical visualizations.',
    bullets: [
      'Implemented 4 interactive data visualizations (heatmap, stacked bar chart, line graph, and scatter plot) to evaluate public facility conditions and accessibility across Canada.',
      'Delivered features in an Agile workflow with weekly standups, sprint retrospectives, backlog prioritization, and story-point estimation.',
      'Engineered a RESTful microservice using Spring Boot and MariaDB to ingest, normalize, and query 2 federal datasets from Statistics Canada.',
    ],
    badge: '2 Federal Datasets • 4 Interactive Views',
  },
  {
    id: 'gryphtutor',
    category: 'engineering dispatch',
    headline: 'GRYPHTUTOR BRINGS AI-GUIDED PYTHON TUTORING TO MIDDLE SCHOOLS',
    subtitle: 'Python • React • Supabase • Django',
    date: 'Sep. 2025 – Nov. 2025',
    lead: 'Built an adaptive Python tutoring platform with generative AI guardrails that delivers real-time hints without spoiling solutions.',
    bullets: [
      'Created a smart tutoring assistant designed to teach middle-school youth the fundamentals of Python programming.',
      'Utilized machine learning to adapt to student performance metrics and personalize learning progression.',
      'Integrated generative AI feedback loops with prompt engineering and safety guardrails to evaluate student code in real time.',
    ],
    badge: 'Adaptive ML + Safe LLM Hints',
  },
  {
    id: 'mtg-advisor',
    category: 'award dispatch',
    headline: 'MTG ADVISOR CAPTURES 2ND PLACE AT GDSC HACKS 2025',
    subtitle: 'React • Python • Flask • Vite • Google Gemini API',
    date: 'May 2025',
    lead: 'Awarded 2nd place out of 20+ teams by synthesizing real-time congressional trading disclosures with Google Gemini LLM trend forecasting.',
    bullets: [
      'Awarded 2nd place out of over 20 teams at GDSC Hacks 2025 for building an AI-driven market intelligence tool.',
      'Engineered a context-augmented financial analysis pipeline using the Google Gemini API, synthesizing congressional disclosures and historical market data into structured JSON forecasts.',
      'Built automated web scrapers with Selenium and BeautifulSoup to extract dynamic transaction records from Unusual Whales.',
    ],
    badge: '2nd Place / 20+ Teams • GDSC Hacks 2025',
  },
]
