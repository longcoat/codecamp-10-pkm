import { url } from "inspector";
import { Fragment } from "react";
import * as S from "../openapi/OpenApi.styles";

export default function OpenApiUI(props) {
  console.log(props.youtubeList);
  return (
    <>
      <S.Container>
        <S.YoutubeBox>
          {props.youtubeList.map((el) => (
            <div key={el.id}>
              <S.Text>{el.snippet.localized.title}</S.Text>
              <div>
                <img
                  onClick={props.onClickYoutube}
                  src={el.snippet.thumbnails.high.url}
                  id={el.snippet.thumbnails.high.url}
                />
              </div>
            </div>
          ))}
        </S.YoutubeBox>
      </S.Container>
    </>
  );
}
