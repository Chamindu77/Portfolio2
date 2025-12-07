const projects = {
  "agentic-system": {
    title: "Agentic AI-Powered Workflow Automation System",
    category: "AI/ML",
    client: "Faculty of Engineering",
    projectDate: "2024 - Present", // INFERRED or leave empty if not known, using generic placeholder
    projectUrl: "#", // Placeholder
    technologies: "React, TS, FastAPI, Node.js, Spring Boot, LangChain, LangGraph, LLMs, MySQL, MongoDB, ChromaDB",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758338777/Screenshot_31_qis7ke.png"
    ],
    description: `
      <h2>Agentic AI-Powered Workflow Automation System</h2>
      <p>
        <strong>Overview:</strong> Developing a comprehensive multi-agent ecosystem (Guidance, Hall Booking, Planner) to streamline faculty operations, improving document accessibility and scheduling efficiency.
      </p>
      <p>
        <strong>Guidance Agent:</strong> AI-powered assistant utilizing Agentic RAG with web search integration and voice capabilities for efficient knowledge retrieval.
      </p>
      <p>
        <strong>Hall Booking Agent:</strong> Intelligent system featuring hybrid chat/manual booking interfaces and smart recommendation algorithms for optimal resource allocation.
      </p>
      <p>
        <strong>Planner Agent:</strong> Automated scheduling engine that generates conflict-free academic and exam timetables based on complex constraints like hall capacity and time slots.
      </p>
      <p>
        <strong>Deployment:</strong> Orchestrated secure deployment on Faculty VPS using Docker for containerization and GitHub Actions for automated CI/CD pipelines.
      </p>
    `
  },
  "prometheus-ai": {
    title: "PrometheusAI — Data Engine",
    category: "AI/ML",
    client: "Personal Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, Streamlit, FastAPI, Pandas, NumPy, LangChain, LLMs, Docker",
    images: [
      "assets/img/portfolio/product-1.jpg"
    ],
    description: `
      <h2>PrometheusAI — Data Engine</h2>
      <p>
        <strong>End-to-End Data Engine:</strong> Architected a robust platform for automated data cleaning, schema inference, and comprehensive Exploratory Data Analysis (EDA), capable of handling complex CSV datasets.
      </p>
      <p>
        <strong>Agentic Q&A Interface:</strong> Integrated a LangChain-compatible LLM agent to enable conversational data exploration, allowing users to query datasets and receive generated visualizations and insights in real-time.
      </p>
      <p>
        <strong>Automated Analysis:</strong> Implemented algorithms for health scoring, missing value imputation, and smart column analysis (cardinality, distribution), generating HTML/Markdown reports and JSON logs.
      </p>
      <p>
        <strong>Hybrid Architecture:</strong> Developed a dual-interface system featuring an interactive Streamlit UI for researchers and a scalable FastAPI backend for programmatic workflows.
      </p>
      <p>
        <strong>Deployment:</strong> Deployed the solution as containerized microservices using Docker, ensuring consistent execution environments for both the data processing engine and the user interface.
      </p>
    `
  },
  "sport-facility": {
    title: "Sport Facility Booking and Management System",
    category: "Software",
    client: "Client Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "React.js, TailwindCSS, Node.js, MySQL, Mongodb, AES, OAuth2.0, Azure DevOps",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758339592/c202d79f-d4a5-4f8e-b53d-a6fabaffbbae.png"
    ],
    description: `
      <h2>Sport Facility Booking and Management System</h2>
      <p>
        <strong>Overview:</strong> Developed a web application with role management for Players, Coaches, and Admins.
      </p>
      <p>
        <strong>Player Features:</strong> Built features for players including facility booking, QR-code-based booking confirmations via WhatsApp and email, coach reviews/ratings, and secure payment integration.
      </p>
      <p>
        <strong>Coach Module:</strong> Developed coach module allowing profile creation, session scheduling, approval/cancellation of player requests, equipment booking, and facility reservations.
      </p>
      <p>
        <strong>Admin Dashboard:</strong> Designed admin dashboard to manage users, coaches, facilities, inventory, and sessions.
      </p>
      <p>
        <strong>Impact:</strong> Applied strong skills in requirement analysis, system design, database management, and full-stack development to deliver a real-world, client-centric solution.
      </p>
    `
  },
  "colombo-bookfair": {
    title: "Colombo Bookfair Reservation Management System",
    category: "Software",
    client: "Client Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Node.js, Express, React.js, TypeScript, MySQL, Kafka, Docker, SendGrid, Stripe",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758339592/c202d79f-d4a5-4f8e-b53d-a6fabaffbbae.png"
    ],
    description: `
      <h2>Colombo Bookfair Reservation Management System</h2>
      <p>
        <strong>Overview:</strong> Developed a microservices-based platform for Colombo International Bookfair stall reservations, ensuring scalability, reliability, and seamless event management.
      </p>
      <p>
        <strong>Microservices Architecture:</strong> Built modular microservices for Users, Bookings, and Notifications, integrating Kafka for asynchronous event driven communication.
      </p>
      <p>
        <strong>Authentication & Security:</strong> Implemented secure JWT-based authentication with role-based access for attendees, organizers, and staff.
      </p>
      <p>
        <strong>Payments & Notifications:</strong> Integrated Stripe for secure payments, automated booking confirmations, and QR-code/email notifications.
      </p>
    `
  },
  "sales-customer-performance": {
    title: "Sales & Customer Performance Dashboards",
    category: "Data Science",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Tableau",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758819292/639c5aa0-6d96-4bff-9c24-b86ab48dd66e.png"
    ],
    description: `
      <h2>Sales & Customer Performance Dashboards</h2>
      <p>
        <strong>Overview:</strong> Built a pair of interactive dashboards — one for sales metrics and another for customer behavior — to provide stakeholders with actionable, data-driven insights into business performance.
      </p>
      <p>
        <strong>Sales Dashboard:</strong> Presents a comprehensive view of year-over-year sales performance, with KPIs (total sales, profits, quantity), monthly & weekly trend analysis, product sub-category comparisons, and profit performance across periods.
      </p>
      <p>
        <strong>Customer Dashboard:</strong> Provides insight into customer base and engagement: total customers, sales per customer, order volume, distribution of customer order frequency, and a “Top 10 customers by profit” ranking to highlight high-value users.
      </p>
      <p>
        <strong>Features:</strong> Dynamic drill-down and filtering by time period, product category/sub-category, and location (region/state/city). Historical data comparison, highlighted min/max data points, and easy visualization of trends.
      </p>
      <p>
        <strong>Purpose:</strong> Enables sales managers, marketing teams, and executives to monitor business health, spot trends, track customer loyalty and profitability, and support data-driven decision making.
      </p>
    `
  },
  "multiple-disease-prediction": {
    title: "Multiple Disease Prediction System",
    category: "AI/ML",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, Machine Learning, FastAPI, Streamlit, Docker, SwaggerUI, Google Colab, Heroku, Azure, HuggingFace, Ngrok",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1765125052/a79b7322-476d-4ec8-97c6-15144e4b57e6.png"
    ],
    description: `
      <h2>Multiple Disease Prediction System</h2>
      <p>
        <strong>Overview:</strong> A full-stack machine learning system capable of predicting multiple diseases (such as Diabetes, Heart Disease, and Parkinson’s) using trained ML models deployed across multiple platforms. This project demonstrates real-world MLOps by packaging, deploying, and scaling ML inference services using various deployment strategies.
      </p>
      <p>
        <strong>Features:</strong>
        <ul>
          <li><strong>Multi-Model Prediction Engine:</strong> Supports multiple disease prediction using pre-trained scikit-learn models.</li>
          <li><strong>API-Driven Architecture:</strong> FastAPI-based inference endpoints with schema validation and SwaggerUI documentation.</li>
          <li><strong>Multiple Deployment Pipelines:</strong> Implemented 7 different deployment methods to demonstrate versatility and production readiness.</li>
          <li><strong>Modular & Scalable:</strong> Clean separation of model logic, API routes, preprocessing, and UI components.</li>
        </ul>
      </p>
      <h3>Deployment Types (7 Variants)</h3>
      <p>
        <strong>1. FastAPI + SwaggerUI:</strong> Deployed the ML model as a fully documented REST API using FastAPI.
      </p>
      <p>
        <strong>2. Ngrok + Google Colab:</strong> Hosted the API inside Google Colab and exposed it securely over the internet using Ngrok.
      </p>
      <p>
        <strong>3. Heroku + FastAPI:</strong> Packaged and deployed the FastAPI service on Heroku for public access.
      </p>
      <p>
        <strong>4. Docker + Streamlit App:</strong> Containerized the Streamlit interface to serve a user-friendly prediction dashboard.
      </p>
      <p>
        <strong>5. Dockerized FastAPI:</strong> Built a production-ready Docker image for the FastAPI model-serving backend.
      </p>
      <p>
        <strong>6. Azure Deployment:</strong> Pushed the dockerized FastAPI API to Microsoft Azure to demonstrate cloud-scale deployment.
      </p>
      <p>
        <strong>7. HuggingFace + Docker:</strong> Deployed the Streamlit application on HuggingFace Spaces using a Docker container.
      </p>
    `
  },
  "online-crop-marketplace": {
    title: "Online Crop Marketplace and Delivery System",
    category: "Software",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "React.js, Node.js, Mongodb, JWT, bycript, Jira, GitHub",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758349148/1712687869147_di6ef9.jpg"
    ],
    description: `
      <h2>Online Crop Marketplace and Delivery System</h2>
      <p>
        <strong>Overview:</strong> A full-stack web platform designed to connect local farmers directly with consumers, enabling the sale and delivery of fresh, locally sourced crops. This system empowers small-scale producers by providing them with a digital marketplace, while offering consumers an easier, faster, and more reliable way to order fresh produce online.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>User Registration & Authentication:</strong> Secure login and account creation for consumers, farmers, and delivery personnel.
      </p>
      <p>
        <strong>Online Marketplace:</strong> Farmers can list their crops with product images, descriptions, pricing, and availability details. Consumers can browse all available products in a clean, organized interface.
      </p>
      <p>
        <strong>Shopping Cart & Checkout:</strong> Users can add crops to their cart, review selections, and complete purchases through a smooth checkout flow.
      </p>
      <p>
        <strong>Order Management:</strong> Users can view order history, reorder items, and track the live status of current orders.
      </p>
      <p>
        <strong>Delivery Module:</strong> Integrated delivery management system that assigns orders to delivery personnel and ensures timely delivery to customers.
      </p>
      <p>
        <strong>Admin Panel:</strong> A comprehensive admin dashboard for managing farmers, customers, delivery personnel, orders, product listings, and platform activities.
      </p>
    `
  },
  "resume-analyzer": {
    title: "Resume Analyzer using Gemini",
    category: "AI/ML",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "React.js, Gemini 1.5 Flash, FastAPI",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758509792/ec1ed592-0a17-41e1-8ae9-e19206b9422e.png"
    ],
    description: `
      <h2>Resume Analyzer using Gemini</h2>
      <p>
        <strong>Overview:</strong> A smart resume evaluation system that automatically analyzes and scores resumes based on content, structure, and keyword optimization. The tool empowers job seekers to improve their CVs by providing actionable feedback, highlighting strengths, identifying missing skills, and suggesting improvements tailored to target job descriptions.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>Resume Upload & Parsing:</strong> Users can upload resumes in multiple formats (PDF, DOCX) and have the content automatically parsed and structured for analysis.
      </p>
      <p>
        <strong>Automated Analysis & Scoring:</strong> Evaluates resumes on various metrics, including keyword relevance, skill alignment, formatting, and readability. Provides an overall match score for job-specific applications.
      </p>
      <p>
        <strong>Recommendations & Action Items:</strong> Generates actionable insights for improvement, such as missing skills, weak sections, and optimization tips for better impact.
      </p>
      <p>
        <strong>Interactive Web Interface:</strong> React.js front-end with a responsive design for an intuitive user experience, allowing users to view analysis results through charts, tables, and summarized feedback.
      </p>
      <p>
        <strong>FastAPI Backend:</strong> Handles resume processing, scoring, and feedback generation efficiently, integrating seamlessly with the Gemini AI model for intelligent evaluation.
      </p>
    `
  },
  "automate-machine-learning-model-training-web-application": {
    title: "Automate Machine Learning Model Training Web Application",
    category: "AI/ML",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, Streamlit, scikit-learn, XGBoost, Pandas, NumPy, Docker",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758610779/07dfdded-b82a-4c21-ba24-6bb561b9a4d9.png"
    ],
    description: `
      <h2>Automate Machine Learning Model Training Web Application</h2>
      <p>
        <strong>Overview:</strong> A no-code web application that allows users to effortlessly upload datasets, preprocess data, select machine learning models, train them, and evaluate results — all through an intuitive web interface. This system streamlines the end-to-end ML workflow, enabling non-technical users to build and deploy models without writing code.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>Dataset Management:</strong> Upload CSV or Excel files, preview data, and select target columns for model training.
      </p>
      <p>
        <strong>Data Preprocessing:</strong> Handle missing values (mean/mode imputation), apply feature scaling (StandardScaler/MinMaxScaler), and perform automatic one-hot encoding.
      </p>
      <p>
        <strong>Model Selection:</strong> Choose from Logistic Regression, Support Vector Classifier (SVC), Random Forest Classifier, and XGBoost Classifier.
      </p>
      <p>
        <strong>Model Training & Saving:</strong> Train ML models with a single click and automatically save trained models as .pkl files.
      </p>
      <p>
        <strong>Model Evaluation:</strong> Display test accuracy and evaluation metrics post-training, with real-time visualization of dataset previews and preprocessing effects.
      </p>
      <p>
        <strong>No-Code Interface:</strong> User-friendly Streamlit interface designed for both beginners and practitioners to quickly experiment with ML workflows.
      </p>
    `
  },
  "traffic-sign-recognition-system": {
    title: "Traffic Sign Recognition System",
    category: "AI/ML",
    client: "Individual Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, TensorFlow, OpenCV, CNN, Computer Vision",
    images: [
      "https://fnsautoglass.com/wp-content/uploads/2022/10/Traffic-Sign-Recognition3.png"
    ],
    description: `
      <h2>Traffic Sign Recognition System</h2>
      <p>
        <strong>Overview:</strong> A deep learning-based system that recognizes traffic signs in real-time using a convolutional neural network (CNN) model. The project demonstrates practical applications of computer vision and neural networks by detecting and classifying traffic signs from live webcam video streams. Designed to assist drivers and autonomous vehicles with timely traffic information.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>Real-Time Detection:</strong> Integrates webcam functionality to process live video streams and identify traffic signs on the fly.
      </p>
      <p>
        <strong>CNN Model:</strong> Uses a convolutional neural network for high-accuracy traffic sign classification.
      </p>
      <p>
        <strong>Comprehensive Sign Coverage:</strong> Recognizes a wide range of traffic signs with robust detection under varying lighting and angles.
      </p>
      <p>
        <strong>Driver Assistance:</strong> Provides actionable information for drivers or integration into autonomous vehicle systems.
      </p>
      <p>
        <strong>Visualization:</strong> Highlights detected traffic signs directly on the video feed for intuitive feedback.
      </p>
    `
  },
  "data-visualization-project": {
    title: "Data Visualization Project",
    category: "Data Science",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, Jupyter Notebook, Matplotlib, Seaborn, Plotly, Pandas, NumPy, SciPy",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1765128129/88c45e8b-60e3-4b72-9330-6844bfb2a0b2.png"
    ],
    description: `
      <h2>Data Visualization Project</h2>
      <p>
        <strong>Overview:</strong> A comprehensive collection of Jupyter notebooks demonstrating a wide range of data visualization techniques in Python. The project covers both basic and advanced visualizations, highlighting their importance in understanding datasets, detecting patterns, and supporting machine learning workflows.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>General Data Visualizations:</strong> Includes Bar Plots, Histograms, Scatter Plots, Box & Violin Plots, and Heatmaps to explore distributions and correlations.
      </p>
      <p>
        <strong>Geospatial Visualization:</strong> Uses Mapbox Scatter Plots to visualize locations and identify geospatial trends.
      </p>
      <p>
        <strong>Time-Series & Multi-Dimensional:</strong> Features Line/Step Plots, Area Plots, KDE Plots, Bubble Charts, and 3D Scatter/Surface Plots for complex relationship analysis.
      </p>
      <p>
        <strong>Machine Learning Impact:</strong> Demonstrates how visualization aids in data quality checks (missing values, outliers), feature understanding, model selection, and effective communication of data stories.
      </p>
    `
  },
  "anti-spoofing-liveliness-detector": {
    title: "Anti Spoofing / Liveliness Detector",
    category: "AI/ML",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, OpenCV, cvzone, YOLO (Ultralytics), Shutil, OS, Random, Time",
    images: [
      "https://www.fraud.com/wp-content/uploads/2022/09/Liveness-Detection.webp"
    ],
    description: `
      <h2>Anti Spoofing / Liveliness Detector</h2>
      <p>
        <strong>Overview:</strong> A real-time anti-spoofing system that detects and classifies faces in a video stream as either genuine or spoofed. The project leverages computer vision and deep learning techniques to differentiate between real faces and spoofed representations such as printed photos, masks, or digital images. This system can be used in security applications, authentication systems, and access control solutions.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>Real-Time Face Detection:</strong> Uses OpenCV and cvzone to detect faces in live video streams.
      </p>
      <p>
        <strong>Face Classification:</strong> Employs YOLO (You Only Look Once) object detection algorithm to classify faces as genuine or spoofed.
      </p>
      <p>
        <strong>Confidence Scoring:</strong> Assigns confidence scores to predictions for better reliability and decision-making.
      </p>
      <p>
        <strong>Dataset Handling:</strong> Splits real-time collected datasets into training, validation, and testing subsets for robust model evaluation.
      </p>
      <p>
        <strong>Security-Oriented Application:</strong> Detects spoof attempts from printed photos, masks, or other artificial representations in real-time.
      </p>
    `
  },
  "chat-application-with-socket-io": {
    title: "Chat Application with Socket.IO",
    category: "Software",
    client: "Individual Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "MERN Stack (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, DaisyUI, Zustand",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1758352363/a9e74c5a-4a53-4a00-9a78-be49d2d1d2bf.png"
    ],
    description: `
      <h2>Real-Time Chat Application</h2>
      <p>
        <strong>Overview:</strong> A full-featured real-time chat application designed for seamless communication between users. The system incorporates robust authentication and authorization, online user presence tracking, and real-time messaging capabilities. Emphasis was placed on efficient state management, error handling, and responsive UI/UX to deliver a smooth and reliable chat experience.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>User Authentication & Authorization:</strong> Secure sign-up, login, and role-based access control.
      </p>
      <p>
        <strong>Real-Time Messaging:</strong> Instant chat updates using Socket.io for bidirectional communication.
      </p>
      <p>
        <strong>Online User Status Tracking:</strong> Displays online/offline status for all users in real time.
      </p>
      <p>
        <strong>State Management:</strong> Efficient global state handling using Zustand for smooth client-side performance.
      </p>
      <p>
        <strong>Error Handling & Validation:</strong> Comprehensive error management on both server and client sides.
      </p>
      <p>
        <strong>Responsive & Modern UI:</strong> Built with TailwindCSS and DaisyUI for clean, intuitive interfaces.
      </p>
    `
  },
  "customer-churn-prediction": {
    title: "Customer Churn Prediction System",
    category: "AI/ML",
    client: "Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn, SMOTE, Feature Selection Techniques",
    images: [
      "https://miro.medium.com/v2/resize:fit:1400/1*YEBB4XJvcabjp1vL37LLQQ.png"
    ],
    description: `
      <h2>Customer Churn Prediction System</h2>
      <p>
        <strong>Overview:</strong> A machine learning system designed to predict customer churn — the likelihood of customers leaving a company — by analyzing behavioral, demographic, and transactional data. This project helps businesses proactively identify at-risk customers and implement retention strategies, enhancing customer loyalty and reducing revenue loss.
      </p>
      <h3>Project Workflow & Key Steps</h3>
      <p>
        <strong>Data Preprocessing:</strong> Load and clean 12-feature dataset, handle missing values, normalize numerical features, and address class imbalance using SMOTE.
      </p>
      <p>
        <strong>Exploratory Data Analysis (EDA):</strong> Univariate and multivariate analysis with visualizations (heatmaps, correlation matrices) to identify key churn drivers like payment delays and contract length.
      </p>
      <p>
        <strong>Feature Selection & Engineering:</strong> Select important features using mutual information and correlation analysis to improve model efficiency.
      </p>
      <p>
        <strong>Model Development:</strong> Implementation of multiple baseline models including Logistic Regression, Naive Bayes, k-NN, Decision Trees, and Random Forest, using K-Fold cross-validation.
      </p>
      <p>
        <strong>Model Evaluation & Deployment:</strong> Evaluate models on test data and save the best-performing model for future inference on customer data.
      </p>
    `
  },
  "vehicle-counting-system": {
    title: "Vehicle Counting System",
    category: "AI/ML",
    client: "Individual Project",
    projectDate: "2024",
    projectUrl: "#",
    technologies: "Python, OpenCV, Background Subtraction (MOG2), Gaussian Blur, Morphological Operations, Contour Detection",
    images: [
      "https://res.cloudinary.com/dsnzmaddw/image/upload/v1765130486/2fa75d4b-cd45-4765-9061-277c6b6ecd7b.png"
    ],
    description: `
      <h2>Vehicle Counting System</h2>
      <p>
        <strong>Overview:</strong> A real-time Vehicle Counting System using classical computer vision techniques. The system processes live webcam feeds or prerecorded videos to detect moving vehicles, track their motion, and automatically count them when they cross a designated region of interest. It is useful for traffic monitoring, smart city applications, and automated traffic analytics.
      </p>
      <h3>Key Features</h3>
      <p>
        <strong>Real-time Vehicle Detection:</strong> Detects moving vehicles using background subtraction (MOG2) and motion segmentation techniques.
      </p>
      <p>
        <strong>Vehicle Tracking:</strong> Tracks detected objects frame-by-frame to ensure accurate tracking and avoid double counting.
      </p>
      <p>
        <strong>Automatic Counting:</strong> Increments the vehicle counter each time a vehicle crosses a predefined line (Region of Interest).
      </p>
      <p>
        <strong>User-Friendly Interface:</strong> Clean visualization with bounding boxes, detection zones, and live count display.
      </p>
    `
  }
};

// Export for usage if using modules, but for simple HTML include we can just attach to window or let it be global
// Adding a simple function to get project by ID
function getProjectData(id) {
  return projects[id];
}
