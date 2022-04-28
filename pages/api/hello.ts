// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const html = `
<!DOCTYPE html>
<html>
<body>
<h1>Heading</h1>
<p>paragraph</p>
</body>
</html>
`

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("set-cookie", "hello=there").status(200).send(html);
}
