# Test Data Documentation

## UI Test Credentials

### Valid Users
| Username | Password | Purpose |
|----------|----------|---------|
| standard_user | secret_sauce | Standard login tests |
| problem_user | secret_sauce | Testing UI glitches |

### Invalid Users
| Username | Password | Purpose |
|----------|----------|---------|
| locked_out_user | secret_sauce | Testing locked account |
| invalid_user | wrong_pass | Testing invalid credentials |

## API Test Data

### Valid Post Data
```json
{
  "title": "Test Post",
  "body": "This is a test post body",
  "userId": 1
}
```

### Valid User IDs
- User 1-10: Valid users for testing

### Invalid Data
- User ID 99999: Non-existent user
- Empty body: Missing required fields

## E2E Test Data

### Checkout Information
```json
{
  "firstName": "Ankita",
  "lastName": "Singh",
  "postalCode": "12345"
}
```

### Product Names
- sauce-labs-backpack
- sauce-labs-bike-light
- sauce-labs-bolt-t-shirt
