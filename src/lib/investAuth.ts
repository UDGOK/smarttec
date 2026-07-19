import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const INVEST_COOKIE = "invest_auth";

/** Derives the expected cookie token from the configured password.
 *  Password lives ONLY in the INVEST_PASSWORD environment variable —
 *  never in the repo. If unset, the portal fails closed. */
export function expectedToken(): string | null {
  const pw = process.env.INVEST_PASSWORD;
  if (!pw) return null;
  return createHmac("sha256", "smarttec-invest-v1").update(pw).digest("hex");
}

export function verifyPassword(input: string): boolean {
  const pw = process.env.INVEST_PASSWORD;
  if (!pw) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isAuthed(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;
  const jar = await cookies();
  const got = jar.get(INVEST_COOKIE)?.value;
  if (!got || got.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(got), Buffer.from(expected));
}
