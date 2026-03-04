export type Role = "ADMIN" | "TEACHER" | "STUDENT";

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends BaseEntity {
  email: string;
  passwordHash: string;
  name: string;
  avatarUrl?: string;
  role: Role;
  isSuspended: boolean;
}

export interface Course extends BaseEntity {
  title: string;
  description: string;
  teacherId: string;
  price: number;
  isPublished: boolean;
}

export interface Enrollment extends BaseEntity {
  studentId: string;
  courseId: string;
  progressPercent: number; // 0 - 100
}

export type QuestionType = "MCQ" | "TRUE_FALSE" | "SHORT" | "LONG";

export interface Quiz extends BaseEntity {
  courseId: string;
  title: string;
  description?: string;
  durationMinutes: number;
  totalMarks: number;
}

export interface Question extends BaseEntity {
  quizId: string;
  type: QuestionType;
  text: string;
  options?: string[]; // for MCQ
  correctOptionIndex?: number; // for MCQ / TRUE_FALSE (0 or 1)
  maxMarks: number;
}

export interface QuizAttempt extends BaseEntity {
  quizId: string;
  studentId: string;
  answers: QuizAnswer[];
  obtainedMarks: number;
  completedAt: Date;
}

export interface QuizAnswer {
  questionId: string;
  answerText?: string;
  selectedOptionIndex?: number;
}

export interface Assignment extends BaseEntity {
  courseId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  maxMarks: number;
}

export interface AssignmentSubmission extends BaseEntity {
  assignmentId: string;
  studentId: string;
  contentText?: string;
  attachmentUrl?: string;
  obtainedMarks?: number;
  teacherFeedback?: string;
}

export interface Conversation extends BaseEntity {
  // one-to-one or class/course-based
  type: "DIRECT" | "CLASS" | "COURSE";
  participantIds: string[]; // for DIRECT
  classId?: string;
  courseId?: string;
}

export interface Message extends BaseEntity {
  conversationId: string;
  senderId: string;
  content: string;
  attachmentUrl?: string;
  readByIds: string[];
}

export interface Notice extends BaseEntity {
  title: string;
  content: string;
  createdById: string;
  targetRoles?: Role[];
  targetClassIds?: string[];
  targetCourseIds?: string[];
}

export interface Notification extends BaseEntity {
  userId: string;
  noticeId?: string;
  type: "NOTICE" | "MESSAGE" | "SYSTEM";
  title: string;
  content: string;
  isRead: boolean;
}

export interface LiveSession extends BaseEntity {
  courseId: string;
  teacherId: string;
  scheduledAt: Date;
  durationMinutes: number;
  joinCode: string;
}

export interface Payment extends BaseEntity {
  studentId: string;
  courseId: string;
  amount: number;
  currency: string;
  status: "PENDING" | "COMPLETED" | "FAILED";
  provider: string;
  externalReference?: string;
}

export interface UsageLog extends BaseEntity {
  userId: string;
  feature: string;
  details?: string;
}

export interface ProgressRecord extends BaseEntity {
  studentId: string;
  courseId: string;
  completedPercent: number;
  totalLearningMinutes: number;
}
