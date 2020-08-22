const devlinkRepository = require('../repositories/devlink.repository');

const devlinkService = {
  async create(newDevlink) {
    const result = await devlinkRepository.insert(newDevlink);
    return result;
  },
};

module.exports = devlinkService;
