process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let Alert = require("../models/AlertModel");
let { User } = require("../models/UserModel");
let AlertUser = require("../models/AlertUserModel");
let mongoose = require("mongoose");
const { expect } = chai;
chai.use(chaiHttp);

describe("Alert Users API", () => {
    //Get Alert Users - Valid Route
    describe("GET /api/alerts_user", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should Get alert users", async () => {
            let response = await chai
                .request(server)
                .get("/api/alerts_user/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                );
            expect(response).to.have.status(200);
            expect(response.body).to.be.a('array');
        });
    });

    //Get Alert Users - InValid Route
    describe("GET /api/alerts_user", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should not Get alert users", async () => {
            let response = await chai
                .request(server)
                .get("/api/alerts_userssss/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                );
            expect(response).to.have.status(404);
        });
    });

    //Get Alert User By ID - Valid Alert User
    describe("GET /api/alerts_user/:id", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should Get alert user by id", async () => {
            let response = await chai
                .request(server)
                .get("/api/alerts_user/" + alert_user._id)
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                );
            expect(response).to.have.status(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.property('alert_id');
            expect(response.body).to.have.property('user_id');
        });
    });

    //Get Alert User By ID - Invalid Alert User
    describe("GET /api/alerts_user/:id", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should not Get alert user by id", async () => {
            let response = await chai
                .request(server)
                .get("/api/alerts_user/5e904cce7a1c6b627ae9f507")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                );
            expect(response).to.have.status(400);
        });
    });

    //Post Alert User - Valid Alert User
    describe("POST /api/alerts_user", () => {
        let alert_user;
        let alert;
        let newUser;
        let new_alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            alert = new Alert({
                _id: mongoose.Types.ObjectId(),
                title: "Testing",
                type: "UPDATES",
                degree: "URGENT",
                content: "Random Non Sequitor",
            });
            newUser = new User({
                _id: mongoose.Types.ObjectId(),
                username: "Testing",
                password: "$2a$10$efmxm5o1v.inI.eStGGxgO1zHk.L6UoA9LEyYrRPhWkmTQPX8.NKO",
                gender: "FEMALE",
                age_group: "21-30",
            });
            await newUser.save();
            await alert_user.save();
            await alert.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
            await AlertUser.findByIdAndRemove(new_alert_user._id);
            await Alert.findByIdAndRemove(alert._id);
            await User.findByIdAndRemove(newUser._id);
        });
        it("It should insert alert user", async () => {
            let response = await chai
                .request(server)
                .post("/api/alerts_user/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                )
                .send({
                    _id: mongoose.Types.ObjectId(),
                    alert_id: alert._id,
                    user_id: newUser._id
                });
            expect(response).to.have.status(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.property('alert_id');
            expect(response.body).to.have.property('user_id');
            new_alert_user = response.body;
        });
    });

    //Post Alert User - Invalid Alert User
    describe("POST /api/alerts_user", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should not insert alert user", async () => {
            let response = await chai
                .request(server)
                .post("/api/alerts_user/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                )
                .send({
                    _id: mongoose.Types.ObjectId(),
                    user_id: mongoose.Types.ObjectId(),
                    alert_id: mongoose.Types.ObjectId(),
                });
            expect(response).to.have.status(400);
        });
    });

    //Patch Alert - Valid Alert
    describe("PATCH /api/alerts_user", () => {
        let alert_user;
        let alert;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            alert = new Alert({
                _id: mongoose.Types.ObjectId(),
                title: "Testing",
                type: "UPDATES",
                degree: "URGENT",
                content: "Random Non Sequitor",
            });
            await alert_user.save();
            await alert.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
            await Alert.findByIdAndRemove(alert._id);
        });
        it("It should update alert user", async () => {
            let response = await chai
                .request(server)
                .patch("/api/alerts_user/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                )
                .send({
                    _id: alert_user._id,
                    alert_id: alert._id
                });
            expect(response).to.have.status(200);
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.property('alert_id');
            expect(response.body).to.have.property('user_id');
        });
    });

    //Patch Alert User - Invalid Entries
    describe("PATCH /api/alerts_user", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should not update alert user", async () => {
            let response = await chai
                .request(server)
                .patch("/api/alerts_user/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                )
                .send({
                    _id: alert_user._id,
                    user_id: mongoose.Types.ObjectId(),
                    alert_id: mongoose.Types.ObjectId(),
                });
            expect(response).to.have.status(400);
        });
    });

    //Delete Alert User - Valid Alert User
    describe("DELETE /api/alerts_user/", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId(),
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should delete alert user", async () => {
            let response = await chai
                .request(server)
                .delete("/api/alerts_user/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                )
                .send({
                    _id: alert_user._id,
                });
            expect(response).to.have.status(201);
        });
    });
    //Delete Alert User - Invalid Alert User
    describe("DELETE /api/alerts_user/", () => {
        let alert_user;
        beforeEach(async () => {
            alert_user = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                user_id: mongoose.Types.ObjectId(),
                alert_id: mongoose.Types.ObjectId()
            });
            await alert_user.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alert_user._id);
        });
        it("It should delete alert user", async () => {
            let response = await chai
                .request(server)
                .delete("/api/alerts_user/")
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                )
                .send({
                    _id: "5e904cce7a1c6b627ae9f507"
                });
            expect(response).to.have.status(404);
        });
    });
    //Get alerts by user_id - Valid Entries
    describe("GET /api/alerts_user/user/", () => {
        let user;
        let alert1;
        let alert2;
        let alertUser1;
        let alertUser2;
        beforeEach(async () => {
            user = new User({
                _id: mongoose.Types.ObjectId(),
                username: "Testing",
                password: "$2a$10$efmxm5o1v.inI.eStGGxgO1zHk.L6UoA9LEyYrRPhWkmTQPX8.NKO",
                gender: "FEMALE",
                age_group: "21-30",
            });
            alert1 = new Alert({
                _id: mongoose.Types.ObjectId(),
                title: "Testing1",
                type: "UPDATES",
                degree: "URGENT",
                content: "Random Non Sequitor",
            });
            alert2 = new Alert({
                _id: mongoose.Types.ObjectId(),
                title: "Testing2",
                type: "UPDATES",
                degree: "URGENT",
                content: "Random Non",
            });
            alertUser1 = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                alert_id: alert1._id,
                user_id: user._id
            });
            alertUser2 = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                alert_id: alert2._id,
                user_id: user._id
            });
            await user.save();
            await alert1.save();
            await alert2.save();
            await alertUser1.save();
            await alertUser2.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alertUser1._id);
            await AlertUser.findByIdAndRemove(alertUser2._id);
            await Alert.findByIdAndRemove(alert1._id);
            await Alert.findByIdAndRemove(alert2._id);
            await User.findByIdAndRemove(user._id);
        });
        it("It should send alerts", async () => {
            let response = await chai
                .request(server)
                .get("/api/alerts_user/user/" + user._id)
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                );

            expect(response).to.have.status(200);
            expect(response.body).to.have.property("alerts");
            expect(response.body).to.have.property("user_id");
            expect(response.body.alerts).to.have.length(2);
            expect(response.body.user_id).to.equal("" + user._id);
        });
    });
    //Get alerts by user_id - Inexistent user
    describe("GET /api/alerts_user/user/", () => {
        let user1;
        let alert1;
        let alertUser1;
        beforeEach(async () => {
            user = new User({
                _id: mongoose.Types.ObjectId(),
                username: "Testing",
                password: "$2a$10$efmxm5o1v.inI.eStGGxgO1zHk.L6UoA9LEyYrRPhWkmTQPX8.NKO",
                gender: "FEMALE",
                age_group: "21-30",
            });
            alert1 = new Alert({
                _id: mongoose.Types.ObjectId(),
                title: "Testing1",
                type: "UPDATES",
                degree: "URGENT",
                content: "Random Non Sequitor",
            });
            alertUser1 = new AlertUser({
                _id: mongoose.Types.ObjectId(),
                alert_id: alert1._id,
                user_id: user._id
            });
            await user.save();
            await alert1.save();
            await alertUser1.save();
        });
        afterEach(async () => {
            await AlertUser.findByIdAndRemove(alertUser1._id);
            await Alert.findByIdAndRemove(alert1._id);
            await User.findByIdAndRemove(user._id);
        });
        it("It should send no alerts", async () => {
            let response = await chai
                .request(server)
                .get("/api/alerts_user/user/" + mongoose.Types.ObjectId())
                .set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmRlciI6Ik1BTEUiLCJhZ2VfZ3JvdXAiOiI-OTAiLCJfaWQiOiI1ZWI3ZjMwYzNlMmE4ODRhYzgzYWE3NjAiLCJ1c2VybmFtZSI6ImF1dGh0ZXN0IiwicGFzc3dvcmQiOiIkMmEkMTAkYjJmYTZHTTJMTDlLVlJ4UzhVVEkzdS5SQ2JjUWw0WXc5OExaWVVHUHRnUVdBdVFGOERqNXUiLCJfX3YiOjAsImN1cnJlbnRfY291bnRyeSI6IiJ9LCJpYXQiOjE1ODkxODc5Mjd9.ZJQHbK7cVmDOf87uuhUttlnyAFYe5KA0Afnq0iBptF0"
                );

            expect(response).to.have.status(200);
            expect(response.body).to.have.property("alerts");
            expect(response.body).to.have.property("user_id");
            expect(response.body.alerts).to.have.length(0);
        });
    });
});
