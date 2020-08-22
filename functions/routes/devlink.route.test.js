const request = require( 'supertest');

const app = require( '../app');

const devlinkService = require( '../services/devlink.service');

const { devLink } = require('../../fixture/data.js');

jest.mock('../services/devlink.service');

describe('/devlink', () => {
  describe('POST /devlink', () => {
    context('when devlinkService.create is success', () => {
      beforeEach(() => {
      devlinkService.create.mockResolvedValue(devLink);
    });

    it('returns status code of 201 and true', async () => {
      const response = await request(app).post('/devlink').send(devLink);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(devLink);
    });
    });

    context('when devlinkService.create is failed', () => {
      beforeEach(() => {
        devlinkService.create.mockRejectedValue('error');
      });
  
      it('returns status code of 500', async () => {
        const response = await request(app).post('/devlink').send(devLink);

        expect(response.status).toBe(500);
        expect(response.text).toEqual('error');
        expect(response.body).toEqual({});
      });
    });
  });
});
