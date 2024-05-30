import React from 'react'
import '../App.css';
const DayOfWeek = (dateString) => {
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const date = new Date(dateString)
    const dayIndex = date.getDay();
    ;return days[dayIndex];
};

export default DayOfWeek