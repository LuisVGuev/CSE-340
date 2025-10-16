const jwt = require('jsonwebtoken');

function checkAdmin(req, res, next) {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      req.flash('notice', 'Please log in first');
      return res.redirect('/account/login');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.account_type !== 'admin') {
      req.flash('notice', 'You do not have permission to view this page');
      return res.redirect('/');
    }

    next();
  } catch (error) {
    console.error('Authorization error:', error);
    res.redirect('/account/login');
  }
}

module.exports = checkAdmin;
