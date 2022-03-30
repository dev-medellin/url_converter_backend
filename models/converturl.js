const db = require('../util/database');

module.exports = class UrlConvert {
  constructor(redirect, alias) {
    this.redirect = redirect;
    this.alias = alias;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM urldata');
  }

  static post(redirect,alias,codex) {

    db.query("SELECT * FROM urldata WHERE redirect_url = '"+ redirect +"'", function(err, result, field){
      if(result.length === 0){
         return db.execute('INSERT INTO urldata (redirect_url,alias,codex) VALUES (?,?,?)', [redirect,alias,codex]);
      }else{  
        return db.execute("UPDATE urldata SET alias = ?, codex = ? WHERE redirect_url = '"+ redirect +"'", [alias, codex]);
        }
    })
  }

  static get(id) {
    return db.execute("SELECT * FROM urldata WHERE codex = '"+ id +"'");
  }
};
