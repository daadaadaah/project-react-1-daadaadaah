const devlinkService = require('./devlink.service');

const devlinkRepository = require('../repositories/devlink.repository');

jest.mock('../repositories/devlink.repository');

const { devlink } = require('../../fixture/data');

describe('devlinkService', () => {
  describe('create', () => {
    devlinkRepository.insert.mockResolvedValue(devlink);;

    it('creates newDevlink', async () => {
      const result = await devlinkService.create(devlink);
      expect(devlinkRepository.insert).toBeCalledTimes(1);
    });
  });
});