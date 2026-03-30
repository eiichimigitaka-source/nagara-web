import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { childName, grade, parentName, phone, email, preferredDate, message } =
      body;

    if (!childName || !grade || !parentName || !phone || !email || !preferredDate) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    // TODO: 本番環境では以下を実装
    // - メール送信 (Resend / Nodemailer)
    // - CRM登録 (Notion / Airtable)
    // - Slack通知
    console.log("=== 新規無料体験申し込み ===", {
      childName,
      grade,
      parentName,
      phone,
      email,
      preferredDate,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。しばらくしてからお試しください。" },
      { status: 500 }
    );
  }
}
