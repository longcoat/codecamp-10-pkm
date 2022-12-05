import { gql } from "@apollo/client"


export default function Pagenation () {
    const FETCH_BOARDS =gql`
        query fetchBoards($page: Int){
            fetchBoards(page: $page){
                _id
                writer
                contents
                title
            }



        }


    `



    return (
        <div>
        {data?.fetchBoards.map((el) => (
            <div = key={el._id}>
            <span style={{margin="10px"}}>{el._title}</span>
            <span style={{margin="10px"}}>{el._contents}></span>
            <span style={{margin="10px"}}>{el._writer}></span>
            </div>
             ))}
    



</div>
    )
}