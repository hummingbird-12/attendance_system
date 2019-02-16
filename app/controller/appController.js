'use strict';

var Attd = require('../model/appModel.js');

exports.list_all_att = function(req, res) {
    Attd.getAllEntries(function(err, entry) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', entry);
        res.render('att', {
            title: 'Attendance',
            att: entry
        });
    });
};

exports.create_entry = function(req, res) {
    var new_entry = new Attd(req.body);

    //handles null error 
    if(!new_entry.name || !new_entry.phone){

        res.status(400).send({ error:true, message: 'Please provide name/phone' });

    }
    else{

        Attd.createAttd(new_entry, function(err, entry) {

            if (err)
                res.send(err);
            res.json(entry);
        });
    }
};


exports.read_entry = function(req, res) {
    Attd.getEntryById(req.params.pid, function(err, entry) {
        if (err)
            res.send(err);
        res.json(entry);
    });
};


exports.update_entry = function(req, res) {
    Attd.updateById(req.params.pid, new Attd(req.body), function(err, entry) {
        if (err)
            res.send(err);
        res.json(entry);
    });
};


exports.delete_entry = function(req, res) {


    Attd.remove( req.params.pid, function(err, entry) {
        if (err)
            res.send(err);
        res.json({ message: 'Entry successfully deleted' });
    });
};
