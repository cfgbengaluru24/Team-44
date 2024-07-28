const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controller/mailer'); // Import the sendEmail function

// POST endpoint to send emails to multiple recipients
router.post('/requestLeaveReason', async (req, res) => {
    const { emails } = req.body;

    // Custom message
    const subject="Request for Leave Reason";
    const text = 'Dear Employee, please provide the reason for your recent leave.';
    const html = '<p>Dear Employee,</p><p>Please provide the reason for your recent leave.</p>';

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
        return res.status(400).json({ error: 'No email addresses provided' });
    }

    try {
        // Send email to each address
        for (const email of emails) {
            await sendEmail(email, subject, text, html);
        }
        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send emails' });
    }
});

module.exports = router;
