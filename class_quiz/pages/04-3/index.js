import axios from "axios"


export default function 잘좀하자제발(){
    
    const onClickEvent = async() => {
        const result = await axios.get(" https://koreanjson.com/users")
        console.log(result)
    }
    
    
    return(
        <div>
            <button onClick={onClickEvent}>REST-API 요청하기</button>
        </div>
    )
}