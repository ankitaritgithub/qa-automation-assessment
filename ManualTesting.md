# Manual Testing Report - Altera Institute Website

**Website:** https://alterainstitute.com  
**Tested By:** Ankita Singh  
**Date:** December 10, 2025  
**Environment:** 
- Browser: Chrome 120.0.6099.71
- OS: Windows 11
- Device: Laptop/Desktop
- Screen Resolution: 1920x1080

## Test Cases

| # | Test Case ID | Scenario | Steps | Expected Result | Actual Result | Status | Severity | Priority | Evidence |
|---|-------------|----------|-------|-----------------|---------------|--------|----------|----------|----------|
| 1 | TC_HP_001 | Homepage Navigation | 1. Open homepage<br>2. Click each menu item<br>3. Verify page loads | All navigation links work and load correct pages | All links working | ✓ | High | P1 | [Screenshot_1.png] |
| 2 | TC_AM_001 | Apply Now Form - Name Field Validation | 1. Navigate to https://alterainstitute.com/<br>2. Click on 'PGP' in header<br>3. In Applied Marketing section, click on 'Apply Now' button<br>4. In the form, enter numeric characters in 'Full Name' field<br>5. Fill other required fields with valid data<br>6. Submit the form | Form should not accept numeric characters in the 'Full Name' field and show appropriate validation error | Form accepts numeric characters in the 'Full Name' field (e.g., '4854845') | ❌ Fail | High | P1 | ![Name Field Accepting Numbers](Screenshot_2025-12-10_193334.png)<br>![Form Submission with Numeric Name](Screenshot_2025-12-10_193402.png)<br>![Form Data Showing Numeric Name](Screenshot_2025-12-10_193419.png) |

