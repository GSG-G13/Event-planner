const connection = require("../config/connection");

const updataData = () => {
  const sql = {
    text: "UPDATE events SET address = 'Canyon 123' WHERE address = 'Valley 345'",
  };
  return connection.query(sql);
};
