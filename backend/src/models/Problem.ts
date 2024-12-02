import mongoose, { Schema, Document } from 'mongoose';

interface IProblem extends Document {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: {
    input: string;
    output: string;
    explanation: string;
  }[];
  testCases: {
    input: string;
    expectedOutput: string;
  }[];
}

const ProblemSchema = new Schema<IProblem>({
  title: {
    type: String,
    required: true,
    unique: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  examples: [{
    input: { type: String, required: true },
    output: { type: String, required: true },
    explanation: { type: String, required: true }
  }],
  testCases: [{
    input: { type: String, required: true },
    expectedOutput: { type: String, required: true }
  }]
}, {
  timestamps: true
});

export default mongoose.model<IProblem>('Problem', ProblemSchema);