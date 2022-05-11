const prisma = require("../prisma/client");
const warehouseValidation = require("../validation/warehouse");

const createWarehouse = async (req, res, next) => {
  const response = warehouseValidation(req.body);

  if (response.error) {
    const messages = response.error.details.map((detail) => detail.message);

    const err = {
      status: 400,
      error: messages[0],
    };
    next(err, req, res, next);
  }

  const { streetAddress, city, state, country, pinCode } = req.body;

  try {
    const warehouse = await prisma.warehouse.create({
      data: {
        streetAddress: streetAddress,
        city: city,
        state: state,
        country: country,
        pincode: pinCode,
      },
    });

    return res.status(200).json({
      ok: true,
      data: {
        message: "Warehouse created successfully!",
      },
    });
  } catch (error) {
    next(error, req, res, next);
  }
};

const getWarehouseByPinCode = async (req, res, next) => {
  const pinCode = parseInt(req.params.pinCode);

  console.log(typeof pinCode);
  try {
    const warehouse = await prisma.warehouse.findUnique({
      where: {
        pincode: pinCode,
      },
    });

    if (!warehouse) {
      console.log("not found");
      const error = {
        status: 404,
        error: `Warehouse with pincode ${pinCode} does not exist`,
      };

      next(error, req, res, next);
    }

    const data = {
      streetAddress: warehouse.streetAddress,
      pinCode: warehouse.pincode,
      city: warehouse.city,
      state: warehouse.state,
      country: warehouse.country,
    };

    res.status(200).json({
      ok: true,
      data: {
        message: "Warehouse found successfully!",
        warehouse: data,
      },
    });
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = { createWarehouse, getWarehouseByPinCode };
