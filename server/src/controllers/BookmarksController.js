const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      // const {songId, userId} = req.query
      const userId = req.user.id
      const {songId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'bookmark fetch request handling error'
      })
    }
  }
}
