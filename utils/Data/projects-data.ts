export const projectsData = [
  {
    id: 1,
    name: "Diabetes Prediction",
    description:
      "A machine learning web application that predicts the likelihood of diabetes using patient health data. The project includes data preprocessing, feature engineering, and model training to deliver accurate predictions through an intuitive interface.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    role: "Data Science & ML Developer",
    code: "https://github.com/Shivali-10/diabetes-prediction/tree/main",
    demo: "",
    date: "",
    images: ["/projects/Diabetes Prediction.jpeg"],
    videos: [""],
    highlights: [
      "Built an end-to-end workflow from data preprocessing to deployed prediction UI.",
      "Applied feature engineering and model evaluation to improve prediction quality.",
      "Delivered a user-friendly Streamlit interface for quick health-risk assessment.",
    ],
    challenges: [
      "Handling class imbalance and maintaining reliable model performance.",
      "Balancing interpretability with predictive accuracy for real-world usage.",
    ],
  },
  {
    id: 2,
    name: "Census of India Data Dashboard",
    description:
      "An interactive Power BI dashboard that analyzes India's census data to uncover insights on population distribution, literacy rates, gender gaps, and workforce trends. The project includes multiple report pages such as national summary, state-wise insights, and socio-economic analysis, enabling users to explore data through dynamic filters, maps, and visual storytelling.",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel"],
    role: "Data Analyst",
    code: "https://github.com/Shivali-10/census-india-dashboard-powerbi/tree/main",
    demo: "",
    date: "",
    images: ["/projects/Census of India Data Dashboard.jpeg"],
    videos: [""],
    highlights: [
      "Created multi-page analytical reports for national and state-level insights.",
      "Used DAX measures and Power Query transformations for robust reporting.",
      "Designed dynamic filters, maps, and visuals for exploratory storytelling.",
    ],
    challenges: [
      "Cleaning and harmonizing census data from multiple sources.",
      "Designing clear visual narratives for diverse socio-economic metrics.",
    ],
  },
  {
    id: 3,
    name: "Model Monitoring and Drift Simulation",
    description:
      "An end-to-end ML monitoring platform that detects data drift using statistical tests and automatically retrains the model when performance degrades, with a live Streamlit dashboard.",
    tools: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Supabase",
      "PostgreSQL",
      "Pandas",
      "SMOTE",
    ],
    role: "MLOps & Data Science Developer",
    code: "https://github.com/Shivali-10/Model-Monitoring-and-Drift-Simulation",
    demo: "https://model-monitoring-and-drift-simulation.streamlit.app/",
    date: "",
    images: ["/projects/Model Monitoring and Drift Simulation.jpeg"],
    videos: [""],
    highlights: [
      "Implemented data-drift detection using statistical validation checks.",
      "Automated retraining workflow triggered by model performance degradation.",
      "Delivered a live Streamlit dashboard for real-time monitoring visibility.",
    ],
    challenges: [
      "Defining practical drift thresholds without excessive retraining cycles.",
      "Maintaining consistent model performance across changing data distributions.",
    ],
  },
  {
    id: 4,
    name: "Netflix Movies and TV Shows Data Analysis",
    description:
      "An exploratory data analysis project on Netflix’s dataset that reveals insights into content trends, genre popularity, and global distribution. It includes data preprocessing, visualization, and pattern analysis to understand how Netflix content has evolved over time.",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
    role: "Data Analyst",
    code: "https://github.com/Shivali-10/Netflix-data-analysis",
    demo: "",
    date: "",
    images: ["/projects/netflix.jpeg"],
    videos: [""],
    highlights: [
      "Performed data cleaning and preprocessing on Netflix’s dataset.",
      "Visualized content trends, genre popularity, and global distribution.",
      "Analyzed patterns to understand the evolution of Netflix content.",
    ],
    challenges: [
      "Handling missing and inconsistent data entries.",
      "Extracting meaningful insights from large, unstructured datasets.",
    ],
  },

  // New Project: Enterprise Financial AI Assistant (RAG-Based NLP System)
  {
    id: 5,
    name: "Enterprise Financial AI Assistant (RAG-Based NLP System)",
    description:
      "Built an AI-powered financial research assistant using Retrieval-Augmented Generation (RAG) to enable semantic search, evidence-grounded question answering, and executive-level summarization of large-scale earnings call transcripts. The system leverages vector embeddings and FAISS-based similarity search to retrieve relevant financial discussions and generates context-aware insights using local LLM inference.",
    tools: [
      "Python",
      "NLP",
      "RAG",
      "FAISS",
      "Streamlit",
      "LLM",
      "Data Science",
    ],
    role: "AI/NLP Engineer",
    code: "https://github.com/Vaishali-1234/enterprise-nlp-financial-rag",
    demo: "",
    date: "",
    images: ["/projects/rag.jpeg"],
    videos: [""],
    highlights: [
      "Semantic search and evidence-grounded Q&A over financial transcripts.",
      "Vector embeddings and FAISS-based similarity search for retrieval.",
      "Executive-level summarization using local LLM inference.",
    ],
    challenges: [
      "Efficiently handling large-scale financial data.",
      "Ensuring accurate and context-aware responses from the system.",
    ],
  },
  // Removed duplicate id: 3 project entry
];
