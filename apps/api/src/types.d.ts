/* eslint-disable unused-imports/no-unused-imports */
// types.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    userId?: string;
  }
}
