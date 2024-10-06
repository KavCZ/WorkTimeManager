const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

// --- Timesheet Endpoints ---

// GET - Fetch all Timesheets
// URL: 
// - http://localhost:3000/timesheets

// POST - Create a new Timesheet
// URL: 
// - http://localhost:3000/timesheets

// PUT - Update a Timesheet by ID
// URL: 
// - http://localhost:3000/timesheets/:id

// DELETE - Remove a Timesheet by ID
// URL: 
// - http://localhost:3000/timesheets/:id

app.get('/timesheets', (req, res) => {
  db.all('SELECT * FROM Timesheet', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
});

app.post('/timesheets', (req, res) => {
  const { subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description } = req.body;
  db.run(`INSERT INTO Timesheet (subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    }
  );
});

app.put('/timesheets/:id', (req, res) => {
  const { subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description } = req.body;
  db.run(`UPDATE Timesheet SET subject = ?, CompanyIdent = ?, Kategory = ?, SubCategory = ?, WorkTimeFormatted = ?, ActivityDateFrom = ?, ActivityDateTo = ?, Description = ? WHERE id = ?`,
    [subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description, req.params.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ updatedID: req.params.id });
    }
  );
});

app.delete('/timesheets/:id', (req, res) => {
  db.run('DELETE FROM Timesheet WHERE id = ?', req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ deletedID: req.params.id });
  });
});
// --- /Timesheet Endpoints ---



// --- Tasksheet Endpoints ---

// GET - Fetch all Tasksheets
// URL: 
// - http://localhost:3000/tasksheets

// POST - Create a new Tasksheet
// URL: 
// - http://localhost:3000/tasksheets

// PUT - Update a Tasksheet by ID
// URL: 
// - http://localhost:3000/tasksheets/:id

// DELETE - Remove a Tasksheet by ID
// URL: 
// - http://localhost:3000/tasksheets/:id

app.get('/tasksheets', (req, res) => {
  db.all('SELECT * FROM Tasksheet', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
});

app.post('/tasksheets', (req, res) => {
  const { subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description, BeginTaskTime, EndTaskTime, IsForAchieved, IsArchieved } = req.body;
  db.run(`INSERT INTO Tasksheet (subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description, BeginTaskTime, EndTaskTime, IsForAchieved, IsArchieved) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description, BeginTaskTime, EndTaskTime, IsForAchieved, IsArchieved],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    }
  );
});

app.put('/tasksheets/:id', (req, res) => {
  const { subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description, BeginTaskTime, EndTaskTime, IsForAchieved, IsArchieved } = req.body;
  db.run(`UPDATE Tasksheet SET subject = ?, CompanyIdent = ?, Kategory = ?, SubCategory = ?, WorkTimeFormatted = ?, ActivityDateFrom = ?, ActivityDateTo = ?, Description = ?, BeginTaskTime = ?, EndTaskTime = ?, IsForAchieved = ?, IsArchieved = ? WHERE id = ?`,
    [subject, CompanyIdent, Kategory, SubCategory, WorkTimeFormatted, ActivityDateFrom, ActivityDateTo, Description, BeginTaskTime, EndTaskTime, IsForAchieved, IsArchieved, req.params.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ updatedID: req.params.id });
    }
  );
});

app.delete('/tasksheets/:id', (req, res) => {
  db.run('DELETE FROM Tasksheet WHERE id = ?', req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ deletedID: req.params.id });
  });
});
// --- /Tasksheet Endpoints ---



// --- Company Endpoints ---

// GET - Fetch all Companies
// URL: 
// - http://localhost:3000/companies

// POST - Create a new Company
// URL: 
// - http://localhost:3000/companies

// PUT - Update a Company by ID
// URL: 
// - http://localhost:3000/companies/:id

// DELETE - Remove a Company by ID
// URL: 
// - http://localhost:3000/companies/:id

app.get('/companies', (req, res) => {
  db.all('SELECT * FROM Company', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
});

app.post('/companies', (req, res) => {
  const { CompanyIdent, Kategory, SubCategory } = req.body;
  db.run(`INSERT INTO Company (CompanyIdent, Kategory, SubCategory) VALUES (?, ?, ?)`,
    [CompanyIdent, Kategory, SubCategory],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    }
  );
});

app.put('/companies/:id', (req, res) => {
  const { CompanyIdent, Kategory, SubCategory } = req.body;
  db.run(`UPDATE Company SET CompanyIdent = ?, Kategory = ?, SubCategory = ? WHERE id = ?`,
    [CompanyIdent, Kategory, SubCategory, req.params.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ updatedID: req.params.id });
    }
  );
});

app.delete('/companies/:id', (req, res) => {
  db.run('DELETE FROM Company WHERE id = ?', req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ deletedID: req.params.id });
  });
});
// --- /Company Endpoints ---



// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
