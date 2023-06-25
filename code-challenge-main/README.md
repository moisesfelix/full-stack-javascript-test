# Full Stack JavaScript Test

## Project Overview

The project is a simplified payment application that needs further development. It consists of frontend, backend, and a payment API component. The frontend displays existing payments and allows users to create new payments using a form. Your role as the developer is to complete several tasks to enhance the application.


## To begin:

Install dependencies in the following directories:

`./, ./frontend, ./backend, ./payment-api`.

Run `npm start` in the project's root directory.
If any errors occur, you may need to modify `./.env` to select unused ports.

## Project Structure

The root directory serves as a container for the example application's frontend, backend, and payment API components.

The `./.env` (dotenv) file controls the ports on which each component runs. You may need to modify this file if the ports are already in use on your computer.

Running npm start in the root directory starts all application components. To stop everything, press Ctrl-C.

NOTE: npm start does not install dependencies for each component.

### frontend

The `./frontend` directory contains a React application that provides auto-reloading and browser updates when file changes occur.

#### The frontend consists of two pages:

The main page displays a simple tabular view of current payments.
The form page enables the creation of new payments.

### backend

The `./backend` directory includes an Express server that acts as the backend for the frontend. It automatically reloads when file changes occur.

The frontend proxies requests for /api/* to the backend (refer to ./frontend/src/setupProxy.js), allowing the backend to be accessible on the same URL.

The backend's /api/* is responsible for making the payment-api available to the frontend.

### payment-api

The `./payment-api` directory contains a simple Express server that simulates an internal API. It automatically reloads when file changes occur.

The payment API consists of two endpoints:

GET /api/payments: Returns a list of existing payments.
POST /api/payments: Creates a new payment.
For the purpose of this test, payment data can be stored in memory.

## Tasks to Complete

Your objective is to complete the following tasks. Feel free to choose your approach, but keep the solution straightforward. Prioritize the tasks below, focus on production services rather than UI, and feel free to express your preferences, opinions, and strengths where applicable.

To ensure clarity, avoid unnecessary file and code movements, enabling reviewers to easily identify changes made.

### Tasks:

- Fetch and display the list of existing payments

Update the PaymentsList page to retrieve and display the current list of payments from the payment-api. The payment-api already provides some example payments by default.

- Handle form submission to create new payments

Implement the form on the PaymentCreate page to collect data and create a new payment based on the entered information. All payment details entered by the user should be required. After successful submission, redirect the browser to the list page where the new valid payment will be visible.

- Secure the payment-api with an API key

Ensure that only authorized requests have access to the internal payment-api. All requests to the payment-api should include a valid API key. You can configure the API key as a static or hard-coded value, and using an environment variable would be a suitable approach.

- Assign a unique id to each new payment

Generate a unique ID for each newly created payment. The ID should meet the following criteria:

	1. Be unique for all payments.
	2. Consist of 7 characters.
	3. Use the characters "ABCDEFGHIJLMNOPQRSTUVXYZ1234567890"
