/* User class*/
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require("../db");
const ExpressError = require("../expressError");

/** User of the site. All methods are SQL injection safe*/
class User {
    static async register(username, password) {
        let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        const result = await db.query(
            `
            INSERT INTO users (username, password)
            VALUES ($1, $2) 
            RETURNING username, password`,
            [username, hashedPassword]
        );

        return result.rows[0];
    }

    /** authenticate function: is this username/password valid? Returns boolean. */
    static async authenticate(username, password) {
        if (!password) {
            throw new ExpressError("Please enter a password", 400);
        }
        const result = await db.query(
            `SELECT password FROM users WHERE username = $1`,
            [username]
        );
        let passwordInDb = result.rows[0].password;
        return password && (await bcrypt.compare(password, passwordInDb));
    }

    /** All: basic info on all users: In this simple app the only relevant information is the username
     * [{username}, ...] */

    static async all() {
        const results = await db.query(`SELECT username FROM users`);
        return results.rows;
    }

    /** Get: get user by username. This would only be used to check if a user exists. returns {username} */

    static async get(username) {
        const results = await db.query(
            `
            SELECT username, first_name FROM users WHERE username = $1`,
            [username]
        );
        if (!results.rows[0]) {
            throw new ExpressError(`No such user ${username}`, 404);
        }
        return results[0];
    }

    /** Return notes from a user. */

    static async getNotes(username) {
        const results = await db.query(
            `
        SELECT * FROM notes WHERE username = $1`,
            [username]
        );

        return {
            username: username,
            notes: results.rows.map((n) => ({
                title: n.title,
                content: n.content,
                archived: n.archived,
            })),
        };
    }
}

module.exports = User;
