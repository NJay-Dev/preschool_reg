// Navigation function
function navigateTo(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear current content

    switch(page) {
        case 'home':
            loadHome();
            break;
        case 'register':
            loadRegisterForm();
            break;
        case 'indemnity':
            loadIndemnityForm();
            break;
        case 'thank-you':
            loadThankYou();
            break;
    }
}

// Load home page content
function loadHome() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section>
            <h2>Welcome to Stars Preschool</h2>
            <p>We are now accepting applications for 2025. Our preschool caters to children from 18 months to 5 years old.</p>
        </section>

        <section id="requirements-and-fees">
            <!-- This will be populated by JavaScript -->
        </section>

        <section class="text-center">
            <h3>Ready to Apply?</h3>
            <button onclick="navigateTo('register')">Register Now</button>
        </section>

        <section class="text-center">
            <h3>Indemnity Form</h3>
            <p>Please fill out our indemnity form as part of the application process.</p>
            <button onclick="navigateTo('indemnity')">Fill Indemnity Form</button>
        </section>
    `;
    loadRequirementsAndFees();
}

// Load requirements and fees
function loadRequirementsAndFees() {
    const requirementsAndFees = document.getElementById('requirements-and-fees');
    requirementsAndFees.innerHTML = `
        <section>
            <h3>Application Requirements</h3>
            <ul>
                <li>THREE I.D COPIES (BOTH PARENTS)</li>
                <li>THREE BIRTH CERTIFICATE COPIES</li>
                <li>THREE ROAD TO HEALTH CARD COPIES</li>
                <li>COMPLETED ADMISSION FORM</li>
                <li>COMPLETED INDEMNITY FORM</li>
                <li>PROOF OF INCOME/AFFIDAVIT</li>
            </ul>
        </section>

        <section>
            <h3>Fees</h3>
            <ul>
                <li>ONCE OFF REGISTRATION: R150</li>
                <li>MONTHLY FEE (18 MONTHS TO 5 YEARS): R250</li>
                <li>NAPPIES MONTHLY FEE: R300</li>
                <li>GRADUATION FEE (ONCE OFF FULL PACKAGE): R1000</li>
                <li>SCHOOL T-SHIRT: R150</li>
                <li>SCHOOL TRACKSUIT: R500</li>
            </ul>
            <p><strong>FEE PAYMENTS DUE ON THE 1ST TO 7TH OF EACH MONTH</strong></p>
        </section>

        <section>
            <h3>Additional Requirements</h3>
            <ul>
                <li>TWO FILES</li>
                <li>10 TWINSAVER TOILET PAPERS</li>
            </ul>
            <p><em>N.B. THERE ARE SCHOOL TRIPS PER QUARTER</em></p>
        </section>
    `;
}

// Load registration form
function loadRegisterForm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Registration Form</h2>
        <form id="registrationForm">
            <label for="childName">Child's Full Name</label>
            <input type="text" id="childName" name="childName" required>

            <label for="childDob">Child's Date of Birth</label>
            <input type="date" id="childDob" name="childDob" required>

            <label for="parentName">Parent's Full Name</label>
            <input type="text" id="parentName" name="parentName" required>

            <label for="parentPhone">Parent's Phone Number</label>
            <input type="tel" id="parentPhone" name="parentPhone" required>

            <label for="parentEmail">Parent's Email</label>
            <input type="email" id="parentEmail" name="parentEmail" required>

            <label for="parentId">Parent's ID (PDF)</label>
            <input type="file" id="parentId" name="parentId" accept=".pdf" required>

            <label for="birthCertificate">Child's Birth Certificate (PDF)</label>
            <input type="file" id="birthCertificate" name="birthCertificate" accept=".pdf" required>

            <label for="healthCard">Road to Health Card (PDF)</label>
            <input type="file" id="healthCard" name="healthCard" accept=".pdf" required>

            <label>
                <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
                I agree to the terms and conditions
            </label>

            <button type="submit">Submit Registration</button>
        </form>
    `;

    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Form submitted');
        navigateTo('thank-you');
    });
}

// Load indemnity form
function loadIndemnityForm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Indemnity Form</h2>
        <form id="indemnityForm">
            <label for="parentName">Parent's Full Name</label>
            <input type="text" id="parentName" name="parentName" required>

            <label for="childName">Child's Full Name</label>
            <input type="text" id="childName" name="childName" required>

            <label for="date">Date</label>
            <input type="date" id="date" name="date" required>

            <label for="signature">Digital Signature</label>
            <textarea id="signature" name="signature" required></textarea>

            <label>
                <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
                I agree to indemnify Stars Preschool against any claims
            </label>

            <button type="submit">Submit Indemnity Form</button>
        </form>
    `;

    document.getElementById('indemnityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Indemnity form submitted');
        navigateTo('thank-you');
    });
}

// Load thank you page
function loadThankYou() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="text-center">
            <h2>Thank You for Registering!</h2>
            <p>We have received your application and will be in touch soon.</p>
            <button onclick="navigateTo('home')">Return to Home</button>
        </div>
    `;
}

// Initial load
window.onload = function() {
    loadHome();
};

