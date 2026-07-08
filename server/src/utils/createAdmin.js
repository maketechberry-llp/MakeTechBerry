import path from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../models/Admin.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const createAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "Your Admin email";
    const adminPassword = process.env.ADMIN_PASSWORD || "Your admin Password";

    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    await Admin.findOneAndUpdate(
      { email: adminEmail },
      {
        $set: {
          email: adminEmail,
          password: hashedPassword,
        },
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );

    await mongoose.disconnect();
    console.log(`✅ Admin ready: ${adminEmail}`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
};

createAdmin();
