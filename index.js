const mailchimp = require("@mailchimp/mailchimp_marketing")
const md5 = require("md5")

mailchimp.setConfig({
  apiKey: "<Your API Key>",
  server: "<Your Server Location>" // Ex :  us5
})

