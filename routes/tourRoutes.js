const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);

// They are actually kind of middleware themselves that only apply for a certain URL
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
// Burası da bir nevi middleware olduğu için bu blok içerisine custom middleware konulduğu
// ... zaman çalışmaz. Çünkü cycle tamamlanmış oluyor ve custom'a sıra gelmiyor.

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
