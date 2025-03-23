# Student Leaderboard

A web-based **student leaderboard** built using **React.js** for the frontend and **PHP** for the backend. This project fetches and displays student rankings using an API.

## Features
✅ Dynamic leaderboard updates  
✅ Social media API integration  
✅ Secure environment variables (`.env`)  
✅ PHP backend for data processing  
✅ XAMPP recommended for local backend setup  

## Installation & Setup

### Frontend (React.js)
1. Clone the repository:  
   ```sh
   git clone https://github.com/Aditya367367/student-leaderboard.git
   cd student-leaderboard
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add:  
   ```env
   REACT_APP_API_URL=http://localhost/leaderboard
   REACT_APP_FACEBOOK_API_KEY=your_facebook_api_key
   REACT_APP_TWITTER_API_KEY=your_twitter_api_key
   ```
4. Start the React app:  
   ```sh
   npm start
   ```

### Backend (PHP)
1. Install **XAMPP** from [here](https://www.apachefriends.org/index.html).  
2. Start **Apache** and **MySQL** in the XAMPP Control Panel.  
3. Move the backend PHP files to:  
   ```
   C:\xampp\htdocs\leaderboard
   ```
4. Import the database using `phpMyAdmin`:
   - Open `http://localhost/phpmyadmin/`
   - Create a new database: `leaderboard_db`
   - Import `leaderboard_db.sql`
5. Start the backend:  
   ```
   http://localhost/leaderboard
   ```

## Technologies Used
- **Frontend:** React.js, Tailwind CSS  
- **Backend:** PHP, MySQL  
- **API Integration:** Social media APIs (Facebook, Twitter, etc.)  
- **Development Tools:** XAMPP, VS Code  

## Contributing
1. Fork the repo  
2. Create a feature branch:  
   ```sh
   git checkout -b feature-name
   ```
3. Commit changes & push  
4. Open a pull request  

## License
This project is **open-source**. Feel free to modify and distribute. Developed by **Aditya Chauhan**.