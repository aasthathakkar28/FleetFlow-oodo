# FleetFlow-odoo
Video link : https://drive.google.com/file/d/1YRhJdvkVfFfhbPxMtVNSr3JCRpGuptFl/view?usp=sharing

Full Project Link : file:///C:/Users/yashs/Desktop/programming/FleetFlow/index.html  
                   or C:/Users/yashs/Desktop/programming/FleetFlow/index.html
# 🚚 FleetFlow

**FleetFlow** is a modular, rule-driven **Fleet & Logistics Management System** built to digitize and optimize end-to-end fleet operations. It replaces fragmented manual processes with a centralized command platform that ensures **operational efficiency, compliance enforcement, and data-driven decision-making**.

Designed as a **high-impact hackathon MVP**, FleetFlow demonstrates how real-world logistics challenges can be solved using clean UI, modular architecture, and automated business logic.

### 🚀 Why FleetFlow?

Modern fleet operations struggle with poor visibility, manual errors, and disconnected data across vehicles, drivers, trips, and expenses. FleetFlow introduces a single source of truth that:

* Enforces operational rules automatically
* Reduces human errors during dispatch
* Improves vehicle utilization and safety compliance
* Provides actionable financial and performance insights

---

## 🚩 Problem Statement

Many logistics and delivery operations still rely on manual processes that result in:

* Poor visibility of vehicle availability and utilization
* Errors in trip assignment due to missing capacity validation
* Difficulty tracking driver compliance and safety
* Inaccurate fuel, maintenance, and ROI analysis

FleetFlow solves these challenges by providing a unified system that enforces business rules, automates state changes, and delivers actionable insights through dashboards and reports.

---

## 👥 Target Users

* **Fleet Managers** – Monitor vehicle health, lifecycle status, and availability
* **Dispatchers** – Create trips, assign vehicles and drivers, and manage dispatch workflows
* **Safety Officers** – Track driver compliance, license validity, and safety performance
* **Financial Analysts** – Analyze fuel costs, maintenance expenses, and vehicle ROI

---

## 🧩 Core Modules & Features

### 🔐 Authentication & Access Control

* Secure email and password-based login
* Role-based access control (Manager / Dispatcher)

---

### 📊 Command Center (Main Dashboard)

* Active Fleet count (vehicles currently on trip)
* Maintenance alerts (vehicles in service)
* Fleet utilization rate
* Pending cargo assignments
* Filters by vehicle type, status, and region

---

### 🚚 Vehicle Registry (Asset Management)

* Add, update, and view fleet vehicles
* Track:

  * Vehicle model and name
  * License plate (unique identifier)
  * Load capacity
  * Odometer readings
* Manual toggle to mark vehicles as **Out of Service / Retired**

---

### 🛣️ Trip Dispatcher & Management

* Create trips by selecting available vehicles and drivers
* **Capacity validation rule** prevents trip creation if cargo weight exceeds vehicle capacity
* Trip lifecycle management:

  * Draft → Dispatched → Completed → Cancelled
* Automatic status updates for vehicles and drivers

---

### 🛠️ Maintenance & Service Logs

* Log preventive and corrective maintenance
* Automatic vehicle status update to **In Shop** when added to service log
* Vehicles under maintenance are removed from dispatcher selection

---

### ⛽ Expense, Fuel & Cost Tracking

* Record fuel consumption (liters, cost, date)
* Log maintenance expenses per vehicle
* Automated calculation of total operational cost per vehicle

---

### 👨‍✈️ Driver Performance & Safety Profiles

* License expiry tracking (blocks assignment if expired)
* Driver status management: On Duty, Off Duty, Suspended
* Performance metrics:

  * Trip completion rate
  * Safety score

---

### 📈 Analytics & Reporting

* Fuel efficiency (km/l)
* Vehicle ROI calculation
* Exportable reports in CSV and PDF formats

---

## 🔄 System Workflow Overview

1. Vehicle is added to the system → Status set to **Available**
2. Driver is registered → License validity is verified
3. Trip is created with vehicle and driver assignment

   * Cargo capacity is validated before dispatch
4. Trip is completed → Vehicle and driver become **Available** again
5. Maintenance is logged → Vehicle status automatically changes to **In Shop**
6. Analytics dashboards update cost-per-kilometer and ROI metrics

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3 (Modular and responsive layout)
* Vanilla JavaScript

### API & Data Layer

* GraphQL (Query and Mutation based architecture)
* Rule-based state management

---

## 📁 Project Structure

```
fleetflow/
│
├── index.html            # Login page
├── dashboard.html        # Command Center
├── vehicles.html         # Vehicle Registry
├── trips.html            # Trip Management
├── analytics.html        # Reports & Analytics
│
├── css/                  # Stylesheets
├── js/                   # JavaScript modules
└── components/           # Reusable UI components
```

---

## 🌟 Key Highlights

* Real-world logistics use case
* Rule-based automation and validation
* Clean, professional admin dashboard UI
* Modular and scalable architecture
* Hackathon-ready MVP

---

## 🚀 Future Enhancements

* Real-time vehicle tracking
* Map-based dispatch visualization
* Advanced analytics and AI-driven insights
* Mobile-responsive optimization

---

## 👨‍💻 Author

**Yash Suba**   
    Aastha Thakkar
    Palak Patel
