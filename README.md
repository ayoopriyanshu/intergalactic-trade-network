# Intergalactic Trade Network (Assignment)

## Project Overview

The Intergalactic Trade Network is a backend system designed to handle trade transactions, manage space cargo, and track space station inventory. It supports high-throughput data, provides real-time updates on trade activities across multiple planets and space stations, and includes a real-time analytics dashboard.

## Features

- **Trade Transactions:** Initiate and retrieve trade transactions between space stations and planets.
- **Cargo Management:** Create and retrieve cargo shipments with status tracking.
- **Inventory Tracking:** Monitor inventory levels at space stations and planets.
- **Real-Time Updates:** Fetch real-time updates on trade and cargo status.
- **Real-Time Analytics Dashboard:** Displays metrics and visualizations of trade volumes, cargo shipments, and inventory levels.

## Getting Started

### Prerequisites

- Node.js (v18.x or later)
- MongoDB (local or cloud instance)

### Test API 

You can test the api using the deployed link: https://intergalactic-trade-network-1zsp.onrender.com/

You can test the following endpoints:

- **POST**: /api/trades - Initiate a new trade transaction.

- **GET**: /api/trades/{transactionld} - Retrieve details of a trade transaction.

- **POST**: /api/cargo - Create a new cargo shipment.

- **GET**: /api/cargo/{shipmentld} - Retrieve cargo shipment details.

- **GET**: /api/inventory/{stationld} - Retrieve inventory levels for a space station.

- **GET**: /api/updates/real-time - Retrieve real-time updates on trade and cargo status.

### Install locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/intergalactic-trade-network.git
   cd intergalactic-trade-network

2. **Install Dependencies**
   ```bash
   npm install

3. **Setup Enviroment Variables**

   Create a .env file in root directory
   ```bash
   MONGO_URI=...
   PORT=...

   
   

