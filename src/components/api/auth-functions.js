import pocketbaseEs from "pocketbase";

export async function logIn(username, password, setAuth) {
  const pb = new pocketbaseEs("http://localhost:8090");

  try {
    await pb.collection("users").authWithPassword(username, password);

    if (pb.authStore.isValid) {
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);

      setAuth(true);
      document.body.removeAttribute("style");
    }
  } catch (error) {
    alert("failed to authenticate.");
  }
}

export async function logOut(setAuth) {
  const pb = new pocketbaseEs("http://localhost:8090");

  try {
    if (pb.authStore.isValid) {
      window.localStorage.clear();
      pb.authStore.clear();
      setAuth(false);
    }
  } catch (error) {
    alert("failed to log out.");
  }
}

export async function signUp(username, password, setAuth) {
  const pb = new pocketbaseEs("http://localhost:8090");

  const data = {
    username: username,
    password: password,
    passwordConfirm: password,
  };

  try {
    await pb.collection("users").create(data);
  } catch (error) {
    alert("couldn't create account.");
  } finally {
    logIn(username, password, setAuth);
  }
}
