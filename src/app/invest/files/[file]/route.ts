import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { isAuthed } from "@/lib/investAuth";

export const dynamic = "force-dynamic";

// Explicit allow-list — nothing outside it can ever be served.
const FILES: Record<string, string> = {
  "Mead-Data-Center-Investor-Memorandum.pdf": "application/pdf",
  "Mead-Data-Center-Investor-FAQ.pdf": "application/pdf",
  "SmartTec-Mead-DC-Model.xlsx":
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.redirect(new URL("/invest", _req.url));
  }
  const { file } = await params;
  const mime = FILES[file];
  if (!mime) return new NextResponse("Not found", { status: 404 });

  const filePath = path.join(process.cwd(), "protected-files", file);
  try {
    const data = await fs.readFile(filePath);
    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": mime,
        "Content-Disposition": `attachment; filename="${file}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
