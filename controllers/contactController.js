const contactModel = require('../models/contactModel');

exports.showForm = (req, res) => {
  res.render('contact/form', {
    title: 'Contact Us',
  });
};

exports.saveMessage = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    req.flash('error', 'All fields are required.');
    return res.redirect('/contact');
  }

  try {
    await contactModel.saveMessage(name, email, message);
    req.flash('success', 'Message sent successfully!');
    res.redirect('/contact');
  } catch (err) {
    console.error("Error saving message:", err);
    req.flash('error', 'There was an error sending your message.');
    res.redirect('/contact');
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await contactModel.getMessages();
    res.render('contact/messages', {
      title: 'Messages',
      messages: messages.rows,
    });
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.render('contact/messages', {
      title: 'Messages',
      messages: [],
    });
  }
};
