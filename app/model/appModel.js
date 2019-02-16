'user strict';
var sql = require('./db.js');

// Attendance object constructor
var Attd = function(att){
    this.name = att.name;
    this.phone = att.phone;
    this.created_at = new Date();
};

Attd.createAttd = function createEntry(newEntry, result) {
    sql.query("INSERT INTO elem set ?", newEntry, function (err, res) {
        
        if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});           
};

Attd.getEntryById = function createEntry(entryId, result) {
    sql.query("Select name from elem where id = ? ", entryId, function (err, res) {             
		if(err) {
			console.log("error: ", err);
			result(err, null);
		}
		else{
			result(null, res);
		}
	});   
};

Attd.getAllEntries = function getAllEntry(result) {
	sql.query("Select * from elem", function (err, res) {

		if(err) {
			console.log("error: ", err);
			result(null, err);
		}
		else{
			console.log('entries : ', res);
			result(null, res);
		}
	});   
};

Attd.updateById = function(id, entry, result){
	sql.query("UPDATE elem SET name = ? WHERE id = ?", [entry.name, id], function (err, res) {
		if(err) {
			console.log("error: ", err);
			result(null, err);
		}
		else{   
			result(null, res);
		}
	}); 
};

Attd.remove = function(id, result){
	sql.query("DELETE FROM elem WHERE id = ?", [id], function (err, res) {

		if(err) {
			console.log("error: ", err);
			result(null, err);
		}
		else{
			result(null, res);
		}
	}); 
};

module.exports = Attd;
