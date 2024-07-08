# OTP Generator

This is a simple OTP (One Time Password) generator application built using Node.js. It provides functionality to generate and send OTPs via email.

## Configuration

Setting up the environment variables(env)

- `PORT`: The port on which the server will run.
- `MONGO_URI`: The URI for your MongoDB database.
- `SMTP_HOST`: SMTP server host.
- `SMTP_PORT`: SMTP server port.
- `SMTP_USER`: SMTP username (usually your email address).
- `SMTP_PASS`: SMTP password.
- `FROM_EMAIL`: Email address from which the OTP emails will be sent.
- `JWT_SECRET`: Secret key for JWT token generation.

## Usage

To start the server in development mode with automatic reloading:

```bash
npm run dev
```

To start the server in production mode:

```bash
npm start
```

## Endpoints

- `POST /generate-otp`: Generates and sends an OTP to the provided email address.

  - Request Body:

    ```json
    {
      "email": "recipient@example.com"
    }
    ```

- `POST /verify-otp`: Verifies the provided OTP.

  - Request Body:

    ```json
    {
      "email": "recipient@example.com",
      "otp": "123456"
    }
    ```

## Protocol Used
- SMTP (Simple Mail Transfer Protocol)

## Service
- Gmail (2FA for App Passwords)

## Technologies Used

- Node.js
- Express.js
- MongoDB for storing OTPs temporarily
- Nodemailer for sending mail
- Randomstring
- Dotenv

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
