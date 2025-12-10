# Bug Report

## Bug ID: BUG-001

**Title**: Apply Now Form - Name Field Accepts Numeric Characters

**Severity**: High

**Priority**: P1

**Environment**:
- Browser: Chrome 120.0.6099.71
- OS: Windows 11
- Device: Laptop/Desktop
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

**Screenshots**:
1. Name field accepting numeric input:
   ![Name Field Accepting Numbers](screenshots/Manual_Testing/NameFieldAcceptingNumbers.png)
2. Form submission with numeric name:
   ![Form Submission with Numeric Name](screenshots/Manual_Testing/FormSubmissionwithNumericName.png)
3. Form data showing numeric name:
   ![Form Data Showing Numeric Name](screenshots/Manual_Testing/FormDataShowingNumericName.png)

**Impact**:
- Poor data quality in the system
- Potential issues with personalization in communications
- Violates standard form validation practices
- May affect user trust in the application

**Reproducibility**: 100% (Happens every time)

**Workaround**:
Manually ensure to enter only alphabetic characters in the 'Full Name' field.

**Suggested Fix**:
1. Implement client-side validation to reject numeric characters in the name field
2. Add proper error messaging that appears when invalid characters are entered
3. Add visual feedback (red border, error icon) for invalid input
4. Consider adding input mask or format hint (e.g., "Only alphabets and spaces allowed")
5. Add server-side validation as an additional safeguard

**Additional Notes**:
- This is a data validation issue that could lead to data integrity problems
- The issue affects the quality of user data being collected
- Similar validation might be needed for other form fields
- The problem was identified during manual testing of the Apply Now form

**Reported By**: Ankita Singh  
**Date Reported**: December 10, 2025  
**Status**: New

---

# Bug Report

## Bug ID: BUG-002

**Title**: Mobile Number Field Lacks Proper Validation and Auto-suggest Functionality

**Severity**: High

**Priority**: P1

**Environment**:
- Browser: Chrome 120.0.6099.71
- OS: Windows 11
- Device: Laptop/Desktop
- URL: https://alterainstitute.com/apply-now

**Steps to Reproduce**:
1. Navigate to the Apply Now form
2. In the Mobile Number field:
   - Type alphabetic characters
   - Check for validation messages
   - Try to select from previously used numbers
3. Submit the form

**Expected Result**:
1. System should show validation message for non-numeric input
2. Field should suggest correct format (e.g., "10-digit number required")
3. Dropdown should appear with previously used numbers for selection
4. Field should prevent submission of invalid formats

**Actual Result**:
1. No validation message appears when entering alphabetic characters
2. No format suggestions are provided to the user
3. Cannot select from previously used numbers
4. No visual feedback for invalid input
5. Field allows any character input without restriction

**Screenshots**:
1. Mobile Number field accepting invalid input:
   ![Mobile Number Field](screenshots/Manual_Testing/Mobile_Number.png)
2. No validation for alphabetic characters:
   ![Mobile Number Field with Text](screenshots/Manual_Testing/MobileNumberFieldwithText.png)

**Impact**:
- Poor user experience due to lack of input guidance
- Potential for incorrect data collection
- Inconsistent with form validation standards
- May lead to invalid contact information in the system

**Reproducibility**: 100% (Happens every time)

**Workaround**:
Manually ensure to enter only numeric characters in the mobile number field.

**Suggested Fix**:
1. Implement client-side validation to accept only numeric input
2. Add format suggestion (e.g., "10-digit number required")
3. Implement auto-suggest for previously used numbers
4. Add visual validation feedback (red border, error message)
5. Add input mask for better UX (e.g., automatically adds dashes/spaces)

**Additional Notes**:
- This issue affects the data quality of collected mobile numbers
- The problem is present in the Apply Now form
- Similar validation might be needed for other form fields
- The issue was identified during manual testing

**Reported By**: Ankita Singh  
**Date Reported**: December 10, 2025  
**Status**: New
