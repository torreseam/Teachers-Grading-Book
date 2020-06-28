const router = require('express').Router();
const sequelize = require('../config/connection');
const {  Teacher } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Post.findall({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'name',
            'department'
        ],
        include: [
            {
                model: Teacher,
                attributes: [
                    'name',
                    'id',
                    'department'
                ],
                include: {
                    model: Teacher,
                    attributes: ['name']
                }
            },
            {
                model: Teacher,
                attributes: ['name']
            }
        ]
    }).then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', (req, res) => {
    Post.findone({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'name',
            'department'
        ],
        include: [
            {
                model: Teacher,
                attributes: [
                    'name',
                    'id',
                    'department'
                ],
                include: {
                    model: Teacher,
                    attributes: ['name']
                }
            },
            {
                  model: Teacher,
                attributes: ['name']
            }
        ]
    }).then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;