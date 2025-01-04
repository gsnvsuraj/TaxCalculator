# 🧮 Tax Engine

Tax Engine is a web-based application that helps individuals calculate their income tax liability under both the **Old Tax Regime** and the **New Tax Regime** in India. It provides a user-friendly interface for comparing the two regimes and assists users in making informed decisions about which regime suits them best. The website has been hosted [here](https://gsnvsuraj.github.io/TaxCalculator).

[![Deploy Tax Engine App](https://github.com/gsnvsuraj/TaxEngine/actions/workflows/deploy.yml/badge.svg)](https://github.com/gsnvsuraj/TaxEngine/actions/workflows/deploy.yml)

---

## 🚀 Features
- **Income Tax Calculator**:
  - Calculate income tax liability for both Old and New Tax Regimes.
  - Compare total tax payable under each regime.
- **Detailed Regime Comparison**:
  - View key differences between the Old and New Tax Regimes.
  - Learn about deductions, exemptions, and tax slabs in both regimes.
- **Dark/Light Mode Toggle**:
  - Switch between dark and light themes for better user experience.
  - Automatically adapts to your system's theme preference.
- **Responsive Design**:
  - Optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used
- **Frontend**: React, HTML, CSS
- **Styling**: CSS variables for light/dark mode
- **Build Tool**: npm, vite
- **Hosting**: GitHub Pages

---

## 📊 Tax Calculation Logic

### Old Tax Regime
- **Tax Slabs**:
  - ₹2,50,000 to ₹5,00,000: **5%**
  - ₹5,00,001 to ₹10,00,000: **20%**
  - Above ₹10,00,000: **30%**
- **Deductions & Exemptions**:
  - Section 80C (e.g., PPF, ELSS, etc.): Up to ₹1,50,000
  - Section 80CCD (e.g., NPS): Up to ₹50,000
  - Section 80D (Health Insurance Premium): Variable
  - House Rent Allowance (HRA): Exemption available
  - Interest on Home Loan (Section 24b): Deduction up to ₹2,00,000
- Suitable for taxpayers who claim multiple deductions and exemptions.

### New Tax Regime
- **Tax Slabs**:
  - ₹0 to ₹3,00,000: **0%**
  - ₹3,00,001 to ₹6,00,000: **5%**
  - ₹6,00,001 to ₹9,00,000: **10%**
  - ₹9,00,001 to ₹12,00,000: **15%**
  - ₹12,00,001 to ₹15,00,000: **20%**
  - Above ₹15,00,000: **30%**
- **No Deductions or Exemptions**:
  - Focuses on simplicity.
  - Suitable for taxpayers who don't have many deductions or exemptions.

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm**
- **vite**

### Steps to Run Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/gsnvsuraj/tax-engine.git
   cd tax-engine
   ```
   
1. **Navigate to the project directory**:

    ```bash
    cd tax-engine
    npm install 
    ```

1. **Start the Development Server**
   Run the project in development mode:

    ```bash
    npm run dev
    ```

The application will be available at http://localhost:5173/TaxEngine/ in your browser.

---

## 🎯 Roadmap

The following features are planned for the Tax Engine project:

- [x] **Tax calculation for Old and New Regimes**: Implement logic to calculate taxes based on income and compare regimes.
- [x] **Dark/Light mode toggle**: Allow users to switch between light and dark themes, with default set to system preferences.
- [ ] **Advanced tax planning tools**: Introduce features for planning investments and optimizing tax savings.

We welcome suggestions and contributions to enhance the functionality of this project. Feel free to open an issue or submit a pull request!

---

## 🛡️ License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute the software as per the terms of the license.  

See the full license details in the `LICENSE` file.

---

## 🌟 Acknowledgements

We would like to acknowledge the following resources and contributors:

- [Income Tax Department of India](https://incometaxindia.gov.in) for providing official tax slab information and guidelines.
- Open-source libraries and tools, including React and Node.js, which made this project possible.
- Contributors and developers who have provided feedback and improvements to the project.
- Community forums and platforms like Stack Overflow for troubleshooting and learning resources.

Thank you to everyone who has contributed to making this project successful!

