# BMI House

BMI House is a modern and interactive Body Mass Index (BMI) dashboard built using React, Vite, and Tailwind CSS.  
The project focuses on clean architecture, performance optimization, and a strong user experience while providing accurate BMI calculations and clear visual feedback.

---

## Project Overview

BMI House allows users to calculate their Body Mass Index using either the Metric or Imperial system.  
It presents results in a visually structured dashboard, highlights the user’s BMI category, provides personalized health tips, and enables exporting the dashboard as an image report.

This project is designed as a portfolio-grade frontend application, demonstrating practical React patterns, state management, and UI composition.

---

## Features

- Real-time BMI calculation
- Metric and Imperial unit support
- Persistent user data using localStorage
- Dynamic BMI classification matrix
- Personalized health tips based on BMI and age
- Export dashboard as a PNG image
- Clean and responsive layout
- Modular and maintainable code structure

---

## BMI Calculation Logic

### Metric System
Formula:
BMI = weight (kg) / (height (m))²


BMI values are rounded to one decimal place and matched against predefined BMI categories.

---

## BMI Categories

| Category                  | BMI Range       |
|--------------------------|-----------------|
| Very Severely Underweight| < 16            |
| Severely Underweight     | 16.0 – 16.9     |
| Underweight              | 17.0 – 18.4     |
| Normal                   | 18.5 – 24.9     |
| Overweight               | 25.0 – 29.9     |
| Obese Class I            | 30.0 – 34.9     |
| Obese Class II           | 35.0 – 39.9     |
| Obese Class III          | > 39.9          |

---

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- html-to-image
- ESLint
- PostCSS
- Autoprefixer

---

![RT-Movies Demo](./src/assets/images/BMI-House-mockup.webp)

## Project Structure
```bash
src/
│
├── components/
│ └── bmi/
│ └── BMIApp.jsx
│
├── utils/
│ └── bmiLogic.js
│
├── App.jsx
└── main.jsx
```
---

## Core Components

### BMIApp
Responsible for:
- Managing user inputs (weight, height, age)
- Handling unit switching
- Displaying BMI result and classification
- Exporting the dashboard as an image

### bmiLogic
Contains:
- BMI category definitions
- BMI calculation logic
- Category matching based on calculated BMI

This separation ensures clarity and testability.

---

## State Management

- React useState for user inputs
- useMemo for optimized BMI calculations
- useEffect for syncing data with localStorage
- useRef for export functionality

---

## Export Functionality

The dashboard can be exported as a PNG image.  
During export:
- A temporary watermark is injected into the DOM
- The dashboard is rendered using html-to-image
- The watermark is removed after export

This ensures the UI remains clean during normal usage.

---

## Getting Started

### Install Dependencies
```bash
npm install
```
### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Code Quality

- Clear separation of concerns
- Consistent naming conventions
- Utility-based logic isolation
- ESLint configured for React
- Readable JSX structure

---

## Limitations and Notes

- BMI results are informational only and not medical advice
- Extreme or unrealistic inputs are handled defensively
- The project currently does not include automated tests

---

## Possible Future Enhancements

- Add unit tests (Vitest)
- Internationalization support (Arabic / English)
- Accessibility improvements
- User profile history
- Mobile-first refinements
- Hosting on GitHub Pages

---

## Author

Mustafa Mahmoud  
Frontend / Web Developer

---

## License

This project is licensed under the ISC License.
