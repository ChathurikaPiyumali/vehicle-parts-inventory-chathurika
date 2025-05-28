 const express = require('express');
const router = express.Router();
const { Part, Op } = require('../models/Part');

// GET all with optional filters
router.get('/', async (req, res) => {
  const { search = '', type, status } = req.query;
  const where = {
    name: { [Op.like]: `%${search}%` },
    ...(type && { partType: type }),
    ...(status && { status }),
  };
  const parts = await Part.findAll({ where });
  res.json(parts);
});

// GET by ID
router.get('/:id', async (req, res) => {
  res.json(await Part.findByPk(req.params.id));
});

// POST create new part
router.post('/', async (req, res) => {
  res.status(201).json(await Part.create(req.body));
});

// PUT update part
router.put('/:id', async (req, res) => {
  await Part.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
});

// DELETE part
router.delete('/:id', async (req, res) => {
  await Part.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

module.exports = router;

