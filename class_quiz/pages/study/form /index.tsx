import { gql, useMutation } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { schema } from "../../24/validation"

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`

const {register, handleSubmit, formState} = useForm({
    resolver : yupResolver(schema)
    mode
})



export default function GAZA(){

const [createBoard] = useMutation(CREATE_BOARD)







const onClickSubmit = () => {


}





    return (
        <>
            <form onSubmit={handleSubmit(onClickSubmit)} >
                작성자<input type="text" {...register("writer")}/>
                제목<input type="text" {...register()}/>
                내용<input type="text" />
                <button>등록하기</button>
            </form>
        </>
    )

}


