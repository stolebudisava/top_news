const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
} = require("graphql");

const API_KEY = "6c434fc0ca404bf387eecdff7219a1cd";

//TopNews

const TopNewsType = new GraphQLObjectType({
  name: "TopNews",
  fields: () => ({
    title: { type: GraphQLString },
    urlToImage: { type: GraphQLString },
    description: { type: GraphQLString },
    content: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    top_news: {
      type: new GraphQLList(TopNewsType),
      args: {
        country: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=${args.country}&apiKey=${API_KEY}`
          )
          .then((res) => res.data.articles);
      },
    },
    country_category: {
      type: new GraphQLList(TopNewsType),
      args: {
        country: { type: GraphQLString },
        category: { type: GraphQLString },
        pageSize: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=${args.country}&category=${args.category}&pageSize=${args.pageSize}&apiKey=${API_KEY}`
          )
          .then((res) => res.data.articles);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
