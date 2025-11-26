# Math Function Matcher

A mobile-first React web application where users match math functions with their corresponding graphs. The app provides a one-time test with 10 functions and 15 graphs.

## Features

- **Interactive Matching**: Click-based interface to match functions with graphs
- **One-Time Test**: Each user gets exactly one attempt to complete the test
- **Randomized Functions**: 10 random functions selected from a pool of 15
- **All Graphs Displayed**: All 15 graphs are shown, including 5 decoys
- **Shuffled Order**: Both functions and graphs are displayed in random order
- **Comprehensive Pool**: 15 different math functions available
- **Score Display**: Shows percentage score and detailed results
- **Mobile-First Design**: Responsive layout optimized for mobile devices
- **Local Storage**: Persists attempt data in browser storage
- **Beautiful UI**: Modern, gradient design with smooth animations

## Tech Stack

- **React 19** - UI framework
- **Vite 5** - Build tool and dev server
- **CSS3** - Styling with mobile-first approach
- **localStorage API** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js 14 or higher
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

### Deploy

The project is configured for deployment to GitHub Pages, Netlify, and Vercel:

```bash
npm run deploy  # For GitHub Pages
```

## Project Structure

```
src/
├── components/          # React components
│   ├── FunctionColumn.jsx     # Displays math functions
│   ├── GraphColumn.jsx        # Displays graph images
│   ├── ResultsDisplay.jsx     # Shows test results
│   └── TestInterface.jsx      # Main test interface
├── data/               # Static data
│   └── functions.json         # Math functions and graphs data
├── hooks/              # Custom React hooks
│   └── useAttempts.js        # localStorage hook for attempts
├── utils/              # Utility functions
│   ├── scoring.js            # Scoring and validation logic
│   └── testGenerator.js      # Test generation logic
├── constants.js        # App constants
├── App.jsx            # Main App component
├── App.css            # App styles
├── index.css          # Global styles
└── main.jsx           # App entry point

public/
└── images/            # Graph SVG images
    ├── graph_y=x.svg
    ├── graph_y=x^2.svg
    ├── graph_y=x^3.svg
    ├── graph_y=sqrt(x).svg
    ├── graph_y=sqrt(-x).svg
    ├── graph_y=abs(x).svg
    ├── graph_y=-x.svg
    ├── graph_y=-x^2.svg
    ├── graph_y=-x^3.svg
    ├── graph_y=-sqrt(x).svg
    ├── graph_y=-abs(x).svg
    ├── graph_y=1divx.svg
    ├── graph_y=-1divx.svg
    ├── graph_y=2.svg
    └── graph_x=2.svg
```

## Configuration

### Test Settings

Edit `src/constants.js` to modify test parameters:

```javascript
export const MAX_ATTEMPTS = 1;           // One attempt per user
export const FUNCTIONS_PER_TEST = 10;    // Functions shown in test
```

### Available Functions

The application includes **15 different math functions**:
1. y = x (Linear)
2. y = x² (Quadratic)
3. y = x³ (Cubic)
4. y = √x (Square root)
5. y = √(-x) (Square root of negative x)
6. y = |x| (Absolute value)
7. y = -x (Negative linear)
8. y = -x² (Inverted parabola)
9. y = -x³ (Negative cubic)
10. y = -√x (Negative square root)
11. y = -|x| (Negative absolute value)
12. y = 1/x (Hyperbola)
13. y = -1/x (Negative hyperbola)
14. y = 2 (Horizontal line)
15. x = 2 (Vertical line)

**How it works:**
- App randomly selects 10 functions from the pool of 15
- All 15 graphs are displayed (5 are decoys with no matching function)
- Both functions and graphs are shuffled for random order
- User has only one attempt to match all functions correctly

To add more functions, edit `src/data/functions.json`:
- Add new functions to the `functions` array
- Add corresponding graphs to the `graphs` array
- Create SVG images in `public/images/` following the naming pattern

## How to Use

1. **Select a Function**: Click on a math function in the left column
2. **Match with Graph**: Click on the corresponding graph in the right column
3. **Complete All Matches**: Match all 10 functions with their graphs
4. **Submit**: Click the "Відправити відповіді" (Submit Answers) button to see your score
5. **One Chance**: You have only one attempt - make it count!

## Features in Detail

### Attempt Tracking
- Users can take the test only once
- Attempts are stored in localStorage
- Clear browser data or use incognito mode to take another test

### Scoring System
- Percentage score based on correct matches
- Detailed feedback for each function
- Color-coded results (correct/incorrect)
- Score categories: 
  - Excellent (80%+): Green gradient
  - Good (60-79%): Blue gradient
  - Average (40-59%): Orange gradient
  - Needs Improvement (<40%): Red gradient

### Mobile Optimization
- Responsive design works on all screen sizes
- Touch-friendly buttons (minimum 44x44px)
- Vertical stacking on mobile
- Side-by-side layout on desktop

## Deployment

### Netlify
The project includes `netlify.toml` with optimized settings:
- Automatic redirects for SPA routing
- Security headers
- Cache optimization for static assets

### Vercel
The project includes `vercel.json` with:
- SPA rewrites
- Security headers
- Cache optimization

### GitHub Pages
Run the deploy script:
```bash
npm run deploy
```

Make sure to set the correct `base` path in `vite.config.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Production Optimizations

- Removed all debug/reset buttons
- Minified and optimized build
- Lazy loading of images
- Efficient caching strategies
- Security headers configured
- Production-ready error handling

## License

© 2025 Math Function Matcher

## Future Enhancements

Possible future improvements:
- Add more math functions (trigonometric, logarithmic, etc.)
- Timed tests with countdown
- Difficulty levels (easy, medium, hard)
- User accounts with backend database
- Leaderboard system
- Hints system for struggling users
- Audio feedback for interactions
- Multiple language support
- Accessibility improvements (ARIA labels, keyboard navigation)
