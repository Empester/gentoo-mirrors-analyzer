# Gentoo Mirror Analyzer - Ultimate Latency Testing

A beautiful, modern web application for analyzing Gentoo mirror performance with real-time testing, comprehensive statistics, and stunning visualizations.

## 🌟 Features

### Core Functionality
- **Real-time Mirror Testing**: Test multiple Gentoo mirrors simultaneously with configurable parameters
- **Comprehensive Metrics**: Average latency, jitter, standard deviation, success rate, and more
- **Smart Disqualification**: Automatically disqualify mirrors that exceed latency thresholds or fail too many times
- **Progress Tracking**: Real-time progress updates with elapsed time and current mirror status

### Beautiful UI/UX
- **Catppuccin Dark Theme**: Beautiful dark theme inspired by Catppuccin Mocha color palette
- **Apple Glass UI**: Modern glass morphism design with blur effects and transparency
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects throughout the interface

### Advanced Analytics
- **Interactive Charts**: Latency distribution, jitter analysis, and success rate visualizations using Chart.js
- **Detailed Comparisons**: Side-by-side mirror comparison with performance metrics
- **Performance Ratings**: Star ratings and performance indicators for easy assessment
- **Test History**: Track and compare results from previous test sessions

### Configuration & Customization
- **Flexible Settings**: Configurable test cycles, delays, failure thresholds, and latency limits
- **Mirror Management**: Add, remove, import, and export custom mirror lists
- **Display Options**: Toggle graphs, auto-refresh, and notifications
- **Export Results**: Download comprehensive test results in JSON format

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download the project files
2. Open `mirrors.html` in your web browser
3. Start testing mirrors immediately!

### Basic Usage
1. **Configure Test Parameters**:
   - Set number of test cycles (1-50)
   - Adjust delay between tests (100-5000ms)
   - Set failure threshold (1-10)
   - Configure maximum latency threshold (100-2000ms)

2. **Start Analysis**:
   - Click "Start Analysis" to begin testing
   - Monitor real-time progress
   - View results as they come in

3. **Review Results**:
   - Check the Overview tab for quick insights
   - Use Detailed Analysis for comprehensive metrics
   - Explore Charts for visual representations
   - Compare specific mirrors side-by-side

## 📊 Understanding the Results

### Key Metrics
- **Average Latency**: Mean response time across all successful tests
- **Jitter**: Average deviation from mean latency (network stability indicator)
- **Standard Deviation**: Statistical measure of latency consistency
- **Success Rate**: Percentage of successful tests vs. total attempts
- **Min/Max Latency**: Best and worst case response times

### Performance Ratings
- ⭐⭐⭐⭐⭐ Excellent (< 50ms)
- ⭐⭐⭐⭐ Very Good (50-100ms)
- ⭐⭐⭐ Good (100-200ms)
- ⭐⭐ Fair (200-400ms)
- ⭐ Poor (400-800ms)
- ✘ Very Poor (> 800ms)

### Disqualification Criteria
- **Failure Threshold**: Mirror is disqualified after exceeding the configured failure count
- **Latency Threshold**: Mirror is disqualified if any test exceeds the maximum latency limit

## 🎨 Design Philosophy

### Catppuccin Theme
The application uses the Catppuccin Mocha color palette for a cohesive, eye-friendly dark theme:
- **Base Colors**: Deep, rich backgrounds with subtle contrast
- **Accent Colors**: Blue and teal highlights for interactive elements
- **Text Colors**: Carefully chosen for optimal readability
- **Status Colors**: Green (success), yellow (warning), red (error)

### Glass Morphism
Modern Apple-inspired glass UI elements:
- **Backdrop Blur**: Subtle blur effects for depth
- **Transparency**: Semi-transparent backgrounds
- **Borders**: Soft, glowing borders with low opacity
- **Shadows**: Layered shadows for depth perception

## 🔧 Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Modern JavaScript with classes, async/await, and modules
- **Chart.js**: Interactive data visualizations
- **Bootstrap 5**: Responsive grid system and components
- **Bootstrap Icons**: Beautiful, consistent iconography

### Architecture
- **Class-based Design**: Modular, maintainable code structure
- **Event-driven**: Responsive user interactions
- **Local Storage**: Persistent settings and test history
- **Progressive Enhancement**: Works without JavaScript for basic functionality

### Performance Optimizations
- **Efficient DOM Updates**: Minimal reflows and repaints
- **Debounced Input**: Smooth user interactions
- **Lazy Loading**: Charts load only when needed
- **Memory Management**: Proper cleanup of event listeners and timers

## 📱 Browser Compatibility

### Supported Browsers
- **Chrome/Chromium**: 90+ (Full support)
- **Firefox**: 88+ (Full support)
- **Safari**: 14+ (Full support)
- **Edge**: 90+ (Full support)

### Required Features
- ES6+ JavaScript support
- CSS Grid and Flexbox
- Fetch API
- Local Storage
- Canvas API (for charts)

## 🛠️ Customization

### Adding Custom Mirrors
1. Navigate to the Settings tab
2. Click "Add Mirror"
3. Enter the mirror URL and optional display name
4. Save to add to your mirror list

### Importing Mirror Lists
1. Prepare a JSON file with mirror data:
```json
[
  {
    "url": "https://mirror.example.com/gentoo/",
    "name": "Example Mirror"
  }
]
```
2. Use the import feature in Settings

### Theme Customization
The theme can be customized by modifying CSS custom properties in `static/mirrors_style.css`:
```css
:root {
  --blue: #89b4fa;        /* Primary accent color */
  --teal: #94e2d5;        /* Secondary accent color */
  --green: #a6e3a1;       /* Success color */
  --red: #f38ba8;         /* Error color */
  --yellow: #f9e2af;      /* Warning color */
}
```

## 📈 Future Enhancements

### Planned Features
- **Geographic Visualization**: Map-based mirror location display
- **Historical Trends**: Long-term performance tracking
- **Automated Scheduling**: Regular mirror testing
- **API Integration**: Connect to Gentoo mirror status APIs
- **Mobile App**: Native mobile application
- **Server-side Processing**: Backend for more intensive testing

### Contributing
Contributions are welcome! Areas for improvement:
- Additional chart types and visualizations
- More sophisticated testing algorithms
- Enhanced mobile experience
- Performance optimizations
- Additional mirror sources

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Gentoo Project**: For maintaining the mirror infrastructure
- **Catppuccin**: For the beautiful color palette
- **Chart.js**: For excellent charting capabilities
- **Bootstrap**: For the responsive framework
- **Bootstrap Icons**: For the icon library

---

**Built with ❤️ for the Gentoo community**

*Find the best mirrors for your Gentoo installation with style and precision.* 