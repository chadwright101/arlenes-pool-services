"use server";

import contactData from "@/_data/general-data.json";

const {
  contactDetails: { email, phone },
} = contactData;

export const fetchEmailAddress = async () => {
  return email;
};

export const fetchPhoneNumber = async () => {
  return phone;
};
