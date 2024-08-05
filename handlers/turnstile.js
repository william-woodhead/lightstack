const path = require('path');

const SECRET_KEY = process.env.LIGHTSTACK_TURNSTILE_SECRET_KEY;

module.exports = async (req, res) => {
  console.log("here we are", req.body);
  // Turnstile injects a token in "cf-turnstile-response".
	const token = req.body['cf-turnstile-response'];
	const ip = req.header('CF-Connecting-IP');
  console.log("token", token);
  console.log("ip", ip);
	// Validate the token by calling the
	// "/siteverify" API endpoint.
	const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  const result = await fetch(url, {
		body: JSON.stringify({
			secret: SECRET_KEY,
			response: token,
			remoteip: ip
		}),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	});

  const data = await result.json();

  if (data.success) {
    res.sendFile(path.join(__dirname, "..", "/pages/turnstile-success.html"));
  } else {
    res.sendStatus(500);
  }
}