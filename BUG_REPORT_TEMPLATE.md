# Bug Report Template

## Bug ID: BUG-001

**Title**: Apply Now Form - Name Field Accepts Numeric Characters

**Severity**: High

**Priority**: P1

**Environment**:
- Browser: Chrome
- Version: 120.0.6099.71
- OS: Windows 11
- URL: https://alterainstitute.com/

**Steps to Reproduce**:
1. Navigate to https://alterainstitute.com/
2. Click on 'PGP' in the navigation bar
3. In the Applied Marketing section, click on 'Apply Now' button
4. In the form, enter numeric characters in the 'Full Name' field (e.g., '4854845')
5. Fill other required fields with valid data:
   - Email: test@example.com
   - Mobile: 1234567890
   - Highest Education: Any valid option
6. Submit the form

**Expected Result**:
- Form should not accept numeric characters in the 'Full Name' field
- Appropriate validation error message should be displayed for invalid name format

**Actual Result**:
- Form accepts and submits with numeric characters in the 'Full Name' field
- No validation error is shown for invalid name format
- System processes the form with an invalid name (e.g., '4854845')

**Evidence**:
- Screenshot 1: ![Name Field Accepting Numbers](screenshots/Manual_Testing/NameFieldAcceptingNumbers.png)
- Screenshot 2: ![Form Submission with Numeric Name](screenshots/Manual_Testing/FormSubmissionwithNumericName.png)
- Screenshot 3: ![Form Data Showing Numeric Name](screenshots/Manual_Testing/FormDataShowingNumericName.png)

**Additional Notes**:
- This is a data validation issue that could lead to data integrity problems
- The issue affects the quality of user data being collected
- Similar validation might be needed for other form fields

**Reported By**: Ankita Singh
**Date**: December 10, 2025
