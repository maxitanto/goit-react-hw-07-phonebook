const BASE_URL = 'https://653e4efff52310ee6a9acfbe.mockapi.io';

export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return await data.json();
};

export const createContacts = async data => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteContacts = async id => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
