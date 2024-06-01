import React from 'react'
import '../App.css';

// Define a functional component called DayOfWeek that takes a date string as a parameter
const DayOfWeek = (dateString) => {
    // Array of days in Turkish, starting from Sunday (Pazar)
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    // Create a new Date object from the date string
    const date = new Date(dateString);

    // Get the index of the day of the week (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = date.getDay();

    // Return the name of the day in Turkish based on the day index
    return days[dayIndex];
};

// Export the DayOfWeek component as the default export
export default DayOfWeek;