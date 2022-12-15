// const qqq: string = "너 왜 울어";

// console.log(qqq);

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용(backend 방식)
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 모두 꺼내기
      const result = await Board.find();
      console.log(result);

      // 한개만 골라서 꺼내기
      // Board.findOne({ where: { number: 3 } });

      return result;
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);

      // ORM 사용하여 편하게 작업
      await Board.insert({
        ...args.createBoardInput,

        // 하나 하나 모두 입력하는 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      // 만약 ORM을 사용하지 않는다면???
      // const myquery = "insert into Board(writer, title, contents) values('철수', '안녕하세요', '반갑습니다')"

      return "게시글 등록에 성공했어요!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,

  // 선택한 사이트만 풀어주고 싶을때
  // cors: {
  //   origin: ["http://naver.com", "http://coupang.com"],
  // },
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.114.80",
  port: 5004,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");

    server.listen(3999).then(() => {
      console.log("GRAPHQL 서버가 실행되었습니다!!!");
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다!!!");
    console.log("원인: ", error);
  });
