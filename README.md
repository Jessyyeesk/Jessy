# PPSY - Dr. D. Lirious' Mind Maze Escape Room 🧠🔑

An interactive, browser-based educational escape room game designed for Foundation Level **Introduction to Psychology** students. This application covers core topics in **Abnormal Psychology**, including Major Depressive Disorder, Bipolar I Disorder, Persistent Depressive Disorder (Dysthymia), and Schizophrenia.

---

## 📋 Features & Design

1. **Integrated Escape Gameplay**: Explore clinical chambers, inspect interactive visual evidence props (diaries, medical charts, audio recorders), and solve diagnostic locks at security terminals.
2. **Pedagogically Aligned Questions**: 5 real-world case scenarios requiring differential diagnostic logic.
3. **Flexible Game Modes**:
   - **Timed Escape**: 10-minute countdown challenge.
   - **Untimed Mode**: Stress-free, self-paced learning.
4. **Instant Diagnostic Feedback**: Explanations provided immediately after each diagnostic choice.
5. **Dynamic Scoring & Anti-Exploit**: Single-click score submission per trial prevent duplicate scoring.
6. **Zero Dependencies**: Pure vanilla HTML5, CSS3, and ES6 JavaScript. No frameworks or external asset calls.

---

## 💻 Local Testing Instructions

1. Download or clone this project folder.
2. Ensure the directory contains:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Double-click `index.html` to open it in modern desktop or mobile browser (Chrome, Firefox, Safari, Edge).

---

## 🚀 How to Publish on GitHub Pages

1. **Create a GitHub Repository**:
   - Log into your GitHub account and create a new public repository (e.g., `ppsy-escape-room`).
2. **Upload Files**:
   - Commit and push `index.html`, `style.css`, `script.js`, and `README.md` directly to the `main` branch root.
3. **Enable GitHub Pages**:
   - Navigate to **Settings** > **Pages** in your repository.
   - Under **Source**, select **Deploy from a branch**.
   - Choose `main` branch and `/ (root)` folder.
   - Click **Save**.
4. **Access Your Live Game**:
   - Your site will be published at `https://<your-username>.github.io/ppsy-escape-room/`.

---

## ✏️ How to Edit or Add Questions

All diagnostic questions and clinical scenarios are stored in `script.js` inside the `questionBank` array.

To modify or add a question:
1. Open `script.js` in any text editor.
2. Locate the `questionBank` array starting at line 12.
3. Edit any scenario object following this template:

```javascript
{
    id: 6,
    roomTitle: "Chamber 6: Custom Chamber",
    subtitle: "Diagnose Patient F",
    clues: [
        { id: "prop1", name: "Clue Name", text: "Clue clinical text here..." }
    ],
    svgGraphics: `<svg>...your SVG code...</svg>`,
    scenario: "Describe the clinical case here...",
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctIndex: 0, // 0 corresponds to Option A, 1 to B, etc.
    explanation: "Educational explanation for correct answer..."
}