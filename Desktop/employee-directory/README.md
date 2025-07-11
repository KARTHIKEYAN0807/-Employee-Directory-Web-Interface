
---

### ✅ `README.md`

```markdown
# 🧑‍💼 Employee Directory Web Interface

A responsive, modern Employee Directory UI built using **HTML**, **CSS**, **Vanilla JavaScript**, and **Freemarker templates** (as a rendering shell).  
This is a **frontend-only** application using **localStorage** to simulate data handling—no backend or APIs required.

---

## 📋 Features

- ✅ Dashboard with employee cards
- ✅ Add/Edit employees using a dynamic form
- ✅ Client-side validation
- ✅ Real-time search by name or email
- ✅ Filter by department and role
- ✅ Sort by first name or department
- ✅ Paginated views (10 / 25 / 50 / 100 items)
- ✅ Data persisted via `localStorage`
- ✅ Fully responsive layout (mobile/tablet/desktop)
- ✅ Modern theme, animations, and styled UI components

---

## 📁 Project Structure

```

employee-directory/
├── templates/
│   ├── dashboard.ftl         # Main dashboard UI
│   └── form.ftl              # Add/Edit employee form
├── static/
│   ├── css/
│   │   └── style.css         # Styling and animations
│   └── js/
│       ├── app.js            # Dashboard logic
│       └── form.js           # Form handling
├── data/
│   └── employees.json        # \[Optional] mock data
├── server.js                 # Optional server for Freemarker rendering
├── README.md                 # Project info (you’re here)

````

---

## 🚀 Getting Started

### 🧱 Prerequisites

- **Node.js** (if using `server.js` to render Freemarker locally)
- Or simply open the `.ftl` files in a browser if already rendered

### 📦 Setup

```bash
git clone https://github.com/KARTHIKEYAN0807/-Employee-Directory-Web-Interface.git
cd employee-directory
npm install
node server.js
````

Then open:

* `http://localhost:3000/` → Dashboard
* `http://localhost:3000/form` → Add/Edit Employee

> ✅ Alternatively, integrate `.ftl` templates with Spring Boot (if needed)

---

## 🖼️ Screenshots

> *(Add screenshots via GitHub UI or link local images here)*

* ![Dashboard](screenshots/dashboard.png)
* ![Form Page](screenshots/form.png)
* ![Responsive View](screenshots/mobile.png)

---

## 🤔 Reflection

### 💡 Challenges

* Handling filters, search, and pagination together efficiently
* Keeping the UI modern without a CSS framework
* Minimal use of Freemarker while relying on JS

### 🌟 Improvements (Future)

* Add modal-based forms (no redirect)
* Use IndexedDB for structured client-side storage
* Upload employee images/avatars

---

## 📝 License

This project is open for educational and demo purposes.
Feel free to clone, extend, and customize it to suit your needs.

---

👨‍💻 Built with ❤️ by [Karthikeyan](https://github.com/KARTHIKEYAN0807)

```

---