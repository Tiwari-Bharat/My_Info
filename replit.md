# 3D Portfolio Website

## Overview
This is a React-based 3D portfolio website featuring Three.js animations, interactive elements, and a modern dark theme. The portfolio showcases skills, projects, education, and experience with smooth animations and 3D visuals.

## Project Structure
- **Frontend**: React.js application built with Create React App
- **Port**: Runs on port 5000
- **Build System**: react-scripts (Webpack-based)

## Key Technologies
- React.js 18
- Three.js for 3D graphics (@react-three/fiber, @react-three/drei)
- Styled Components for styling
- Framer Motion for animations
- EmailJS for contact form functionality
- Material-UI components
- React Router for navigation

## Setup Notes (Replit Environment)
- The project uses `.env.local` file for configuration (PORT=5000, HOST=0.0.0.0, DANGEROUSLY_DISABLE_HOST_CHECK=true)
- Node modules were installed using `npm install --legacy-peer-deps`
- Binary links were created using `npm rebuild` to fix the react-scripts execution issue
- The workflow is configured to run `npm start` and serves the frontend on port 5000

## Recent Changes (October 24, 2025)
- Initial project import from GitHub
- Configured for Replit environment:
  - Set up .env.local with proper host and port settings to work with Replit's proxy
  - Fixed npm binary linking issue by running `npm rebuild`
  - Configured workflow to run development server on port 5000
  - Verified successful compilation and deployment

## Project Architecture
- **Components**: Organized into sections (Hero, Skills, Projects, Education, Experience, Contact, Footer)
- **Canvas Elements**: 3D components (Earth, Stars) using Three.js
- **Routing**: Single-page application with hash routing
- **Styling**: Dark theme using styled-components with responsive design
- **Data**: Project and personal information stored in `src/data/constants.js`

## Known Issues
- Minor React warnings about missing keys in Skills component (non-critical)
- styled-components warning about "active" prop forwarding (cosmetic)
- Missing source map for @mediapipe/tasks-vision (doesn't affect functionality)

## Contact Form
The contact form uses EmailJS integration with hardcoded service credentials. The form successfully sends emails when users submit the contact form.

## User Preferences
None recorded yet.
