import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://manishsinghbais34766:Xmv02441!@vertexfx.wgtommg.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((data) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("err", err);
  });
