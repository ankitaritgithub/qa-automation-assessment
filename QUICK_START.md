# Quick Start Guide

##  Get Running in 5 Minutes

### Step 1: Clone & Install (2 min)
```bash
git clone https://github.com/ankitaritgithub/qa-automation-assessment
cd qa-automation-assessment
npm install
npx playwright install
npm install -g newman
```

### Step 2: Run Tests (3 min)
```bash
# Run all tests
npm run test:ui
npm run test:unit
npm run test:e2e

# View reports
npx playwright show-report
```

### Step 3: Review Results
- Open `playwright-report/index.html`
- Check console output for unit tests
- Review `ManualTesting.md` for manual test results

##  That's it! You're ready to go.
