# Clients Feature — Happy Path Test Checklist

Exploratory testing was conducted on the SimplePractice Clients feature at `https://secure.simplepractice.com`.
The feature was broken down into functional sections, each with a set of high-level happy path scenarios.

---

## 1. Create Client

- [ ] Create a client with minimum required fields (First Name + Last Name)
- [ ] Create a client with all available fields populated (Client type, Billing type, email, date of birth, etc.)
- [ ] Create a client with status set to Prospective
- [ ] Create a client with status set to Active
- [ ] Create a client and assign them to a specific clinician
- [ ] Create a client with a Self-pay billing type
- [ ] Create a client with an insurance billing type
- [ ] Create a client with multiple contact methods (phone + email)
- [ ] Create a client and verify the success toast notification is displayed

---

## 2. Search & Filter Clients

- [ ] Search for an existing client by full name and verify they appear in the results
- [ ] Search for an existing client by partial first name and verify matching results are returned
- [ ] Search for an existing client by partial last name and verify matching results are returned
- [ ] Clear the search input and verify the full client list is restored

---

## 3. View Client List

- [ ] Navigate to the Clients page and verify the client list loads successfully
- [ ] Verify a newly created client appears in the client list
- [ ] Verify client list displays key information (name, status, billing)
- [ ] Verify clients are listed in the default sort order

---

## 4. View Client Profile

- [ ] Click on a client name and verify navigation to the client overview page
- [ ] Verify the client overview page displays the correct name and details
- [ ] Verify the client profile shows the correct status badge
- [ ] Verify the client profile shows the correct billing type

---

## 5. Edit Client

- [ ] Edit a client's first name and verify the change is saved and reflected in the list
- [ ] Edit a client's last name and verify the change is saved and reflected in the list
- [ ] Update a client's status from Prospective to Active and verify the change
- [ ] Update a client's status from Active to Prospective and verify the change
- [ ] Add a phone number to an existing client and verify it is saved
- [ ] Add an email address to an existing client and verify it is saved
- [ ] Update a client's billing type and verify the change is reflected in the list

---

## 6. Client Contact Information

- [ ] Add a mobile phone number to a client and verify it is saved correctly
- [ ] Add a work email address to a client and verify it is saved correctly
- [ ] Add multiple contact entries (phone + email) and verify all are saved
- [ ] Verify contact information is displayed correctly on the client profile

---

## 7. Client Actions Menu

- [ ] Open the actions menu for a client in the list and verify available options are displayed
- [ ] Verify the actions menu contains expected options (e.g., Edit, Delete, etc.)

---

## 8. Navigation

- [ ] Navigate to the Clients page from the left navigation menu and verify the page loads
- [ ] Navigate from the Clients list to a client profile and return to the list successfully
- [ ] Verify the active state of the Clients nav link when on the Clients page

---