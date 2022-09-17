import { Request } from "express";

export interface CreateLinkReq extends Request {
  user: UserJoined;
  body: {
    reuse?: boolean;
    password?: string;
    customurl?: string;
    description?: string;
    expire_in?: string;
    domain?: Domain;
    target: string;
  };
}
