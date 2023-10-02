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

// Get All Lists Info
const lists = async () => {
  const response = await mailchimp.lists.getAllLists();
  console.log(response);
};

// lists()

// Get Specific Inforamtion about a list
const listById = async () => {
  const response = await mailchimp.lists.getList("<List Id>");
  console.log(response);
};

// listById();


// Get All Members Information From a specific List
const members = async () => {
  const response = await mailchimp.lists.getListMembersInfo("<List Id>");
  console.log(response);
};

// members()