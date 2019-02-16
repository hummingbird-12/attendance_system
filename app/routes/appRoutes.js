'use strict';
module.exports = function(app) {
    var attList = require('../controller/appController.js');

    app.route('/')
        .get(function(req, res) {
            res.render('index', {title: 'My Title'});
        });

    // attList Routes
    app.route('/attendance')
        .get(attList.list_all_att)
        .post(attList.create_entry);

    app.route('/attendance/:pid')
        .get(attList.read_entry)
        .put(attList.update_entry)
        .delete(attList.delete_entry);
};
