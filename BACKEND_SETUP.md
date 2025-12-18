# The Can Buddy Backend Setup

## Email Configuration

To enable the contact form to send emails, you need to configure Gmail with an app-specific password:

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Other" as the device and name it "The Can Buddy"
4. Click "Generate"
5. Copy the 16-character password (remove spaces)

### Step 3: Configure Environment Variables

1. Open `backend/.env`
2. Replace `your-gmail@gmail.com` with your Gmail address
3. Replace `your-app-password-here` with the generated app password

Example:

```
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=abcdwxyzabcdwxyz
PORT=3001
```

## Running the Backend

### Install Dependencies

```bash
cd backend
npm install
```

### Start the Server

From the root directory:

```bash
npm run backend
```

Or from the backend directory:

```bash
npm run dev
```

The server will run on http://localhost:3001

## Running the Full Application

1. In one terminal, start the frontend:

```bash
npm run dev
```

2. In another terminal, start the backend:

```bash
npm run backend
```

The contact form will now send emails to your configured Gmail address when users submit the form.
