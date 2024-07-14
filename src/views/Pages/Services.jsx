import {React,useState} from 'react'

import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const servicesData = [
  {
    id: '1',
    title: 'Web Back-End',
    description: 'Web back-end development involves creating the server-side components of web applications, focusing on functionality, security, and integration. Here are more details :',
    desc2: [
      ' Business Logic Implementation: Design and implement the core logic and algorithms that drive the application\'s functionality and business processes. This includes handling user authentication, authorization, and data validation.',
      ' Database Management: Design and optimize database schemas to efficiently store and retrieve data. Implement CRUD (Create, Read, Update, Delete) operations and ensure data integrity and security through proper database management practices.',
      ' API Integration: Integrate with external APIs and third-party services to extend the application\'s functionality. This involves understanding API documentation, handling authentication mechanisms, and processing API responses securely.',
      ' Security Considerations: Implement security measures such as encryption, data validation, and protection against common web vulnerabilities (e.g., SQL injection, XSS) to safeguard sensitive data and ensure compliance with security standards.',
      ' Scalability and Performance: Architect the back-end infrastructure to handle scalability requirements, ensuring the application can accommodate growth in user base and traffic. Optimize performance through caching mechanisms, database indexing, and efficient code practices.',
      ' Technology Stack: Utilize appropriate technologies and frameworks such as Node.js, Python (with frameworks like Django or Flask), Ruby on Rails, or Java Spring Boot, based on project requirements and scalability needs.',
      ' Testing and Debugging: Conduct thorough testing of back-end functionalities, including unit testing, integration testing, and performance testing, to identify and fix issues early in the development process.',
      ' Documentation and Maintenance: Document the back-end architecture, APIs, and deployment processes for future reference and maintenance. Provide ongoing support and maintenance to ensure the application operates smoothly post-launch.',
    ],   
    image: '/path/to/your/image.jpg',
  },
  {
    id: '2',
    title: 'Web Front-End',
    description: 'Creation of interactive and responsive user interfaces using modern technologies , delivering a smooth and engaging user experience. Here are more details :',
    image: '/path/to/your/image2.jpg',
    desc2:[
' User Interface (UI) Design: Craft visually appealing and intuitive interfaces that enhance user experience. This includes layout design, color schemes, typography, and interactive elements.',
' Responsive Design: Ensure the application looks and functions well on a variety of devices and screen sizes, from desktops to mobile phones, using techniques like media queries and flexible grid systems.',
' Component-Based Development: Utilize frameworks like React or Vue.js to build reusable and modular components, improving code maintainability and scalability.',
' State Management: Implement efficient state management solutions such as Redux  to handle the application’s state, ensuring smooth data flow and consistency across the application.',
' Performance Optimization: Optimize front-end performance through techniques like lazy loading, code splitting, and image optimization to ensure fast loading times and a seamless user experience.',
' Cross-Browser Compatibility: Ensure the application works consistently across different browsers by addressing compatibility issues and using appropriate polyfills and fallbacks.',
' User Interaction: Implement interactive elements such as animations, transitions, and event handling to provide a dynamic and engaging user experience.',
' Accessibility: Adhere to accessibility standards to ensure the application is usable by people with disabilities, incorporating features like screen reader compatibility, keyboard navigation, and sufficient color contrast.',
' Testing and Debugging: Conduct thorough testing of front-end components, including unit testing, integration testing, and end-to-end testing, to identify and fix issues early in the development process.',
' Documentation and Maintenance: Document the front-end architecture, components, and development processes for future reference and maintenance. Provide ongoing support and updates to ensure the application remains up-to-date and functional post-launch.',

    ]
  },
  {
    id: '3',
    title: 'Desktop Applications',
    description: 'Development of custom desktop applications to automate and optimize business processes, including inventory management, invoicing, and client tracking, using technologies like Python. Here are more details :',
    image: '/path/to/your/image2.jpg',
    desc2:[

'       Custom Application Development: Design and develop tailored desktop applications that meet specific business requirements. This includes understanding client needs, creating a detailed project plan, and delivering a custom solution.',
'       Business Process Automation: Automate repetitive and time-consuming tasks to increase efficiency and productivity. Examples include inventory management systems, invoicing software, and client tracking tools.',      
'       User-Friendly Interfaces: Create intuitive and easy-to-use interfaces that enhance user experience and minimize the learning curve. This involves thoughtful UI/UX design to ensure smooth navigation and functionality.',      
'       Integration with Existing Systems: Seamlessly integrate the desktop application with existing systems and databases to ensure data consistency and streamline workflows. ',      
'       Data Management and Security: Implement robust data management practices to ensure data integrity, security, and accessibility. This includes secure data storage, encryption, and compliance with data protection regulations.',      
'       Performance Optimization: Optimize the performance of desktop applications to ensure they run smoothly and efficiently. This includes optimizing code, managing resources effectively, and conducting performance testing.',      
'       Cross-Platform Compatibility: Develop applications that work across different operating systems Windows, to cater to a broader audience and ensure versatility.',      
'       Technology Stack: Utilize appropriate technologies and frameworks based on project requirements. This includes using Python depending on the application’s complexity and performance needs.',      
'       Testing and Quality Assurance: Conduct thorough testing to identify and fix bugs, ensuring the application is reliable and stable. This includes unit testing, integration testing, and user acceptance testing.',      
'       Documentation and Support: Provide comprehensive documentation for the application, including user manuals, technical specifications, and maintenance guides. Offer ongoing support and updates to ensure the application remains functional and up-to-date.',      
      
    ]
  },
  {
    id: '4',
    title: 'Database Management',
    description: 'Design, optimization, and maintenance of relational and non-relational databases, ensuring data integrity, performance, and security for web and desktop applications. With expertise in SQL and MongoDB, here are more details :',
    image: '/path/to/your/image2.jpg',
    desc2:[

'      Database Design and Modeling: Create comprehensive and efficient database schemas that reflect the structure and requirements of your application. This includes entity-relationship modeling and designing tables, collections, indexes, and relationships.',
'      SQL Database Management: Utilize SQL-based databases like MySQL, PostgreSQL, and Microsoft SQL Server for robust relational database solutions. Implement advanced SQL queries, stored procedures, triggers, and views to manage data effectively.',      
'      NoSQL Database Management: Leverage MongoDB for flexible and scalable non-relational database solutions. Design document-based databases, optimize schema designs, and use aggregation pipelines for complex data processing.',      
'      Data Integrity and Validation: Ensure data integrity through constraints, normalization, and validation rules. Implement checks and balances to maintain data accuracy and consistency across the database.',      
'       Backup and Recovery: Establish comprehensive backup and recovery plans to protect data from loss and corruption. Implement automated backup schedules, disaster recovery strategies, and regular testing of backup systems.',      
'       Data Migration: Manage data migration projects efficiently, ensuring smooth transitions between different database systems or versions. This includes data extraction, transformation, and loading processes.',      
'       Maintenance and Monitoring: Provide ongoing maintenance and monitoring to ensure database health and performance. Set up automated alerts, perform regular updates and patches, and conduct routine maintenance tasks.',      
'       Documentation and Support: Offer comprehensive documentation for database structures, procedures, and maintenance practices. Provide continuous support and troubleshooting to address any database-related issues promptly.',      
            
    ]
  },
  {
    id: '5',
    title: 'Digital Marketing',
    description: 'Develop and manage digital strategies to boost online visibility and engagement. We run ads on Google Ads and Facebook Ads to increase qualified traffic and conversions. Our approach includes creating SEO-optimized blogs, videos, and infographics to engage your audience effectively. Here are more details:',
    image: '/path/to/your/image2.jpg',
    desc2:[

'      E-Commerce Website Development: Design and develop user-friendly and high-converting e-commerce websites. This includes setting up secure payment gateways, creating intuitive product catalogs, and ensuring a seamless shopping experience for customers.',
'      Product Research and Trend Analysis: Identify trending products and market demands to optimize your product offerings. Conduct thorough market research and competitor analysis to stay ahead of trends and cater to customer needs effectively.',      
'      Video Ad Creation: Produce high-quality and engaging video advertisements tailored to your target audience. This includes scriptwriting, storyboarding, filming, and editing to create compelling video content that drives engagement and conversions.',      
'      Ad Campaign Management: Develop and manage advertising campaigns on platforms like Google Ads and Facebook Ads. This involves keyword research, audience targeting, ad creation, bid management, and continuous optimization to maximize ROI.',      
'      SEO (Search Engine Optimization): Implement on-page and off-page SEO strategies to improve website visibility in search engine results. This includes keyword optimization, content creation, link building, and technical SEO to drive organic traffic.',      
'      Content Marketing: Create and distribute high-quality content, such as blog posts, videos, infographics, and social media updates, to attract and engage your audience. Focus on delivering valuable and relevant content that resonates with your target market.',      
'      Social Media Management: Manage your social media presence across various platforms, including Facebook, Instagram, Twitter, and LinkedIn. Create and schedule posts, engage with followers, and use analytics to refine strategies and boost engagement.',      
'      Email Marketing: Design and execute effective email marketing campaigns to nurture leads and convert prospects. Use segmentation and personalization techniques to deliver targeted messages that resonate with your audience.',      
'      Analytics and Reporting: Monitor and analyze the performance of digital marketing campaigns using tools like Google Analytics and social media insights. Provide detailed reports and actionable insights to help refine strategies and achieve marketing goals.',      
    ]
  },
  {
    id: '6',
    title: 'Design && Montage',
    description: 'Creation of complete visual identities including logos, color palettes, and typography, as well as communication materials such as brochures, business cards, and banners, using tools like Adobe Photoshop and Illustrator. Here are more details :',
    image: '/path/to/your/image2.jpg',
    desc2:[

'      Logo Design: Develop unique and memorable logos that represent your brand identity. This includes brainstorming concepts, creating multiple design iterations, and refining the final logo to ensure it aligns with your brand values and aesthetics.',
'      Business Card Design: Design professional and eye-catching business cards that make a lasting impression. Focus on creating a layout that effectively communicates your brand information and contact details, using high-quality materials and finishes.',      
'      T-Shirt Design: Create custom T-shirt designs for promotional events, merchandise, or corporate apparel. This includes conceptualizing creative graphics, typography, and artwork that resonate with your brand and audience.',      
'      Brochure and Flyer Design: Design informative and visually appealing brochures and flyers for marketing campaigns, product launches, and events. Ensure the layout is easy to read, engaging, and effectively conveys your message.',      
'      Banner Design: Create attention-grabbing banners for online and offline use, including website banners, social media covers, and physical banners for events. Use striking visuals and compelling copy to drive engagement and conversions.',      
'      Color Palette and Typography: Develop cohesive color palettes and typography guidelines that reflect your brand identity. Ensure consistency across all design materials to create a unified and professional appearance.',      
'      Video Editing and Montage: Produce high-quality video content for marketing, training, or promotional purposes. This includes editing raw footage, adding transitions, effects, music, and voiceovers to create engaging and polished videos.',      
'      Social Media Graphics: Design custom graphics for social media platforms, including post templates, stories, and advertisements. Tailor designs to each platform’s specifications and ensure they align with your brand’s visual identity.',      
'      Presentation Design: Create visually appealing and professional presentations for business meetings, conferences, and pitches. Focus on clear communication, engaging visuals, and consistent branding throughout the slides.',      
'      Custom Illustration: Provide bespoke illustration services for various needs, including editorial illustrations, infographics, and character design. Use illustrations to add a unique and creative touch to your brand materials.',      
'      Packaging Design: Design attractive and functional packaging for your products. Ensure the packaging not only protects the product but also enhances its visual appeal and aligns with your brand identity.',      
'      Print and Digital Advertising: Design impactful print and digital ads for magazines, newspapers, websites, and social media. Create compelling visuals and persuasive copy to drive engagement and conversions.',      
'      Brand Guidelines: Develop comprehensive brand guidelines that outline the proper usage of your visual identity elements. This includes logo usage, color schemes, typography, and design principles to ensure consistency across all materials. ',
   ]  
  },
  {
    id: '7',
    title: 'Training and Workshops',
    description: 'Organization of training sessions and workshops on technical and digital marketing topics, providing personalized educational materials and ongoing support to ensure learning and application of best practices in the field. Here are more details :',
    image: '/path/to/your/image2.jpg',
    desc2:[

'      Technical Training: Conduct in-depth training sessions on various technical topics such as web development, database management, and software development. Cover essential tools and technologies, best practices, and hands-on coding exercises to enhance participants skills.',
'      Digital Marketing Workshops: Offer comprehensive workshops on digital marketing strategies, including SEO, social media marketing, content marketing, and email marketing. Provide practical insights and real-world examples to help participants effectively implement these strategies.',      
'      Customized Learning Programs: Design personalized training programs tailored to the specific needs of individuals or organizations. Assess the skill levels and goals of participants to create customized curricula that address their unique requirements.',      
'      Educational Materials: Develop comprehensive educational materials, including presentations, guides, manuals, and workbooks. Ensure these materials are easy to understand, visually engaging, and provide step-by-step instructions for implementing best practices.',      
'      Industry Best Practices: Teach industry best practices and standards in both technical and digital marketing fields. Provide insights into the latest trends, tools, and methodologies to keep participants up-to-date and competitive in their respective areas.',      
'      Ongoing Support and Mentorship: Offer ongoing support and mentorship to participants after the training sessions and workshops. Provide access to additional resources, answer questions, and offer guidance to ensure successful implementation of the learned concepts.',      
'      Workshops for Beginners and Advanced Learners: Cater to different skill levels by offering workshops for both beginners and advanced learners. Ensure that each session is appropriately challenging and valuable for participants at all stages of their learning journey.',      
'      Case Studies and Real-World Examples: Incorporate case studies and real-world examples into the training sessions to provide practical insights. We show participants how to apply the concepts and strategies in various business scenarios.',      
          ]
  },
  {
    id: '8',
    title: 'Technology consulting',
    description: 'Strategic advice on choosing technologies and technical solutions, evaluating specific project needs, and assisting in the implementation and optimization of processes to ensure technical project success. Here are more details :',
    image: '/path/to/your/image2.jpg',
    desc2:[

'      Technology Assessment: Conduct a thorough analysis of the client\'s current technology landscape, including software, hardware, and IT infrastructure. Identify strengths, weaknesses, and areas for improvement to align technology with business goals.',
'      Strategic Planning: Develop a comprehensive technology strategy that supports the client\'s long-term objectives. This includes creating roadmaps for technology adoption, scaling, and modernization to stay competitive in the market.',      
'      Technology Selection: Provide expert advice on selecting the most suitable technologies and tools based on the project\'s requirements and budget. Evaluate various options, conduct cost-benefit analyses, and recommend the best solutions to meet the client\'s needs.',      
'      Implementation Support: Assist in the implementation of new technologies and solutions, ensuring a smooth transition and minimal disruption to existing operations. Provide guidance on project management, system integration, and change management to ensure successful adoption.',      
'      Process Optimization: Analyze and optimize business processes to improve efficiency, reduce costs, and enhance performance. Identify bottlenecks and inefficiencies, and recommend process improvements and automation opportunities.',      
'      Vendor Management: Assist in managing relationships with technology vendors and service providers. Negotiate contracts, monitor service levels, and ensure that vendors deliver on their commitments and meet the client\'s expectations.',      
'      Training and Knowledge Transfer: Provide training sessions and workshops to upskill the client\'s team on new technologies and best practices. Ensure knowledge transfer to internal teams to maintain and support the implemented solutions.',      
'      Digital Transformation: Guide clients through digital transformation initiatives to leverage emerging technologies such as artificial intelligence, machine learning, blockchain, and IoT. Help them stay ahead of the curve and innovate in their industry.',      
'      Cost Optimization: Analyze technology expenditures and identify cost-saving opportunities. Optimize resource allocation, reduce unnecessary spending, and maximize the return on investment for technology initiatives.',      
'      Custom Solutions Development: Design and develop custom technology solutions tailored to the client\'s unique business needs. This includes software development, application customization, and system integration to address specific challenges and goals.',      
                ]
  }, 
  {
    id: '9',
    title: 'Online ads campaigns',
    description: 'Creation and management of targeted advertising campaigns on platforms such as Google Ads and Facebook Ads, aimed at increasing visibility, traffic, and conversions through continuous analysis and optimization. Here are more details :',
    image: '/path/to/your/image2.jpg',
    desc2:[

'      Target Audience Analysis: Conduct thorough research to identify and understand the target audience. This includes analyzing demographics, interests, behaviors, and online activity to ensure ads reach the most relevant users.',
'      Campaign Strategy Development: Develop a comprehensive campaign strategy tailored to the client\'s business goals and target audience. Define objectives, key performance indicators (KPIs), and the overall approach for achieving desired outcomes.',      
'      Keyword Research and Selection: Perform extensive keyword research to identify high-performing keywords and phrases. Select the most relevant and effective keywords to optimize ad placements and improve search engine rankings.',      
'      Ad Creation and Design: Craft compelling ad copy and design visually appealing ad creatives that resonate with the target audience. Ensure that ads are engaging, informative, and aligned with the client\'s brand identity.',      
'      Budget Management: Allocate and manage the campaign budget effectively to maximize ROI. Monitor spending, adjust bids, and optimize ad placements to ensure the best use of resources and achieve cost-efficient results.',      
'      A/B Testing: Conduct A/B testing to compare different ad variations and identify the most effective versions. Test different headlines, images, ad copy, and CTAs to optimize performance and improve conversion rates.',      
'      Performance Tracking and Analytics: Utilize advanced analytics tools to track campaign performance and measure key metrics such as impressions, clicks, conversions, and ROI. Analyze data to gain insights and make data-driven decisions.',      
'      Continuous Optimization: Continuously monitor and optimize ad campaigns to improve performance and achieve better results. Adjust targeting, bids, keywords, and ad creatives based on performance data and market trends.',      
'      Remarketing Campaigns: Implement remarketing strategies to re-engage users who have previously interacted with the client\'s website or ads. Create tailored ads to remind potential customers and encourage them to complete desired actions.',      
'      Audience Segmentation: Segment the target audience based on various criteria such as demographics, behavior, and engagement levels. Create personalized ad campaigns for different audience segments to enhance relevance and effectiveness.',      
'      Ad Extensions: Utilize ad extensions to provide additional information and enhance the visibility of ads. Implement various extensions such as site links, callouts, and location extensions to improve ad performance and user engagement.',      
'      Competitor Analysis: Conduct competitor analysis to identify strengths and weaknesses in the client\'s industry. Gain insights into competitors\' strategies and leverage this information to create more effective ad campaigns.',      
'      Reporting and Insights: Provide detailed reports on campaign performance, highlighting key metrics and insights. Offer actionable recommendations based on data analysis to help clients make informed decisions and improve future campaigns.',      
               
]
  },
];



function Services() {
  const downloadPDF = () => {
    alert('ok')
    console.log('okoko');
        const pdfUrl = '/Mohamed_Abouljid.pdf'; // Assurez-vous que le chemin du fichier est correct

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Mohamed_Abouljid.pdf'); // Nom du fichier à télécharger

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  const { id } = useParams();
  const service = servicesData.find(service => service.id === id);

  if (!service) {
    return <div className="text-center text-xl font-bold mt-10">Service not found</div>;
  }

  // Render desc2 as a list of points
  const desc2List = service.desc2?.map((point, index) => (
    <li key={index} className="mb-4 text-sm">
      {point}
    </li>
  ));

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg('Thank you for your message');

    // Clear message after 3 seconds
    setTimeout(() => {
      setMsg('');
    }, 3000);

    // Reset form fields
    setFormData({
      Name: '',
      Email: '',
      Phone: '',
      Message: ''
    });
  }


  return (
    <>
    <div className=" footer2">
      <div className="container mx-auto py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="lg:col-span-3">
            <div className="text-white rounded-lg shadow-lg shadow-cyan-600 p-8">
              <h1 className="text-3xl font-bold text-cyan-600 mb-4 text-center">
                {service.title}
              </h1>
              <p className="text-white  sm:text-sm text-center mb-4">
                {service.description}
              </p>
              {desc2List && (
                <ul className="text-white sm:text-sm  list-disc pl-4">
                  {desc2List}
                </ul>
              )}
              <div className="mt-6 flex justify-center">
                <Link
                  to="/"
                  className="px-4 py-2 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            {/* Optionally add an image or other content here */}
{/*             <img src={service.image} alt={service.title} className="rounded-lg shadow-lg" />
 */}          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-cyan-400 mb-4 text-center">
        Other Services
      </h1>
      <div className="w-full hidden md:block sm:hidden mt-8 container p-4">
        <Slider {...settings}>
          {servicesData.map(service => (
            <div key={service.id} className=" service-box bg-gray-800 p-5 m-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-sm mb-4">{service.description.substring(0, 100)}...</p>
              <Link to={`/services/${service.id}`} className="text-cyan-500 text-sm">
                Learn More
              </Link>
            </div>

            
          ))}
        </Slider>
      </div>

      <div className="w-full block md:hidden sm:block mt-8 container p-4">
        <Slider {...settings2}>
          {servicesData.map(service => (
            <div key={service.id} className=" service-box bg-gray-800 p-5 m-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-sm mb-4">{service.description.substring(0, 100)}...</p>
              <Link to={`/services/${service.id}`} className="text-cyan-500 text-sm">
                Learn More
              </Link>
            </div>

            
          ))}
        </Slider>
      </div>







    </div>
    {/* /*         <!-- My work-->
 */}        
 
 <div id="portfolio" className="footer2 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-cyan-400  mb-8">My work</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-10 mt-12">
          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/GS/GS.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer  items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl font-medium md:text-4xl mt-2 md:mt-3">Stock Management</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">This app for Tiznit's Ministry optimizes stock, supplier orders, employee management,and product tracking with centralized resource management and ...</p>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">This app for Tiznit's Ministry optimizes stock, supplier orders, employee management,and...</p>

              <Link to="/works/1" className="relative md:bottom-0 bottom-2 bg-white text-cyan-400   rounded-full flex items-center justify-center">
                <svg className="md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/Abou/page Accueil.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl font-medium md:text-4xl mt-3 md:mt-3">Site AbouReserve</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">This web app simplifies restaurant orders and reservations, boosting efficiency and  customer experience...</p>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">This web app simplifies restaurant orders and reservations, boosting efficiency and...</p>

              <Link to="/works/2" className="relative -top-2 md:top-2 bg-white text-cyan-400 md:text-xl md:w-14 md:h-14  rounded-full flex items-center justify-center">
                <svg className=" md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/users/accueil2.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl font-medium md:text-4xl mt-2 md:mt-3">Student Connect</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">Student Connect is an online platform for students to share information, collaborate, and...</p>

              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">Student Connect is an online platform for students to share information, collaborate, and  stay updated on academic resources...</p>
              <Link to="/works/3" className="relative -top-2 md:top-2 bg-white text-cyan-400 md:text-xl w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/APPGS/Application Desktop pour Gérer les Commandes d'un Restaurant - Copie_page-0004.jpg" alt="" className="w-900 h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl md:text-4xl font-medium mt-2 md:mt-3">Commands Management</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">The Commands Management app revolutionizes restaurant operations with a user-friendly interface for order management, dedicated kitchen and...</p>

              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">The Commands Management app revolutionizes restaurant operations with a user-friendly interface for order management, dedicated kitchen and admin panels for efficient tracking and control...</p>
              <Link to="/works/4" className="relative -top-2 md:top-2 bg-white text-cyan-400 md:text-xl md:w-14 md:h-14 h-12 w-8 rounded-full flex items-center justify-center">
                <svg className="md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10"> {/* Replace with the appropriate margin class */}
  <Link
    to="/work"
    className="flex items-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-xl px-6 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md"
  >
    See more
  </Link>
</div>
      </div>
    </div>

     
{/* <!--  contact-->
 */}
<div id="contact" className="py-12 foot">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="contact-left  flex-basis:35%">
            <h1 className="sub-title md:text-6xl font-bold mb-10 mt-6">Contact Me</h1>
            <a href="mailto:abouljid.mohamed@gmail.com" className="mb-4 flex items-center text-xl">
  <i className="fas fa-paper-plane text-cyan-400"></i><span className="text-white px-3"> abouljid.mohamed@gmail.com</span>
</a>            <a href="tel:+212671540452" className="mb-4 flex items-center text-xl">
  <i className="fas fa-phone-square-alt text-cyan-400"></i> <span className="text-white px-3">+212671540452</span>
</a>
           
            <div className="hidden  md:block sm:hidden">
            <div className="social-icons  flex mt-15 mb-5">
            <Link to="https://github.com/ABOULJID22" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/in/mohamedabouljid" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
              </Link>
             
              
              <Link to="https://www.instagram.com/aboulcode" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="https://wa.me/qr/QMLMCS62KO53O1" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
              <svg class="w-10 h-10 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
</svg>

              </Link>
            </div>
            <button onClick={downloadPDF} className="btn2 inline-block mt-8 px-12 py-2 rounded-md border    border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">
            <span className="p-10 text-xl mt-10">Download CV</span></button> 
          
                  </div>
                  </div>
          <div className="contact-right flex-basis:60%">
          <form name="submit-to-file" onSubmit={handleSubmit} action="save_form_data.php" method="post" className="form w-full mt-8 md:mt-0">
      <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Your Name" required className="w-full p-4 mb-4 text-white rounded-md outline-none" />
      <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Your Email" required className="w-full p-4 mb-4 text-white rounded-md outline-none" />
      <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange} placeholder="Your Number" required className="w-full p-4 mb-4 text-white rounded-md outline-none" />
      <textarea name="Message" value={formData.Message} onChange={handleChange} rows="6" placeholder="Your Message" required className="w-full p-4 mb-4 text-white rounded-md outline-none"></textarea>
      
      <button type="submit" className="flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-xl px-6 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">
        Submit
      </button>
      </form>
      <div className="contact-left block  sm:block md:hidden">
            <div className="social-icons  flex mt-15 mb-5">
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
              </Link>
            </div>
            <button onClick={downloadPDF} className="btn2 inline-block mt-8 px-12 py-2 rounded-md border    border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">
            <span className="p-10 text-xl mt-10">Download CV</span></button> 
      </div>
                  

      
      {msg && (
        <p className="bg-gray-100 text-gray-800 rounded-md p-4 mt-4">{msg}</p>
      )}
    
          </div>
        </div>
      </div>

</div>

    
    </>
  );
}

export default Services;
