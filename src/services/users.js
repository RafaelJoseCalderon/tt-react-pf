const loginServices = (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        resolve({
          data: {
            username: username,
            role: "admin",
            token: `fake-token-${username}`
          },
          error: null
        });
      } else {
        resolve({ data: {}, error: "usuario no encontrado." });
      }
    }, 1000);
  });
};

const logoutServices = (token) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (token === "fake-token-admin") {
        resolve({ data: {}, error: null });
      } else {
        resolve({ data: data, error: "usuario no encontrado." });
      }
    }, 1000);
  });
};

export { loginServices, logoutServices };