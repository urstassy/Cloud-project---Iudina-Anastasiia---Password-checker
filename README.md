Password Strength Checker

This project is a simple web application designed to help users check the strength of their passwords in real time. The website provides clear feedback, visual rule checks, a password generator, and helpful security tips. It is built with HTML, CSS, and JavaScript, and hosted using GitHub Pages.

Website link

https://urstassy.github.io/Cloud-project---Iudina-Anastasiia---Password-checker

---

Key Features:

- Real-time password strength checking
- Rule-based validation with visual indicators (✓ / ✗)
- Password strength classification (weak, medium, strong)
- Secure password generator
- Copy password to clipboard functionality
- Helpful tips for creating stronger passwords
- Mobile-friendly responsive design
- Lightweight and fast, no data stored or tracked
- Open-source and freely available under the MIT License

---

Project Purpose:

The goal of this project is to raise awareness about password security. Many users rely on weak passwords without realizing the risks. This tool is meant to help users understand password safety, identify weak passwords, and learn how to create stronger ones. It is suitable for individuals, students, and organizations seeking to improve basic cybersecurity practices.

---

Steps / How to create this webste?

Step 1: Creating a Virtual Machine

- A cloud-based virtual machine (VM) was created using Microsoft Azure. (all screenshots are provided in pdf file)

Step 2: connecting to a VM via an IP address (all screenshots are provided in pdf file)

Step 3: Installing Node.js and Dependencies (all screenshots are in pdf)

Step 4: Create a Password Checker project, create a folder and go to it, initialise the project and install Express, and create a file server.js, setting Up the Server, a file named server.js was created to host the site locally on the VM (code is provided here in server.js file)

Step 5: Creating the Frontend inside the public/ folder, the following files were created:

 - index.html (code is provided here in index.html file)
The main structure of the web page. It includes:
A password input field
Visual feedback on password strength
A list of rules with checkmarks or crosses
A "Generate Password" button
A "Copy to Clipboard" button
Helpful security tips
Description and license information

 - styles.css (code is provided here in styles.css file)
This file contains:
General layout and color scheme
Responsive styles for mobile devices
Smooth transitions and animations
Clean, readable font and styling

 - script.js (code is provided here in script.js file)
This file contains the logic for:
Real-time analysis of password strength
Rule-by-rule validation (length, uppercase, lowercase, digits, symbols)
Password classification (weak, medium, strong)
Secure password generation
Copy-to-clipboard functionality

Step 6: Running the Server Continuously; The server was configured to run in the background using PM2.(all screenshots are provided in pdf file).
This ensures the server restarts automatically if the VM is rebooted.


License:
This project is licensed under the MIT License. You are free to use, modify, and distribute this project for personal or commercial use.

Author:
Anastasiia Iudina
GitHub: @urstassy















