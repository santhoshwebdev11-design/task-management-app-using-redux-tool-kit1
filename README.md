# 📝 Task Management App

A simple and responsive **Task Management (Todo) Application** built using **React JS**, **Tailwind CSS**, and **Redux Toolkit**. Tasks are fetched from a **dummy JSON file** to simulate API-based data handling.

---

## 🚀 Features

* ➕ Add new tasks
* ✏️ Edit existing tasks
* 🗑️ Delete tasks
* ✅ Mark tasks as completed
* 📦 Global state management using **Redux Toolkit**
* ⚡ Responsive UI with **Tailwind CSS**
* 📄 Fetch tasks from a dummy `todo.json` file

---

## 🛠️ Tech Stack

* **Frontend:** React JS
* **Styling:** Tailwind CSS
* **State Management:** Redux Toolkit
* **Data Source:** Dummy JSON

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ADDTask.jsx
│   ├── EditTask.jsx
│   └── TaskList.jsx
├── features/
│   ├── store.js
│   └── taskSlice.js
├── data/
│   └── todo.json
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/santhoshwebdev11-design/Task-Management-App-using-Redux-tool-kit
```

2. Navigate to the project directory

```bash
cd task-management-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

---

## 📌 Redux Toolkit Overview

* Centralized task state
* Uses `createSlice` for reducers and actions
* Clean and scalable state management

```js
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask,
    deleteTask,
    updateTask,
  },
});
```

---

## 📄 Dummy JSON Example

```json
[
  {
    "id": 1,
    "title": "Learn Redux Toolkit",
    "completed": false
  }
]
```

---

## 🌱 Future Enhancements

* Replace dummy JSON with real API
* Add user authentication
* Persist tasks using LocalStorage or backend
* Improve mobile responsiveness

---

## 🌐 Live Demo (Vercel)

The project is deployed using **Vercel**.

🔗 **Live URL:** [https://task-manager-vercel-three.vercel.app/](https://task-manager-vercel-three.vercel.app/)

---

## 🙌 Author

**Santhosh N**

* GitHub: [https://github.com/santhoshwebdev11-design/task-management-app-using-redux-tool-kit1](https://github.com/santhoshwebdev11-design/task-management-app-using-redux-tool-kit1)
* LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

---

## ⭐ Support

If you like this project, please ⭐ the repository to support my learning journey!
