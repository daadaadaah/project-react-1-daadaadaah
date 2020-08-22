const devlinkRepository =  require('./devlink.repository');

const { devLink } = require('../../fixture/data');

delete devLink.id;

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn().mockImplementation(() => jest.fn()),
  firestore: jest.fn().mockImplementation(() => ({  
    collection: jest.fn().mockImplementation(() => {
      return {
        get: jest.fn().mockImplementation(() => {
          return [{
            id: 1,
            data: jest.fn().mockImplementation(() => {
              return {
                "url": "https://medium.com/labelstore/prisma%EB%A1%9C-graphql%EC%9D%84-%EC%89%BD%EA%B2%8C-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0-fa64dcf63382",
                "writtenAt": "2020/01",
                "keyword": {
                  "id": 1,
                  "name": "Prisma",
                  "color": "#0C344B",
                  "img": "../assets/images/keyword/prisma.png"
                },
                "tags": [
                  {
                    "id": 1,
                    "name": "장단점"
                  },
                  {
                    "id": 2,
                    "name": "동작원리"
                  },
                  {
                    "id": 3,
                    "name": "사용법"
                  }
                ],
                "reviews": [
                  {
                    "id": 1,
                    "name": "가독성"
                  },
                  {
                    "id": 2,
                    "name": "정보성"
                  }
                ],
                "createdAt": "2020-02-01 14:10",
                "updatedAt": null,
                "deletedAt": null
              }
            }),
          }]
        }),
        add: jest.fn().mockResolvedValue({}),
      };
    })
  })),
  credential: {
    cert: jest.fn().mockImplementation(() => jest.fn()),
  },
}));

describe('devlink.repository', () => {
  describe('create', () => {
    it('inserts devlink to devlink collection', async () => {
      const result = await devlinkRepository.insert(devLink);
      expect(result).toEqual(devLink);
    });
  });
});
