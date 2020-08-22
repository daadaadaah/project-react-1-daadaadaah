const express = require('express');

const devlinkService = require('../services/devlink.service');

const router = express.Router();

router.post("/", async (request, response) =>  {

  try {

    const newDevlink = {
      url: request.body.url,
      writtenAt: request.body.writtenAt,
      keyword: request.body.keyword,
      tags: request.body.tags,
      reviews: request.body.reviews,
      createdAt: new Date().toISOString(),
      updatedAt: null,
      deletedAt: null,
    }

    const devlink = await devlinkService.create(newDevlink);

    return response.status(201).json(devlink);

  } catch (error) {
      return response.status(500).send(error);  
  }
  
});

module.exports = router;