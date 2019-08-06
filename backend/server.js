const app = require("express")();
const graphqlHttp = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

//Allow cross-origin

app.use(cors());
app.use("/graph", graphqlHttp({
    schema,
    graphiql: true
}))
app.listen(8000, () => {
    console.log("listening at 8000 port....");
})
