var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_REQUEST_TOKEN,
    consumer_secret: process.env.TWITTER_ACCESS_TOKEN,
    access_token_key: process.env.TWITTER_USER_TOKEN,
    access_token_secret: process.env.TWITTER_USER_SECRET
});

module.exports = {
    tweet: function(req, res, next) {
      console.log(req.body);
        client.post('statuses/update', {
            status: req.body.tweet
        }, function(error, tweet, response) {
          console.log(error);
            if (error) throw error;
            res.send(tweet)
        });
    }
}
