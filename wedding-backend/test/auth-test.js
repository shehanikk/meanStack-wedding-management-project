const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../built/server")
const {UserModel} = require("../built/models/user.model")

chai.use(chaiHttp)

const app= server

suite("Authentication Test",()=>{
  test("Register success",(done)=>{
    chai.request(app).post("/api/users/register").send({
      name:"test", email:"test@mail.com", password:"testing123", address:"testing address"})
      .end((err,res)=>{
          chai.expect(res).to.have.status(200)
          done()
      })
    })
    test("Login success",(done)=>{
      chai.request(app).post("/api/users/login").send({
email:"test@mail.com", password:"testing123"})
        .end((err,res)=>{
            chai.expect(res).to.have.status(200)
            done()
        })
      })


      suiteTeardown(async()=>{
        await UserModel.deleteMany({})
      })
  })
