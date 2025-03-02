# Hospital Management System

## Overview

The **Hospital Management System** is designed to streamline the operations of a hospital or medical center. This system facilitates efficient management of patient records, appointments, doctor details, and other administrative tasks, ensuring seamless coordination between different departments.

## Features

- **Patient Management**: Register new patients, update existing records, and maintain comprehensive patient histories.
- **Appointment Scheduling**: Book appointments with ease.
- **Doctor Management**: Manage doctor profiles, roles, and schedules to ensure optimal resource allocation.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node. js , express
- **Database**: MySQL

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Faizan-313/Hospital-Management-System.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Hospital-Management-System
   ```

3. **Install dependencies**:

   - For the backend:

     ```bash
     cd Backend
     npm install
     ```

   - For the frontend:

     ```bash
     cd Frontend
     npm install
     ```

4. **Set up the database**:

   - Set up the database, using query.sql file 

5. **Configure environment variables**:

   - SALT_ROUNDS
   - JWT_SECRET
   - DB_HOST
   - DB_PASSWORD
   - DB_NAME
   - DB_USER

6. **Start the application**:

   - For the backend:

     ```bash
     nodemon server.js
     ```

   - For the frontend:

     ```bash
     npm run dev
     ```

7. **Access the application**:

   - Open your browser and navigate to `http://localhost:5173`
   - At start push details of admin to database using mysql workbench or terminal as per user schema
   - Login as admin then add doctors in doctors tab


## Contributing

We welcome contributions to enhance the functionality of this **Hospital Management System**. To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request.

## License

MIT License
