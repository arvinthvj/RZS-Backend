const { default: axios } = require("axios");
const Oauth1Helper = require("./OAuthSupporter/OauthMaker");
//OAuth Maker:

const makeAuth =(request)=>{
	return Oauth1Helper.getAuthHeaderForRequest(request);
}

const sendATweet = async (req, res, next) => {
  const request = {
    url: "https://api.twitter.com/2/tweets",
    method: "POST",
    body: {
      text: req.body.text,
    },
  };
  
  try {
    await axios.post(request.url, request.body, { headers: authHeader });
    res.send("Tweet sent successfully !!");
  } catch (error) {
    res.send(error);
  }
};

const deleteATweetById = async (req, res, next) => {
  try {
	  // debugger
	const request = {
		url: `https://api.twitter.com/2/tweets/${req.params.id}`,
		method: "DELETE"
	  };
    await axios.delete(request.url,{ headers: makeAuth(request) });
    res.send(`Tweet with the id : ${req.params.id} deleted successfully !!`);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { sendATweet ,deleteATweetById};
