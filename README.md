# AI-ResumeBuilder

AI-ResumeBuilder is an open-source, AI-powered resume builder designed to help job seekers optimize their CVs for Applicant Tracking Systems (ATS), generate compelling content using persona-based AI, and create stunning dynamic portfolios.

## Features

- **ATS Optimization**: Analyze job descriptions and resumes to identify missing keywords and provide a match score.
- **Persona-Based AI Rewriting**: Transform raw notes into professional, quantifiable achievements tailored to specific personas (e.g., Executive, Creative, Technical).
- **Dynamic Portfolios**: Generate a hosted web portfolio and a matching PDF resume from a single data source.
- **Gap Analysis**: Intelligent suggestions to fill gaps in your experience profile.

## Tech Stack

- **Backend**: Django (Python), Django REST Framework
- **Frontend**: React (Vite)
- **PDF Generation**: ReportLab
- **Database**: SQLite (Default)

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 18+

### Backend Setup
1. Clone the repository.
2. Navigate to `story_backend`:
   ```bash
   cd story_backend
   ```
3. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
4. Install dependencies:
   ```bash
   pip install django djangorestframework django-cors-headers reportlab
   ```
5. Run migrations:
   ```bash
   python manage.py migrate
   ```
6. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to `story_frontend`:
   ```bash
   cd story_frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing
We welcome contributions! Please fork the repository and submit a pull request.

## License
MIT
