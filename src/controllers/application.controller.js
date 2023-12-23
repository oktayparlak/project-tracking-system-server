import Application from '../models/Application.js';
import Project from '../models/Project.js';

/** Create */
export const create = async (req, res) => {
  try {
    const { name, description, type, startDate, academicianId } = req.body;
    const project = await Project.create({ name, description, type, startDate });
    const application = await Application.create({ studentId: req.user.id, academicianId: academicianId, projectId: project.id });
    return res.status(201).json(application);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/** Read */
export const getById = async (req, res) => {
  try {
    const application = await Application.findOne({ where: { id: req.params.id }, include: [Project] });
    if (!application) return res.status(404).json({ error: { message: 'Application not found!' } });
    return res.status(200).json(application);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getMyPendingApplications = async (req, res) => {
  try {
    const applications = await Application.findAll({ where: { academicianId: req.user.id, status: 'PENDING' }, include: [Project] });
    if (!applications || applications.length === 0) return res.status(404).json({ error: { message: 'No pending applications found!' } });
    return res.status(200).json(applications);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getMyApprovedApplications = async (req, res) => {
  try {
    const applications = await Application.findAll({ where: { academicianId: req.user.id, status: 'APPROVED' }, include: [Project] });
    if (!applications || applications.length === 0) return res.status(404).json({ error: { message: 'No approved applications found!' } });
    return res.status(200).json(applications);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/** Update */
export const update = async (req, res) => {
  try {
    const application = await Application.findOne({ where: { id: req.params.id, academicianId: req.user.id } });
    if (!application) return res.status(404).json({ error: { message: 'Application not found!' } });
    if (application.status !== 'PENDING') return res.status(400).json({ error: { message: 'Application is not pending!' } });
    application.status = req.body.status;
    await application.save();
    return res.status(200).json(application);
  } catch (error) {
    return res.status(500).json(error);
  }
};
