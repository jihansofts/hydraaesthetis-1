import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "./auth";
import { IUser } from "@/model/UserModel";

export type StaticRouteHandler = (
  req: NextRequest,
  user: IUser
) => Promise<NextResponse> | NextResponse;

export type DynamicRouteHandler<TParams extends Record<string, string>> = (
  req: NextRequest,
  context: { params: TParams },
  user: IUser
) => Promise<NextResponse> | NextResponse;

// ✅ RoleCheck wrapper for static routes
export function requireRoleStatic(allowedRoles: string[]) {
  return (handler: StaticRouteHandler) => {
    return async (req: NextRequest) => {
      const user = await getUserFromToken();

      if (!user) {
        return NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        );
      }
      if (!allowedRoles.includes(user.role)) {
        return NextResponse.json(
          { error: "Unauthorized - insufficient role" },
          { status: 403 }
        );
      }

      return handler(req, user);
    };
  };
}

// ✅ Fixed requireRoleDynamic for dynamic routes
export function requireRoleDynamic<TParams extends Record<string, string>>(
  allowedRoles: string[]
) {
  return (handler: DynamicRouteHandler<TParams>) => {
    return async (req: NextRequest, context: { params: Promise<TParams> }) => {
      const user = await getUserFromToken();
      const params = await context.params; // Await the params promise

      if (!user) {
        return NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        );
      }
      if (!allowedRoles.includes(user.role)) {
        return NextResponse.json(
          { error: "Unauthorized - insufficient role" },
          { status: 403 }
        );
      }

      return handler(req, { params }, user);
    };
  };
}

// type Context = { params?: Record<string, string> | undefined };
// export function requireRole(allowedRoles: string[]) {
//   return (
//     handler: (
//       req: NextRequest,
//       context: Context,
//       user: IUser
//     ) => Promise<NextResponse> | NextResponse
//   ) => {
//     return async (req: NextRequest, context: Context) => {
//       const user = await getUserFromToken();

//       if (!user) {
//         return NextResponse.json(
//           { error: "Authentication required" },
//           { status: 401 }
//         );
//       }

//       if (!allowedRoles.includes(user.role)) {
//         return NextResponse.json(
//           { error: "Unauthorized - insufficient role" },
//           { status: 403 }
//         );
//       }

//       // ✅ pass context (so you can access params) and user
//       return handler(req, context, user);
//     };
//   };
// }
