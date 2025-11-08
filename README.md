# Math Function Matcher

A mobile-first React web application where users match math functions with their corresponding graphs. The app tracks user attempts using localStorage and displays scores after submission.

## Features

- **Interactive Matching**: Click-based interface to match functions with graphs
- **Randomized Tests**: Each user gets a different random selection of functions and graphs
- **Shuffled Order**: Both functions and graphs are displayed in random order every time
- **Challenge Mode**: For N functions, there are N+2 graphs (includes 2 decoy graphs to increase difficulty)
- **Configurable Test Size**: Control how many functions appear in each test (default: 5)
- **Large Function Pool**: 10 different math functions available for random selection
- **Attempt Tracking**: Limits users to a configurable number of attempts (default: 3)
- **Score Display**: Shows percentage score and detailed results
- **Mobile-First Design**: Responsive layout optimized for mobile devices
- **Local Storage**: Persists attempt data in browser storage
- **Beautiful UI**: Modern, gradient design with smooth animations

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with mobile-first approach
- **localStorage API** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd math_function_test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AttemptsTracker.jsx    # Shows attempt count and progress
│   ├── FunctionColumn.jsx     # Displays math functions
│   ├── GraphColumn.jsx        # Displays graph images
│   ├── ResultsDisplay.jsx     # Shows test results
│   └── TestInterface.jsx      # Main test interface
├── data/               # Static data
│   └── functions.json         # Math functions and graphs data
├── hooks/              # Custom React hooks
│   └── useAttempts.js        # localStorage hook for attempts
├── utils/              # Utility functions
│   └── scoring.js            # Scoring and validation logic
├── constants.js        # App constants (MAX_ATTEMPTS, etc.)
├── App.jsx            # Main App component
├── App.css            # App styles
├── index.css          # Global styles
└── main.jsx           # App entry point

public/
└── images/            # Graph SVG images
    ├── graph-linear.svg
    ├── graph-quadratic.svg
    ├── graph-linear-2.svg
    ├── graph-sine.svg
    └── graph-hyperbola.svg
```

## Configuration

### Maximum Attempts

To change the maximum number of attempts, edit `src/constants.js`:

```javascript
export const MAX_ATTEMPTS = 3; // Change this value
```

### Test Size

To change how many functions appear in each test, edit `src/constants.js`:

```javascript
export const FUNCTIONS_PER_TEST = 5; // Change this value
```

The application will randomly select this many functions from the available pool for each test.

### Functions and Graphs Pool

The application includes **10 different math functions**:
1. y = x (Linear)
2. y = x² (Quadratic)
3. y = 2x + 1 (Linear with offset)
4. y = sin(x) (Sine wave)
5. y = 1/x (Hyperbola)
6. y = -x (Negative linear)
7. y = cos(x) (Cosine wave)
8. y = √x (Square root)
9. y = |x| (Absolute value)
10. y = -x² (Inverted parabola)

Each test randomly selects N functions and displays them with N+2 graphs (including 2 decoy graphs).

**How it works:**
- On each load/retry, the app randomly selects FUNCTIONS_PER_TEST functions from the pool
- Gets the N correct graphs for those functions
- Adds 2 random decoy graphs from the remaining graphs
- Shuffles both functions and graphs for different order each time

To add more functions, edit `src/data/functions.json`:
- Add new functions to the `functions` array
- Add corresponding graphs to the `graphs` array
- Create SVG images in `public/images/`

## How to Use

1. **Select a Function**: Click on a math function in the left column
2. **Match with Graph**: Click on the corresponding graph in the right column (note: there are 2 extra decoy graphs!)
3. **Complete All Matches**: Match all functions with their graphs
4. **Submit**: Click the "Submit Answers" button to see your score
5. **Try Again**: If attempts remain, you can retry with a NEW random set of functions and graphs

## Features in Detail

### Attempt Tracking
- Users can take the test up to 3 times (configurable)
- Attempts are stored in localStorage
- Clear browser data to reset attempts
- Debug reset button available on limit reached screen

### Scoring System
- Percentage score based on correct matches
- Detailed feedback for each function
- Color-coded results (correct/incorrect)
- Score categories: Excellent (80%+), Good (60-79%), Average (40-59%), Needs Improvement (<40%)

### Mobile Optimization
- Responsive design works on all screen sizes
- Touch-friendly buttons (minimum 44x44px)
- Vertical stacking on mobile
- Side-by-side layout on desktop

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Math Function Matcher

## Future Enhancements

Possible future improvements:
- Add more math functions
- Timed tests
- Difficulty levels
- User accounts with backend
- Leaderboard
- Hints system
- Audio feedback
