"use client";

import style from './page.module.css';
import React,{useState} from "react";
import { useSession } from "next-auth/react";
import { useCreateRecipeModalStore } from "@/app/(afterWellcome)/_store/zustandStore";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { createRecipe, Recipe } from "@/app/api/recipe";

type inputValueType ={
    title:string,
    desc:string,
    category:string,
    imageSrc:File|null
}
export default function CreateRecipeModal() {
    const {active,handledClose} = useCreateRecipeModalStore()
    const [formData ,setFormData]
        = useState<inputValueType>({title:'',desc:'',category:'',imageSrc:null});

    const {title,desc, category,imageSrc} = formData

    const onChangeData
        :React.ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement> =
        (e) => {
            const { name, value } = e.target;
            setFormData((prevValue)=>(
                {...prevValue,[name]:value}
            ))
    };
    const onChangeImg:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.files && e.target.files.length >0) {
            const file = e.target.files[0];
            // setTitleImg(file);
            setFormData((prevValue)=>(
                {...prevValue,[e.target.name]:file}
            ));
        }
    };
    const {mutate:createRecipeMutation} =useMutation<Recipe[],unknown,FormData>({
        mutationFn:(formData:FormData)=>createRecipe(formData)
        // onSuccess
    })
    const {data:user} = useSession();
    const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const now = dayjs().format('YYYY-MM-DD hh:mm:ss');
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append('createdAt',now);
        formData.append('user',user?.user?.name as string);
        console.log(formData)
        createRecipeMutation(formData);
    };
    const onChangePassword = () => {};
    if(active){

        return (
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <button className={style.closeButton} onClick={handledClose}>
                            <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                                 className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                                <g>
                                    <path
                                        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                </g>
                            </svg>
                        </button>
                        <div className={style.label}>{user?.user?.name}님 만의 레시피를 등록하세요.</div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className={style.modalBody}>
                            <div className={style.selectDiv}>
                                <input className={style.fileElement}
                                       id="imageSrc"
                                       name={"imageSrc"}
                                       type="file"
                                       onChange={(e) => onChangeImg(e)}
                                />
                                <label htmlFor="imageSrc" className={style.fileElementTrigger}>
                                    {imageSrc
                                        ? `선택한 파일 : ${imageSrc.name}`
                                        : "파일을 선택해주세요"
                                    }
                                </label>
                                <label className={style.select}>
                                    <select className={style.oriSelect}
                                            name={'category'}
                                            value={category}
                                            onChange={onChangeData}
                                    >
                                        <option value="">카테고리를 선택해주세요.</option>
                                        <option value="main">메인요리</option>
                                        <option value="sub">밑반찬</option>
                                        <option value="soup">찌개/국</option>
                                        <option value="rice">밥</option>
                                        <option value="pasta">면</option>
                                    </select>
                                </label>
                            </div>
                            <div className={style.inputDiv}>
                                <input id="title"
                                       name={'title'}
                                       className={style.textElementsStyle}
                                       onChange={onChangeData}
                                       type="text"
                                       placeholder="제목"
                                />
                            </div>
                            <div className={style.textAreaDiv}>
                                <textarea id="desc"
                                          name={'desc'}
                                          className={style.textElementsStyle}
                                          onChange={onChangeData}
                                          placeholder="설명"
                                />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button className={style.actionButton}>등록하기
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
