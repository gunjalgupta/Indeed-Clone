const { Types } = require('mongoose');
const { getCompanyConnection } = require('../../dbconnections');

const handle_request = async (msg, callback) => {
  const { Job } = getCompanyConnection();

  try {
    await Job.updateOne({ _id: Types.ObjectId(msg.id) }, msg.data);

    callback(null, { _id: msg.id });
  } catch (err) {
    callback({ isError: true, error: err.toString() });
  }
};

module.exports = handle_request;
