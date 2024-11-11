
const { Service } = require('../models/Service');

const getServices = async function (request, response, next) {
  try {
    const services = await Service.find();
    response.status(200).json({
      status: "success",
      results: services.length,
      data: {
        services,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: "No Services Found",
    });
  }
};

const getService = async function (request, response, next) {
  const id = request.params.id;

  try {
    const service = await Service.findById(id);
    response.status(200).json({
      status: "success",
      data: {
        service,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: `No Service Found with that id: ${id}`,
    });
  }
};

const createService = async function (request, response, next) {
  const { title, description, imageUrl } = request.body;

  try {
    const newService = await Service.create({ title, description, imageUrl });
    response.status(201).json({
      status: "success",
      data: {
        blog: newService,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const updateService = async function (request, response, next) {
  const id = request.params.id;
  const newData = request.body;

  try {
    const service = await Service.findByIdAndUpdate(id, newData, {
      runValidators: true,
    });
    response.status(200).json({
      status: "success",
      data: {
        service,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const deleteService = async function (request, response, next) {
  const id = request.params.id;

  try {
    await Service.findByIdAndDelete(id);
    response.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

module.exports = { getServices, getService, createService, updateService, deleteService };


