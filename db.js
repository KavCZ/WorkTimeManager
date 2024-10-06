const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./timesheet.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS Timesheet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject TEXT,
    CompanyIdent TEXT,
    Kategory TEXT,
    SubCategory TEXT,
    WorkTimeFormatted TIME,
    ActivityDateFrom DATE,
    ActivityDateTo DATE,
    Description TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS Tasksheet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject TEXT,
    CompanyIdent TEXT,
    Kategory TEXT,
    SubCategory TEXT,
    WorkTimeFormatted TIME,
    ActivityDateFrom DATE,
    ActivityDateTo DATE,
    Description TEXT,
    BeginTaskTime DATETIME,
    EndTaskTime DATETIME,
    IsForAchieved BOOLEAN DEFAULT true,
    IsArchieved BOOLEAN DEFAULT false
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS Company (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    CompanyIdent TEXT,
    Kategory TEXT,
    SubCategory TEXT
  )`);
});

module.exports = db;
