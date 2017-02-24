-- 3. (MySQL)
-- Given the two tables below, write a SQL query that uses a join statement to list all users from the user table, their average correct answers, as well as the time of their most recently taken test.
-- All user entries should appear, even if they have not taken a test.

-- Steps
-- 1. Inserted data into "user" and "test_result" PostgreSQL DB tables.

-- Considerations
-- 1. LEFT JOIN: retain all user entries regardless of if they took a test.
-- 2. AS aliases: reduce the amount of times to write the full table name.
-- 3. Alias names: keep underscore naming convention.
-- 4. Create composite "full_name" column for name columns fields.
-- 5. ORDER BY initially placed nulls as first record, added "NULLS LAST" to move nulls to bottom of list.

SELECT u.user_id, (u.first_name || ' ' || u.last_name) AS full_name,
AVG(tr.correct) AS average_correct,
MAX(tr.time_taken) AS most_recent_test_time
FROM "user" AS u
LEFT JOIN "test_result" AS tr ON (u.user_id = tr.user_id)
GROUP BY u.user_id
ORDER BY average_correct DESC NULLS LAST;