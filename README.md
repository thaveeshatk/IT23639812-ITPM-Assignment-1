Assignment 1: option 1:  Singlish to Sinhala Transliteration Testing This repository contains the Playwright test automation project for evaluating a Singlish to Sinhala chat translator. The script reads 50 chat style Singlish test cases from an Excel file, inputs them into the web application, and automatically records the actual Sinhala output and the test status (Fail) back into the Excel sheet.

Prerequisites Before running the script, make sure you have the following installed on your machine:

Python 3.11 or 3.12 Google Chrome (Recommended) Setup & Installation Download and extract the project folder. Open your Command Prompt (CMD) or terminal and navigate to the extracted folder. Update pip (optional but good practice): pip install -U pip Install the required Python dependencies: pip install playwright openpyxl Install the Playwright browsers: playwright install How to Run the Tests Open your Command Prompt inside the project directory and run the following command:

python IT23639812.py --excel "IT23639812.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 15000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open Project Structure IT23639812.py : The main Python script that runs the Playwright automation.

IT23639812.xlsx : The Excel file containing the 50 test scenarios. The script will write the actual results directly into this file.

IT23639812.txt : Text file containing the Git repository link

README.md : Setup and execution instructions.

Setup Instructions

Install Python

Python 3.10+ is installed.

Check:

bash python --version

Install Dependencies

bash pip install playwright openpyxl

Install Playwright Browsers

bash playwright install

How to Run the Script

Navigate to your project folder:

bash cd test_automation

Run:

bash python test_script.py

Excel File Requirements

Your Excel file must include these columns:

Column Name	Description
Input	Singlish text
Expected Output	Expected Sinhala translation
Actual Output	(Auto-filled by script)
Status	FAIL
How It Works

Opens the translator website
Finds input and output text areas
Enters Singlish input
Clicks Transliterate button
Captures Sinhala output
Compares with expected result
Updates Excel file
Tested Website

https://www.pixelssuite.com/chat-translator
Output

After execution:

Actual Output column is filled
Status column shows:
FAIL → Incorrect translation

Notes

Keep internet connection stable
Do not close browser during execution
Ensure Excel file is closed before running script
