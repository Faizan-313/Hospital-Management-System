CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('patient', 'doctor','admin') NOT NULL
);
CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    address TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    specialization VARCHAR(255),
    contact_info VARCHAR(255)
);

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATETIME NOT NULL,
    status ENUM('scheduled', 'completed', 'cancelled') NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);

CREATE TABLE diagnoses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    diagnosis_date DATE NOT NULL,
    diagnosis_text TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
);

CREATE TABLE treatments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    treatment_date DATE NOT NULL,
    treatment_text TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
);


-- future work
-- CREATE TABLE prescriptions (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     appointment_id INT NOT NULL,
--     medication_details TEXT NOT NULL,
--     FOREIGN KEY (appointment_id) REFERENCES appointments(id)
-- );
-- CREATE TABLE billing (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     patient_id INT NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
--     billing_date DATE NOT NULL,
--     status ENUM('paid', 'unpaid') NOT NULL,
--     FOREIGN KEY (patient_id) REFERENCES patients(id)
-- );

