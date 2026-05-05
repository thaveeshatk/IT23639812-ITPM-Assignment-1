# 🌐 IT23639812 — ITPM Assignment 1
### Singlish → Sinhala Transliteration Testing

> **Assignment 1:** Singlish to Sinhala Transliteration Testing  
> This repository contains the Playwright test automation project for evaluating a Singlish to Sinhala chat translator. The script reads 50 chat style Singlish test cases from an Excel file, inputs them into the web application, and automatically records the actual Sinhala output and the test status (Fail) back into the Excel sheet.

---

## ⚙️ Prerequisites

Before running the script, make sure you have the following installed on your machine:

- 🐍 **Python** 3.11 or 3.12
- 🌐 **Google Chrome** (Recommended)

---

## 🚀 Setup & Installation

**1.** Download and extract the project folder.

**2.** Open your **Command Prompt (CMD)** or terminal and navigate to the extracted folder.

**3.** Update pip *(optional but good practice)*:
```bash
pip install -U pip
```

**4.** Install the required Python dependencies:
```bash
pip install playwright openpyxl
```

**5.** Install the Playwright browsers:
```bash
playwright install
```

---

## ▶️ How to Run the Tests

Open your Command Prompt inside the project directory and run the following command:

```bash
python test_automation.py \
  --excel "Assignment 1 - Test cases.xlsx" \
  --url "https://www.pixelssuite.com/chat-translator" \
  --wait-ms 5000 \
  --type-delay-ms 80 \
  --slow-mo-ms 200 \
  --save-every 1 \
  --keep-open
```

---

## 📁 Project Structure

| File | Description |
|------|-------------|
| `test_automation.py` | The main Python script that runs the Playwright automation. |
| `Assignment 1 - Test cases.xlsx` | The Excel file containing the 50 test scenarios. The script will write the actual results directly into this file. |
| `IT23639812.txt` | Text file containing the Git repository link |
| `README.md` | Setup and execution instructions. |

---

## 🛠️ Setup Instructions

### Install Python
Python 3.10+ is installed.  
Check:
```bash
python --version
```

### Install Dependencies
```bash
pip install playwright openpyxl
```

### Install Playwright Browsers
```bash
playwright install
```

---

## 🏃 How to Run the Script

Navigate to your project folder:
```bash
cd test_automation
```

Run:
```bash
python test_script.py
```

---

## 📊 Excel File Requirements

Your Excel file must include these columns:

| Column Name | Description |
|-------------|-------------|
| Input | Singlish text |
| Expected Output | Expected Sinhala translation |
| Actual Output | *(Auto-filled by script)* |
| Status | FAIL |

---

## 🔄 How It Works

```
1. Opens the translator website
2. Finds input and output text areas
3. Enters Singlish input
4. Clicks Transliterate button
5. Captures Sinhala output
6. Compares with expected result
7. Updates Excel file
```

---

## 🌍 Tested Website

🔗 [https://www.pixelssuite.com/chat-translator](https://www.pixelssuite.com/chat-translator)

---

## 📤 Output

After execution:

- ✅ **Actual Output** column is filled
- 🔴 **Status** column shows:
  - `FAIL` → Incorrect translation

---

## 📝 Notes

> - Keep internet connection stable
> - Do not close browser during execution
> - Ensure Excel file is closed before running script
