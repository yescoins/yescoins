import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
        //import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
        import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
      apiKey: "AIzaSyDv25RohGhKcxDlt1DZaPb7BUg7LpWnJqo",
      authDomain: "yes-coins-6a2d2.firebaseapp.com",
      databaseURL: "https://yes-coins-6a2d2-default-rtdb.firebaseio.com",
      projectId: "yes-coins-6a2d2",
      storageBucket: "yes-coins-6a2d2.firebasestorage.app",
      messagingSenderId: "868288595143",
      appId: "1:868288595143:web:cc8e500e6c3c8cc4ab2ae2",
      measurementId: "G-9XL5H32P79"
    };

        const app = initializeApp(firebaseConfig);
        //const analytics = getAnalytics(app);
        const database = getDatabase(app);
        
        export{ database };

