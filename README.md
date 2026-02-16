# 💬 ChatApp - Real-time Chat Application

Welcome to **ChatApp**, a real-time, full-stack chat application built with the **MERN** stack and **Socket.IO**, featuring authentication, cloud-based image upload, smooth UI animations (Lenis), and one-on-one messaging.

---

## 🚀 Features

- 👤 **User Authentication** – Sign up, log in, and log out securely using JWT & cookies.
- 📩 **Real-time Messaging** – Chat live using Socket.IO.
- 🧾 **Message History** – View previous conversations with timestamps.
- 📷 **Profile Picture Upload** – Upload profile photos via Cloudinary.
- 📡 **Online Status** – See who is online in real-time.
- 💨 **Smooth Scrolling** – Seamless experience with Lenis.
- 🔒 **Protected Routes** – Only logged-in users can access chats.
- 📱 **Responsive UI** – Works on all screen sizes.

---

## 🧠 Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS**
- **React Router**
- **Zustand** (state management)
- **Axios**
- **Lucide Icons**

### Backend
- **Node.js & Express**
- **MongoDB Atlas** (Mongoose ODM)
- **Socket.IO**
- **Cloudinary** (Image upload)
- **JWT Authentication**
- **dotenv, cors, cookie-parser**

---

## Directory
```bash
shreyansh2k23-chat-app/
    ├── README.md
    ├── backend/
    │   ├── package.json
    │   └── src/
    │       ├── index.js
    │       ├── controllers/
    │       │   ├── auth.controller.js
    │       │   └── message.controller.js
    │       ├── lib/
    │       │   ├── cloudinary.js
    │       │   ├── db.js
    │       │   ├── socket.js
    │       │   └── utils.js
    │       ├── middleware/
    │       │   └── auth.middleware.js
    │       ├── models/
    │       │   ├── message.model.js
    │       │   └── user.model.js
    │       ├── routes/
    │       │   ├── auth.route.js
    │       │   └── message.route.js
    │       └── seeds/
    │           └── user.seed.js
    └── frontend/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── vite.config.js
        └── src/
            ├── App.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── animate/
            │   └── MagniteLine.jsx
            ├── components/
            │   ├── AuthImagePattern.jsx
            │   ├── ChatContainer.jsx
            │   ├── ChatHeader.jsx
            │   ├── MessageInput.jsx
            │   ├── Navbar.jsx
            │   ├── NoChatSelected.jsx
            │   ├── Sidebar.jsx
            │   └── skeletons/
            │       ├── MessageSkeleton.jsx
            │       └── SidebarSkeleton.jsx
            ├── constants/
            │   └── index.js
            ├── Lib/
            │   ├── axios.js
            │   └── utils.js
            ├── pages/
            │   ├── HomePage.jsx
            │   ├── LoginPage.jsx
            │   ├── ProfilePage.jsx
            │   ├── SettingsPage.jsx
            │   └── SignUpPage.jsx
            └── Store/
                ├── useAuthStore.js
                ├── useChatStore.js
                └── useThemeStore.js

```

## 🔧 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chatapp.git
cd chatapp
