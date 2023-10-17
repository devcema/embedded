![tslog](https://github.com/devcema/embeded/assets/48894599/8faec91e-f3d6-4fed-913b-9d7590b6a71d)
![momoPay](https://github.com/devcema/embeded/assets/48894599/f0f39ae7-4d58-49ed-82c5-0947684c997b)
![ccpay](https://github.com/devcema/embeded/assets/48894599/5ffad693-8b0d-4ac3-889f-ae09db18fc36)
# Embedded Payment Application

This is a sample embedded payment application that demonstrates the integration of a PHP backend with an Angular frontend to handle payment processing. The application allows users to make payments securely within your website using a third-party payment gateway.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Embedding in Your Website](#embedding-in-your-website)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features

- Simulates Payment Gateway api with Mobile Money and Credit Card Options.
- Secure handling of payment transactions.
- An Angular frontend for a user-friendly payment experience.
- A PHP backend for processing payments.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- PHP server set up.
- Angular CLI installed.

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/devcema/embedded.git

## Project Structure
frontend/: Angular frontend code.
backend/: PHP backend code.
docs/: Project documentation and README files.
LICENSE: The license file for the project.
README.md: This file.

##Table
CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `amount` double(10,2) NOT NULL,
  `status` enum('success','failure','pending','') NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `payment_method` enum('Credit Card','Mobile Money','','') NOT NULL,
  `card_number` int(16) DEFAULT NULL,
  `mobile_money` int(13) DEFAULT NULL,
  `momo_provider` varchar(50) DEFAULT NULL,
  `card_name` varchar(16) DEFAULT NULL,
  `card_expiry` varchar(10) DEFAULT NULL,
  `card_cvv` int(11) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

## Configuration
Frontend Configuration:

Open transactions.service.ts and set your API URL.
Replace the placeholder API URL with the URL of your backend API.


Backend Configuration:
create the transaction logs table. Table structure included in file

## Embedding in your website

Set the href of your payment button to the url of hosted angular homepage/initiatepayment
