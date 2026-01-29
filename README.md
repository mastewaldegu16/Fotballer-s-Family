# ⚽ Footballer's Family

**Footballer's Family** is a web-based community platform where football lovers can connect, share ideas, and discuss football-related topics in a moderated chat environment.

The platform includes **user registration with admin approval**, **role-based access**, and a **football-only discussion chatbot**.

---

## 🚀 Features

### 👤 User Features
- User signup with the following details:
  - Username
  - City of residence
  - Playing position
  - Gender (Male / Female)
  - Password
- Login after admin approval
- Football-only community chat
- Messages unrelated to football are automatically rejected

### 🛡️ Admin Features
- Admin login
- Admin dashboard to:
  - View registered users
  - See only:
    - Username
    - City
    - Playing position
    - Gender
  - Approve or reject users
- Admin can also participate in chat discussions

---

## 🧑‍💻 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Backend & Database:** Supabase
- **Authentication:** Supabase Auth
- **Hosting:** Vercel (Free Tier)
- **Language:** TypeScript / JavaScript

---

## 📁 Project Structure

```txt
footballers-family/
├── app/
│   ├── dashboard/page.tsx   # Admin dashboard
│   ├── home/page.tsx        # Football chat page
│   ├── login/page.tsx       # Login page
│   ├── signup/page.tsx      # Signup page
│   └── layout.tsx           # Root layout
│
├── lib/
│   └── supabase.ts          # Supabase client
│
├── package.json
├── next.config.js
└── README.md
