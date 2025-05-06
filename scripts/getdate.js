// getdates.js - Script to dynamically set dates in the footer
// WDD 131 Assignment - Dynamic Web Fundamentals

/**
 * Sets the current year in the copyright section
 */
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

/**
 * Sets the last modified date of the document
 */
function setLastModified() {
    const lastModified = document.lastModified;
    const modifiedElement = document.getElementById('lastModified');
    if (modifiedElement) {
        modifiedElement.textContent = `Last Modified: ${lastModified}`;
    }
}

// Run both functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModified();
});
//by alvine kinyera 