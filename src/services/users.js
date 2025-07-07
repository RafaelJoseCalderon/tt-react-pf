const loginServices = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({
          username: username,
          role: "admin",
          token: `fake-token-admin`
        });
      } else if (username === "user" && password === "123") {
        resolve({
          username: username,
          role: "user",
          token: `fake-token-user`
        });
      } else {
        reject(new Error("usuario no encontrado."));
      }
    }, 1000);
  });
};

const logoutServices = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fake-token-admin") {
        resolve({});
      } else if (token === "fake-token-user") {
        resolve({});
      } else {
        reject(new Error("usuario no encontrado."));
      }
    }, 1000);
  });
};

export { loginServices, logoutServices };
