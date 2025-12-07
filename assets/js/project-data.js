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
    }
};

// Export for usage if using modules, but for simple HTML include we can just attach to window or let it be global
// Adding a simple function to get project by ID
function getProjectData(id) {
    return projects[id];
}
