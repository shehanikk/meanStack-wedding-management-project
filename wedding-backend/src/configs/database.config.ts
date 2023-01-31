import mongoose, {connect, ConnectOptions} from 'mongoose';


const databaseUrl =
  process.env.NODE_ENV?.trim() !== 'test'
    ? process.env.MONGO_URI
    : process.env.MONGO_URI_TEST;


export const dbConnect = () => {

  mongoose.set("strictQuery",true);
  connect(databaseUrl!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  )
}
