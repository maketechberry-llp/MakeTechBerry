import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Admin login
export const adminLogin = async (req, res) => {
  const email = (req.body?.email || "").trim().toLowerCase();
  const password = (req.body?.password || "").trim();

  try {
    const admin = await Admin.findOne({ email });
    const isMatch = admin ? await bcrypt.compare(password, admin.password) : false;

    console.log("LOGIN DEBUG", {
      email,
      password,
      adminFound: !!admin,
      storedHash: admin?.password,
      isMatch
    });

    if (!admin || !isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      token
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
