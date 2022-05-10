const fetchAllInventory = async (req, res) => {
  res.status(200).json({
    ok: true,
    data: {
      message: "fetch",
    },
  });
};

const createInventoryItems = async (req, res) => {
  res.status(200).json({
    ok: true,
    data: {
      message: "create",
    },
  });
};

const updateInventoryItems = async (req, res) => {
  res.status(200).json({
    ok: true,
    data: {
      message: "update",
    },
  });
};

const deleteInventoryItems = async (req, res) => {
  res.status(200).json({
    ok: true,
    data: {
      message: "delete",
    },
  });
};

const assignWarehouse = async (req, res) => {
  res.status(200).json({
    ok: true,
    data: {
      message: "assign warehouse",
    },
  });
};

module.exports = {
  fetchAllInventory,
  createInventoryItems,
  updateInventoryItems,
  deleteInventoryItems,
  assignWarehouse,
};
