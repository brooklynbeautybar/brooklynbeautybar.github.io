<?php
session_start();
require_once("twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "@bklynbeautybar";
$notweets = 30;
$consumerkey = "aSEfCp7520i36vCPIU5qr8I0j";
$consumersecret = "mRPhuTuRpseMSuA7oMq59lkYILxpA0QRU2AVRuQzRuO56YCOvO";
$accesstoken = "2402770880-rqKQPuhOx5VH4e9q1uGdYndtzUSl4lPv2PzyTFK";
$accesstokensecret = "RQWCxOIxbOYFXbtOLHKkDTbGeniScJvzcxwWJLc95ei58";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>