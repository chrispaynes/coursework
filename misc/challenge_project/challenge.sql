-- PROCESS
-- config: psql (9.6.1, server 9.5.1)
-- 01. Inserted data into "user" and "test_result" PostgreSQL DB tables.
-- 02. Create Basic JOIN between tables.
-- 03. Add AS aliases.
-- 04. Concatenate name columns into one column.
-- 00. Move nulls (test averages and recent tests) from top of query results.

-- THOUGHTS:
-- 01. LEFT JOIN: retain all user entries regardless of if they took a test.
-- 02. AS aliases: reduce the amount of times to write the full table name.
-- 03. Alias names: keep underscore naming convention.
-- 04. Create composite "full_name" column for name columns fields.
-- 05. ORDER BY initially placed nulls as first record, added "NULLS LAST" to move nulls to bottom of list.

SELECT u.user_id, (u.first_name || ' ' || u.last_name) AS full_name,
AVG(tr.correct) AS average_correct,
MAX(tr.time_taken) AS most_recent_test_time
FROM "user" AS u
LEFT JOIN "test_result" AS tr ON (u.user_id = tr.user_id)
GROUP BY u.user_id
ORDER BY average_correct DESC NULLS LAST;