const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Grade.findAll({})
        .then(dbGradeData => res.json(dbGradeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // check the session
    if (req.session) {
        Grade.create({
            grade_id: req.body.grade_id,
            // post_id: req.body.post_id,
        })
            .then(dbGradetData => res.json(dbGradeData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

router.delete('/:id', withAuth, (req, res) => {
    Grade.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbGradeData => {
            if (!dbGradeData) {
                res.status(404).json({ message: 'No grades found' });
                return;
            }
            res.json(dbGradeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;