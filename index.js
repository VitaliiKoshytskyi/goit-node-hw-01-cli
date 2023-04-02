const contactsService = require("./contacts.js");

// const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const uniqueContact = await contactsService.getContactById(id);
      console.log(uniqueContact);
      break;

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction(argv);
// invokeAction({ action: "list" })
// invokeAction({ action: "get",id:"AeHIrLTr6JkxGE6SN-0Rw" })
// invokeAction({ action: "add",name:"Mango",email:"mango@gmail.com",phone:"322-22-22" })
invokeAction({ action: "remove", id: "PkXoMhGOFIqKOxqCcjnoA" });
