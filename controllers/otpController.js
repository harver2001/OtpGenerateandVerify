const Otps = require('../models/otpModel.js');
const randomstring = require('randomstring');
const sendEmail = require('../utils/sendEmails');

function generateOTP() {
    return randomstring.generate({
        length: 6,
        charset: 'numeric'
    });
}

exports.sendOTP = async (req, res) => {
    try {
        const { email } = req.query;
        const otp = generateOTP(); // Generate a 6-digit OTP
        const newOTP = new Otps({ email, otp });
        await newOTP.save();
        
        await sendEmail({
            to: email,
            subject: 'Your OTP',
            message: `<p>Your OTP is: <strong>${otp}</strong></p>`,
        });

        res.status(200).json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.query;
        const existingOTP = await Otps.findOneAndDelete({ email, otp });
        
        if (existingOTP) {
            res.status(200).json({ success: true, message: 'OTP verification successful' });
        } else {
            res.status(400).json({ success: false, error: 'Invalid OTP' });
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};
