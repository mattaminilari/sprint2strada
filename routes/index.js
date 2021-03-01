const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  res.render('form', { title: 'STRADA'});
});

router.post('/', 
[
  check('name')
    .isLength({ min: 1 })
    .withMessage('Please enter a name'),
  check('email')
    .isEmail()
    .withMessage('Please enter an email'),
],
(req, res) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) {
    res.send('Thank you for signing up! We\'ll keep you in the loop.');
  } else {
    res.render('form', {
      title: 'STRADA',
      errors: errors.array(),
      data: req.body,
    })
  }
  console.log(req.body);
  res.render('form', { title: 'STRADA' });
});

module.exports = router;