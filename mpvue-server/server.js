//引入koa
let Koa = require("koa");
// 可以接受请求体
const bodyParser = require("koa-bodyparser");
//引入koa-router
let KoaRouter = require("koa-router");
//实例化koa
let koa = new Koa();
//实例化koa-router
let koaRouter = new KoaRouter();
//引入datas数据
let datas = require("./datas/data.json");
// 定义接口返回数据

koa.use(bodyParser());

//首页分类的接口
koaRouter.get("/homelist", (ctx, next) => {
  if (ctx.query.id === "homelist") {
    ctx.body = datas.homelist;
  }
});
koaRouter.get("/homelisttwo", (ctx, next) => {
  if (ctx.query.id === "homelisttwo") {
    ctx.body = datas.homelisttwo;
  }
});
//分类组件列表
koaRouter.get("/classify", (ctx, next) => {
  if (ctx.query.id === "classify") {
    ctx.body = datas.classify;
  }
});
//识物组件列表
koaRouter.get("/search", (ctx, next) => {
  if (ctx.query.id === "search") {
    ctx.body = datas.search;
  }
});
//商品详情信息接口
koaRouter.get("/goods", (ctx, next) => {
  if (ctx.query.id === "goods") {
    ctx.body = datas.goods;
  }
});

// 顶部导航
koaRouter.get("/good", (ctx, next) => {
  if (ctx.query.id === "good") {
    ctx.body = datas.good;
  }
});

koaRouter.post("/loginWithPassword", async (ctx, next) => {
  const data = ctx.request.body.data;
  let result;
  if (typeof data.phone === "string" && typeof data.password === "string") {
    const user = datas.users.find(user => user.phone === data.phone);
    if (user && user.password === data.password) {
      user.token = "this is token";
      result = { code: 0, user };
    }
  }
  if (!result) {
    result = { code: 1, message: "not user match" };
  }
  ctx.body = result;
});
koaRouter.post("/loginWithEmail", async (ctx, next) => {
  const data = ctx.request.body.data;
  let result;
  if (typeof data.email === "string" && typeof data.password === "string") {
    const user = datas.users.find(user => user.email === data.email);
    if (user && user.password === data.password) {
      user.token = "this is token";
      result = { code: 0, user };
    }
  }
  if (!result) {
    result = { code: 1, message: "not user match" };
  }
  ctx.body = result;
});
koaRouter.post("/loginWithCode", async (ctx, next) => {
  const data = ctx.request.body.data;
  let result;
  if (typeof data.phone === "string" && typeof data.code === "string") {
    if (data.code === "666666") {
      const user = datas.users.find(user => user.phone === data.phone);
      if (user) {
        user.token = "this is token";
        result = { code: 0, user };
      }
    } else {
      result = { code: 1, message: "code wrong" };
    }
  }
  if (!result) {
    result = { code: 1, message: "not user match" };
  }
  ctx.body = result;
});
koaRouter.post("/loginAuto", async (ctx, next) => {
  const data = ctx.request.body.data;
  let result;
  if(typeof data.token==='string'){
    if(data.token === "this is token"){
      const user = datas.users.find(user => user.id === 1);
      if (user) {
        user.token = data.token
        result = { code: 0, user };
      }
    }else{
      result = { code: 1, message: "token无效或过期" };
    }
  }
  if (!result) {
    result = { code: 1, message: "token typeError" };
  }
  ctx.body = result;
});

koaRouter.get("/logout", async (ctx, next) => {
  // const data = ctx.request.body.data;
  // let result;
  ctx.body = ctx.request.query
});

//声明使用所有的路由及路由的相关的所有的方法
koa.use(koaRouter.routes()).use(koaRouter.allowedMethods());

//监听端口，启动服务器
koa.listen("4000", () => {
  console.log("服务器启动了");
  console.log("服务器的地址为:http://localhost:4000");
});
