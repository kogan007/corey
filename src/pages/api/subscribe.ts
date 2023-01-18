import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.method) return res.status(404);

  switch (req.method.toLowerCase()) {
    case "post": {
      return handleSubscribe(req, res);
    }
    default: {
      return res.status(404).json({ error: "Not found" });
    }
  }
}

const handleSubscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  const subscribe = await fetch(
    "https://us5.api.mailchimp.com/3.0/lists/a7a8b5d70e/members",
    {
      method: "POST",
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
      headers: {
        Authorization: `Bearer ${process.env.MAIL_CHIMP}`,
      },
    }
  )
    .catch((e) => {
      console.log(e);
      return res.status(400).json({ error: "Error subscribing" });
    })
    .then((data) => {
      if (data instanceof Response) {
        if (data.status === 400) {
          return data.json().then((json) => {
            if (json.title === "Member Exists") {
              return res
                .status(400)
                .json({ error: "You are already subscribed" });
            }

            return res.status(400).json({ error: "Error subscribing" });
          });
        } else if (data.status === 200) {
          return res.status(200).json({ data: "Successfully subscribed" });
        }
        res.status(400).json({ error: "Error subscribing" });
      }
    });
};
