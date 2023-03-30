const fs = require("fs");

const WriteEventLog = async (name, email, phone) => {
  fs.readFile("./database/namesHistory.json", "utf-8", (err, data) => {
    if (err) {
      console.log("As error occurred: ", err.message);
    } else {
      const dataJson = JSON.parse(data);

      let newUser = {
        userName: `${name}`,
        userEmail: `${email}`,
        userPhone: `${phone}`,
      };

      dataJson.users.push(newUser);

      fs.writeFile(
        "./database/namesHistory.json",
        JSON.stringify(dataJson),
        (err) => {
          if (err) {
            console.log("Error is:", err.message);
          } else {
            console.log("Names updated!");
          }
        }
      );
    }
  });
};

module.exports = WriteEventLog;
