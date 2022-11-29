const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function getContacts() {
  const contactsRaw = await fs.readFile(contactsPath, "utf8");

  const contacts = JSON.parse(contactsRaw);

  return contacts;
}

async function getContactById(contactId) {
  const contacts = await getContacts();
  const result = contacts.filter((contact) => {
    return Number(contact.id) === Number(contactId);
  });
  return result;
}

async function removeContact(contactId) {
  const contacts = await getContacts();
  const contact = contacts.find((item) => item.id === contactId);
  if (!contact) {
    return null;
  }
  const newContacts = JSON.stringify(
    contacts.filter((contact) => contact.id !== contactId)
  );
  fs.writeFile(contactsPath, newContacts);

  return JSON.parse(newContacts);
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const newContact = { id, name, email, phone };
  const contacts = await getContacts().then((contacts) => {
    return JSON.stringify([...contacts, newContact]);
  });
  fs.writeFile(contactsPath, contacts);

  return JSON.parse(contacts);
}

module.exports = { getContacts, getContactById, removeContact, addContact };
