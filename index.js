const mailchimp = require("@mailchimp/mailchimp_marketing")
const md5 = require("md5")

mailchimp.setConfig({
  apiKey: "<Your API Key>",
  server: "<Your Server Location>" // Ex :  us5
})

// To Check Mail Chimp Is Working Or Not
const run = async () => {
  const response = await mailchimp.ping.get();
  console.log(response);
}

// run();