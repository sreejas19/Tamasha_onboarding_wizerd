# Tamasha Onboarding Wizard

A simple multi-step onboarding wizard built using React.  
The application collects user information, preferences, and technology choices through a step-by-step form.

## Features

- 4-step onboarding process
- Personal information form
- Track and experience selection
- Conditional technology stack selection
- Review entered information before submission
- Edit information from the review page
- Form validation
- Auto-save draft using browser localStorage
- Draft is restored when the page is refreshed
- Simple and responsive user interface

## Steps

### Step 1 - Personal Information

The user enters:

- Name
- Email
- Portfolio / GitHub URL

Basic validation is applied to the name and email fields.

### Step 2 - Preferences

The user selects:

- Primary Track
  - Frontend
  - Backend
  - Fullstack
  - UI/UX Design

- Experience Level
  - Junior
  - Mid
  - Senior

### Step 3 - Tech Stack

The available technologies are displayed based on the selected track.

For example:

**Frontend**
- React
- Vue
- TypeScript
- CSS Modules

**Backend**
- Node.js
- Python/Django
- PostgreSQL
- Redis

**UI/UX Design**
- Figma
- Storybook
- Design Systems

### Step 4 - Review and Submit

The user can:

- Review all entered information
- Edit Personal Information
- Edit Preferences
- Edit Tech Stack
- Submit the onboarding form

## Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS
- Browser localStorage

## React Concepts Used

### useState

Used to manage:

- Current step
- Form data
- Selected technologies
- Draft saving status

### useEffect

Used to automatically save form data to localStorage.

### Props

Used to pass form data and functions between the main application and individual step components.

### Conditional Rendering

Different steps are displayed based on the current step.

```jsx
{step === 1 && <Step1PersonalInfo />}
{step === 2 && <Step2Preferences />}
{step === 3 && <Step3TechStack />}
{step === 4 && <Step4Review />}
