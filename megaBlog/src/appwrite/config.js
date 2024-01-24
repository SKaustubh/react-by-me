import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteCollectionId, {
                title,
                slug,
                content,
                featuredImage,
                status,
                userId,
            });
        } catch (e) {
            console.log("Appwrite service :: createPost error :", e);
            return false;
        }
    }

    async updatePost(
        slug,
        {
            title,
            content,
            featuredImage,
            status,
        }
    ) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (e) {
            console.log("Appwrite service :: updatePost error :", e);
            throw e;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: deletePost error :", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            );
        } catch (e) {
            console.log("Appwrite service :: getPost error :", e);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                queries,

            );
        } catch (e) {
            console.log("Appwrite service :: getPosts error :", e);
            return false;
        }

    }

    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            );
        } catch (e) {
            console.log("Appwrite service :: uploadFile error :", e);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketID, fileId);
        } catch (e) {
            console.log("Appwrite service :: deleteFile error :", e);
            return false;
        }
    }
}

const service = new Service();
export default service;
