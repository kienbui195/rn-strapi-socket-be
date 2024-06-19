module.exports = () => ({
  io: {
    enabled: true,
    config: {
      // This will listen for all supported events on the article content type
      contentTypes: [
        "api::comment.comment"
      ],
      socket: {
        serverOptions: {
          cors: { origin: process.env.FE_URL, methods: ["GET", "POST"] },
        },
      },
    },
  },
});
