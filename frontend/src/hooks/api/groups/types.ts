import { TOrgRole } from "../roles/types";

// TODO: rectify/standardize types

export type TGroupOrgMembership = TGroup & {
  customRole?: TOrgRole;
};

export type TGroup = {
  id: string;
  name: string;
  slug: string;
  orgId: string;
  createAt: string;
  updatedAt: string;
  role: string;
};

export type TGroupMembership = {
  id: string;
  group: TGroup;
  roles: {
    id: string;
    role: "owner" | "admin" | "member" | "no-access" | "custom";
    customRoleId: string;
    customRoleName: string;
    customRoleSlug: string;
    isTemporary: boolean;
    temporaryMode: string | null;
    temporaryRange: string | null;
    temporaryAccessStartTime: string | null;
    temporaryAccessEndTime: string | null;
  }[];
  createdAt: string;
  updatedAt: string;
};

export type TGroupWithProjectMemberships = {
  id: string;
  name: string;
  slug: string;
  orgId: string;
  projectMemberships: {
    id: string;
    project: {
      id: string;
      name: string;
      slug: string;
    };
    roles: {
      id: string;
      role: string;
      customRoleId: string | null;
      customRoleName: string | null;
      customRoleSlug: string | null;
      temporaryRange: string | null;
      temporaryMode: string | null;
      temporaryAccessEndTime: string | null;
      temporaryAccessStartTime: string | null;
      isTemporary: boolean;
    }[];
  }[];
};
