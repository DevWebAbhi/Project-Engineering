# Document your index fixes here

- Original index: it was salary and then department
- Issue observed:for faster ecution with department and salary wuery indexing should be department and then salary because deparment has more uniquness
- Fixed index:CREATE INDEX idx_salary_department ON employees(department , salary);
- Performance improvement: taking less time to get data