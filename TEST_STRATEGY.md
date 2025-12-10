# Test Strategy Document

## Overview
This document outlines the testing strategy for the QA Automation Assessment.

## Scope
- Manual exploratory testing of Altera Institute website
- UI automation testing of SauceDemo application
- API testing of JSONPlaceholder API
- Unit testing of utility functions
- End-to-end testing of complete user flows

## Test Approach

### Manual Testing
- **Tools**: Browser DevTools, Screenshot tools
- **Focus**: Navigation, forms, responsiveness, broken links
- **Coverage**: 12 test scenarios covering critical user paths

### UI Automation
- **Framework**: Playwright v1.40
- **Pattern**: Page Object Model (POM)
- **Browser**: Chromium
- **Coverage**: 6 test scenarios covering login, cart, checkout, sorting

### API Testing
- **Framework**: Postman + Newman
- **Coverage**: 8 test cases including CRUD operations and negative tests
- **Validation**: Status codes, response schemas, data integrity

### Unit Testing
- **Framework**: Jest
- **Coverage**: 3 utility functions with 15+ test cases
- **Focus**: Valid inputs, invalid inputs, edge cases

### E2E Testing
- **Framework**: Playwright
- **Coverage**: Complete purchase flow from login to order confirmation

## Test Environment
- **UI Tests**: https://www.saucedemo.com
- **API Tests**: https://jsonplaceholder.typicode.com
- **Manual Tests**: https://alterainstitute.com

## Risk Assessment
- **High Risk**: Login functionality, checkout process
- **Medium Risk**: Cart operations, sorting
- **Low Risk**: UI elements, static content

## Success Criteria
- All automated tests pass with 100% success rate
- Manual test cases documented with evidence
- Code follows best practices and is maintainable
- Clear documentation for setup and execution
