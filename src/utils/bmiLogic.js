/**
 * Logic for BMI calculation and categorization
 */

/**
 * @typedef {object} BMICategory
 * @property {number} min - Minimum BMI for this category
 * @property {number} max - Maximum BMI for this category
 * @property {string} label - Category name
 * @property {string} rangeText - Display text for the range (e.g., "18.5 - 24.9")
 * @property {string} colorClass - Tailwind color for the indicator circle
 */

/**
 * Array containing all BMI categories.
 * @type {BMICategory[]}
 */
export const bmiCategories = [
  {
    min: 0,
    max: 16,
    label: "Very severely underweight",
    rangeText: "< 16",
    colorClass: "bg-[#0096FF]",
  },
  {
    min: 16,
    max: 17,
    label: "Severely underweight",
    rangeText: "16.0 - 16.9",
    colorClass: "bg-[#00D2FF]",
  },
  {
    min: 17,
    max: 18.5,
    label: "Underweight",
    rangeText: "17.0 - 18.4",
    colorClass: "bg-[#7DF9FF]",
  },
  {
    min: 18.5,
    max: 25,
    label: "Normal",
    rangeText: "18.5 - 24.9",
    colorClass: "bg-[#4ADE80]",
  },
  {
    min: 25,
    max: 30,
    label: "Overweight",
    rangeText: "25.0 - 29.9",
    colorClass: "bg-[#FACC15]",
  },
  {
    min: 30,
    max: 35,
    label: "Obese class I",
    rangeText: "30.0 - 34.9",
    colorClass: "bg-[#F97316]",
  },
  {
    min: 35,
    max: 40,
    label: "Obese class II",
    rangeText: "35.0 - 39.9",
    colorClass: "bg-[#EA580C]",
  },
  {
    min: 40,
    max: 1000,
    label: "Obese class III",
    rangeText: "> 39.9",
    colorClass: "bg-[#EF4444]",
  },
];

/**
 * Calculates BMI based on the selected unit system.
 * @param {number} weight - Weight (kg for metric, lb for imperial)
 * @param {number} height - Height (cm for metric, in for imperial)
 * @param {string} [unit="metric"] - The unit system ("metric" or "imperial")
 * @returns {{bmiValue: string, matchedCategory: BMICategory}} Resulting BMI and Category
 */
export const calculateUserBMI = (weight, height, unit = "metric") => {
  let bmi = 0;

  if (unit === "metric") {
    // Formula: kg / m^2
    const heightInMeters = height / 100;
    bmi = weight / (heightInMeters * heightInMeters);
  } else {
    // Formula: (lb / in^2) * 703
    bmi = (weight / (height * height)) * 703;
  }

  const bmiNumeric = parseFloat(bmi.toFixed(1));

  // Find the matching category
  const matchedCategory = bmiCategories.find(
    (cat) => bmiNumeric >= cat.min && bmiNumeric < cat.max
  );

  return {
    bmiValue: bmiNumeric.toString(),
    matchedCategory: matchedCategory || bmiCategories[3], // Default to Normal
  };
};
