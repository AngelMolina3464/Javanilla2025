
class mascotasController {
  constructor() {}
  async create(req, res) {
    try {
      res.status(201).json({ status: "Create - ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      res.status(201).json({ status: "Update - ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getOne(req, res) {
    try {
      res.status(201).json({ status: "GetOne - ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req, res) {
    try {
      res.status(201).json({ status: "Getall - ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  async delete(req, res) {
    try {
      res.status(201).json({ status: "Delete - ok" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new mascotasController();
