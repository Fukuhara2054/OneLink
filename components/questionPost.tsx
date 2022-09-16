import { FC, useEffect, useState } from "react";
import styles from "../styles/Post.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from '@mui/material/colors';
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "next/link";
import AnswerModal from './answerModal'
import { collectionGroup, deleteDoc, doc, getDocs, orderBy, query, setDoc, collection } from "firebase/firestore";
import { app, db } from "./fire/fire";
import { Bookmark } from "@mui/icons-material";
import dayjs from "dayjs";
import { getAuth } from "firebase/auth";

const Post: FC = () => {
    //これはなんだろう（福原）
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const auth = getAuth(app)
    //詳細などの開閉処理
    // const update_honbun = () => {
    //   const target1 = document.getElementById("honbun");
    //   if (target1.style.display == "block") {
    //     target1.style.display = "none";
    //   } else {
    //     target1.style.display = "block";
    //   }
    // };


    const [saved, setSaved] = useState(false)

  const bookmark = async(id, title, content, Timestamp, questioner, answer) => {
    if(saved === false){
      setSaved(true)
      const savedPosts = ({ questioner, content, answer, title, id, Timestamp, data: "info"});
      const ref = doc(db, "user", auth.currentUser?.uid, "bookmark", id);
      await setDoc(ref, savedPosts);
      console.log(savedPosts)
    } else {
      setSaved(false)
      const b = doc(db, 'user', auth.currentUser?.uid, 'bookmark', id);

      await deleteDoc(b);
    }
    
  }



    //詳細などの開閉処理の問題を解決しました。
    const [open, setOpen] = useState(styles.display1)

    const onClick = () => {
        if (open == styles.display1) {
            setOpen(styles.display2)
        } else {
            setOpen(styles.display1)
        }
    }

  const [data, setData] = useState([])
  const [ansData, setAnsData] = useState([])
  //const [show, setShow] = useState([])
  useEffect(() => {
    const postData = collectionGroup(db, "ques")
    const q = query(postData, orderBy('Timestamp', 'desc')
    // // , where('title', '==', '研修3')
    )
    getDocs(q).then((snapshot)=>{
       setData(snapshot.docs.map((doc)=> ({ ...doc.data(), id: doc.id })))
       //コンソールで確認のため
      //  console.log(data);
    })
//回答表示
    // const ansData = collectionGroup(db,"ans")
    // const a = query(ansData, orderBy('Timestamp', 'desc')
    // )
    // getDocs(a).then((snapshot)=>{
    //     setAnsData(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
    // })
  },[])
//回答表示ボタン
   const handleClickShowButton = (userID, id)=> {
    const ref = collection(db, "users", userID,"ques", id,"ans")
    getDocs(ref).then((snapshot)=>{
        setAnsData(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
    })
   }



    return (
        <div>
            {data.map((dat) => (
                <ul key= {dat.id}>
                    <div className={styles.box2}>
                      <div className={styles.main}>
                    {/* お気に入りボタン */}
                    <Checkbox
                        {...label}
                        icon={<StarBorderIcon />}
                        checkedIcon={<StarIcon />}
                        sx={{
                            color: pink[600],
                            '&.Mui-checked': {
                                color: pink[500],
                            },
                        }}
                        className={styles.okiniiri}
                        onClick={
                            () => bookmark(dat.id, dat.title, dat.content, dat.Timestamp, dat.questioner, dat.answer)
                          }
                    />
                    <div className={styles.abc}>
                        <h2>
                            質問:{dat.title}
                            {/* 開閉ボタン */}
                            <Checkbox
                                {...label}
                                icon={<ExpandMoreIcon />}
                                checkedIcon={<ExpandLessIcon />}
                                onClick={onClick}
                            />
                        </h2>
                        <p>いいね：1</p>
                        <p>回答数：0</p>
                    </div>
                    <div id="honbun" className={open}  >
                        <div>
                            <label htmlFor="">内容:{dat.content} </label>
                            <div className={styles.link}>
                                {/* <AnswerButton
                                 dcontent = {dat.content}
                                 did = {dat.id}
                                 /> */}
                            </div>
                        </div>
                        <div>
                            {ansData.map((dat) => (
                                <ul key = {dat.id}>
                                    <label htmlFor="">A.{dat.content} {dayjs(dat.Timestamp.toDate()).format('YYYY/MM/DD HH:mm')}</label>    
                                </ul>
                                
                            ))}
                            {/* 回答が複数の時のためにコンポーネントにする必要がある */}
                            <label>
                                <h2>
                                {/*質問:{dat.title}*/}
                                {/* 開閉ボタン */}
                                <button onClick={ () => (handleClickShowButton(dat.userID,dat.id))}>ほかの</button>
                                    
                                </h2>   
                            </label>
                        </div>
                        <div>
                        <AnswerModal
                          dcontent={dat.content}
                          did = {dat.id}
                          duserID = {dat.userID}

                        />

                        </div>
                    </div>
                </div>
            </div>
                </ul>
            ))}
            
        </div>
    );
};

export default Post;