const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const nocache = require("nocache");
const { messagesRouter } = require("./messages/messages.router");
const { errorHandler } = require("./middleware/error.middleware");
const { notFoundHandler } = require("./middleware/not-found.middleware");
const rateLimit = require("express-rate-limit");

dotenv.config();



if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  console.log("port: ", process.env.PORT)
  console.log("process.env.CLIENT_ORIGIN_URL: ", process.env.CLIENT_ORIGIN_URL)
  throw new Error(
    "Missing required environment variables. Check docs for more info."
  );
}

const PORT = parseInt(process.env.PORT, 10);

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.set("json spaces", 2);

app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        "default-src": ["'none'"],
        "frame-ancestors": ["'none'"],
        "connect-src": [
          "'self'", // Allow connections to the same origin
        ],        
      },
    },
    frameguard: {
      action: "deny",
    },
  })
);

app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});
app.use(nocache());

// Configure CORS to allow only your SPA's origin
const allowedOrigins = ['https://graydonmemoirs.jeffpeoples.com', 'http://localhost:4040'];

app.use(cors({
  origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
          callback(null, true);
      } else {
          callback(new Error(origin + ' not allowed by CORS on API server'));
      }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ["Authorization", "Content-Type"],
  maxAge: 86400,
}));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 6, // limit each IP to 6 request per windowMs
  message: "Too many requests, please try again later.",
});

app.use(limiter);

app.use("/api", apiRouter);
apiRouter.use("/messages", messagesRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
