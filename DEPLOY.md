# Production Deployment

## Build
```bash
npm run build
```

Production files are in `dist/` folder.

## Deploy Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Add to package.json:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Then: `npm run deploy`

---

**Your production app is ready! 🚀**
- Size: ~65KB gzipped
- All SVGs updated (no text labels)
- Ukrainian language
- Ready to deploy

