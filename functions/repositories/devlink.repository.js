const db = require('../database');

const devlinkRepository = {
  async insert(devlink) {
    const doc = await db.collection('devlink').add(devlink);
    const resDevLink = devlink;
    resDevLink.id = doc.id;
    return resDevLink;
  },
};

module.exports = devlinkRepository;
