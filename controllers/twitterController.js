const { default: axios } = require("axios");
const Oauth1Helper = require("./OAuthSupporter/OauthMaker");



const sendATweet =async(req, res, next)=>{
	const request = {
		url: 'https://api.twitter.com/2/tweets',
		method: 'POST',
		body: {
			"text": req.body.text
		}
	};
	const authHeader = Oauth1Helper.getAuthHeaderForRequest(request);
	 await axios.post(
		request.url,
		request.body,
		{ headers: authHeader });
		res.send("Tweet sent successfully !!")
}



module.exports ={sendATweet} 