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
| 1 | TC_HP_001 | Homepage Navigation | 1. Open homepage<br>2. Click each menu item<br>3. Verify page loads | All navigation links work and load correct pages | All links working | ✓ | High | P1 |![Homepage](screenshots/Manual_Testing/TC_HP_001_Homepage.png) |
| 2 | TC_AM_002 | Apply Now Form - Name Field Validation | 1. Navigate to https://alterainstitute.com/<br>2. Click on 'PGP'  In the Applied Marketing section in the nav bar click on it<br>3. Click on the 'Apply Now' button<br>4. In the form, enter numeric characters in the 'Full Name' field<br>5. Fill other required fields with valid data<br>6. Submit the form | Form should not accept numeric characters in the 'Full Name' field and show appropriate validation error | Form accepts numeric characters in the 'Full Name' field (e.g., '4854845') | ❌ Fail | High | P1 |![Name Field Accepting Numbers](screenshots/Manual_Testing/NameFieldAcceptingNumbers.png)<br>![Form Submission with Numeric Name](screenshots/Manual_Testing/FormSubmissionwithNumericName.png)<br>![Form Data Showing Numeric Name](screenshots/Manual_Testing/FormDataShowingNumericName.png) |
| 3 | TC_AM_003 | Mobile Number Field Validation | 1. Open Apply Now form<br>2. Type alphabets in Mobile Number field<br>3. Check for validation messages<br>4. Try to select from previously used numbers | 1. Should show validation message for non-numeric input<br>2. Should suggest correct format<br>3. Should allow selection of previously used numbers | ❌ FAILED: <br>- No validation message for alphabets<br>- No format suggestions<br>- Cannot select from previously used numbers | ❌ Fail | High | P1 | ![Mobile Number Field](screenshots/Manual_Testing/Mobile_Number.png)<br>![Mobile Number Field with Text](screenshots/Manual_Testing/MobileNumberFieldwithText.png) |
| 4 | TC_NAV_004 | Main Navigation Menu | 1. Open homepage<br>2. Click on each menu item<br>3. Verify pages load | All navigation links should work correctly | ✅ PASSED: All navigation menu items work | ✓ | High | P1 | ![Navigation](screenshots/Manual_Testing/Screenshot_8.png)<br>![Navigation](screenshots/Manual_Testing/Screenshot_9.png)<br>![Navigation](screenshots/Manual_Testing/Screenshot_10.png)<br>![Navigation](screenshots/Manual_Testing/Screenshot_11.png) |
| 5 | TC_RD_005 | Responsive Design - Mobile View | 1. Open DevTools<br>2. Toggle device toolbar<br>3. Set to Mobile view<br>4. Test navigation and form | Site should be responsive and functional | ✅ PASSED: Website is responsive | ✓ | High | P1 | ![Mobile View](screenshots/Manual_Testing/Screenshot_7.png)<br>![Responsive View](screenshots/Manual_Testing/Screenshot_6.png) |
| 6 | TC_FL_006 | Footer Links Verification | 1. Scroll to footer<br>2. Click all links | All links should be valid | ✅ PASSED: All footer links work | ✓ | Medium | P2 | ![Footer](screenshots/Manual_Testing/Screenshot_12.png)<br>![Footer](screenshots/Manual_Testing/Screenshot_13.png)<br>![Footer](screenshots/Manual_Testing/Screenshot_14.png)<br>![Footer](screenshots/Manual_Testing/Screenshot_15.png)<br>![Footer](screenshots/Manual_Testing/Screenshot_16.png)<br> |


## Test Summary

### Test Execution Metrics
- **Total Test Cases:** 7
- **Passed:** 5
- **Failed:** 2
- **Pass Rate:** 71.43%

### Failed Test Cases
1. **TC_AM_002**: Name Field accepts numeric characters
2. **TC_AM_003**: Mobile Number field lacks validation for alphabets

## Issues Found
1. **Name Field Validation**
   - **Issue:** Accepts numeric characters
   - **Severity:** High
   - **Priority:** P1

2. **Mobile Number Validation**
   - **Issue:** No validation for alphabetic characters
   - **Severity:** High
   - **Priority:** P1

## Recommendations
1. Implement proper input validation for Name field to reject numeric characters
2. Add client-side validation for Mobile Number field
3. Add visual feedback for invalid inputs
4. Consider adding input masks for better user experience

## Sign-off
- **Tested By:** Ankita Singh
- **Date:** December 10, 2025
- **Status:** Ready for Review

