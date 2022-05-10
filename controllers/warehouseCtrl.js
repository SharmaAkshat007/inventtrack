const createWarehouse = async (req, res) => {
  res.status(200).json({
    ok: true,
    data: {
      message: "create warehouse",
    },
  });
};

module.exports = { createWarehouse };
