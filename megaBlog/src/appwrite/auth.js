// appwrite services snippet

import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.Login({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.error("Create Account", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            console.error("Login error :", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service : : getCurrentUser : : error", error);

        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();

        } catch (error) {
            console.error("Appwrite service :: Logout error :", error);
            throw error;
        }
    }
}

const authService = new AuthService()

export default authService;


// Remove the unnecessary export statement
// export default AuthService;