const express = require("express");
const pacienteController = require('../controllers/pacienteController.js');
const router = express.Router();
const multer = require('multer');

const { checkToken } = require('../../utils/middlewares.js');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

router.use('/usersReg', require('./usersReg.js'));
router.use('/usersEsp', require('./userEsp.js'));
// Crear paciente
router.post('/pac', upload.fields([{ name: 'foto' }, { name: 'cert' }]), pacienteController.guardarPaciente);

// Obtener todos los aspirantes
router.get('/pac',checkToken(['admin']),pacienteController.obtenerPacientes);

// Obtener todas las ciudades
router.get('/pac/ciu',checkToken,pacienteController.obtenerCiudades);

// Obtener un aspirante
router.get('/pac/:id',checkToken,pacienteController.obtenerPaciente);

module.exports = router;