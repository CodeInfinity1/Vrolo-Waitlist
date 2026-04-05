import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWaitlistEntry extends Document {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  createdAt: Date;
}

const WaitlistSchema = new Schema<IWaitlistEntry>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [150, 'Company name cannot exceed 150 characters'],
    },
    role: {
      type: String,
      trim: true,
      maxlength: [100, 'Role cannot exceed 100 characters'],
    },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: false },
  }
);

const Waitlist: Model<IWaitlistEntry> =
  mongoose.models.Waitlist ||
  mongoose.model<IWaitlistEntry>('Waitlist', WaitlistSchema);

export default Waitlist;
