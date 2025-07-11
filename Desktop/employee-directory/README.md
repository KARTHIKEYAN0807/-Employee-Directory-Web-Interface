### ✅ `README.md`

```markdown
# 🧑‍💼 Employee Directory Web Interface

A responsive and interactive Employee Directory built using **HTML**, **CSS**, **Vanilla JavaScript**, and **Freemarker templates** (rendering shell only). This app is fully **frontend-only** and simulates data handling using **localStorage**, with no backend or APIs required.

---

## 📋 Features

- ✅ Dashboard with Employee Cards
- ✅ Add/Edit Employee via Form
- ✅ Client-side Form Validation
- ✅ Search by Name or Email
- ✅ Filter by Department and Role
- ✅ Sort by First Name or Department
- ✅ Pagination (10/25/50/100)
- ✅ In-memory Data Storage (localStorage)
- ✅ Responsive Design for Mobile & Desktop

---

## 📁 Project Structure

```

employee-directory/
├── templates/
│   ├── dashboard.ftl         # Main dashboard UI
│   └── form.ftl              # Add/Edit employee form
├── static/
│   ├── css/
│   │   └── style.css         # Styling
│   └── js/
│       ├── app.js            # Dashboard interactivity
│       └── form.js           # Form validation & save
├── data/
│   └── employees.json        # \[Optional] mock data (unused in final)
├── server.js                 # Optional (for local Freemarker rendering)
├── README.md                 # You're reading this

````

---

## 🚀 Getting Started

### 🧱 Prerequisites

- Node.js installed (only if using Freemarker locally via server.js)
- Or open `dashboard.ftl` and `form.ftl` in browser if pre-rendered

### 📦 Setup

```bash
git clone https://github.com/your-username/employee-directory.git
cd employee-directory
npm install
node server.js
````

Then open:
➡️ `http://localhost:3000/` for Dashboard
➡️ `http://localhost:3000/form` for Add/Edit page

> You can also serve `.ftl` files using Spring Boot (optional).

---

## 🖼️ Screenshots

> *Screenshots go here (dashboard + form + filters + mobile view)*
> Add via GitHub UI or `![desc](screenshot.png)` in markdown

---

## 🤔 Reflection

### ✅ Challenges Faced:

* Managing pagination + filtering simultaneously
* Keeping Freemarker integration light while relying on JS
* Ensuring full responsiveness without CSS frameworks

### ✅ What I'd Improve:

* Add modal-based form instead of navigating to a separate form page
* Use IndexedDB for more structured local data handling
* Add image/avatar support per employee

---

## 📝 License

This project is free to use for educational or demonstration purposes.

---

