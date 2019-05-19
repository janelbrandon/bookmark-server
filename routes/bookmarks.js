const express = require("express")
const Bookmark = require("../models/bookmark")
const router = express.Router()

// GET /bookmarks (R)
router.get("/", (req, res) => {
	Bookmark.find()
		.then(bookmarks => res.json(bookmarks))
		.catch(error => res.sendStatus(500).json({ error: error.message }))
})

// POST /bookmarks (C)
router.post("/", (req, res) => {
	// const bookmark = new Bookmark({ title: req.body.title, url: req.body.url })
	// bookmark.save()
	Bookmark.create(req.body)
		.then(bookmark => res.send(bookmark))
		.catch(error => res.sendStatus(500).json({ error: error.message }))
})

// PUT /bookmarks (U)
router.put("/:id", (req, res) => {
	Bookmark.findByIdAndUpdate(req.params.id, req.body)
		.then(bookmark => res.send(bookmark))
		.catch(error => res.sendStatus(500).json({ error: error.message }))
})

// DELETE /bookmarks/:id (D)
router.delete("/:id", (req, res) => {
	Bookmark.findByIdAndRemove(req.params.id)
		.then(() => res.sendStatus(204))
		.catch(error => res.sendStatus(500).json({ error: error.message }))
})

module.exports = router
