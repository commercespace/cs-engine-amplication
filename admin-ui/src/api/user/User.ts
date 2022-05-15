export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  tenantId: string | null;
  updatedAt: Date;
  username: string;
};
