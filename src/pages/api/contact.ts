import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.method) return res.status(404);

  switch (req.method.toLowerCase()) {
    case "post": {
      return handleContact(req, res);
    }
    default: {
      return res.status(404).json({ error: "Not found" });
    }
  }
}

const handleContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new URLSearchParams();

  const { email, message } = req.body;
  if (!email) return res.status(400).json({ error: "Missing Email" });
  if (!message) return res.status(400).json({ error: "Missing Message" });
  form.append("access_key", "32d8c349-037a-43b6-8db2-366b5d5bf148");
  form.append("email", email);
  form.append("message", message);
  const data = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: form,
  });
  return res.status(200).json({ ok: "ok" });
};
