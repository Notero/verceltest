export type Highlight = {
  title: string;
  body: string;
};

export type LeaderProfile = {
  slug: string;
  name: string;
  title: string;
  region?: string;
  photo?: string;
  intro: string[];
  highlights: Highlight[];
  closing?: string;
};

export const LEADER_PROFILES: LeaderProfile[] = [
  {
    slug: "fattis-mann",
    name: "Fattis Mann",
    title: "Chief Executive Officer",
    photo: "/images/team/fattis.webp",
    intro: [
      "With over 25 years of distinguished experience in the field of information security and risk management, Fattis Mann is a recognized leader and visionary. Joining Intrastack Solutions as our Chief Executive Officer (CEO), Fattis brings a wealth of expertise and strategic insight, poised to drive our company towards unprecedented growth and success.",
      "Fattis's professional journey includes significant contributions to the development and implementation of robust security frameworks across various industries. His extensive career features leadership roles at prominent institutions such as Deloitte, Texas Instruments, EDS, and notably, a nine-year tenure at SAIC. At SAIC, Fattis played a pivotal role in enhancing security measures and managing risk, solidifying his reputation as a trusted expert in the cybersecurity domain.",
    ],
    highlights: [
      {
        title: "CISO leadership",
        body: "Throughout his career, Fattis has primarily focused on CISO roles, where he has overseen the development and execution of comprehensive security strategies. His work has been instrumental in protecting organizations from evolving threats and ensuring the resilience of critical information systems.",
      },
      {
        title: "Certified cybersecurity veteran",
        body: "Fattis holds several esteemed certifications, including CISSP (Certified Information Systems Security Professional), CRISC (Certified in Risk and Information Systems Control), CDPSE (Certified Data Privacy Solutions Engineer), and CGRC (Certified in Governance, Risk, and Compliance). These credentials underscore his comprehensive understanding of safeguarding information assets and ensuring regulatory compliance.",
      },
      {
        title: "Mentor & change agent",
        body: "In addition to his technical acumen, Fattis is celebrated for his leadership and mentorship abilities. He has a proven track record of building teams, fostering a culture of security awareness, and driving organizational change. His strategic vision and pragmatic approach have consistently delivered results, enhancing clients' confidence in their security posture.",
      },
      {
        title: "Business growth",
        body: "As the CEO of Intrastack Solutions, Fattis is dedicated to expanding our presence in the federal government sector and beyond. His leadership steers the company toward innovative solutions and new market opportunities, and his thought leadership in industry forums positions him as a trusted advisor for navigating the evolving threat landscape.",
      },
    ],
    closing:
      "Under Fattis's leadership, Intrastack Solutions is poised for significant growth and innovation. His vision and expertise ensure that we stay ahead in a rapidly changing digital world, providing our clients with the confidence they need to thrive in today's interconnected environment.",
  },
  {
    slug: "praveen-madabhushi",
    name: "Praveen Prahlad Madabhushi",
    title: "Chief Operating Officer",
    photo: "/images/team/praveen-04.webp",
    intro: [
      "As the newly appointed Chief Operating Officer of Intrastack Solutions, Praveen leads the company into a new era of digital innovation. With over two decades of hands-on experience in Cloud Technologies, Generative AI, Machine Learning, Business Intelligence, Data Analytics, and Data Engineering, he brings a wealth of knowledge and a proven track record of driving transformative change.",
      "At Intrastack Solutions, we're not just adapting to the digital future — we're shaping it. Praveen's Cloud Transformation practice is the culmination of years of expertise, designed to catapult organizations into a new realm of operational excellence and innovation.",
    ],
    highlights: [
      {
        title: "Pioneering digital transformation",
        body: "Praveen pairs hands-on engineering depth with executive strategy, guiding clients through cloud, AI, and data programs that translate directly into business outcomes.",
      },
      {
        title: "Revolutionizing business through cloud",
        body: "His Cloud Transformation service is built on years of expertise — catapulting organizations into a new realm of operational excellence, automation, and innovation.",
      },
    ],
  },
  {
    slug: "trung-huynh",
    name: "Trung Huynh",
    title: "Executive Advisor",
    region: "Vietnam",
    photo: "/images/team/trunghuynh.webp",
    intro: [
      "Trung Huynh is a seasoned executive with extensive expertise in strategic application development, cloud and DevOps practices. As a member of the Executive Advisory Board at Intrastack Solutions, Trung brings a wealth of experience and strategic insight, guiding our organization towards technological excellence and operational efficiency.",
      "With a distinguished career spanning over two decades, Trung has held significant leadership roles in various renowned organizations. His expertise in cloud and DevOps practices has been pivotal in driving digital transformation and optimizing technology strategies for numerous enterprises. Trung's deep understanding of application development and his ability to implement effective technology solutions have enabled businesses to enhance their operational efficiency, scalability, and security.",
    ],
    highlights: [
      {
        title: "Vietnam Delivery Center",
        body: "Trung currently leads the Delivery Center team in Vietnam for Intrastack Solutions. This team specializes in delivering cutting-edge services in application development, cloud solutions, and DevOps practices. Under his guidance, the Vietnam Delivery Center has become a hub of innovation and excellence, delivering top-notch solutions and services to clients worldwide.",
      },
      {
        title: "Sales execution & partnerships",
        body: "Trung's role extends to sales account execution, managing RFPs, and developing comprehensive statements of work. His ability to build and maintain strong business relationships has been instrumental in securing strategic partnerships and driving business growth. His strategic vision and hands-on approach have consistently led to the successful execution of large-scale technology projects.",
      },
    ],
  },
  {
    slug: "cuong-truong",
    name: "Cuong Truong",
    title: "Executive Advisor",
    region: "Japan",
    photo: "/images/team/cuong.webp",
    intro: [
      "Cuong Truong is a highly skilled technology leader with a robust background in mobile and application development. As the Executive Advisor at Intrastack Solutions, Cuong brings a wealth of experience and strategic insight to our organization, overseeing the operations of our Japan Delivery Center.",
      "With over 15 years of experience in the technology industry, Cuong has established himself as a key figure in mobile and application development. His expertise encompasses leading complex projects and managing development teams to deliver high-quality, innovative solutions. At Intrastack Solutions, Cuong is responsible for directing the Japan Delivery Center, which specializes in servicing clients in the Japan and European markets.",
    ],
    highlights: [
      {
        title: "Expert & professional",
        body: "Cuong's role involves managing key business relationships, overseeing the preparation and execution of RFPs, and developing comprehensive statements of work. His ability to build and maintain strong client relationships is crucial for securing and retaining high-value contracts and partnerships.",
      },
      {
        title: "Mentor & team builder",
        body: "Cuong is dedicated to mentoring and developing his team. His leadership style emphasizes collaboration, continuous learning, and professional growth, fostering a supportive and high-performance work environment.",
      },
      {
        title: "Trusted delivery",
        body: "Cuong's accomplishments in mobile and application services are marked by his ability to drive innovation, manage cross-functional teams, and deliver solutions that exceed client expectations. His strategic vision and hands-on approach to project management are key factors in the success of our Japan Delivery Center.",
      },
    ],
    closing:
      "As the Executive Advisor, Cuong plays a pivotal role in supporting Intrastack Solutions' mission to deliver cutting-edge mobile and application solutions. His leadership and expertise in handling complex projects, managing business relationships, and overseeing development teams are essential to our continued success and growth.",
  },
  {
    slug: "hans-fleurival",
    name: "Hans Fleurival",
    title: "Executive Advisor",
    region: "United States",
    photo: "/images/team/hans.webp",
    intro: [
      "Hans Fleurival is a dynamic and results-driven executive with extensive expertise in sales, account execution, and business partnerships. As a member of the Executive Advisory Board at Intrastack Solutions, Hans brings a wealth of experience and strategic insight, playing a crucial role in driving our organization's growth and success.",
      "With a career spanning over two decades, Hans has held significant leadership positions in renowned organizations, consistently delivering exceptional results in sales and business development. His strategic approach to account execution and his ability to forge strong business partnerships have been instrumental in driving revenue growth and expanding market presence.",
    ],
    highlights: [
      {
        title: "Sales strategy & account execution",
        body: "Hans's expertise lies in his ability to develop and implement effective sales strategies that align with business objectives. His deep understanding of market dynamics, coupled with his exceptional negotiation and relationship-building skills, has enabled him to secure and manage key accounts successfully.",
      },
      {
        title: "Building high-performing teams",
        body: "Throughout his career, Hans has demonstrated a keen ability to build and lead high-performing sales teams. His leadership style fosters a culture of excellence, collaboration, and innovation, empowering teams to achieve and exceed their targets.",
      },
      {
        title: "Strategic vision",
        body: "Hans is known for his strategic vision and business acumen. He has a proven track record of identifying and capitalizing on new market opportunities, driving business growth through strategic partnerships and alliances.",
      },
    ],
    closing:
      "As a member of the Executive Advisory Board at Intrastack Solutions, Hans provides invaluable guidance on our sales strategies and business partnerships. His insights and expertise are critical to our mission of delivering innovative technology solutions and driving business success for our clients.",
  },
  {
    slug: "trung-tran",
    name: "Trung Tran",
    title: "Director of DevOps & Automation",
    photo: "/images/team/trungtran.webp",
    intro: [
      "Trung Tran is a highly skilled and experienced technology leader, specializing in DevOps, automation, Kubernetes, cloud solutions, and application development. As the Director of DevOps & Automation at Intrastack Solutions, Trung brings over 15 years of senior technical leadership and a proven track record of delivering complex projects to our organization.",
      "Trung's expertise in DevOps and automation has been instrumental in driving efficiency and innovation within various technology environments. His deep knowledge of Kubernetes and cloud solutions has enabled organizations to enhance their scalability, reliability, and performance. His strategic vision and hands-on approach to technology implementation have consistently led to the successful execution of large-scale projects.",
      "Throughout his career, Trung has demonstrated exceptional leadership skills, building and leading high-performing teams of engineers. Currently, he leads the Delivery Center team in Vietnam for Intrastack Solutions. Under his guidance, the Vietnam Delivery Center has become a center of excellence, delivering top-notch DevOps and automation services to clients worldwide.",
    ],
    highlights: [
      {
        title: "Engineering leadership",
        body: "Trung's role involves not only technical oversight but also mentoring and developing engineering talent. His leadership style fosters a culture of collaboration, continuous learning, and innovation. His commitment to excellence and integrity ensures that his team consistently delivers outstanding results.",
      },
      {
        title: "Advanced automation",
        body: "As Director of DevOps & Automation, Trung is responsible for overseeing the development and implementation of advanced automation solutions. His expertise in Kubernetes and cloud technologies is critical to our mission of providing cutting-edge technology services.",
      },
    ],
  },
  {
    slug: "jimmy-nguyen",
    name: "Jimmy Nguyen",
    title: "Director of Operations",
    photo: "/images/team/jimmy.webp",
    intro: [
      "Jimmy Nguyen is a seasoned technology professional with over 20 years of experience in data center engineering and operations. As the Director of Operations at Intrastack Solutions, Jimmy leverages his extensive expertise in VMware, Citrix, and cloud technologies to ensure the seamless execution and management of our operational activities.",
      "Jimmy's career has been marked by his deep knowledge and hands-on experience in data center engineering. His proficiency in managing complex data center environments has enabled him to drive efficiency, reliability, and performance in various technology settings. His expertise spans across virtualization platforms like VMware and Citrix, where he has played a crucial role in implementing and optimizing these technologies to meet organizational needs.",
    ],
    highlights: [
      {
        title: "Daily operations",
        body: "In his role as Director of Operations, Jimmy oversees the daily operations of our data centers, ensuring that all systems run smoothly and effectively. His responsibilities include managing infrastructure, implementing best practices for data center management, and ensuring the integration and optimization of cloud technologies.",
      },
      {
        title: "Culture of excellence",
        body: "Known for his commitment to excellence and innovation, Jimmy fosters a culture of collaboration and continuous improvement within his team. His leadership style emphasizes precision, reliability, and a proactive approach to operational challenges.",
      },
      {
        title: "Cross-functional delivery",
        body: "Jimmy's leadership extends to coordinating with cross-functional teams to ensure that operational processes align with strategic goals. He is adept at managing complex technical projects, troubleshooting issues, and driving continuous improvement initiatives.",
      },
    ],
    closing:
      "As the Director of Operations, Jimmy Nguyen plays a critical role in supporting Intrastack Solutions' mission to deliver top-notch technology services and solutions. His extensive experience in data center engineering, virtualization technologies, and cloud operations is integral to the company's success and growth.",
  },
  {
    slug: "deepak-srivastava",
    name: "Deepak Srivastava",
    title: "Executive Advisor",
    region: "India",
    intro: [
      "Deepak Srivastava is a seasoned technology executive with extensive expertise in Azure cloud solutions and a proven track record of leading high-performance teams. As a member of the Executive Advisory Board at Intrastack Solutions, Deepak brings a wealth of experience and strategic insight, guiding our organization towards technological excellence and innovation.",
      "With a distinguished career spanning over two decades, Deepak has held significant leadership roles in various renowned organizations. His expertise in Azure cloud solutions has been pivotal in driving digital transformation and optimizing cloud strategies for numerous enterprises. Deepak's deep understanding of cloud architecture, migration, and management has enabled businesses to enhance their operational efficiency, scalability, and security.",
    ],
    highlights: [
      {
        title: "India Delivery Center",
        body: "Deepak oversees the India Delivery Center team for Intrastack Solutions. This team specializes in delivering cutting-edge services in mobile application development, cloud solutions, data analytics, and machine learning. Under his guidance, the India Delivery Center is poised to become a hub of innovation and excellence.",
      },
      {
        title: "Charismatic leader & mentor",
        body: "In addition to his technical prowess, Deepak is a charismatic leader and mentor. He is adept at fostering a culture of collaboration, continuous learning, and innovation. His leadership style is characterized by a commitment to excellence, integrity, and a relentless focus on delivering value to stakeholders.",
      },
      {
        title: "Aligned to business outcomes",
        body: "Deepak's career is marked by his ability to align technology initiatives with business goals, ensuring that technological advancements drive tangible business value. His strategic vision and hands-on approach have consistently led to the successful execution of large-scale cloud projects.",
      },
    ],
    closing:
      "As a member of the Executive Advisory Board at Intrastack Solutions, Deepak provides invaluable guidance on our technology strategy and cloud solutions. His expertise in Azure cloud solutions and his leadership of the India Delivery Center team are critical to our mission of delivering cutting-edge technology services and driving business success for our clients.",
  },
];

export const getLeaderBySlug = (slug: string): LeaderProfile | undefined =>
  LEADER_PROFILES.find((l) => l.slug === slug);

export const LEADER_SLUGS = new Set(LEADER_PROFILES.map((l) => l.slug));
