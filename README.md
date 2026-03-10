# simplepractice-ui-sdet-task
This repository contains the UI SDET test task for SimplePractice, an End-to-end test automation for the client creation happy path, built with Cypress and JavaScript.

## Framework Architecture

```
simplepractice-ui-sdet-task/
├── cypress/
│   ├── e2e/
│   │   └── client.spec.cy.js       # Test suite
│   ├── pages/
│   │   ├── LoginPage.js            # Page Object: Login
│   │   ├── DashboardPage.js        # Page Object: Dashboard / + menu
│   │   ├── NewClientPage.js        # Page Object: New client form
│   │   └── ClientsPage.js          # Page Object: Clients list
│   ├── fixtures/
│   │   └── clientData.js           # Dynamic test data generation
│   └── support/
│       ├── commands.js             # Custom Cypress commands (e.g. cy.login())
│       └── e2e.js                  # Global support file
├── .env                            # Local credentials (not committed)
├── .env.example                    # Secure template example to fill credentials locally
├── .gitignore
├── cypress.config.js
└── package.json
```

### Design Decisions

- **Page Object Model (POM):** Each page is a class that encapsulates its own selectors and actions. Tests are clean and readable — no raw `cy.get()` calls in spec files.
- **Dynamic test data:** Client names include a timestamp suffix (e.g. `AutoTest Client1709234567`) to avoid data collisions between test runs and across shared environments.
- **Security:** Credentials are stored in `.env` (gitignored) and injected into Cypress via `cypress.config.js`. Passwords are never logged (`{ log: false }`).
- **Stability:** All interactions wait for elements to be visible before acting. No hardcoded `cy.wait()` delays.
- **Custom commands:** `cy.login()` is defined as a reusable command for clean, intention-revealing test setup.

---

## Prerequisites

- Node.js v16 or higher
- npm v8 or higher

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/simplepractice-ui-sdet-task.git
cd simplepractice-ui-sdet-task
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure credentials

Copy the example env file and fill in your credentials:

Edit `.env`:

```
LOGIN_EMAIL=your_email@example.com
LOGIN_PASSWORD=your_password
```

The `.env` file is gitignored and will never be committed to version control.

---

## Running Tests

### Interactive mode (Cypress Test Runner UI)

```bash
npm run cy:open
```

### Headless mode (CI / terminal)

```bash
npm run cy:run
```

### Headless with Chrome explicitly

```bash
npm run cy:run:headless
```

---

## Test Coverage

| Test | Description |
|------|-------------|
| Client happy path | Login → Create client (first + last name) → Navigate to Clients → Search for Client and Verify it exists in list |

---

## Notes

- Client names are unique per run via timestamp — safe to run repeatedly without manual cleanup.
- Screenshots on failure are saved to `cypress/screenshots/` (gitignored).
