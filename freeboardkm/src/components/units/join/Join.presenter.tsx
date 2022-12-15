import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button01 from "../../commons/buttons/01";
import Input01 from "../../commons/inputs/01";
import { IFormData } from "../Login/Login.types";
import { JoinSchema } from "../Login/Login.validation";
import { CREATE_USER } from "./Join.queries";
import * as S from "./Join.styles";
import { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

interface IFormData {
  email: string;
  password: string;
  name: string;
}

export default function JoinUI() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(JoinSchema),
    mode: "onChange",
  });

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>("");
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const [createUser] = useMutation(CREATE_USER);

  const onClickJoin = async (data: IFormData) => {
    console.log(data);
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      console.log(result);
      Modal.success({
        content: "회원가입을 축하합니다!",
        afterClose() {
          void router.push("/login");
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const plainOptions = ["이용약관 동의", "개인정보 수집 및 이용 동의"];

  const CheckboxGroup = Checkbox.Group;

  return (
    <>
      <S.backgroundImg>
        <S.loginContainer>
          <S.LoginWrapper onSubmit={handleSubmit(onClickJoin)}>
            <S.LoginHeader></S.LoginHeader>
            <S.LoginBody>
              {/* <S.BodyWrapper1> */}
              Email
              <Input01
                type="text"
                placeholder="Email을 입력하세요"
                register={register("email")}
              />
              <S.Error>{formState.errors.email?.message}</S.Error>
              Name
              <Input01
                type="text"
                placeholder="너부리"
                register={register("name")}
              />
              <S.Error>{formState.errors.name?.message}</S.Error>
              Password
              <Input01
                type="password"
                placeholder="영문, 숫자, 특수문자조합 8-16자"
                register={register("password")}
              />
              <S.Error>{formState.errors.password?.message}</S.Error>
              <div>
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                >
                  [필수] 만 14세 이상이며 모두 동의합니다.
                </Checkbox>
                <CheckboxGroup
                  options={plainOptions}
                  value={checkedList}
                  onChange={onChange}
                />
              </div>
              {/* </S.BodyWrapper1> */}
              {/* <S.BodyWrapper2> */}
              <Button01 title="Join"></Button01>
              {/* </S.BodyWrapper2> */}
            </S.LoginBody>
          </S.LoginWrapper>
        </S.loginContainer>
      </S.backgroundImg>
    </>
  );
}
