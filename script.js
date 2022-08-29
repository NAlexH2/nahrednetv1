const greeting = document.querySelector("#greeting");

const GiveThemAHello = () => {
  let element = document.createElement("div");
  let currentTime = new Date(Date.now());
  let tod = currentTime.getHours();
  if (tod < 12) element = "Good morning!";
  else if (tod < 16) element = "Good afternoon!";
  else element.textContent = "Good evening!";
  greeting.append(element);
  return;
};

GiveThemAHello();
