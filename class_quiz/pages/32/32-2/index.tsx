import styled from "@emotion/styled";
import LazyLoad from "react-lazy-load";

const Image = styled.img`
  width: 500px;
  height: 500px;
`;

const IMageAddress = [
  `https://w7.pngwing.com/pngs/728/952/png-transparent-wallace-and-gromit-clay-animation-film-dreamworks-animation-the-round-moon-rabbit-cartoon-snout-film.png`,
  `https://www.backhug.co.kr/shopimages/showroom1/0120070003882.jpg?1540784464`,
  `http://cdn.indiepost.co.kr/uploads/images/2017/09/6iT3Bf-620x301.jpeg`,
];
export default function Quiz32Days() {
  return (
    <>
      {IMageAddress.map((el, index) => (
        <LazyLoad height={500} offset={100} key={index}>
          <Image src={el} />
        </LazyLoad>
      ))}
    </>
  );
}
