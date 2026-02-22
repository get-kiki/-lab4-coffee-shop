module.exports = {
  upload (req, res) {
    if (!req.file) {
      return res.status(400).send({
        error: 'No file uploaded or invalid file type.'
      })
    }

    res.json({
      filename: req.file.filename
    })
  }
}
