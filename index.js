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

// 
const member = async () => {

  const email = "user_email";
  const subscriberHash = md5(email.toLowerCase())

  const response = await mailchimp.lists.getListMember(
    "<List Id>",
    subscriberHash
  );
  console.log(response);
};

// member()

//Add Member To A List
const addMember = async () => {
  const response = await mailchimp.lists.addListMember("<List Id>", {
    email_address: "email",
    status: "subscribed",
    tags: ["Tags"],
    merge_fields: {
      FNAME: "First Name",
      LNAME: "Last Name",
      PHONE: "Phone Number",
      ADDRESS: {
        addr1: "Street Address",
        city: "City",
        state: "State",
        zip: "Zip Code",
      }
    },
  });
  console.log(response);
};

// addMember();


// Update A Member By Id in A Speciifc List
const updateMember = async () => {

  const email = "user_email";
  const subscriberHash = md5(email.toLowerCase())

  const response = await mailchimp.lists.updateListMember(
    "<List Id>",
    subscriberHash,
    {
      status: "subscribed",
      email_address: "email",
      tags: ["Tags"],
      merge_fields: {
        FNAME: "First Name",
        LNAME: "Last Name",
        PHONE: "Phone Number"
      },
    }
  );
  console.log(response);
};

// updateMember();


// Get A Specific User Information
const getTag = async () => {
  const listId = "<List Id>";
  const email = "user_email";
  const subscriberHash = md5(email.toLowerCase())

  const response = await mailchimp.lists.getListMemberTags(listId, subscriberHash)

  console.log(response);
}

// getInformation()


// Remove Tag From A User
const removeTag = async () => {
  const listId = "<List Id>";
  const email = "user_email";
  const subscriberHash = md5(email.toLowerCase())

  const response = await mailchimp.lists.updateListMemberTags(
    listId,
    subscriberHash,
    {
      tags: [
        {
          name: "Tags",
          status: "inactive",
        },
      ],
    }
  )
  console.log(response);
}

// removeTag()



// Add Tag to a user
const addTag = async () => {

  const listId = "<List Id>";
  const email = "user_email";
  const subscriberHash = md5(email.toLowerCase())

  const response = await mailchimp.lists.updateListMemberTags(
    listId,
    subscriberHash,
    {
      tags: [
        {
          name: "Tag",
          status: "active",
        }
      ],
    }
  )
  console.log(response);
}


// addTag()