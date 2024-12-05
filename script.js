// Sample data
const searchData = [
    "How to Learn JavaScript",
    "Understanding CSS Basics",
    "HTML for Beginners",
    "Advanced React Techniques",
    "10 Tips for Python Developers",
    "Modern Web Development Trends",
    "Debugging in JavaScript",
    "Building Responsive Websites",
    "Introduction to Backend Development",
    "Mastering Data Structures",
    "Full stack devloptment",
    "Cyber security",
    "Cloud Computing",
    "Study Aborad RoadMap",
    "RoadMap of Data Structure Algorithm",
    "Best university for MCA",
    "Best university for B.tech",
    "Top Bollywood movies ",
    "Backend Language"
];

// Perform search and update suggestions
function performSearch() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const suggestionsDiv = document.getElementById("suggestions");

    // Clear existing suggestions
    suggestionsDiv.innerHTML = "";

    // Filter data
    const results = searchData.filter(item =>
        item.toLowerCase().includes(input)
    );

    // Display suggestions
    if (input.trim() === "") {
        suggestionsDiv.innerHTML = "";
        return;
    }

    if (results.length === 0) {
        suggestionsDiv.innerHTML = `<p class="no-results">No results found</p>`;
    } else {
        results.forEach(result => {
            const suggestion = document.createElement("p");
            suggestion.textContent = result;
            suggestion.onclick = () => selectSuggestion(result);
            suggestionsDiv.appendChild(suggestion);
        });
    }
}

// Handle suggestion selection
function selectSuggestion(value) {
    document.getElementById("search-input").value = value;
    document.getElementById("suggestions").innerHTML = "";
}
