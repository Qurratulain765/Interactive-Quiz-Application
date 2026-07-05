# Interactive Quiz Application

A dynamic, fully functional, and responsive Quiz Application built with modern vanilla JavaScript, HTML5, and CSS3. The application features random question shuffling, real-time score tracking, dynamic countdown timers, and visual feedback for instant validation.

This project was developed as a technical evaluation task for **Qwetrum Technologies**.

## 🚀 Key Features

* **Dynamic Question Shuffling:** Utilizes randomized array sorting to mix up questions on every fresh session or replay, keeping the quiz unique.
* **Smart Countdown Timer:** Incorporates a strict 30-second timer per question. If the user runs out of time, the application auto-reveals the correct answer with a brief delay before transitioning.
* **Instant Feedback UI:** Dynamically injects FontAwesome checkmark (`✓`) or cross (`✗`) icons along with conditional styling (green/red borders and backgrounds) depending on the user's input.
* **State Management:** Disables further pointer events once an option is selected, preventing double-clicks or answer switching.
* **Comprehensive Performance Metrics:** Features a modular final scoring screen that calculates percentage performance and alters structural messages (Trophy or Sad face icon) according to passing criteria.
* **Fully Responsive Design:** Includes clean `@media` queries optimizing structural layouts, multi-column setups, and flex grids cleanly for ultra-small mobile displays.

## 🛠️ Tech Stack Used

* **HTML5:** Semantic layouts (`<header>`, `<section>`, `<footer>`) to construct robust card panels.
* **CSS3:** Flexbox and CSS Grid architectures, custom layout-scoping, explicit timing transitions, and responsive breakdowns.
* **JavaScript (ES6+):** Complete DOM manipulation, state control flags, native interval polling (`setInterval`), and array destructured shallow copying.
