import { randomUUID } from "crypto";
import type {
  User,
  Course,
  Enrollment,
  Quiz,
  Question,
  QuizAttempt,
  Assignment,
  AssignmentSubmission,
  Conversation,
  Message,
  Notice,
  Notification,
  LiveSession,
  Payment,
  UsageLog,
  ProgressRecord,
  Role,
} from "./types";

export interface DataStore {
  users: User[];
  courses: Course[];
  enrollments: Enrollment[];
  quizzes: Quiz[];
  questions: Question[];
  quizAttempts: QuizAttempt[];
  assignments: Assignment[];
  assignmentSubmissions: AssignmentSubmission[];
  conversations: Conversation[];
  messages: Message[];
  notices: Notice[];
  notifications: Notification[];
  liveSessions: LiveSession[];
  payments: Payment[];
  usageLogs: UsageLog[];
  progressRecords: ProgressRecord[];
}

function createEmptyStore(): DataStore {
  return {
    users: [],
    courses: [],
    enrollments: [],
    quizzes: [],
    questions: [],
    quizAttempts: [],
    assignments: [],
    assignmentSubmissions: [],
    conversations: [],
    messages: [],
    notices: [],
    notifications: [],
    liveSessions: [],
    payments: [],
    usageLogs: [],
    progressRecords: [],
  };
}

function seedUsers(store: DataStore) {
  const now = new Date();

  const makeUser = (email: string, name: string, role: Role): User => ({
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
    email,
    name,
    avatarUrl: undefined,
    role,
    // demo only – password is 'password'
    passwordHash: "password",
    isSuspended: false,
  });

  store.users.push(
    makeUser("admin@example.com", "Admin User", "ADMIN"),
    makeUser("teacher@example.com", "Teacher User", "TEACHER"),
    makeUser("student@example.com", "Student User", "STUDENT"),
  );
}

// Ensure a singleton datastore across hot reloads
let store: DataStore;

declare global {
  // eslint-disable-next-line no-var
  var __LMS_STORE__: DataStore | undefined;
}

if (!global.__LMS_STORE__) {
  global.__LMS_STORE__ = createEmptyStore();
  seedUsers(global.__LMS_STORE__);
}

store = global.__LMS_STORE__;

export function getStore(): DataStore {
  return store;
}

export function generateId(): string {
  return randomUUID();
}
