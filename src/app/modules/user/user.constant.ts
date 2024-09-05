// export const UserRole = {
//   user: "user",
//   admin: "admin",
// } as const;

// In user.constant.ts
export const UserRole = {
  user: "user",
  admin: "admin",
} as const;

// This creates a type like { readonly user: "user"; readonly admin: "admin"; }
export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];
