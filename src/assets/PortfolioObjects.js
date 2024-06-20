import { thinkFlash, chat, Invoicinator, RecipeFinder } from "./images/work";
const recipeFinder = {
  title:"Recipe Finder",
  image: RecipeFinder,
  stack: "Static Website",
  githubURL: "https://github.com/jordaneburton/recipe-finder",
  deployedApp: "https://jordaneburton.github.io/recipe-finder/"
};
const weatherApp = {
  title:"thinkFlash",
  image: thinkFlash,
  stack: "Mongo Express Node React",
  githubURL: "https://github.com/AnthonyBuffill/thinkFlash",
  deployedApp: "https://thinkflash-0iex.onrender.com/"
};
const invoicinator = {
  title:"Invoicinator",
  image: Invoicinator,
  stack: "Express Node MySQL Handlebars",
  githubURL: "https://github.com/AnthonyBuffill/invoicinator",
  deployedApp: "https://invoicinator-e5b9fce169c1.herokuapp.com/"
};
const workDayApp = {
  title:"Chat App",
  image: chat,
  stack: "Express Node React SocketIO",
  githubURL: "https://github.com/LukeGarnsey/chat-app",
  deployedApp: "https://chat-chat-chat.onrender.com/"
};
export {recipeFinder, weatherApp, invoicinator, workDayApp};