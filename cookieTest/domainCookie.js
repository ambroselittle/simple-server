const domainCookie = {
  name: "crsd",
  setValue:
    "JHgdD4S0tWc94UcT8XDWuydnmN1xHnwl1IoukxXnr9tzkZdyPWeqefrpy5c4Ylz6fGuXNbxDk0NfCfkuVK3gzONQOT1E2peUONNpDqi6zu7SFw2Vo65jKLkJJtowuSMMA9j5UToRXAm17XmIsGW1aCaqOoRYYA2+HiJfOXcUvKnudoabk9O5zPrpy5c4Ylz6fGuXNbxDk0NfCfkuVK3gzONQOT1E2peUm3y8D4EelOAzsGbg9m7k0YKth+Q6l1FebqRgI59NJkiqzc7JvJI9ZTdq4XZz8mNDsZWmcAV0S5WCSdl7sKhTeFSTKciQwzWCnXbdKCg0SRO/eu6quqc937RjF6FEmVJ7m1dS4PmOKjJuEEqoJU7Uolf0ysV7tq6lfx9nu1MbAfk=",
  options: {
    domain: ".example.test",
    path: "/"
  },
  setOptions: { expires: new Date(Date.now() + 900000) },
  clearOptions: { expires: new Date(Date.now() - 1000) }
};

exports.setCookie = (req, res) => {
  res.cookie(
    domainCookie.name,
    domainCookie.setValue,
    Object.assign({}, domainCookie.options, domainCookie.setOptions)
  );
  res.json({ message: "Cookie was set." });
};

exports.clearCookie = (req, res) => {
  res.cookie(
    domainCookie.name,
    "",
    Object.assign({}, domainCookie.options, domainCookie.clearOptions)
  );
  res.json({ message: "Cookie was cleared." });
};

exports.echoCookie = (req, res) => {
  var cookie = req.cookies[domainCookie.name];
  if (!cookie) {
    res.json({ message: "Domain cookie doesn't exist" });
    return;
  }
  res.json({ domainCookie: cookie });
};
