export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  budget?: string;
  timeline?: string;
  message: string;
};

export async function sendContact(payload: ContactPayload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || "Failed to send contact");
  }

  return res.json();
}
