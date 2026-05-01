# Firebase Setup

This project is configured for Firebase App Hosting with Firebase Auth and Firestore.
The App Hosting root directory is the repository root because `package.json` lives there.

## 1. Create or select a Firebase project

In the Firebase console:

1. Create/select the Firebase project.
2. Add a Web app.
3. Copy the web app config into `Lightning Certification/firebase-config.js`.
4. Enable Authentication -> Sign-in method -> Email/Password.
5. Create a Firestore database.

## 2. Update project placeholders

Replace `REPLACE_WITH_PROJECT_ID` in `.firebaserc`.

Replace every placeholder in:

```text
Lightning Certification/firebase-config.js
```

## 3. Deploy

Install the Firebase CLI if needed:

```sh
npm install -g firebase-tools
```

Then from this folder for classic Firebase Hosting:

```sh
firebase login
firebase deploy
```

For Firebase App Hosting in the Firebase Console, select:

```text
App root directory: /
Live branch: main
```

## Data Written

Completed attempts are written to the top-level `examAttempts` collection. Each document includes:

- user id, name, and email
- score, total questions, percentage, and pass/fail
- started/completed timestamps and duration
- per-question chosen answer and correct answer

User profile metadata is written to `users/{uid}`.

Firestore rules only allow signed-in users to create attempts for their own account and read their own attempts. Firebase Console and Admin SDK access can still be used by administrators for reporting.
